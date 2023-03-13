<template >
	<!-- custom directive values are to be passed in '' -->
	<!-- can put arguments as well after ':', eg column -->
	<div v-theme:column="'wide'" id="show-blogs">
		<h1>All Blogs</h1>
		<div
			v-for="(blog, index) in blogs"
			v-bind:key="index"
			class="single-blog"
		>
			<!-- to-uppercase is a custom filter we create -->
			<h2>{{ blog.title | uppercase }}</h2>
			<article>{{ blog.body | snippet }}</article>
		</div>
	</div>
</template>
<script>
import axios from "axios";

export default {
	data() {
		return {
			blogs: [],
		};
	},
	methods: {},
	created() {
		axios
			.get("#")
			.then((data) => {
				this.blogs = data.body.slice(0, 10);
			})
			.catch((err) => console.log(err));
	},
};
</script>
<style scoped>
#show-blogs {
	max-width: 800px;
	margin: 0 auto;
}
.single-blog {
	padding: 20px;
	margin: 20px 0;
	box-sizing: border-box;
	background: #eee;
}
</style>