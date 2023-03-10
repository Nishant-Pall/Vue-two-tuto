new Vue({
	el: '#vue-app',
	data: {
		output: ''
	},
	methods: {
		readRefs: function () {
			// this.$ref returns all the refs defined inside the scope of app
			this.output = this.$refs.input.value;
		}
	},
	computed: {}
});
