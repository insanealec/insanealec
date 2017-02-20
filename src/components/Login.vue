<template>
<div class="">
	<!-- Login Card -->
	<div class="card" v-if="!loggedIn">
		<header class="card-header">
			<div class="card-header-title">
				Login
			</div>
		</header>
		<div class="card-content">
			<div class="form-group">
				<label for="email">Email</label>
				<input v-model="email" type="email" class="form-control" id="email">
			</div>
			<div class="form-group">
				<label for="password">Password</label>
				<input v-model="password" type="password" class="form-control" id="password">
			</div>
		</div>
		<footer class="card-footer">
			<button @click="login" class="btn btn-primary card-footer-item" id="login">Submit</button>
		</footer>
	</div>

	<div class="card" v-if="loggedIn">
		<header class="card-header">
			<div class="card-header-title">
				You are already logged in!
			</div>
		</header>
		<div class="card-content">
			<p class="content">No logout yet.</p>
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
}
</script>

<style scoped>
</style>