<script>
//Add imports for the route components.
import Home from './components/Home'
import Snake from './components/Snake'

//Add your routes here, it gets added to the router.
export default {
	routes: [
		{ path: '/',
			component: Home
		},
		{ path: '/snake',
			component: Snake
		}
	]
}
</script>