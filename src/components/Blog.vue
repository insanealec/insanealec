<template>
<div class="card">
	<div class="card-header">{{post.title}}</div>
	<div class="card-block" v-html="compiledMarkdown(post.body)"></div>
</div>
</template>

<script>
export default{
	data: function() {
		return {
			post: {
				title: "",
				body: ""
			},
		}
	},
	mounted: function() {
		var self = this;
		database.ref('/posts/'+this.$route.params.name).once('value').then(function(snapshot) {
			self.post = snapshot.val();
		})
	},
	methods: {
		compiledMarkdown: function(md) {
			return marked(md, {});
		}
	},
}
</script>