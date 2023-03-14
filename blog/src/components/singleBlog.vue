<template>
	<div id="single-blog">
		<h1>{{ blog.title }}</h1>
		<article>{{ blog.body }}</article>
	</div>
</template>
<script>
import axios from "axios";

export default {
	data() {
		return {
			id: this.$route.params.id,
			blog: {},
		};
	},
	created() {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
			.then((data) => {
				this.blog = data.data;
			})
			.catch((err) => console.log(err));
	},
};
</script>
<style scoped>
#single-blog {
	max-width: 960px;
	margin: 0 auto;
}
</style>
