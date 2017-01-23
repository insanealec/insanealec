<template>
<div class="card">
	<div class="card-header">
		Title:&nbsp;
		<input v-model="title">
		<button @click="switchMode()" class="preview">Preview Markdown</button>
	</div>

	<textarea v-show="!previewMode" v-model="body"></textarea>
	<div v-show="previewMode" v-html="compiledMarkdown"></div>

	<button @click="saveContent" class="btn btn-primary">Save</button>
</div>
</template>

<script>
export default {
	data: function () {
		return {
			title: "",
			body: "",
			previewMode: false,
		}
	},
	methods: {
		saveContent: function() {
			database.ref('posts/'+this.title).set({
				title: this.title,
				body: this.body,
			});
		},
		switchMode: function() {
			this.previewMode = !this.previewMode;
		}
	},
	mounted: function() {
		//Load posts for editing?
	},
	computed: {
		compiledMarkdown: function() {
			return marked(this.body, {});
		}
	},
}
</script>

<style scoped>
</style>