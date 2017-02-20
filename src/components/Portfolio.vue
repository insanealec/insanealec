<template>
<div class="">
	<div v-for="p in projects" class="card">
		<header class="card-header">
			<div class="card-header-title">
				{{p.title}}
			</div>
		</header>
		<div class="card-content">
			<p v-html="compiledMarkdown(p.body)" class="card-text"></p>
		</div>
		<footer class="card-footer">
			<a :href="p.link" class="card-footer-item">
				{{p.linkText}}
			</a>
		</footer>
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