const directive = {
	bind(el, binding) {
		el._keydownCallback = (event) => {
			if (event.key === "Escape") {
				binding.value();
			}
		};
		document.addEventListener("keydown", el._keydownCallback);
	},
	unbind(el, binding) {
		document.removeEventListener("keydown", el._keydownCallback);
		delete el._keydownCallback;
	},
};
export const esc = { esc: directive };
