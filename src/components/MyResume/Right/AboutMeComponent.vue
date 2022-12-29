<template>
	<div class="about_me">
		<h2>About Me</h2>
		<p :contenteditable="!isDisplay" @focusout="fieldChange($event, 'about_me')"> {{ contact.about_me }}</p>
		<h3>
			<font-awesome-icon icon="fa-award" />
			<span>What I do</span>
			<button v-if="!isDisplay" @click="addItem('knowledge')" id="add_about_me">
				<font-awesome-icon icon="fa-plus" />
			</button>
		</h3>
		<div class="knowledge">
			<div v-for="(k, i) in contact.knowledge" :key="i" :class="k.color" class="box">
				<button v-if="!isDisplay" @click="deleteItem('knowledge', i)">
					<font-awesome-icon icon="fa-times" />
				</button>
				<b :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'title', 'knowledge')">{{ k.title }}</b>
				<p :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'description', 'knowledge')">{{ k.description }}</p>
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
	.about_me > p {
		@apply mb-10 first-letter:uppercase;
	}
	.knowledge {
		@apply grid grid-cols-1 gap-5 lg:grid-cols-2;
	}
</style>