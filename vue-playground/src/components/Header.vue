<template>
	<div id="header">
		<h1>HEADER COMPONENT</h1>
		<p v-on:click="changeTitle">{{ title }}</p>
	</div>
</template>


<script>
import { bus } from "../main";

export default {
	props: {
		title: {
			type: String,
		},
	},
	data() {
		return {};
	},
	methods: {
		changeTitle: function () {
			// emitting event named changeTitle and we're sending the value Vue Wizards
			// this.$emit("changeTitle", "Vue Wizards");
			// instead of sending new title through parent, we can create a bus and
			// listen to the event in sibling/unrelated components directly by emitting it from here
			// also pass in some data
			this.title = "Vue Wizards";
			bus.$emit("titleChanged", "Vue Wizards");
		},
	},
};
</script>


<style scoped>
#header {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: lightgreen;
}
h1 {
	color: red;
}
</style>