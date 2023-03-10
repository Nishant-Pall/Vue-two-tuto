Vue.component('greeting', {
	template: `
	<p>HELLO MY NAME IS {{name}}.
    	<button v-on:click="changeName">change name</button>
	</p>`,
	// data in component is returned as a function to avoid reference to same object when creating multiple instances of the component
	// we should always return a fresh object
	data: function () {
		return {
			name: 'YOSHI'
		};
	},
	methods: {
		changeName: function () {
			this.name = 'MARIO';
		}
	}

});

const one = new Vue({
	el: '#vue-app-one',
	data: {
		title: 'One'
	},
	methods: {},
	computed: {
		greet: function () {
			return "HELLO FROM ONE";
		}
	}
});

const two = new Vue({
	el: '#vue-app-two',
	data: {
		title: 'Two'
	},
	methods: {
		changeTitle: function () {
			one.title = "Title changed";
		}
	},
	computed: {
		greet: function () {
			return "HELLO FROM TWO";
		}
	}
});