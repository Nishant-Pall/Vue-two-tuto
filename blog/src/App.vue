<template>
	<div>
		<app-header></app-header>
		<router-view></router-view>
		<!-- <add-blog></add-blog> -->
		<!-- <show-blogs></show-blogs> -->
		<!-- <list-blogs></list-blogs> -->
	</div>
</template>

<script>
import addBlog from "./components/addBlog.vue";
import showBlogs from "./components/showBlogs.vue";
import listBlogs from "./components/listBlogs.vue";
import header from "./components/header.vue";
import singleBlog from "./components/singleBlog.vue";

export default {
	components: {
		"add-blog": addBlog,
		"show-blogs": showBlogs,
		"list-blogs": listBlogs,
		"app-header": header,
		"single-blog": singleBlog,
	},
	data() {
		return {};
	},
	methods: {},
};
</script >

<style scoped>
body {
	margin: 0;
	font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>