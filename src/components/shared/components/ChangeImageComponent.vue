<template>
	<div id="change-image">
		<input v-model="content" @change="inputChange" placeholder="Image Url" v-click-outside="close" />
		<button @click="inputChange()">Change</button>
	</div>
</template>
<script>
	export default {
		props: {
			target: {
				required: true,
				type: String,
			},
		},
		data() {
			return {
				content: "",
			};
		},
		methods: {
			close() {
				this.$emit("close");
			},
			inputChange() {
				// Verify that an image link is used
				let regex = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/;
				if (!this.content.match(regex)) {
					return this.$store.dispatch("notification/newNotification", "You must add a valid image link");
				}
				let data = {
					target: this.target,
					content: this.content,
				};
				this.$store.dispatch("my_resume/newChangeImage", data);
			},
		},
	};
</script>
<style lang="postcss" scoped>
	#change-image {
		@apply absolute top-full left-1/2 z-50 flex w-full max-w-[55%] -translate-x-1/2 flex-col space-y-3 rounded-b-lg border border-black/10 bg-white py-3 px-4 shadow-lg;
	}
	#change-image > * {
		@apply my-auto flex;
	}
	#change-image > input {
		@apply w-full rounded-md border border-black/10 py-1.5 px-2;
	}
	#change-image > button {
		@apply justify-center rounded-md bg-black/80 px-3 py-1 text-center text-white;
	}
</style>