<template>
	<div>
		<!-- <add-blog></add-blog> -->
		<show-blogs></show-blogs>
	</div>
</template>

<script>
import addBlog from "./components/addBlog.vue";
import showBlogs from "./components/showBlogs.vue";

export default {
	components: {
		"add-blog": addBlog,
		"show-blogs": showBlogs,
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