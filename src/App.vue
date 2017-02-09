<template>
	<div id="app">
		<VueNav></VueNav>
		
		<section class="section">
			<div class="container">
				<router-view></router-view>
			</div>
		</section>
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
		/*background-image: url('./assets/TobyAndCharlie.jpg');*/
	}
	.card {
		margin-bottom: 20px;
	}
</style>
