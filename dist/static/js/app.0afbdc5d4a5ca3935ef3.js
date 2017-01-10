webpackJsonp([2,0],{0:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var s=n(16),a=i(s),r=n(51),o=i(r),c=n(50),h=i(c),u=n(45),d=i(u),f=n(46),l=i(f),p=n(10),_=(i(p),n(11));i(_);o.default.use(h.default);var v=new h.default({routes:l.default.routes});new o.default((0,a.default)({el:"#app"},d.default,{router:v}))},10:function(t,e,n){var i,s,a=n(47);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=i},11:function(t,e,n){var i,s;i=n(14);var a=n(49);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=i},12:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",components:{},mounted:function(){}}},13:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(10),a=i(s),r=n(11),o=i(r);e.default={routes:[{path:"/",component:a.default},{path:"/snake",component:o.default}]}},14:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){null!=document.getElementById("canvas")&&this.runGame()},data:function(){return{canvas:null,ctx:null,w:null,h:null,cw:10,d:"right",food:{},score:0,game_loop:"undefined",snakeLength:5,snake_array:[]}},methods:{runGame:function(){this.setupCanvas(),this.init(),"undefined"!=typeof this.game_loop&&clearInterval(this.game_loop),this.game_loop=setInterval(this.paint,60),document.addEventListener("keydown",this.key_down,!1)},setupCanvas:function(){this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.w=this.canvas.width,this.h=this.canvas.height},init:function(){this.d="right",this.create_snake(),this.create_food(),this.score=0},create_snake:function(){this.snake_array=[];for(var t=this.snakeLength-1;t>=0;t--)this.snake_array.push({x:t,y:0})},create_food:function(){this.food={x:Math.round(Math.random()*(this.w-this.cw)/this.cw),y:Math.round(Math.random()*(this.h-this.cw)/this.cw)}},paint:function(){this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.w,this.h),this.ctx.strokeStyle="black",this.ctx.strokeRect(0,0,this.w,this.h);var t=this.snake_array[0].x,e=this.snake_array[0].y;if("right"==this.d?t++:"left"==this.d?t--:"up"==this.d?e--:"down"==this.d&&e++,t==-1||t==this.w/this.cw||e==-1||e==this.h/this.cw||this.check_collision(t,e,this.snake_array))return void this.init();if(t==this.food.x&&e==this.food.y){var n={x:t,y:e};this.score++,this.create_food()}else{var n=this.snake_array.pop();n.x=t,n.y=e}this.snake_array.unshift(n);for(var i=0;i<this.snake_array.length;i++){var s=this.snake_array[i];this.paint_cell(s.x,s.y)}this.paint_cell(this.food.x,this.food.y);var a="Score: "+this.score;this.ctx.fillText(a,5,this.h-5)},paint_cell:function(t,e){this.ctx.fillStyle="blue",this.ctx.fillRect(t*this.cw,e*this.cw,this.cw,this.cw),this.ctx.strokeStyle="white",this.ctx.strokeRect(t*this.cw,e*this.cw,this.cw,this.cw)},check_collision:function(t,e,n){for(var i=0;i<n.length;i++)if(n[i].x==t&&n[i].y==e)return!0;return!1},key_down:function(t){var e=t.which;"37"==e&&"right"!=this.d?this.d="left":"38"==e&&"down"!=this.d?this.d="up":"39"==e&&"left"!=this.d?this.d="right":"40"==e&&"up"!=this.d&&(this.d="down")}}}},44:function(t,e){},45:function(t,e,n){var i,s;n(44),i=n(12);var a=n(48);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=i},46:function(t,e,n){var i,s;i=n(13),s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),t.exports=i},47:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("h1",[t._v("hi")])])}]}},48:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("p",[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("router-link",{attrs:{to:"/snake"}},[t._v("Play Snake")])],1),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},49:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8 col-md-offset-2",attrs:{id:"panelList"}},[n("canvas",{attrs:{id:"canvas",width:"450",height:"450"}})])])])}]}}});
//# sourceMappingURL=app.0afbdc5d4a5ca3935ef3.js.map