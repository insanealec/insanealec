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

	<div class="card" v-if="loggedIn">
		<div class="card-header">You are already logged in!</div>
		<div class="card-block">
			<p class="card-text">No logout yet.</p>
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
	},
	data: function() {
		return {
			loggedIn: false,
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
</style>