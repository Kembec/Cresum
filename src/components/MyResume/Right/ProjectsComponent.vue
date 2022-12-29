<template>
	<div class="projects">
		<h2>
			<span>Projects</span>
			<button v-if="!isDisplay" @click="addItem('projects')" id="add_projects">
				<font-awesome-icon icon="fa-plus" />
			</button>
		</h2>
		<div class="prjcts">
			<div class="box" :key="i" v-for="(p, i) in contact.projects" @click="getProject(p, i)">
				<button v-if="!isDisplay" @click.stop.prevent="deleteItem('projects', i)">
					<font-awesome-icon icon="fa-times" />
				</button>
				<img v-if="p.image" :src="p.image" loading="lazy" />
				<b>{{ p.title }}</b>
				<small>{{ p.tag }}</small>
			</div>
		</div>
		<GetProject v-if="v.getProject == true" :project="project" @close="v.getProject = false" />
	</div>
</template>
<script>
	const GetProject = () => import("./Projects/GetProjectComponent..vue");

	import basic from "@/mixins/basic.js";
	export default {
		components: {
			GetProject,
		},
		mixins: [basic],
		data() {
			return {
				v: {
					getProject: false,
				},
				project: {},
			};
		},
		methods: {
			getProject(p, i) {
				this.project = {
					data: p,
					index: i,
				};
				this.v.getProject = true;
			},
		},
	};
</script>
<style lang="postcss" scoped>
	.projects > div {
		@apply grid grid-cols-1 gap-5 lg:grid-cols-2;
	}
	.projects > div > * {
		@apply mb-auto;
	}

	.box {
		@apply cursor-pointer;
	}
	.box > button {
		@apply absolute top-0 right-0 h-8 w-8 -translate-y-1/2 translate-x-1/2 rounded-full border border-black/5 bg-gray-100 leading-none shadow-sm !important;
	}
</style>



