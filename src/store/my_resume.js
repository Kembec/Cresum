import fastLoremIpsum from "fast-lorem-ipsum";

import people from "@/assets/json/people.json";
export default {
	namespaced: true,
	state() {
		return {
			contact: getContact(),
			colors: [
				"gray",
				"red",
				"orange",
				"amber",
				"yellow",
				"lime",
				"green",
				"emerald",
				"teal",
				"cyan",
				"sky",
				"blue",
				"indigo",
				"violet",
				"purple",
				"fuchsia",
				"pink",
				"rose",
			],
		};
	},
	actions: {
		newContact({ commit }, data) {
			commit("setContact", data);
		},
		newRestoreContact({ commit }, data) {
			commit("setRestoreContact", data);
		},
		newAddKnowledge({ commit }) {
			commit("setAddKnowledge");
		},
		newDeleteKnowledge({ commit }, i) {
			commit("setDeleteKnowledge", i);
		},
		newAddEducation({ commit }) {
			commit("setAddEducation");
		},
		newDeleteEducation({ commit }, i) {
			commit("setDeleteEducation", i);
		},
		newAddWorkingskills({ commit }) {
			commit("setAddWorkingskills");
		},
		newDeleteWorkingskills({ commit }, i) {
			commit("setDeleteWorkingskills", i);
		},
		newAddSoftskills({ commit }) {
			commit("setAddSoftskills");
		},
		newDeleteSoftskills({ commit }, i) {
			commit("setDeleteSoftskills", i);
		},
		newAddWork({ commit }) {
			commit("setAddWork");
		},
		newDeleteWork({ commit }, i) {
			commit("setDeleteWork", i);
		},
		newAddVolunteer({ commit }) {
			commit("setAddVolunteer");
		},
		newDeleteVolunteer({ commit }, i) {
			commit("setDeleteVolunteer", i);
		},
		newAddCertifications({ commit }) {
			commit("setAddCertifications");
		},
		newDeleteCertifications({ commit }, i) {
			commit("setDeleteCertifications", i);
		},
		newAddProjects({ commit }) {
			commit("setAddProjects");
		},
		newDeleteProjects({ commit }, i) {
			commit("setDeleteProjects", i);
		},
		newChangeImage({ commit }, data) {
			commit("setChangeImage", data);
		},
		newAddSocialNetwork({ commit }, newSn) {
			commit("setAddSocialNetwork", newSn);
		},
		newDeleteSocialNetwork({ commit }, i) {
			commit("setDeleteSocialNetwork", i);
		},
	},
	mutations: {
		setContact(state, data) {
			let name = data.name;
			let content = data.content;
			state.contact[name] = content;
		},
		setRestoreContact(state, data) {
			state.contact = data;
		},
		setAddKnowledge(state) {
			let l = state.colors.length - 1;
			let i = getRandNumber(l);

			let data = {
				color: state.colors[i],
				title: fastLoremIpsum(getRandNumber(3, 1), "w"),
				description: fastLoremIpsum(getRandNumber(20, 10), "w"),
			};
			state.contact.knowledge.push(data);
		},
		setDeleteKnowledge(state, i) {
			state.contact.knowledge.splice(i, 1);
		},
		setAddEducation(state) {
			let l = state.colors.length - 1;
			let i = getRandNumber(l);
			let year = new Date().getFullYear() - getRandNumber(2);
			let lastYear = year - getRandNumber(10);
			let data = {
				years: lastYear + " - " + year,
				color: state.colors[i],
				title: fastLoremIpsum(getRandNumber(5, 3), "w"),
				description: fastLoremIpsum(getRandNumber(20, 10), "w"),
			};
			state.contact.education.push(data);
		},
		setDeleteEducation(state, i) {
			state.contact.education.splice(i, 1);
		},
		setAddWorkingskills(state) {
			let l = state.colors.length - 1;
			let i = getRandNumber(l);
			let data = {
				color: state.colors[i],
				title: fastLoremIpsum(getRandNumber(4), "w"),
				percent: getRandNumber(100, 70),
			};
			state.contact.workingskills.push(data);
		},
		setDeleteWorkingskills(state, i) {
			state.contact.workingskills.splice(i, 1);
		},
		setAddSoftskills(state) {
			let data = {
				name: fastLoremIpsum(getRandNumber(3, 1), "w"),
			};
			state.contact.softskills.push(data);
		},
		setDeleteSoftskills(state, i) {
			state.contact.softskills.splice(i, 1);
		},
		setAddWork(state) {
			let year = new Date().getFullYear() - getRandNumber(2);
			let lastYear = year - getRandNumber(10);
			let l = state.colors.length - 1;
			let i = getRandNumber(l);
			let data = {
				color: state.colors[i],
				years: lastYear + " - " + year,
				title: fastLoremIpsum(getRandNumber(4, 1), "w"),
				job: fastLoremIpsum(getRandNumber(3, 2), "w"),
				description: fastLoremIpsum(getRandNumber(20, 10), "w"),
			};
			state.contact.work.push(data);
		},
		setDeleteWork(state, i) {
			state.contact.work.splice(i, 1);
		},
		setAddVolunteer(state) {
			let year = new Date().getFullYear() - getRandNumber(2);
			let lastYear = year - getRandNumber(10);
			let l = state.colors.length - 1;
			let i = getRandNumber(l);
			let data = {
				color: state.colors[i],
				years: lastYear + " - " + year,
				title: fastLoremIpsum(getRandNumber(4, 1), "w"),
				job: fastLoremIpsum(getRandNumber(3, 2), "w"),
				description: fastLoremIpsum(getRandNumber(20, 10), "w"),
			};
			state.contact.volunteer.push(data);
		},
		setDeleteVolunteer(state, i) {
			state.contact.volunteer.splice(i, 1);
		},
		setAddCertifications(state) {
			let l = state.colors.length - 1;
			let i = getRandNumber(l);
			let data = {
				color: state.colors[i],
				title: fastLoremIpsum(getRandNumber(5, 1), "w"),
				description: fastLoremIpsum(getRandNumber(20, 10), "w"),
			};
			state.contact.certifications.push(data);
		},
		setDeleteCertifications(state, i) {
			state.contact.certifications.splice(i, 1);
		},
		setAddProjects(state) {
			let data = {
				image: `/projects/${getRandNumber(20, 1)}.webp`,
				title: fastLoremIpsum(getRandNumber(5, 1), "w"),
				preview: "www." + fastLoremIpsum(getRandNumber(2, 1), "w").replace(" ", "") + ".com",
				tools: fastLoremIpsum(getRandNumber(5, 1), "w"),
				role: fastLoremIpsum(getRandNumber(3, 1), "w"),
				description: fastLoremIpsum(getRandNumber(50, 30), "w"),
				tag: fastLoremIpsum(getRandNumber(2, 1), "w"),
			};
			state.contact.projects.push(data);
		},
		setDeleteProjects(state, i) {
			state.contact.projects.splice(i, 1);
		},
		setChangeImage(state, data) {
			let content = data.content;
			let target = data.target;
			let splitTarget = target.split(".");
			if (Object.keys(splitTarget).length == 1) {
				state[splitTarget[0]] = content;
			} else if (Object.keys(splitTarget).length == 2) {
				state[splitTarget[0]][splitTarget[1]] = content;
			} else if (Object.keys(splitTarget).length == 3) {
				state[splitTarget[0]][splitTarget[1]][splitTarget[2]] = content;
			} else if (Object.keys(splitTarget).length == 4) {
				state[splitTarget[0]][splitTarget[1]][splitTarget[2]][splitTarget[3]] = content;
			}
		},
		setAddSocialNetwork(state, newSn) {
			state.contact.socialNetworks.push(newSn);
		},
		setDeleteSocialNetwork(state, i) {
			state.contact.socialNetworks.splice(i, 1);
		},
	},
	getters: {
		getContact(state) {
			return state.contact;
		},
	},
};

const getContact = () => {
	// Initial data
	let i = getRandNumber(30);
	const p = people;
	const contact = p[i];
	contact.about_me = fastLoremIpsum(getRandNumber(50, 30), "w");
	contact.image = `https://xsgames.co/randomusers/avatar.php?g=${contact.gender}`;
	contact.certifications = [];
	contact.education = [];
	contact.experience = [];
	contact.knowledge = [];
	contact.projects = [];
	contact.socialNetworks = [];
	contact.softskills = [];
	contact.volunteer = [];
	contact.work = [];
	contact.workingskills = [];
	document.title = `Cresum | ${contact.name}`;
	return contact;
};

const getRandNumber = (max, min = 1) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
};
