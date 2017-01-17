<template>
<div class="wide">
	<div v-for="p in projects" class="card">
		<div class="card-header">
			{{p.title}}
		</div>
		<div class="card-block">
			<p v-html="compiledMarkdown(p.body)" class="card-text"></p>
		</div>
		<div class="card-footer">
			<a :href="p.link" class="card-link">
				{{p.linkText}}
			</a>
		</div>
	</div>
</div>
</template>

<script>

export default {
	mounted: function () {
		var self = this;
		database.ref('/projects').once('value').then(function(snapshot) {
			self.projects = snapshot.val();
		});
	},
	methods: {
		compiledMarkdown: function(md) {
			return marked(md, {});
		}
	},
	data: function() {
		return {
			projects: [],
		}
	},
}
</script>

<style>
</style>