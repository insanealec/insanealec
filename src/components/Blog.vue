<template>
<div class="card">
	<header class="card-header">
		<p class="card-header-title">{{post.title}}</p>
	</header>
	<div class="card-content">
		<div class="content" v-html="compiledMarkdown(post.body)"></div>
	</div>
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