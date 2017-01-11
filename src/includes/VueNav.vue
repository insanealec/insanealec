<template>
<nav class="navbar navbar-toggleable-md navbar-light bg-faded">
	<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>

	<router-link class="navbar-brand" to="/">insanealec</router-link>

	<div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav mr-auto">
			<li class="nav-item">
				<router-link class="nav-link" to="/snake">Play Snake</router-link>
			</li>
			<li class="nav-item">
				<router-link class="nav-link" to="/portfolio">Portfolio</router-link>
			</li>
		</ul>
	</div>
</nav>
</template>

<style type="text/css">
    .navbar {
        margin-bottom: 20px;
    }
</style>