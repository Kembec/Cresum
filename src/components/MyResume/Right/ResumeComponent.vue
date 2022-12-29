<template>
	<div class="resume">
		<h2>Resume</h2>
		<h3>
			<font-awesome-icon icon="fa-user-graduate" />
			<span>Education</span>
			<button v-if="!isDisplay" @click="addItem('education')" id="add_education">
				<font-awesome-icon icon="fa-plus" />
			</button>
		</h3>
		<div class="education">
			<div class="box" :key="i" v-for="(e, i) in contact.education" :class="e.color">
				<small :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'years', 'education')">{{ e.years }}</small>
				<b :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'title', 'education')">{{ e.title }}</b>
				<span :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'description', 'education')">{{ e.description }}</span>
				<button v-if="!isDisplay" @click="deleteItem('education', i)">
					<font-awesome-icon icon="fa-times" />
				</button>
			</div>
		</div>
		<div class="extra-data">
			<div class="working-skills">
				<h3>
					<span>Working Skills</span>
					<button v-if="!isDisplay" @click="addItem('workingskills')" id="add_workingskills">
						<font-awesome-icon icon="fa-plus" />
					</button>
				</h3>
				<div v-for="(w, i) in contact.workingskills" :key="i" class="skill">
					<span>
						<b :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'title', 'workingskills')">{{ w.title }}</b>
						<b :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'percent', 'workingskills', 'number')">{{ w.percent }}</b>
					</span>
					<div class="percent">
						<span :class="w.color" :style="`width: ${w.percent}%`" />
						<button v-if="!isDisplay" @click="deleteItem('workingskills', i)">
							<font-awesome-icon icon="fa-times" />
						</button>
					</div>
				</div>
			</div>
			<div class="soft-skills">
				<h3>
					<span>Soft Skills</span>
					<button v-if="!isDisplay" @click="addItem('softskills')" id="add_softskills">
						<font-awesome-icon icon="fa-plus" />
					</button>
				</h3>
				<div class="content">
					<div v-for="(s, i) in contact.softskills" :key="i">
						<span :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'name', 'softskills')">{{ s.name }}</span>
						<button v-if="!isDisplay" @click="deleteItem('softskills', i)">
							<font-awesome-icon icon="fa-times" />
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import basic from "@/mixins/basic.js";
	export default {
		mixins: [basic],
	};
</script>
<style lang="postcss" scoped>
	.education {
		@apply flex flex-col space-y-5;
	}

	.extra-data {
		@apply mx-0 mt-10 !mb-0 grid grid-cols-1 gap-5 rounded-b-2xl bg-gray-50 p-10 bg-blend-multiply lg:grid-cols-2 lg:gap-10 !important;
	}

	.working-skills {
		@apply flex flex-col;
	}
	.working-skills > .skill {
		@apply mb-5 flex flex-col;
	}
	.working-skills > .skill > span {
		@apply flex w-full flex-nowrap justify-between;
	}
	.working-skills > .skill > span > b {
		@apply first-of-type:first-letter:uppercase last-of-type:after:content-['%'];
	}
	.working-skills > .skill > .percent {
		@apply relative mt-2 flex h-1.5 w-full flex-nowrap rounded-full bg-gray-200;
	}
	.working-skills > .skill > .percent > span {
		@apply rounded-full;
	}
	.working-skills > .skill > .percent > button {
		@apply absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 text-black/80 drop-shadow-sm hover:text-red-500;
	}

	.soft-skills > .content {
		@apply flex flex-wrap;
	}
	.soft-skills > .content > * {
		@apply mr-3 mb-3 flex flex-nowrap space-x-2 rounded-lg bg-gray-100 px-3 py-2;
	}
	.soft-skills > .content > * > span {
		@apply first-letter:uppercase;
	}
	.soft-skills > .content > * > button {
		@apply hover:text-red-500;
	}
</style>