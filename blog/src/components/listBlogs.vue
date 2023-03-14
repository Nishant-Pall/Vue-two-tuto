<template >
	<!-- custom directive values are to be passed in '' -->
	<!-- can put arguments as well after ':', eg column -->
	<div id="list-blogs">
		<h1>List Blog Titles</h1>
		<input type="text" v-model="search" placeholder="search for blogs" />
		<div
			v-for="(blog, index) in filteredBlogs"
			v-bind:key="index"
			class="single-blog"
		>
			<!-- toUppercase is a custom filter we create, either globally or locally -->
			<h2 v-rainbow>{{ blog.title }}</h2>
		</div>
	</div>
</template>
<script>
import axios from "axios";
import searchMixin from "../mixins/searchMixin";

export default {
	data() {
		return {
			blogs: [],
			search: "",
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
	computed: {},
	mixins: [searchMixin],
};
</script>
<style scoped>
#list-blogs {
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