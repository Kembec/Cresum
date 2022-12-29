<template>
	<section id="my-resume">
		<Left @save="v.save = true" />
		<Right />
		<SaveData v-if="v.save == true" @close="v.save = false" />
	</section>
</template>
<script>
	const SaveData = () => import("@/components/MyResume/SaveDataComponent.vue");
	import Left from "@/components/MyResume/LeftComponent.vue";
	import Right from "@/components/MyResume/RightComponent.vue";
	import basic from "@/mixins/basic.js";
	import encoder from "@/mixins/encoder";
	export default {
		mixins: [basic, encoder],
		components: {
			Left,
			Right,
			SaveData,
		},
		data() {
			return {
				v: {
					save: false,
				},
			};
		},
		created() {
			this.verifyType();
			this.verifyRestoreData();
		},
		methods: {
			verifyType() {
				let type = this.$route.params.type;
				let data = this.$route.params.data;
				if ((type == "u" || type == "d") && !data) {
					this.$router.push({ path: `/c/my-resume` });
				}
			},
			verifyRestoreData() {
				if (this.restoreData()) {
					return true;
				}
				// Add initial data
				this.addItem("education", 4);
				this.addItem("workingskills", 5);
				this.addItem("softskills", 10);
				this.addItem("projects", 6);
				this.addItem("work", 3);
				this.addItem("volunteer", 3);
				this.addItem("certifications", 6);
				this.addItem("knowledge", 6);
			},
			restoreData() {
				if (this.$route.params.type == "c") {
					return false;
				}
				// Only type == u || type == d
				try {
					const data = this.decode(this.$route.params.data);
					const contact = JSON.parse(data);
					this.$store.dispatch("my_resume/newRestoreContact", contact);
					return true;
				} catch (e) {
					this.$router.push({ path: `/c/my-resume` });
				}
			},
		},
	};
</script>