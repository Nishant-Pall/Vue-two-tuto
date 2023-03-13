<template >
	<!-- custom directive values are to be passed in '' -->
	<!-- can put arguments as well after ':', eg column -->
	<div v-theme:column="'wide'" id="show-blogs">
		<h1>All Blogs</h1>
		<input type="text" v-model="search" placeholder="search for blogs" />
		<div
			v-for="(blog, index) in filteredBlogs"
			v-bind:key="index"
			class="single-blog"
		>
			<!-- toUppercase is a custom filter we create, either globally or locally -->
			<h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
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
	computed: {
		filteredBlogs: function () {
			return this.blogs.filter((blog) => {
				return blog.title.match(this.search);
			});
		},
	},
	// defining filters locally
	filters: {
		toUppercase(value) {
			// return value.toUpperCase();
		},
		snippet(value) {
			// return `${value.slice(0, 100)} + ...`;
		},
	},
	directives: {
		rainbow: {
			bind(el, binding, vnode) {
				el.style.color = `# ${Math.random().toString().slice(2, 8)}`;
			},
		},
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