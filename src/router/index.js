import Vue from "vue";
import VueRouter from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");
const MyResume = () => import("@/views/MyResumeView.vue");

Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	base: import.meta.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/:type/my-resume/:data?",
			name: "my-resume",
			component: MyResume,
		},
		//Default
		{
			path: "/:any(.*)*",
			redirect: () => ({ name: "home" }),
		},
	],
});

export default router;
