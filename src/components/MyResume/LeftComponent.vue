<template>
	<section class="left">
		<div>
			<div class="image">
				<img
					:src="contact.image"
					loading="lazy"
					@click="!isDisplay ? (v.changeImage = true) : null"
					:class="!isDisplay ? 'can-change' : null"
				/>
				<ChangeImage v-if="v.changeImage == true" @close="v.changeImage = false" :target="'contact.image'" />
			</div>
			<b :contenteditable="!isDisplay" @focusout="fieldChange($event, 'name')"> {{ contact.name }}</b>
			<span :contenteditable="!isDisplay" @focusout="fieldChange($event, 'description')"> {{ contact.description }}</span>
			<div class="social-networks">
				<a :href="s.content" v-for="(s, i) in contact.socialNetworks" :key="i" target="_blank">
					<font-awesome-icon :icon="['fab', s.icon]" />
				</a>
				<a id="add-social-network" v-if="!isDisplay" @click="v.addSocialNetwork = true">
					<font-awesome-icon icon="fa-plus" />
				</a>
			</div>
			<div class="extra-data">
				<div @click="isDisplay ? copyContent(contact.phone) : null">
					<font-awesome-icon icon="fa-mobile" />
					<span :contenteditable="!isDisplay" title="phone" @focusout="fieldChange($event, 'phone')"> {{ contact.phone }}</span>
				</div>
				<div @click="isDisplay ? copyContent(contact.email) : null">
					<font-awesome-icon icon="fa-envelope" />
					<span :contenteditable="!isDisplay" title="email" @focusout="fieldChange($event, 'email')"> {{ contact.email }}</span>
				</div>
				<div @click="isDisplay ? copyContent(contact.location) : null">
					<font-awesome-icon icon="fa-location-dot" />
					<span :contenteditable="!isDisplay" title="location" @focusout="fieldChange($event, 'location')"> {{ contact.location }}</span>
				</div>
				<div @click="isDisplay ? copyContent(contact.birthday) : null">
					<font-awesome-icon icon="fa-calendar-days" />
					<span :contenteditable="!isDisplay" title="birthday" @focusout="fieldChange($event, 'birthday')"> {{ contact.birthday }}</span>
				</div>
			</div>
			<button id="save-my-data" v-if="!isDisplay" @click="save()"> Save my data </button>
		</div>
		<AddSocialNetwork v-if="v.addSocialNetwork" @close="v.addSocialNetwork = false" />
	</section>
</template>
<script>
	import basic from "@/mixins/basic.js";
	const ChangeImage = () => import("@/components/shared/components/ChangeImageComponent.vue");
	const AddSocialNetwork = () => import("./Left/AddSocialNetworkComponent.vue");

	export default {
		mixins: [basic],
		components: {
			ChangeImage,
			AddSocialNetwork,
		},
		data() {
			return {
				v: {
					changeImage: false,
					addSocialNetwork: false,
				},
			};
		},
		computed: {
			image() {
				if (!this.contact.image) {
					return `https://xsgames.co/randomusers/avatar.php?g=${this.contact.gender}`;
				}
				return this.contact.image;
			},
		},
		methods: {
			save() {
				this.$emit("save");
			},
			copyContent(content) {
				navigator.clipboard.writeText(content);
				this.$store.dispatch("notification/newNotification", "Copied Content");
			},
		},
	};
</script>
<style lang="postcss" scoped>
	.image {
		@apply absolute left-1/2 w-full -translate-x-1/2 -translate-y-1/2;
	}
	.image > img {
		@apply mx-auto h-60 rounded-3xl shadow-lg;
	}
	.image > img.can-change {
		@apply cursor-pointer;
	}

	.social-networks {
		@apply grid grid-cols-3 gap-5 xl:grid-cols-4;
	}
	.social-networks > a {
		@apply flex cursor-pointer items-center justify-center rounded-lg bg-black p-3 text-center font-bold leading-none text-white;
	}
	.social-networks > a[target="_blank"] {
		@apply text-2xl;
	}

	.extra-data {
		@apply flex  flex-col space-y-2 text-black/80;
	}
	.extra-data > * {
		@apply flex flex-nowrap space-x-2;
	}
	.extra-data > * > * {
		@apply my-auto last:w-full;
	}

	#save-my-data {
		@apply !mt-10 rounded-md bg-black px-3 py-2 font-semibold text-white antialiased hover:bg-black/80;
	}
</style>

