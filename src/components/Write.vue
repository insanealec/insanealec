<template>
<div class="card">
	<div class="card-header">Title: <input id="title"></div>
	<div id="toolbar">
		<!--  -->
	</div>
	<div id="editor">
		<!--  -->
	</div>

	<button @click="saveContent" class="btn btn-primary">Save</button>
</div>
</template>

<script>
var Quill = require("Quill");

export default {
	data: function () {
		return {
			quill: {},
		}
	},
	methods: {
		saveContent: function() {
			var title = $('#title').val();
			var body = this.quill.getContents();
			console.log(body);
			// database.ref('posts/'+title).set({
			// 	title: title,
			// 	body: body,
			// });
		},
	},
	mounted: function() {
		var self = this;
		$(document).ready(function() {
			self.quill = new Quill('#editor', {
				modules: {
					toolbar: [
						['bold', 'italic', 'underline', 'strike'],        // toggled buttons
						['blockquote', 'code-block'],

						[{ 'header': 1 }, { 'header': 2 }],               // custom button values
						[{ 'list': 'ordered'}, { 'list': 'bullet' }],
						[{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
						[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
						[{ 'direction': 'rtl' }],                         // text direction

						[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
						[{ 'header': [1, 2, 3, 4, 5, 6, false] }],

						[{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
						[{ 'font': [] }],
						[{ 'align': [] }],

						['clean']                                         // remove formatting button
					]
				},
				// scrollingContainer: ".card",
				theme: 'snow',
			});
		})
	}
}
</script>

<style scoped>
</style>