<template>
<div class="">
	<div v-for="p in posts" class="card">
		<header class="card-header">
			<h1 class="card-header-title">
				{{p.title}}
			</h1>
		</header>
		<div class="card-content">
			<div class="content">
				<p v-html="compiledMarkdown(p.body)" class="card-text"></p>
			</div>
		</div>
		<footer class="card-footer">
			<router-link class="card-footer-item" :to="{path: '/blog/'+p.title}">
				Read More
			</router-link>
		</footer>
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
			//In this case I only want a segment of the article.
			const numLines = 3;
			let markdownArr = md.split('\n\n');
			const sizeOfArr = markdownArr.length;
			let cutdown = "";
			if(sizeOfArr <= numLines)
			{
				cutdown = md;
			}
			else
			{
				for (let i = 0; i < numLines; i++)
				{
					cutdown += markdownArr[i]+"\n\n";
				}
				cutdown += "\n\n...\n\n**Read More** to see the rest...";
			}
			return marked(cutdown, {});
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