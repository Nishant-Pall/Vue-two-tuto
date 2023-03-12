<template>
	<div>
		<!-- listen to the changeTitle event coming from header -->
		<app-header
			v-bind:title="title"
			v-on:changeTitle="updateTitle($event)"
		></app-header>
		<app-ninjas v-bind:ninjas="ninjas">
			<!-- create tags inside component tag and name the slot to show it inside the child component -->
			<!-- can use dynamic values as well -->
			<!-- dynamic data to be passed should be defined inside the parent component where slot is defined -->
			<!-- slots can be used in form templates -->
			<h2 slot="title">{{ slotTitle }}</h2>
			<p slot="footer">Ninja slot footer</p>
		</app-ninjas>
		<app-footer v-bind:title="title"></app-footer>
		<!-- dynamic component that shows either header or footer on button click -->
		<!-- component value changes on button click -->
		<!-- when we switch to another component, the existing component is destroyed and replaced -->
		<!-- therefore all the state gets reset -->
		<!-- so when we go back we get a new instance -->
		<!-- to keep the component alive we use the keep-alive tag -->
		<!-- When wrapped around a dynamic component, caches the inactive component instances without destroying them. -->
		<keep-alive>
			<component v-bind:is="component"></component>
		</keep-alive>
		<button v-on:click="component = 'app-header'">SHOW HEADER</button>
		<button v-on:click="component = 'app-footer'">SHOW FOOTER</button>
	</div>
</template>

<script>
import Ninjas from "./components/Ninjas.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
	components: {
		"app-ninjas": Ninjas,
		"app-header": Header,
		"app-footer": Footer,
	},
	data() {
		return {
			title: "Vue Ninjas",
			slotTitle: "NINJA SLOT TITLE",
			component: "app-header",
			ninjas: [
				{ name: "Yoshi", speciality: "HTML", show: false },
				{ name: "Mario", speciality: "JS", show: false },
				{ name: "Ryuk", speciality: "CSS", show: false },
				{ name: "Luigi", speciality: "Webpack", show: false },
				{ name: "Luigi", speciality: "Webpack", show: false },
				{ name: "Luigi", speciality: "Webpack", show: false },
			],
		};
	},
	methods: {
		updateTitle: function (updatedTitle) {
			this.title = updatedTitle;
		},
	},
};
</script>

<style scoped>
h1 {
	color: green;
}
</style>
