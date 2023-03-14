<template>
	<!-- custom directive values are to be passed in '' -->
	<!-- can put arguments as well after ':', eg column -->
	<div v-theme:column="'wide'" id="show-blogs">
		<div class="header">
			<h1>All Blogs</h1>
			<input
				type="text"
				v-model="search"
				placeholder="search for blogs"
			/>
		</div>
		<div
			v-for="(blog, index) in filteredBlogs"
			v-bind:key="index"
			class="single-blog"
		>
			<!-- toUppercase is a custom filter we create, either globally or locally -->
			<router-link v-rainbow v-bind:to="`/blog/${blog.id}`">
				<h2>{{ blog.title | toUppercase }}</h2>
			</router-link>
			<article>{{ blog.body | snippet }}</article>
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
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((data) => {
				this.blogs = data.data.slice(0, 10);
			})
			.catch((err) => console.log(err));
	},
	computed: {},
	// defining filters locally
	filters: {
		toUppercase(value) {
			return value.toUpperCase();
		},
		snippet(value) {
			return `${value.slice(0, 100)} + ...`;
		},
	},
	directives: {
		rainbow: {
			bind(el, binding, vnode) {
				el.style.color = `# ${Math.random()
					.toString()
					.slice(2, 8)}`;
			},
		},
		theme: {
			bind(el, binding, vnode) {
				if (binding.value === "wide") {
					el.style.maxWidth = "1200px";
				} else if (binding.value === "narrow") {
					el.style.maxWidth = "560px";
				}
				if (binding.arg === "column") {
					el.style.backgroundColor = "#ddd";
					el.padding = "20px";
				}
			},
		},
	},
	// create mixin from imported mixin file
	mixins: [searchMixin],
};
</script>
<style scoped>
#show-blogs {
	max-width: 800px;
	margin: 0 auto;
}
.header {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
.single-blog {
	padding: 20px;
	margin: 20px 0;
	box-sizing: border-box;
	background: #eee;
}
a {
	text-decoration: none;
	color: inherit;
}
</style>
