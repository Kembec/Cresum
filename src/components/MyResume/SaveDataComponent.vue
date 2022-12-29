<template>
	<portal to="modal">
		<div v-click-outside="closeModal" v-esc="closeModal" class="modal-13">
			<div class="header">
				<span> Save my data </span>
				<button class="close-modal" @click="closeModal">
					<font-awesome-icon icon="times" />
				</button>
			</div>
			<div class="content" id="save-data">
				<div class="link">
					<a id="link-to-show" :href="displayLink" target="_blank"> Link to show</a>
					<button @click="copyContent(displayLink)">
						<font-awesome-icon icon="copy" />
					</button>
				</div>
				<div class="link">
					<a id="link-to-update" :href="updateLink" target="_blank"> Link to update </a>
					<button @click="copyContent(updateLink)">
						<font-awesome-icon icon="copy" />
					</button>
				</div>
			</div>
		</div>
	</portal>
</template>
<script>
	import { mapGetters } from "vuex";

	import encoder from "@/mixins/encoder";
	import modal from "@/mixins/modal";
	export default {
		mixins: [modal, encoder],
		data() {
			return {
				data: "",
			};
		},
		computed: {
			...mapGetters("my_resume", {
				contact: "getContact",
			}),
			displayLink() {
				return `${window.location.protocol}//${window.location.hostname}:${window.location.port}/d/my-resume/${this.data}`;
			},
			updateLink() {
				return `${window.location.protocol}//${window.location.hostname}:${window.location.port}/u/my-resume/${this.data}`;
			},
		},
		created() {
			this.saveMyData();
		},
		methods: {
			copyContent(content) {
				navigator.clipboard.writeText(content);
				this.$store.dispatch("notification/newNotification", "Copied Content");
			},
			saveMyData() {
				this.data = this.encode(JSON.stringify(this.contact));
			},
		},
	};
</script>

<style lang="postcss" scoped>
	#save-data {
		@apply relative space-y-5;
	}

	.link {
		@apply mx-auto flex flex-nowrap divide-x divide-black/10 rounded-lg border border-black/10 last:mb-5;
	}
	.link > * {
		@apply py-2 px-4 hover:bg-gray-50;
	}
</style>
