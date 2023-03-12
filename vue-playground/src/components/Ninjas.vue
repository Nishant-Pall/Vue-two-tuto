<template>
	<div id="ninjas">
		<slot name="title"></slot>
		<h1>LIST OF NINJAS</h1>
		<ul>
			<li
				v-for="(ninja, index) in ninjas"
				:key="index"
				v-on:click="ninja.show = !ninja.show"
			>
				<p>{{ ninja.name }}</p>
				<h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
			</li>
		</ul>
		<slot name="footer"></slot>
	</div>
</template>

<script>
export default {
	// props: ["ninjas"],
	// we can add type checking on props, as well as required param
	props: {
		ninjas: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {};
	},
	// lifecycle hooks
	// before component has been created
	beforeCreate() {
		alert("beforeCreate");
	},
	// after component has been created
	created() {
		alert("created");
	},
	// before component has been mounted to the dom
	beforeMount() {
		alert("beforeMount");
	},
	// after component has been mounted to the dom
	mounted() {
		alert("mounted");
	},
	// called before change is updated
	beforeUpdate() {
		alert("beforeUpdate");
	},
	// occurs after dom has been updated and re-rendered
	updated() {
		alert("updated");
	},
};
</script>

<style scoped>
#ninjas {
	width: 100%;
	max-width: 1200px;
	margin: 40px auto;
	padding: 0 20px;
	box-sizing: border-box;
}
ul {
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	padding: 0;
}
li {
	flex-grow: 1;
	flex-basis: 300px;
	text-align: center;
	padding: 30px;
	border: 1px solid #222;
	margin: 10px;
}
h1 {
	color: purple;
}
</style>
