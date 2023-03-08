// creating vue instance
new Vue({
	el: '#vue-app',
	data: {
		name: "PRHYME",
		job: "Ninja",
		age: 22,
		website: "https://nishant-pall.github.io",
		websiteTag: '<a href="https://nishant-pall.github.io">website</a>',
		x: 0,
		y: 0,
		A: 0,
		B: 0
	},
	methods: {
		greet: function () {
			return `Good Morning ${this.name}`;
		},
		add: function (inc) {
			this.age += inc;
		},
		subtract: function (dec) {
			this.age -= dec;
		},
		calcPos: function (event) {
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		click: function () {
			console.log('you clicked');
		},
		logValue: function () {
			console.log('You pressed a key or..whatevs');
		},
		// addToA: function () {
		// 	console.log('Yo A');
		// 	return this.A + this.age;
		// },
		// addToB: function () {
		// 	console.log('Yo B');
		// 	return this.B + this.age;
		// },
	},
	computed: {
		addToA: function () {
			return this.A + this.age;
		},
		addToB: function () {
			return this.B + this.age;
		},
	}
});