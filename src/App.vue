<template>
	<main id="app">
		<Navbar />
		<RouterView />
		<PortalTarget name="modal" id="modal" />
		<Notification />
	</main>
</template>
<script>
	import Notification from "@/components/shared/components/NotificationComponent.vue";
	import Navbar from "@/components/shared/sections/NavbarComponent.vue";

	export default {
		components: {
			Navbar,
			Notification,
		},
		data() {
			return {};
		},
	};
</script>
<style lang="postcss" scoped>
	#app {
		@apply flex flex-col;
	}
</style>