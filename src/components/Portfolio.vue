<template>
<div class="wide">
	<div v-for="p in projects" class="card">
		<div class="card-header">
			{{p.title}}
		</div>
		<div class="card-block">
			<p v-html="p.body" class="card-text"></p>
		</div>
		<div class="card-footer">
			<a :href="p.link" class="card-link">
				{{p.linkText}}
			</a>
		</div>
	</div>
</div>
</template>

<script>
export default {
	data: function() {
		return {
			projects: [
				{
					title: "Draincables Direct",
					link: "https://draincables.com",
					linkText: "Go To: draincables.com",
					body: `
						I worked on this for about 8 months while working at
						<a href="https://servicespring.com">Service Spring</a>.
						<br>
						The reason we started on this was in order to move an externally
						hosted and maintained website, to be completely internal.
						<br>
						The previous, external version was down frequently and unreliable when
						something would go wrong.
						<br>
						<br>
						Working on this site was a great learning experience.
						It was my first interaction with <a href="https://laravel.com/">Laravel</a>,
						and while I hated it at first,
						I quickly grew to love working in the Laravel framework.
						<br>
						Most of what I did was back-end PHP, but I also did a large amount of javascript
						which was mostly AJAX in order to create a seamless user experience.
						<br>
						<br>
						I worked with two other people on this project.
						<br>
						My project manager, <a href="https://github.com/masonfox">Mason</a>, did a lot of
						the front end work and javascript. He's the main reason that the website
						looks so dang nice. I didn't do anything with design, unless he said it looked good.
						<br>
						I also worked with <a href="https://github.com/ZacharyJacobCollins">Zac</a>,
						who also did a lot of PHP and javascript work to help make the website <b>do</b> stuff.
						He worked on some of the longer, and harder parts, such as the
						<a href="https://draincables.com/custom/cables/1332-cable">Custom Cable Creator</a>
						and the checkout page.
						<br>
						<br>
						That's not all they did, they both did a lot of great work on the project,
						but this is my portfolio, so here's some of what I did:
						<ul>
							<li>Products</li>
							<ul>
								<li>Being able to view all the information you can about a product
								is important in choosing to purchase that product, and one of the major
								parts I worked on was the general product pages.</li>
								<li>Thanks to the power of Laravel Blade Templates, I was able to
								use only a couple different pages to respresent most of the products available
								for sale (minus the custom cables).</li>
								<li>On the product grids that you can see whenever you view a category, you are
								able to click on that product for more info, or add it to your cart right then.</li>
								<li>Adding a product to your cart on both the product's page and on the category grid
								makes an AJAX request to the backend, which adds that product to your cart.</li>
								<li>There are also variable products, which are the products that allow you to choose
								certain aspects about them, and deliver a custom price depending on what you choose.</li>
							</ul>
							<li>Cart</li>
							<ul>
								<li>The Cart persists throughout your session and keeps track of what objects
								you will be purchasing.</li>
								<li>A lot of security has gone into the cart to ensure you only add products
								that exist and that their prices aren't available to the user to change.</li>
								<li>The cart is updated primarily through AJAX requests that the user makes through
								the use of various buttons to add, remove, and update products in their cart.</li>
								<li>Whenever these updates to the cart are made, changes are reflected immediately for
								the user in the cart slideout at the right side of the page.</li>
								<li>While the user never truly sees or directly interacts with their cart,
								I believe it's one of the most important aspects of the website; as the cart allows
								a user to have a link between a physical object (a shopping cart at a store) and
								the virtual representation of that.<li>
							</ul>
							<li>Ordering</li>
							<ul>
								<li>Upon finishing checkout and after going through various checks,
								the user is able to review their order and shipping information before
								they fully pay and order the items in their cart.</li>
								<li>Using a popular payment processor, we submit their payments to Draincables Direct
								and complete the process of placing their order.</li>
								<li>After their order is successfully placed, the user is sent an email receipt
								of the transaction, and can also view their past orders from their account page.</li>
							</ul>
							<li>Upsells</li>
							<ul>
								<li>A little more subtle, these are little scrollers at the bottom of
								some pages whose purpose is to help you pick something else to buy.</li>
								<li>You can see some of the most frequently purchased items at
								the bottom of the home page, these help steer you towards what
								may be best for you, as many other customers thought it was good for them.</li>
								<li>After visiting a couple of items, you may notice at the bottom of product
								pages there are recently viewed items. These are saved for your current session,
								so you can easily get back to an item that you previously viewed and may still
								want to purchase.</li>
								<li>On the view cart page, if you have purchased items that have quantity
								discounts, you will be alerted of this at the bottom of the view cart page,
								to try and help you get discounts (and purchase more) of those items.</li>
							</ul>
						</ul>
					`,
				},
			],
		}
	},
}
</script>

<style>
</style>