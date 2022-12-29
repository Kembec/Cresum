<template>
	<section id="home">
		<h1>Create your resume quickly</h1>
		<img src="/images/img1.jpg" />
		<h2>Create</h2>
		<img src="/images/img2.jpg" />
		<h2>Save</h2>
		<img src="/images/img3.jpg" />
		<h2>Share</h2>
		<img src="/images/img4.jpg" />
		<router-link to="/c/my-resume"> Start now </router-link>
	</section>
</template>
<script>
	export default {
		mounted() {
			document.title = "Cresum | Create your resume";
		},
	};
</script>