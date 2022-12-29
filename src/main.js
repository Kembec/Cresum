import "./assets/css/main.css";

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faFacebook,
	faFigma,
	faGithub,
	faGitlab,
	faInstagram,
	faLinkedin,
	faSlack,
	faTelegram,
	faTwitch,
	faTwitter,
	faWhatsapp,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
	faArrowUpRightFromSquare,
	faAward,
	faBookBookmark,
	faBriefcase,
	faBuilding,
	faCalendarDays,
	faCertificate,
	faCopy,
	faEnvelope,
	faFileCircleCheck,
	faFolderOpen,
	faHandshakeAngle,
	faLocationDot,
	faMobile,
	faPlus,
	faTag,
	faTimes,
	faUser,
	faUserGear,
	faUserGraduate,
	faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import PortalVue from "portal-vue";
import vClickOutside from "v-click-outside";
import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import { store } from "./store";

// FontAwesome
library.add(
	faPlus,
	faMobile,
	faEnvelope,
	faLocationDot,
	faCalendarDays,
	faUser,
	faFolderOpen,
	faBriefcase,
	faBookBookmark,
	faFileCircleCheck,
	faTimes,
	faUserGraduate,
	faAward,
	faBuilding,
	faHandshakeAngle,
	faCertificate,
	faTag,
	faUserTie,
	faUserGear,
	faArrowUpRightFromSquare,
	faCopy,
	faFacebook,
	faTwitter,
	faInstagram,
	faLinkedin,
	faGithub,
	faYoutube,
	faSlack,
	faFigma,
	faWhatsapp,
	faTelegram,
	faGitlab,
	faTwitch
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(PortalVue);
Vue.use(vClickOutside);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
