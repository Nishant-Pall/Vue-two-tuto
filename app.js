// creating vue instance
new Vue({
	el: '#vue-app',
	data: {
		name: "PRHYME",
		job: "Ninja",
		website: "https://nishant-pall.github.io",
		websiteTag: '<a href="https://nishant-pall.github.io">website</a>'
	},
	methods: {
		greet: function () {
			return `Good Morning ${this.name}`;
		}
	}
});