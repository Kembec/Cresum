<template>
	<section id="notification" v-if="notification">
		{{ notification }}
	</section>
</template>
<script>
	import { mapGetters } from "vuex";
	export default {
		computed: {
			...mapGetters("notification", {
				notification: "getNotification",
			}),
		},
		watch: {
			notification() {
				this.clearContent();
			},
		},
		methods: {
			clearContent() {
				setTimeout(() => {
					this.$store.dispatch("notification/newNotification", "");
				}, 10000);
			},
		},
	};
</script>
<style lang="postcss" scoped>
	#notification {
		@apply fixed left-1/2 top-[90vh] z-[52] flex w-full max-w-[80vw] -translate-x-1/2 justify-center rounded-xl bg-black/90 px-10 py-3 text-lg font-medium text-white drop-shadow-md lg:w-auto;
	}
</style>