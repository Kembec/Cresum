import { esc } from "@/directives/esc-keydown.js";
export default {
	mounted() {
		document.getElementById("modal").focus();
	},
	methods: {
		closeModal(e = null) {
			if (this.verifyCloseButton(e)) {
				this.processClose();
				return true;
			}
			// Verify that it is clicked outside the modal
			if (e && e.target && e.target.id != "modal") {
				return false;
			}
			this.processClose();
			return true;
		},
		verifyCloseButton(e) {
			// Verify that it has been clicked correctly
			if (e && e.target && e.target.className == "close-modal") {
				return true;
			}
			// In case the child element has been clicked
			if (e && e.target && e.target.parentElement && e.target.parentElement.className && e.target.parentElement.className == "close-modal") {
				return true;
			}
			// Extra cases
			if (
				e &&
				e.target &&
				e.target.parentElement &&
				e.target.parentElement.parentElement &&
				e.target.parentElement.parentElement.className == "close-modal"
			) {
				return true;
			}
			return false;
		},
		processClose() {
			this.$emit("close");
		},
	},
	directives: {
		...esc,
	},
};
