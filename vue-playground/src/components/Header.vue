<template>
	<div id="header">
		<h1>HEADER COMPONENT</h1>
		<p v-on:click="changeTitle">{{ title }}</p>
	</div>
</template>


<script>
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
			// this.title = "Vue Wizards";
			// emitting event named changeTitle and we're sending the value Vue Wizards
			this.$emit("changeTitle", "Vue Wizards");
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