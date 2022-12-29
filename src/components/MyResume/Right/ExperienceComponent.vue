<template>
	<div class="experience">
		<h2>Experience</h2>
		<h3>
			<font-awesome-icon icon="fa-building" />
			<span>Work</span>
			<button v-if="!isDisplay" @click="addItem('work')" id="add_experience">
				<font-awesome-icon icon="fa-plus" />
			</button>
		</h3>
		<div class="work">
			<div class="tab" :key="i" v-for="(e, i) in contact.work" :class="e.color">
				<div>
					<span :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'years', 'work')">{{ e.years }}</span>
				</div>
				<div>
					<b :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'title', 'work')">{{ e.title }}</b>
					<small :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'job', 'work')">{{ e.title }}</small>
					<span :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'description', 'work')">{{ e.description }}</span>
				</div>
				<button v-if="!isDisplay" @click="deleteItem('work', i)">
					<font-awesome-icon icon="fa-times" />
				</button>
			</div>
		</div>
		<h3>
			<font-awesome-icon icon="fa-handshake-angle" />
			<span>Volunteer</span>
			<button v-if="!isDisplay" @click="addItem('volunteer')" id="add_volunteer">
				<font-awesome-icon icon="fa-plus" />
			</button>
		</h3>
		<div class="volunteer">
			<div class="tab" :key="i" v-for="(e, i) in contact.volunteer" :class="e.color">
				<div>
					<span :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'years', 'volunteer')">{{ e.years }}</span>
				</div>
				<div>
					<b :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'title', 'volunteer')">{{ e.title }}</b>
					<small :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'job', 'volunteer')">{{ e.title }}</small>
					<span :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'description', 'volunteer')">{{ e.description }}</span>
				</div>
				<button v-if="!isDisplay" @click="deleteItem('volunteer', i)">
					<font-awesome-icon icon="fa-times" />
				</button>
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