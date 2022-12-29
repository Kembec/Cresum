<template>
	<div class="certifications">
		<h2>
			<span>Certifications</span>
			<button v-if="!isDisplay" @click="addItem('certifications')" id="add_certifications">
				<font-awesome-icon icon="fa-plus" />
			</button>
		</h2>
		<div class="certs">
			<div class="tab" :key="i" v-for="(e, i) in contact.certifications">
				<div>
					<font-awesome-icon class="icon" icon="fa-certificate" />
				</div>
				<div>
					<b :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'title', 'certifications')">{{ e.title }}</b>
					<span :contenteditable="!isDisplay" @focusout="changeObject($event, i, 'description', 'certifications')">
						{{ e.description }}
					</span>
				</div>
				<button v-if="!isDisplay" @click="deleteItem('certifications', i)">
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

<style lang="postcss" scoped>
	.certs {
		@apply flex flex-col space-y-5;
	}
</style>