import { mapGetters } from "vuex";
export default {
	computed: {
		type() {
			return this.$route.params.type;
		},
		isDisplay() {
			if (this.type == "d") {
				return true;
			}
			return false;
		},
		...mapGetters("my_resume", {
			contact: "getContact",
		}),
	},
	watch: {
		"contact.name": function (name) {
			document.title = `Cresum | ${name}`;
		},
	},
	methods: {
		verifyContent(text, type = null) {
			//Remove html tags
			text.replace(/<([^>]+?)([^>]*?)>(.*?)<\/\1>/gi, "");
			//check data type
			if (type == "number") {
				text = text > 0 ? text * 1 : 1;
			}
			return text;
		},
		fieldChange(e, name, type = null) {
			if (this.isDisplay) {
				return false;
			}
			// Parse content
			let content = this.verifyContent(e.target.innerText, type);
			// Change DOM data
			e.target.innerText = content;
			const data = {
				content,
				name,
			};
			this.$store.dispatch("my_resume/newContact", data);
		},
		changeObject(e, i, t, n, type = null) {
			if (this.isDisplay) {
				return false;
			}
			// Get principal data
			const obj = [...this.contact[n]];
			// Parse content
			let content = this.verifyContent(e.target.innerText, type);
			// Set child content
			obj[i][t] = content;
			// Change DOM data
			e.target.innerText = content;
			const data = {
				content: obj,
				name: n,
			};
			this.$store.dispatch("my_resume/newContact", data);
		},
		capitalize(s) {
			return s && s[0].toUpperCase() + s.slice(1);
		},
		addItem(name, qty = 1) {
			if (this.isDisplay) {
				return false;
			}
			if (qty > 1 && Object.keys(this.contact[name]).length > 0) {
				return false;
			}
			for (let i = 0; i < qty; i++) {
				this.$store.dispatch(`my_resume/newAdd${this.capitalize(name)}`);
			}
		},
		deleteItem(name, i) {
			if (this.isDisplay) {
				return false;
			}
			this.$store.dispatch(`my_resume/newDelete${this.capitalize(name)}`, i);
		},
	},
};
