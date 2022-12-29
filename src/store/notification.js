export default {
	namespaced: true,
	state() {
		return {
			notification: "",
		};
	},
	actions: {
		newNotification({ commit }, data) {
			commit("setNotification", "");
			setTimeout(() => {
				commit("setNotification", data);
			}, 300);
		},
	},
	mutations: {
		setNotification(state, data) {
			state.notification = data;
		},
	},
	getters: {
		getNotification(state) {
			return state.notification;
		},
	},
};
