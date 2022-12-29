<template>
	<div class="select-social-networks">
		<button @click="v.selectSn = !v.selectSn">
			<font-awesome-icon :icon="['fab', icon]" />
		</button>
		<ul class="social-networks" v-if="v.selectSn == true" v-click-outside="closeSelect">
			<li v-for="(s, i) in socialNetworks" :key="i" @click="selectSn(s.icon)">
				<font-awesome-icon :icon="['fab', s.icon]" />
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		props: {
			icon: {
				type: String,
				required: true,
			},
		},
		data() {
			return {
				v: {
					selectSn: false,
				},
				socialNetworks: [
					{ icon: "facebook", name: "Facebook" },
					{ icon: "twitter", name: "Wwitter" },
					{ icon: "instagram", name: "Instagram" },
					{ icon: "linkedin", name: "linkedin" },
					{ icon: "github", name: "Hithub" },
					{ icon: "youtube", name: "Youtube" },
					{ icon: "slack", name: "Slack" },
					{ icon: "figma", name: "Figma" },
					{ icon: "whatsapp", name: "Whatsapp" },
					{ icon: "telegram", name: "Telegram" },
					{ icon: "gitlab", name: "Gitlab" },
					{ icon: "twitch", name: "Twitch" },
				],
			};
		},
		methods: {
			closeSelect() {
				this.v.selectSn = false;
			},
			selectSn(icon) {
				this.$emit("selectIcon", icon);
			},
		},
	};
</script>

<style lang="postcss" scoped>
	.select-social-networks {
		@apply relative flex flex-col text-lg;
	}
	.select-social-networks > button {
		@apply flex w-full p-3 text-3xl;
	}

	.social-networks {
		@apply absolute top-1/2 left-full z-50 flex h-12 max-w-[16.5rem] -translate-y-1/2 flex-nowrap overflow-auto rounded-r-lg border-r border-black/10 bg-white drop-shadow-md;
	}
	.social-networks > li {
		@apply min-w-[2.75rem] cursor-pointer border-y border-black/10 px-3 py-2 text-xl first:border-l last:rounded-r-lg hover:bg-gray-50;
	}
</style>