webpackJsonp([2,0],[function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var a=s(24),i=n(a),r=s(82),o=n(r),c=s(81),l=n(c),d=s(64),u=n(d),f=s(65),p=n(f);window.marked=s(63),window.firebase=s(60);var h={apiKey:"AIzaSyDwcJJMROC2Vvr_LWYD9xR8oJpyzsHHG7M",authDomain:"insanealec-265cd.firebaseapp.com",databaseURL:"https://insanealec-265cd.firebaseio.com",storageBucket:"insanealec-265cd.appspot.com",messagingSenderId:"837052494412"};firebase.initializeApp(h),window.database=firebase.database(),o.default.use(l.default);var v=new l.default({routes:p.default.routes,linkActiveClass:"is-active"});v.afterEach(function(t,e){ga("set","page",t.path),ga("send","pageview")});new o.default((0,i.default)({el:"#app"},u.default,{router:v}))},,,,,,,,,,,,,,function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(72),i=n(a);e.default={name:"app",components:{VueNav:i.default},mounted:function(){}}},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(67),i=n(a),r=s(70),o=n(r),c=s(69),l=n(c),d=s(68),u=n(d),f=s(71),p=n(f),h=s(66),v=n(h);e.default={routes:[{path:"/",component:i.default},{path:"/snake",component:o.default},{path:"/portfolio",component:l.default},{path:"/login",component:u.default},{path:"/write",component:p.default},{path:"/blog/:name",component:v.default}]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{post:{title:"",body:""}}},mounted:function(){var t=this;database.ref("/posts/"+this.$route.params.name).once("value").then(function(e){t.post=e.val()})},methods:{compiledMarkdown:function(t){return marked(t,{})}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){var t=this;database.ref("/posts").once("value").then(function(e){t.posts=e.val()})},methods:{compiledMarkdown:function(t){var e=3,s=t.split("\n\n"),n=s.length,a="";if(n<=e)a=t;else{for(var i=0;i<e;i++)a+=s[i]+"\n\n";a+="\n\n...\n\n**Read More** to see the rest..."}return marked(a,{})}},data:function(){return{posts:[]}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{login:function(){firebase.auth().signInWithEmailAndPassword(this.email,this.password).catch(function(t){console.log(t),alert(t.message)})}},data:function(){return{loggedIn:!1,email:"",password:""}},mounted:function(){var t=this;firebase.auth().onAuthStateChanged(function(e){e&&(console.log(e),t.loggedIn=!0)})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){var t=this;database.ref("/projects").once("value").then(function(e){t.projects=e.val()})},methods:{compiledMarkdown:function(t){return marked(t,{})}},data:function(){return{projects:[]}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){null!=document.getElementById("canvas")&&this.runGame()},data:function(){return{canvas:null,ctx:null,w:null,h:null,cw:10,d:"right",food:{},score:0,game_loop:"undefined",snakeLength:5,snake_array:[],max_score:0,displayInfo:!1}},methods:{runGame:function(){this.setupCanvas(),this.init(),"undefined"!=typeof this.game_loop&&clearInterval(this.game_loop),this.game_loop=setInterval(this.paint,60),document.addEventListener("keydown",this.key_down,!1)},setupCanvas:function(){this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.w=this.canvas.width,this.h=this.canvas.height},init:function(){this.d="right",this.create_snake(),this.create_food(),this.score=0},create_snake:function(){this.snake_array=[];for(var t=this.snakeLength-1;t>=0;t--)this.snake_array.push({x:t,y:0})},create_food:function(){this.food={x:Math.round(Math.random()*(this.w-this.cw)/this.cw),y:Math.round(Math.random()*(this.h-this.cw)/this.cw)}},paint:function(){this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.w,this.h),this.ctx.strokeStyle="black",this.ctx.strokeRect(0,0,this.w,this.h);var t=this.snake_array[0].x,e=this.snake_array[0].y;if("right"==this.d?t++:"left"==this.d?t--:"up"==this.d?e--:"down"==this.d&&e++,t==-1||t==this.w/this.cw||e==-1||e==this.h/this.cw||this.check_collision(t,e,this.snake_array))return void this.init();if(t==this.food.x&&e==this.food.y){var s={x:t,y:e};this.score++,this.create_food()}else{var s=this.snake_array.pop();s.x=t,s.y=e}this.snake_array.unshift(s);for(var n=0;n<this.snake_array.length;n++){var a=this.snake_array[n];this.paint_cell(a.x,a.y)}this.paint_cell(this.food.x,this.food.y);var i="Score: "+this.score;this.ctx.fillText(i,5,this.h-5),this.checkHighScore()},paint_cell:function(t,e){this.ctx.fillStyle="blue",this.ctx.fillRect(t*this.cw,e*this.cw,this.cw,this.cw),this.ctx.strokeStyle="white",this.ctx.strokeRect(t*this.cw,e*this.cw,this.cw,this.cw)},check_collision:function(t,e,s){for(var n=0;n<s.length;n++)if(s[n].x==t&&s[n].y==e)return!0;return!1},key_down:function(t){var e=t.which;"37"==e&&"right"!=this.d?this.d="left":"38"==e&&"down"!=this.d?this.d="up":"39"==e&&"left"!=this.d?this.d="right":"40"==e&&"up"!=this.d&&(this.d="down")},checkHighScore:function(){this.score>this.max_score&&(this.max_score=this.score)}}}},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(23),i=n(a);e.default={data:function(){return{title:"",body:"",linkText:"",link:"",previewMode:!1,posts:[],projects:[],types:["posts","projects"],currType:"posts",chosenContent:""}},methods:{saveContent:function(){var t={title:this.title,body:this.body};"projects"===this.currType&&(t.link=this.link,t.linkText=this.linkText),database.ref(this.currType+"/"+this.title).set(t),this.clearInputs()},switchMode:function(){this.previewMode=!this.previewMode},findIn:function(t,e){for(var s=(0,i.default)(t),n=0;n<s.length;n++)if(s[n]==e)return t[s[n]];return!1},clearInputs:function(){this.chosenContent="",this.title="",this.body="",this.link="",this.linkText=""}},mounted:function(){var t=this;database.ref("posts").once("value").then(function(e){t.posts=e.val()}),database.ref("projects").once("value").then(function(e){t.projects=e.val()})},computed:{compiledMarkdown:function(){return marked(this.body,{})}},watch:{chosenContent:function(t){var e=this.findIn(this.posts,t);e&&(this.currType="posts",this.title=e.title,this.body=e.body),e=this.findIn(this.projects,t),e&&(this.currType="projects",this.title=e.title,this.body=e.body,this.link=e.link,this.linkText=e.linkText),""==t&&this.clearInputs()}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,function(t,e,s){var n,a;s(53),n=s(14);var i=s(75);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=n},function(t,e,s){var n,a;n=s(15),a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),t.exports=n},function(t,e,s){var n,a;n=s(16);var i=s(74);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=n},function(t,e,s){var n,a;s(52),n=s(17);var i=s(73);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=n},function(t,e,s){var n,a;s(55),n=s(18);var i=s(77);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,a._scopeId="data-v-6acffaec",t.exports=n},function(t,e,s){var n,a;s(56),n=s(19);var i=s(78);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=n},function(t,e,s){var n,a;s(54),n=s(20);var i=s(76);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=n},function(t,e,s){var n,a;s(57),n=s(21);var i=s(80);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,a._scopeId="data-v-7d773862",t.exports=n},function(t,e,s){var n,a,i=s(79);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=n},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},t._l(t.posts,function(e){return s("div",{staticClass:"card"},[s("header",{staticClass:"card-header"},[s("h1",{staticClass:"card-header-title"},[t._v("\r\n\t\t\t\t"+t._s(e.title)+"\r\n\t\t\t")])]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"content"},[s("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.compiledMarkdown(e.body))}})])]),t._v(" "),s("footer",{staticClass:"card-footer"},[s("router-link",{staticClass:"card-footer-item",attrs:{to:{path:"/blog/"+e.title}}},[t._v("\r\n\t\t\t\tRead More\r\n\t\t\t")])],1)])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("header",{staticClass:"card-header"},[s("p",{staticClass:"card-header-title"},[t._v(t._s(t.post.title))])]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"content",domProps:{innerHTML:t._s(t.compiledMarkdown(t.post.body))}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("VueNav"),t._v(" "),s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("router-view")],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[t._m(0),t._v(" "),s("div",{staticClass:"card"},[s("header",{staticClass:"card-header"},[s("p",{staticClass:"card-header-title",on:{click:function(e){t.displayInfo=!t.displayInfo}}},[t._v("\r\n\t\t\t\tPlay using keyboard arrows. Click here to expand this card for more info.\r\n\t\t\t")])]),t._v(" "),t.displayInfo?s("div",{staticClass:"card-content"},[s("div",{staticClass:"content"},[s("h2",{staticClass:"card-title"},[t._v("Best Score: "+t._s(t.max_score))]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("\r\n\t\t\t\t\tThis score only lasts as long as you are on the page.\r\n\t\t\t\t")]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("\r\n\t\t\t\t\tIf you don't see the game, try refreshing the page.\r\n\t\t\t\t")]),t._v(" "),t._m(1),t._v(" "),t._m(2)])]):t._e()])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"image is-400by400",attrs:{id:"panelList"}},[s("canvas",{attrs:{id:"canvas",width:"450",height:"450"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"card-text"},[t._v("\r\n\t\t\t\t\tCode for javascript snake game was originally found\r\n\t\t\t\t\t"),s("a",{attrs:{href:"http://thecodeplayer.com/walkthrough/html5-game-tutorial-make-a-snake-game-using-html5-canvas-jquery"}},[t._v("here")]),t._v(".\r\n\t\t\t\t")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"card-text"},[t._v("\r\n\t\t\t\t\tBut I altered it to work with Vue.js.\r\n\t\t\t\t\tIt's still not great, but you can find the code for this page\r\n\t\t\t\t\t"),s("a",{attrs:{href:"https://github.com/insanealec/insanealec/blob/master/src/components/Snake.vue"}},[t._v("on my github")]),t._v(".\r\n\t\t\t\t")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[t.loggedIn?t._e():s("div",{staticClass:"card"},[t._m(0),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:t._s(t.email)},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:t._s(t.password)},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._v(" "),s("footer",{staticClass:"card-footer"},[s("button",{staticClass:"btn btn-primary card-footer-item",attrs:{id:"login"},on:{click:t.login}},[t._v("Submit")])])]),t._v(" "),t.loggedIn?s("div",{staticClass:"card"},[t._m(1),t._v(" "),t._m(2)]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"card-header"},[s("div",{staticClass:"card-header-title"},[t._v("\r\n\t\t\t\tLogin\r\n\t\t\t")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"card-header"},[s("div",{staticClass:"card-header-title"},[t._v("\r\n\t\t\t\tYou are already logged in!\r\n\t\t\t")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-content"},[s("p",{staticClass:"content"},[t._v("No logout yet.")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},t._l(t.projects,function(e){return s("div",{staticClass:"card"},[s("header",{staticClass:"card-header"},[s("div",{staticClass:"card-header-title"},[t._v("\r\n\t\t\t\t"+t._s(e.title)+"\r\n\t\t\t")])]),t._v(" "),s("div",{staticClass:"card-content"},[s("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.compiledMarkdown(e.body))}})]),t._v(" "),s("footer",{staticClass:"card-footer"},[s("a",{staticClass:"card-footer-item",attrs:{href:e.link}},[t._v("\r\n\t\t\t\t"+t._s(e.linkText)+"\r\n\t\t\t")])])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tabs is-fullwidth is-centered is-boxed"},[s("ul",[s("router-link",{attrs:{tag:"li",to:"/",exact:""}},[s("a",[t._v("Home")])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/snake"}},[s("a",[t._v("Play Snake")])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/portfolio"}},[s("a",[t._v("Portfolio")])])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("header",{staticClass:"card-header"},[s("div",{staticClass:"card-header-title"},[s("label",{staticClass:"label"},[t._v("Title")]),t._v(" "),s("p",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input",domProps:{value:t._s(t.title)},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),s("button",{staticClass:"preview button",on:{click:function(e){t.switchMode()}}},[t._v("Preview Markdown")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.currType,expression:"currType"}],staticClass:"select",on:{change:function(e){t.currType=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e})[0]}}},t._l(t.types,function(e){return s("option",[t._v(t._s(e))])})),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.chosenContent,expression:"chosenContent"}],staticClass:"select",on:{change:function(e){t.chosenContent=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e})[0]}}},[s("option"),t._v(" "),t._l(t.posts,function(e){return s("option",[t._v(t._s(e.title))])}),t._v(" "),t._l(t.projects,function(e){return s("option",[t._v(t._s(e.title))])})],2)])]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"content"},[s("label",{staticClass:"label"},[t._v("Body")]),t._v(" "),s("p",{staticClass:"control"},[s("textarea",{directives:[{name:"show",rawName:"v-show",value:!t.previewMode,expression:"!previewMode"},{name:"model",rawName:"v-model",value:t.body,expression:"body"}],staticClass:"textarea",domProps:{value:t._s(t.body)},on:{input:function(e){e.target.composing||(t.body=e.target.value)}}})]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.previewMode,expression:"previewMode"}],domProps:{innerHTML:t._s(t.compiledMarkdown)}}),t._v(" "),"projects"==t.currType?s("div",{staticClass:"project-group"},[s("label",{staticClass:"label"},[t._v("Link Text")]),t._v(" "),s("p",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.linkText,expression:"linkText"}],staticClass:"input",attrs:{id:"linkText"},domProps:{value:t._s(t.linkText)},on:{input:function(e){e.target.composing||(t.linkText=e.target.value)}}})]),t._v(" "),s("label",{staticClass:"label"},[t._v("Link")]),t._v(" "),s("p",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.link,expression:"link"}],staticClass:"input",attrs:{id:"link"},domProps:{value:t._s(t.link)},on:{input:function(e){e.target.composing||(t.link=e.target.value)}}})])]):t._e()])]),t._v(" "),s("div",{staticClass:"card-footer text-right"},[s("button",{staticClass:"button is-primary card-footer-item",on:{click:t.saveContent}},[t._v("Save")])])])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.47185d68942f8a365499.js.map