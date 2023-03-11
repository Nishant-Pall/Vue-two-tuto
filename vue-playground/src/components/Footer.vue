<template>
	<div id="footer">
		<h1>FOOTER</h1>
		<p>{{ title }}</p>
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
	created() {
		bus.$on("titleChanged", (data) => {
			this.title = data;
		});
	},
};
</script>

<style scoped>
#footer {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #222;
}
h1,
p {
	color: lightgreen;
}
</style>