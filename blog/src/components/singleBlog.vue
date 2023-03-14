<template>
	<div id="single-blog">
		<h1>{{ blog.title }}</h1>
		<article>{{ blog.content }}</article>
		<p>Author: {{ blog.author }}</p>
		<ul>
			<li v-for="category in blog.categories" :key="category">
				{{ category }}
			</li>
		</ul>
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
			.get(
				`https://vue-blog-e6468-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${this.id}/.json`
			)
			.then((data) => {
				this.blog = data.data.blog;
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
