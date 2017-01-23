<template>
<div class="wide">
	<div v-for="p in posts" class="card">
		<div class="card-header">
			<router-link :to="{path: '/blog/'+p.title}">{{p.title}}</router-link>
		</div>
		<div class="card-block">
			<p v-html="compiledMarkdown(p.body)" class="card-text"></p>
		</div>
	</div>
</div>
</template>

<script>
export default {
	mounted: function() {
		var self = this;
		database.ref('/posts').once('value').then(function(snapshot) {
			self.posts = snapshot.val();
		});
	},
	methods: {
		compiledMarkdown: function(md) {
			return marked(md, {});
		}
	},
	data: function() {
		return {
			posts: [],
		}
	}
}
</script>

<style>
</style>