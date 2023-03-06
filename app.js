// creating vue instance
new Vue({
	el: '#vue-app',
	data: {
		name: "PRHYME",
		job: "Ninja"
	},
	methods: {
		greet: function () {
			return `Good Morning ${this.name}`;
		}
	}
});