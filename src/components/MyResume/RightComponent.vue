<template>
	<section class="right">
		<div class="buttons">
			<button v-for="(b, i) in buttons" :key="i" @click="changeModule(b.to)" :title="b.text">
				<font-awesome-icon :icon="b.icon" />
			</button>
		</div>
		<component :is="module" />
	</section>
</template>
<script>
	import { defineAsyncComponent } from "vue";
	export default {
		data() {
			return {
				mdle: "AboutMe",
				buttons: [
					{
						to: "AboutMe",
						icon: "fa-user",
						text: "About me",
					},
					{
						to: "Resume",
						icon: "fa-book-bookmark",
						text: "Resume",
					},
					{
						to: "Experience",
						icon: "fa-briefcase",
						text: "Experience",
					},
					{
						to: "Certifications",
						icon: "file-circle-check",
						text: "Certifications",
					},
					{
						to: "Projects",
						icon: "fa-folder-open",
						text: "Projects",
					},
				],
			};
		},
		methods: {
			changeModule(mdle) {
				this.mdle = mdle;
			},
		},
		computed: {
			module() {
				const module = this.mdle;
				return defineAsyncComponent({
					loader: () => import(`./Right/${module}Component.vue`),
					onError(e) {
						console.log(e);
					},
				});
			},
		},
	};
</script>

<style lang="postcss" scoped>
	.buttons {
		@apply grid grid-cols-5 gap-0 divide-x divide-white/5 p-0 !important;
	}
	.buttons > button {
		@apply flex flex-col items-center justify-center bg-black/90 py-4 px-5 text-base text-white first:rounded-l-md last:rounded-r-md !important;
	}
	.buttons > button::after {
		@apply mt-3 hidden text-xs content-[attr(title)] lg:flex !important;
	}
</style>
