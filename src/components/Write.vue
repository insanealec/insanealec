<template>
<div class="card">
	<header class="card-header">
		<div class="card-header-title">
			<label class="label">Title</label>
			<p class="control">
				<input class="input" v-model="title">
			</p>
			<button @click="switchMode()" class="preview button">Preview Markdown</button>
			<select class="select" v-model="currType">
				<option v-for="t in types">{{t}}</option>
			</select>

			<!-- Load in content to edit. -->
			<select class="select" v-model="chosenContent">
				<option></option>
				<option v-for="p in posts">{{p.title}}</option>
				<option v-for="p in projects">{{p.title}}</option>
			</select>
		</div>
	</header>

	<div class="card-content">
		<div class="content">

			<label class="label">Body</label>
			<p class="control">
				<textarea class="textarea" v-show="!previewMode" v-model="body"></textarea>
			</p>

			<div v-show="previewMode" v-html="compiledMarkdown"></div>

			<div v-if="currType=='projects'" class="project-group">
				<label class="label">Link Text</label>
				<p class="control">
					<input class="input" v-model="linkText" id="linkText">
				</p>
				<label class="label">Link</label>
				<p class="control">
					<input class="input" v-model="link" id="link">
				</p>
			</div>
		</div>
	</div>

	<div class="card-footer text-right">
		<button @click="saveContent" class="button is-primary card-footer-item">Save</button>
	</div>
</div>
</template>

<script>
export default {
	data: function () {
		return {
			title: "",
			body: "",
			linkText: "",
			link: "",
			previewMode: false,
			posts: [],
			projects: [],
			types: [
				"posts",
				"projects",
			],
			currType: "posts",
			chosenContent: "",
		}
	},
	methods: {
		saveContent: function() {
			//Everything should have a title and body.
			var options = {
				title: this.title,
				body: this.body
			};

			//I don't like it, but add an if for each new type added.
			if(this.currType === "projects")
			{
				options.link = this.link;
				options.linkText = this.linkText;
			}

			//Using the current type, add this item with the necessary options.
			database.ref(this.currType+'/'+this.title).set(options);
			this.clearInputs();
		},
		switchMode: function() {
			//Each switch sets an inverse of itself.
			this.previewMode = !this.previewMode;
		},
		findIn: function(arr, title) {
			let items = Object.keys(arr);
			for(let i = 0; i < items.length; i++)
			{
				if(items[i] == title)
				{
					return arr[items[i]];
				}
			}
			return false;
		},
		clearInputs: function() {
			this.chosenContent = "";
			this.title = "";
			this.body = "";
			this.link = "";
			this.linkText = "";
		}
	},
	mounted: function() {
		//Load posts and projects for editing.
		var self = this;
		database.ref('posts').once('value').then(function(snapshot) {
			self.posts = snapshot.val();
		});
		database.ref('projects').once('value').then(function(snapshot) {
			self.projects = snapshot.val();
		});
	},
	computed: {
		compiledMarkdown: function() {
			//Each preview mode toggle shows this computed prop.
			return marked(this.body, {});
		},
	},
	watch: {
		chosenContent: function(c) {
			//Search through the arrays.
			let item = this.findIn(this.posts, c);
			if(item)
			{
				this.currType = "posts";
				this.title = item.title;
				this.body = item.body;
			}
			item = this.findIn(this.projects, c);
			if(item)
			{
				this.currType = "projects";
				this.title = item.title;
				this.body = item.body;
				this.link = item.link;
				this.linkText = item.linkText;
			}

			//Default case, clear inputs.
			if(c == "")
			{
				this.clearInputs();
			}
		}
	}
}
</script>

<style scoped>
.card-header-title .label {
	margin-bottom: 0px;
}
.card-header-title .control {
	margin-bottom: 0px;
}
</style>