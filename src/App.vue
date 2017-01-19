<template>
	<div id="app">
		<VueNav></VueNav>
		
		<div class="container">
			<div class="row">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
import VueNav from './includes/VueNav'

export default {
	name: 'app',
	components: {
		VueNav
	},
	mounted: function() {
		//console.log("hello");
	}
}
</script>

<style>
	body {
		background-image: url('./assets/TobyAndCharlie.jpg');
	}
	.card {
		width: 100%;
	}
	.wide {
		width: 100%;
	}
</style>
