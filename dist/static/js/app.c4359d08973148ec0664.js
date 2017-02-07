webpackJsonp([2,0],[function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var s=n(24),i=a(s),o=n(83),r=a(o),c=n(82),l=a(c),d=n(65),u=a(d),f=n(66),p=a(f);window.marked=n(64),window.firebase=n(61);var v={apiKey:"AIzaSyDwcJJMROC2Vvr_LWYD9xR8oJpyzsHHG7M",authDomain:"insanealec-265cd.firebaseapp.com",databaseURL:"https://insanealec-265cd.firebaseio.com",storageBucket:"insanealec-265cd.appspot.com",messagingSenderId:"837052494412"};firebase.initializeApp(v),window.database=firebase.database(),r.default.use(l.default);var h=new l.default({routes:p.default.routes});new r.default((0,i.default)({el:"#app"},u.default,{router:h}));$(document).on("click",".navbar",function(t){$(t.target).is("a")&&$(".navbar-collapse").collapse("hide")})},,,,,,,,,,,,,,function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(73),i=a(s);e.default={name:"app",components:{VueNav:i.default},mounted:function(){}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(68),i=a(s),o=n(71),r=a(o),c=n(70),l=a(c),d=n(69),u=a(d),f=n(72),p=a(f),v=n(67),h=a(v);e.default={routes:[{path:"/",component:i.default},{path:"/snake",component:r.default},{path:"/portfolio",component:l.default},{path:"/login",component:u.default},{path:"/write",component:p.default},{path:"/blog/:name",component:h.default}]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{post:{title:"",body:""}}},mounted:function(){var t=this;database.ref("/posts/"+this.$route.params.name).once("value").then(function(e){t.post=e.val()})},methods:{compiledMarkdown:function(t){return marked(t,{})}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){var t=this;database.ref("/posts").once("value").then(function(e){t.posts=e.val()})},methods:{compiledMarkdown:function(t){return marked(t,{})}},data:function(){return{posts:[]}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{login:function(){firebase.auth().signInWithEmailAndPassword(this.email,this.password).catch(function(t){console.log(t),alert(t.message)})}},data:function(){return{loggedIn:!1,email:"",password:""}},mounted:function(){var t=this;firebase.auth().onAuthStateChanged(function(e){e&&(console.log(e),t.loggedIn=!0)})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){var t=this;database.ref("/projects").once("value").then(function(e){t.projects=e.val()})},methods:{compiledMarkdown:function(t){return marked(t,{})}},data:function(){return{projects:[]}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){null!=document.getElementById("canvas")&&this.runGame()},data:function(){return{canvas:null,ctx:null,w:null,h:null,cw:10,d:"right",food:{},score:0,game_loop:"undefined",snakeLength:5,snake_array:[],max_score:0}},methods:{runGame:function(){this.setupCanvas(),this.init(),"undefined"!=typeof this.game_loop&&clearInterval(this.game_loop),this.game_loop=setInterval(this.paint,60),document.addEventListener("keydown",this.key_down,!1)},setupCanvas:function(){this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.w=this.canvas.width,this.h=this.canvas.height},init:function(){this.d="right",this.create_snake(),this.create_food(),this.score=0},create_snake:function(){this.snake_array=[];for(var t=this.snakeLength-1;t>=0;t--)this.snake_array.push({x:t,y:0})},create_food:function(){this.food={x:Math.round(Math.random()*(this.w-this.cw)/this.cw),y:Math.round(Math.random()*(this.h-this.cw)/this.cw)}},paint:function(){this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.w,this.h),this.ctx.strokeStyle="black",this.ctx.strokeRect(0,0,this.w,this.h);var t=this.snake_array[0].x,e=this.snake_array[0].y;if("right"==this.d?t++:"left"==this.d?t--:"up"==this.d?e--:"down"==this.d&&e++,t==-1||t==this.w/this.cw||e==-1||e==this.h/this.cw||this.check_collision(t,e,this.snake_array))return void this.init();if(t==this.food.x&&e==this.food.y){var n={x:t,y:e};this.score++,this.create_food()}else{var n=this.snake_array.pop();n.x=t,n.y=e}this.snake_array.unshift(n);for(var a=0;a<this.snake_array.length;a++){var s=this.snake_array[a];this.paint_cell(s.x,s.y)}this.paint_cell(this.food.x,this.food.y);var i="Score: "+this.score;this.ctx.fillText(i,5,this.h-5),this.checkHighScore()},paint_cell:function(t,e){this.ctx.fillStyle="blue",this.ctx.fillRect(t*this.cw,e*this.cw,this.cw,this.cw),this.ctx.strokeStyle="white",this.ctx.strokeRect(t*this.cw,e*this.cw,this.cw,this.cw)},check_collision:function(t,e,n){for(var a=0;a<n.length;a++)if(n[a].x==t&&n[a].y==e)return!0;return!1},key_down:function(t){var e=t.which;"37"==e&&"right"!=this.d?this.d="left":"38"==e&&"down"!=this.d?this.d="up":"39"==e&&"left"!=this.d?this.d="right":"40"==e&&"up"!=this.d&&(this.d="down")},checkHighScore:function(){this.score>this.max_score&&(this.max_score=this.score)}}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(23),i=a(s);e.default={data:function(){return{title:"",body:"",linkText:"",link:"",previewMode:!1,posts:[],projects:[],types:["posts","projects"],currType:"posts",chosenContent:""}},methods:{saveContent:function(){var t={title:this.title,body:this.body};"projects"===this.currType&&(t.link=this.link,t.linkText=this.linkText),database.ref(this.currType+"/"+this.title).set(t),this.clearInputs()},switchMode:function(){this.previewMode=!this.previewMode},findIn:function(t,e){for(var n=(0,i.default)(t),a=0;a<n.length;a++)if(n[a]==e)return t[n[a]];return!1},clearInputs:function(){this.chosenContent="",this.title="",this.body="",this.link="",this.linkText=""}},mounted:function(){var t=this;database.ref("posts").once("value").then(function(e){t.posts=e.val()}),database.ref("projects").once("value").then(function(e){t.projects=e.val()})},computed:{compiledMarkdown:function(){return marked(this.body,{})}},watch:{chosenContent:function(t){var e=this.findIn(this.posts,t);e&&(this.currType="posts",this.title=e.title,this.body=e.body),e=this.findIn(this.projects,t),e&&(this.currType="projects",this.title=e.title,this.body=e.body,this.link=e.link,this.linkText=e.linkText),""==t&&this.clearInputs()}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,function(t,e,n){var a,s;n(53),a=n(14);var i=n(76);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=a},function(t,e,n){var a,s;a=n(15),s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),t.exports=a},function(t,e,n){var a,s;a=n(16);var i=n(75);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=a},function(t,e,n){var a,s;n(52),a=n(17);var i=n(74);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=a},function(t,e,n){var a,s;n(55),a=n(18);var i=n(78);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-6acffaec",t.exports=a},function(t,e,n){var a,s;n(56),a=n(19);var i=n(79);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=a},function(t,e,n){var a,s;n(54),a=n(20);var i=n(77);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=a},function(t,e,n){var a,s;n(58),a=n(21);var i=n(81);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-7d773862",t.exports=a},function(t,e,n){var a,s;n(57);var i=n(80);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=a},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wide"},t._l(t.posts,function(e){return n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[n("router-link",{attrs:{to:{path:"/blog/"+e.title}}},[t._v(t._s(e.title))])],1),t._v(" "),n("div",{staticClass:"card-block"},[n("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.compiledMarkdown(e.body))}})])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[t._v(t._s(t.post.title))]),t._v(" "),n("div",{staticClass:"card-block",domProps:{innerHTML:t._s(t.compiledMarkdown(t.post.body))}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("VueNav"),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("router-view")],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wide"},[t._m(0),t._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"card-header",attrs:{"data-toggle":"collapse","data-target":"#gameInfo"}},[t._v("\r\n\t\t\tPlay using keyboard arrows. Click here to expand this card for more info.\r\n\t\t")]),t._v(" "),n("div",{staticClass:"card-block collapse",attrs:{id:"gameInfo"}},[n("h2",{staticClass:"card-title"},[t._v("Best Score: "+t._s(t.max_score))]),t._v(" "),n("p",{staticClass:"card-text"},[t._v("\r\n\t\t\t\tThis score only lasts as long as you are on the page.\r\n\t\t\t")]),t._v(" "),n("p",{staticClass:"card-text"},[t._v("\r\n\t\t\t\tIf you don't see the game, try refreshing the page.\r\n\t\t\t")]),t._v(" "),t._m(1),t._v(" "),t._m(2)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"panelList"}},[n("canvas",{attrs:{id:"canvas",width:"450",height:"450"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"card-text"},[t._v("\r\n\t\t\t\tCode for javascript snake game was originally found\r\n\t\t\t\t"),n("a",{attrs:{href:"http://thecodeplayer.com/walkthrough/html5-game-tutorial-make-a-snake-game-using-html5-canvas-jquery"}},[t._v("here")]),t._v(".\r\n\t\t\t")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"card-text"},[t._v("\r\n\t\t\t\tBut I altered it to work with Vue.js.\r\n\t\t\t\tIt's still not great, but you can find the code for this page\r\n\t\t\t\t"),n("a",{attrs:{href:"https://github.com/insanealec/insanealec/blob/master/src/components/Snake.vue"}},[t._v("on my github")]),t._v(".\r\n\t\t\t")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wide"},[t.loggedIn?t._e():n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[t._v("Login")]),t._v(" "),n("div",{staticClass:"card-block"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:t._s(t.email)},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:t._s(t.password)},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{id:"login"},on:{click:t.login}},[t._v("Submit")])])]),t._v(" "),t.loggedIn?n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[t._v("You are already logged in!")]),t._v(" "),t._m(0)]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-block"},[n("p",{staticClass:"card-text"},[t._v("No logout yet.")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wide"},t._l(t.projects,function(e){return n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[t._v("\r\n\t\t\t"+t._s(e.title)+"\r\n\t\t")]),t._v(" "),n("div",{staticClass:"card-block"},[n("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.compiledMarkdown(e.body))}})]),t._v(" "),n("div",{staticClass:"card-footer"},[n("a",{staticClass:"card-link",attrs:{href:e.link}},[t._v("\r\n\t\t\t\t"+t._s(e.linkText)+"\r\n\t\t\t")])])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-toggleable-md navbar-light bg-faded"},[t._m(0),t._v(" "),n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("insanealec")]),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/snake"}},[t._v("Play Snake")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/portfolio"}},[t._v("Portfolio")])],1)])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[t._v("\r\n\t\tTitle: \r\n\t\t"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],domProps:{value:t._s(t.title)},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),n("button",{staticClass:"preview",on:{click:function(e){t.switchMode()}}},[t._v("Preview Markdown")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.currType,expression:"currType"}],on:{change:function(e){t.currType=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e})[0]}}},t._l(t.types,function(e){return n("option",[t._v(t._s(e))])})),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.chosenContent,expression:"chosenContent"}],on:{change:function(e){t.chosenContent=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e})[0]}}},[n("option"),t._v(" "),t._l(t.posts,function(e){return n("option",[t._v(t._s(e.title))])}),t._v(" "),t._l(t.projects,function(e){return n("option",[t._v(t._s(e.title))])})],2)]),t._v(" "),n("textarea",{directives:[{name:"show",rawName:"v-show",value:!t.previewMode,expression:"!previewMode"},{name:"model",rawName:"v-model",value:t.body,expression:"body"}],domProps:{value:t._s(t.body)},on:{input:function(e){e.target.composing||(t.body=e.target.value)}}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.previewMode,expression:"previewMode"}],domProps:{innerHTML:t._s(t.compiledMarkdown)}}),t._v(" "),"projects"==t.currType?n("div",{staticClass:"project-group"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"linkText"}},[t._v("Link Text")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.linkText,expression:"linkText"}],staticClass:"form-control",attrs:{id:"linkText"},domProps:{value:t._s(t.linkText)},on:{input:function(e){e.target.composing||(t.linkText=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"link"}},[t._v("Link")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.link,expression:"link"}],staticClass:"form-control",attrs:{id:"link"},domProps:{value:t._s(t.link)},on:{input:function(e){e.target.composing||(t.link=e.target.value)}}})])]):t._e(),t._v(" "),n("div",{staticClass:"card-footer text-right"},[n("button",{staticClass:"btn btn-primary",on:{click:t.saveContent}},[t._v("Save")])])])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.c4359d08973148ec0664.js.map