import Vue from "vue";
import App from "./App.vue";

// Custom directives
Vue.directive("rainbow", {
	// bind hook for directive is ran the moment it is binded to an element
	// el --> element
	// binding --> refers to the value of the directive in the element, binding.value to get the value
	// vnode --> element in virtual dom
	bind(el, binding, vnode) {
		el.style.color = `# ${Math.random().toString().slice(2, 8)}`;
	},
});

Vue.directive("theme", {
	bind(el, binding, vnode) {
		if (binding.value === 'wide') {
			el.style.maxWidth = '1200px';
		}
		else if (binding.value === 'narrow') {
			el.style.maxWidth = '560px';
		}
		if (binding.arg === 'column') {
			el.style.backgroundColor = '#ddd';
			el.padding = '20px';
		}
	}
});

new Vue({
	el: "#app",
	render: (h) => h(App),
});
