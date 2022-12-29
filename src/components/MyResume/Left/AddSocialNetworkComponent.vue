<template>
	<portal to="modal">
		<div v-click-outside="closeModal" v-esc="closeModal" class="modal-13">
			<div class="header">
				<span> Add Social Network </span>
				<button class="close-modal" @click="closeModal">
					<font-awesome-icon icon="times" />
				</button>
			</div>
			<div class="content" id="add-social-network">
				<div v-for="(s, i) in contact.socialNetworks" :key="i" class="social-networks">
					<div class="icon">
						<font-awesome-icon :icon="['fab', s.icon]" />
					</div>
					<div class="content">
						<span>{{ s.content }}</span>
					</div>
					<button @click="deleteSocialNetwork(i)">
						<font-awesome-icon icon="times" />
					</button>
				</div>
				<div class="add">
					<SelectSocialNetworks @selectIcon="selectIcon" :icon="newSn.icon" />
					<input v-model="newSn.content" placeholder="Network Link" />
					<button @click="addSocialNetwork()">
						<font-awesome-icon icon="plus" />
					</button>
				</div>
			</div>
		</div>
	</portal>
</template>
<script>
	import { mapGetters } from "vuex";

	import modal from "@/mixins/modal";

	import SelectSocialNetworks from "./AddSocialNetwork/SelectSocialNetworksComponent.vue";
	export default {
		components: {
			SelectSocialNetworks,
		},
		mixins: [modal],
		data() {
			return {
				newSn: { icon: "linkedin", content: "https://networklink.com" },
			};
		},
		computed: {
			...mapGetters("my_resume", {
				contact: "getContact",
			}),
		},
		methods: {
			selectIcon(icon) {
				this.newSn.icon = icon;
			},
			addSocialNetwork() {
				const newSn = this.newSn;
				this.$store.dispatch("my_resume/newAddSocialNetwork", newSn);
				this.newSn = { icon: "linkedin", content: "https://networklink.com" };
			},
			deleteSocialNetwork(i) {
				this.$store.dispatch("my_resume/newDeleteSocialNetwork", i);
			},
		},
	};
</script>

<style lang="postcss" scoped>
	.social-networks {
		@apply mb-10 flex flex-nowrap space-x-5 px-5 text-2xl;
	}
	.social-networks > .content {
		@apply flex-1 text-center;
	}

	.add {
		@apply flex flex-nowrap space-x-5;
	}
	.add > * {
		@apply my-auto;
	}
	.add > input {
		@apply w-full rounded-lg border border-black/10 px-3 py-2;
	}
	.add > button {
		@apply rounded-lg bg-black px-5 py-2 text-white hover:bg-black/80;
	}
</style>


