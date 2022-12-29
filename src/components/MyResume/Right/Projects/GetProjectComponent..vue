<template>
	<portal to="modal">
		<div v-click-outside="closeModal" v-esc="closeModal" class="modal-24">
			<div class="header">
				<span :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'title', 'projects')"> {{ p.title }} </span>
				<button class="close-modal" @click="closeModal">
					<font-awesome-icon icon="times" />
				</button>
			</div>
			<div class="content get-project">
				<div class="top">
					<div>
						<span>
							<font-awesome-icon icon="tag" />
							<b>Tag</b>
						</span>
						<span :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'tag', 'projects')"> {{ p.tag }} </span>
					</div>
					<div>
						<span>
							<font-awesome-icon icon="user-tie" />
							<b>Role</b>
						</span>
						<span :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'role', 'projects')"> {{ p.role }} </span>
					</div>
					<div>
						<span>
							<font-awesome-icon icon="user-gear" />
							<b>Tools</b>
						</span>
						<span :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'tools', 'projects')"> {{ p.tools }} </span>
					</div>
					<div>
						<span>
							<font-awesome-icon icon="arrow-up-right-from-square" />
							<b>Preview</b>
						</span>
						<a :href="p.preview" target="_blank" :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'preview', 'projects')">
							{{ p.preview }}
						</a>
					</div>
				</div>
				<div class="image">
					<img
						:src="p.image"
						loading="lazy"
						@click="!isDisplay ? (v.changeImage = true) : null"
						:class="!isDisplay ? 'can-change' : null"
					/>
					<ChangeImage v-if="v.changeImage == true" @close="v.changeImage = false" :target="`contact.projects.${i}.image`" />
					<!-- <input type="file" id="image_p" @change="changeImage($event, 'projects')" /> -->
				</div>
				<p :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'description', 'projects')"> {{ p.description }} </p>
			</div>
		</div>
	</portal>
</template>
<script>
	import basic from "@/mixins/basic.js";
	import modal from "@/mixins/modal";
	const ChangeImage = () => import("@/components/shared/components/ChangeImageComponent.vue");

	export default {
		components: {
			ChangeImage,
		},
		data() {
			return {
				v: {
					changeImage: false,
				},
			};
		},
		props: {
			project: {
				required: true,
				type: Object,
			},
		},
		mixins: [modal, basic],
		computed: {
			p() {
				if (!this.project.data) {
					return {};
				}
				return this.project.data;
			},
			i() {
				return this.project.index;
			},
		},
	};
</script>
<style lang="postcss" scoped>
	.get-project {
		@apply space-y-7;
	}
	.get-project > .top {
		@apply grid grid-cols-1 gap-5 gap-y-2 px-2 lg:grid-cols-2;
	}
	.get-project > .top > div {
		@apply my-auto flex flex-nowrap items-center space-x-3;
	}
	.get-project > .top > div > span {
		@apply my-auto flex flex-nowrap items-center space-x-2;
	}
	.get-project > p {
		@apply p-5 first-letter:uppercase;
	}
	.get-project > .image {
		@apply relative flex cursor-pointer flex-col;
	}
	.get-project > .image > img {
		@apply mx-auto max-h-[50vh] rounded-xl;
	}
	.get-project > .image > input {
		@apply hidden;
	}
</style>