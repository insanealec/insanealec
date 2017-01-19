<template>
<div class="wide">
	<!-- Login Card -->
	<div class="card" v-if="!loggedIn">
		<div class="card-header">Login</div>
		<div class="card-block">
			<div class="form-group">
				<label for="email">Email</label>
				<input v-model="email" type="email" class="form-control" id="email">
			</div>
			<div class="form-group">
				<label for="password">Password</label>
				<input v-model="password" type="password" class="form-control" id="password">
			</div>
			<button @click="login" class="btn btn-primary" id="login">Submit</button>
		</div>
	</div>
	
	<!-- Markdown Editor -->
	<div class="card" v-if="loggedIn">
		<div class="card-header">Write A Post</div>
		<div class="card-block">
			<!-- This example from: https://vuejs.org/v2/examples/#ad -->
			<div id="editor">
				<textarea rows="10" :value="input" @input="update"></textarea>
				<div class="markdown" v-html="compiledMarkdown"></div>
			</div>
		</div>
	</div>
</div>
</template>


<script>
export default {
	methods: {
		login: function() {
			firebase.auth().signInWithEmailAndPassword(this.email, this.password)
			.catch(function(error) {
				console.log(error);
				alert(error.message);
			});
		},
		update: function(e) {
			this.input = e.target.value;
		},
	},
	computed: {
		compiledMarkdown: function() {
			return marked(this.input, {});
		}
	},
	data: function() {
		return {
			loggedIn: false,
			input: "# Hello",
			email: "",
			password: "",
		}
	},
	mounted: function() {
		var self = this;
		firebase.auth().onAuthStateChanged(function(user) {
			//Check to see if we have a user.
			if(user)
			{
				console.log(user);
				self.loggedIn = true;
			}
		});
	},
	watch: {
		email: function(e) {
			this.email = e;
		},
		password: function(p) {
			this.password = p;
		}
	}
}
</script>

<style scoped>
.card, #editor, .markdown, textarea {
	height: 100%
}

html, body, #editor {
  margin: 0;
  height: 100%;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

textarea, #editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>