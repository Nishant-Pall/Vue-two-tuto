<template>
	<div id="add-blog">
		<h2>Add a new blog post</h2>
		<form v-if="!submitted">
			<label>Blog Title:</label>
			<input type="text" required v-model="blog.title" />
			<label>Blog Content:</label>
			<textarea v-model="blog.content"></textarea>
			<div id="checkboxes">
				<label>Ninjas</label>
				<input
					type="checkbox"
					value="ninjas"
					v-model="blog.categories"
				/>
				<label>Wizards</label>
				<input
					type="checkbox"
					value="wizards"
					v-model="blog.categories"
				/>
				<label>Mario</label>
				<input
					type="checkbox"
					value="mario"
					v-model="blog.categories"
				/>
				<label>Cheese</label>
				<input
					type="checkbox"
					value="cheese"
					v-model="blog.categories"
				/>
				<button v-on:click.prevent="post">Add blog</button>
			</div>
			<div id="selectbox">
				<select v-model="blog.author">
					<option
						v-for="(author, index) in authors"
						v-bind:key="index"
					>
						{{ author }}
					</option>
				</select>
			</div>
		</form>
		<div v-if="submitted">
			<h3>Thanks for adding your post</h3>
		</div>
		<div id="preview">
			<h3>Preview Blog</h3>
			<p>Blog Title: {{ blog.title }}</p>
			<p>Blog Content:</p>
			<p>
				{{ blog.content }}
			</p>
			<p>Blog Categories:</p>
			<ul>
				<li
					v-for="(category, index) in blog.categories"
					v-bind:key="index"
				>
					{{ category }}
				</li>
			</ul>
			<p>Blog Author: {{ blog.author }}</p>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			blog: {
				title: "",
				content: "",
				categories: [],
				author: "",
			},
			authors: ["Mario", "Luigi", "Ryuk", "Yoshi"],
			submitted: false,
		};
	},
	methods: {
		post: function() {
			axios
				.post(
					"https://vue-blog-e6468-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json",
					{
						blog: this.blog,
					}
				)
				.then((data) => {
					this.submitted = true;
				})
				.catch((err) => console.log(err));
		},
	},
};
</script>

<style scoped>
#add-blog * {
	box-sizing: border-box;
}
#add-blog {
	margin: 20px auto;
	max-width: 500px;
}
label {
	display: block;
	margin: 20px 0 10px;
}
input[type="text"],
textarea {
	display: block;
	width: 100%;
	padding: 8px;
}
#preview {
	padding: 10px 20px;
	border: 1px dotted #ccc;
	margin: 30px 0;
}
h3 {
	margin-top: 10px;
}
#checkboxes input {
	display: inline-block;
	margin-right: 20px;
}
#checkboxes label {
	display: inline-block;
}
</style>
