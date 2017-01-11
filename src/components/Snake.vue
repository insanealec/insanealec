<template>
<div class="card">
	<div class="card-header">
		Play using keyboard arrows.
	</div>
	<div class="card-block">
	    <div id="panelList">
			<canvas id="canvas" width="450" height="450"></canvas>
		</div>
		<h2 class="card-title">Best Score: {{ max_score }}</h2>
		<p class="card-text">
			This score only lasts as long as you are on the page.
		</p>
		<p class="card-text">
			If you don't see the game, try refreshing the page.
		</p>
		<p class="card-text">
			Code for javascript snake game was originally found
			<a href="http://thecodeplayer.com/walkthrough/html5-game-tutorial-make-a-snake-game-using-html5-canvas-jquery">here</a>.
		</p>
		<p class="card-text">
			But I altered it to work with Vue.js.
			It's still not great, but you can find the code for this page
			<a href="https://github.com/insanealec/insanealec/blob/master/src/components/Snake.vue">on my github</a>.
		</p>
	</div>
</div>
</template>


<script type="text/javascript">
export default{
	mounted() {
		if (document.getElementById('canvas') != null)
		{
			this.runGame();
		}
	},
	data: function() {
		return {
			//Canvas details
			canvas: null,
			ctx: null,
			w: null,
			h: null,
			//Game options
			//Lets save the cell width in a variable for easy control
			cw: 10,
			d: "right",
			food: {},
			score: 0,
			game_loop: "undefined",
			//The snake; an array of cells
			snakeLength: 5,
			snake_array: [],
			//The best score for this play session.
			max_score: 0,
		};
	},
	methods: {
		runGame: function() {
			//setup the canvas
			this.setupCanvas();
			
			this.init();
			
			//Lets move the snake now using a timer which will trigger the paint function
			//every 60ms
			if(typeof this.game_loop != "undefined") clearInterval(this.game_loop);
			this.game_loop = setInterval(this.paint, 60);
			
			//Lets add the keyboard controls now
			document.addEventListener("keydown", this.key_down, false);
		},
		setupCanvas: function() {
			this.canvas = document.getElementById('canvas');
			this.ctx = this.canvas.getContext("2d");
			this.w = this.canvas.width;
			this.h = this.canvas.height;
		},
		init: function() {
			this.d = "right"; //default direction
			this.create_snake();
			this.create_food(); //Now we can see the food particle
			//finally lets display the score
			this.score = 0;
		},
		create_snake: function() {
			this.snake_array = []; //Empty array to start with
			for(let i = this.snakeLength-1; i>=0; i--)
			{
				//This will create a horizontal snake starting from the top left
				this.snake_array.push({x: i, y:0});
			}
		},
		create_food: function() {
			//Lets create the food now
			this.food = {
				x: Math.round(Math.random()*(this.w-this.cw)/this.cw), 
				y: Math.round(Math.random()*(this.h-this.cw)/this.cw), 
			};
			//This will create a cell with x/y between 0-44
			//Because there are 45(450/10) positions accross the rows and columns
		},
		paint: function() {
			//Lets paint the snake now
			//To avoid the snake trail we need to paint the BG on every frame
			//Lets paint the canvas now
			this.ctx.fillStyle = "white";
			this.ctx.fillRect(0, 0, this.w, this.h);
			this.ctx.strokeStyle = "black";
			this.ctx.strokeRect(0, 0, this.w, this.h);
			
			//The movement code for the snake to come here.
			//The logic is simple
			//Pop out the tail cell and place it infront of the head cell
			var nx = this.snake_array[0].x;
			var ny = this.snake_array[0].y;
			//These were the position of the head cell.
			//We will increment it to get the new head position
			//Lets add proper direction based movement now
			if(this.d == "right") nx++;
			else if(this.d == "left") nx--;
			else if(this.d == "up") ny--;
			else if(this.d == "down") ny++;
			
			//Lets add the game over clauses now
			//This will restart the game if the snake hits the wall
			//Lets add the code for body collision
			//Now if the head of the snake bumps into its body, the game will restart
			if(nx == -1 || nx == this.w/this.cw || ny == -1 || ny == this.h/this.cw || this.check_collision(nx, ny, this.snake_array))
			{
				//restart game
				this.init();
				//Lets organize the code a bit now.
				return;
			}
			
			//Lets write the code to make the snake eat the food
			//The logic is simple
			//If the new head position matches with that of the food,
			//Create a new head instead of moving the tail
			if(nx == this.food.x && ny == this.food.y)
			{
				var tail = {x: nx, y: ny};
				this.score++;
				//Create new food
				this.create_food();
			}
			else
			{
				var tail = this.snake_array.pop(); //pops out the last cell
				tail.x = nx; tail.y = ny;
			}
			//The snake can now eat the food.
			
			this.snake_array.unshift(tail); //puts back the tail as the first cell
			
			for(var i = 0; i < this.snake_array.length; i++)
			{
				var c = this.snake_array[i];
				//Lets paint 10px wide cells
				this.paint_cell(c.x, c.y);
			}
			
			//Lets paint the food
			this.paint_cell(this.food.x, this.food.y);
			//Lets paint the score
			var score_text = "Score: " + this.score;
			this.ctx.fillText(score_text, 5, this.h-5);
			//Set max score.
			this.checkHighScore();
		},
		paint_cell: function(x, y) {
			//Lets first create a generic function to paint cells
			this.ctx.fillStyle = "blue";
			this.ctx.fillRect(x*this.cw, y*this.cw, this.cw, this.cw);
			this.ctx.strokeStyle = "white";
			this.ctx.strokeRect(x*this.cw, y*this.cw, this.cw, this.cw);
		},
		check_collision: function(x, y, array) {
			//This function will check if the provided x/y coordinates exist
			//in an array of cells or not
			for(var i = 0; i < array.length; i++)
			{
				if(array[i].x == x && array[i].y == y)
				 return true;
			}
			return false;
		},
		key_down: function(e) {
			var key = e.which;
			//We will add another clause to prevent reverse gear
			if(key == "37" && this.d != "right") this.d = "left";
			else if(key == "38" && this.d != "down") this.d = "up";
			else if(key == "39" && this.d != "left") this.d = "right";
			else if(key == "40" && this.d != "up") this.d = "down";
			//The snake is now keyboard controllable
		},
		checkHighScore: function() {
			if(this.score > this.max_score)
			{
				this.max_score = this.score;
			}
		},
	}
}
</script>

<style>
#panelList {
   width: 100%;
   text-align:center;
}

canvas {
   display: inline;
}
</style>