<template>
	<div>
		<!-- listen to the changeTitle event coming from header -->
		<app-header
			v-bind:title="title"
			v-on:changeTitle="updateTitle($event)"
		></app-header>
		<app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
		<app-footer v-bind:title="title"></app-footer>
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
