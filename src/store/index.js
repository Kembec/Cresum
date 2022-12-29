import Vue from "vue";
import Vuex from "vuex";

import my_resume from "./my_resume";
import notification from "./notification";

Vue.use(Vuex);

export const store = new Vuex.Store({
	modules: {
		my_resume: my_resume,
		notification: notification,
	},
});
