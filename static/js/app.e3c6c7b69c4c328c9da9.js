webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(11)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(21),
  /* scopeId */
  "data-v-bd26cd6c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_StyleEditor__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_StyleEditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_StyleEditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ResumeEditor__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ResumeEditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_ResumeEditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_reset_css__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_reset_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_reset_css__);
//
//
//
//
//
//




let isPc = function () {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}();
let getDateDiff = function (startDate, endDate) {
    var startTime = new Date(Date.parse(startDate.replace(/-/g, "/"))).getTime();
    var endTime = new Date(Date.parse(endDate.replace(/-/g, "/"))).getTime();
    var dates = Math.abs(startTime - endTime) / (1000 * 60 * 60 * 24);
    return dates;
};
document.title += getDateDiff(new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(), '2023-03-08') + 1 + '天';
/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'app',
    components: {
        StyleEditor: __WEBPACK_IMPORTED_MODULE_0__components_StyleEditor___default.a,
        ResumeEditor: __WEBPACK_IMPORTED_MODULE_1__components_ResumeEditor___default.a
    },
    data() {
        return {
            interval: 27,
            currentStyle: '',
            enableHtml: false,
            fullStyle: [`/*
* Hello，我的湛江鸡🐣！
* CYB👩‍❤️‍👨HXY一起度过了难忘的2023.05.23 ~ 2023.05.25。
* 我也想试着用网页没事记录一下我们曾经一起度过的幸福点点滴滴🤗
* 让我的乖宝也大概了解一下汕头鸭🦢平时都在捣鼓些什么玩意哈哈哈！
* 我的职业江湖人称新时代互联网农民工，俗称程序员。
* 当然逼格高点也可以叫软件开发工程师，啊哈哈哈🤪。
* 方向是Java后端，以及会一丢丢前端🙄。
* 如这个页面。一开始就是个什么也没有的网页。
* 我的工作就是给这种空白的页面加点儿东西和处理相关数据。
* 嗯。说起来手机和电脑还得区分一下。
* 你现在用的是。。。${isPc ? '电脑' : '手机'}
*/

/* 首先给所有元素加上过渡效果 */
* {
  -webkit-transition: all .3s;
  transition: all .3s;
}
/* 白色背景太单调了。来点背景 */
html {
  color: rgb(222,222,222);
  background: rgb(0,43,54); 
}
/* 文字太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  ${isPc ? 'width: 48%;height: 96%;' : 'width: 96%;height: 50%;'}
  font-size: 14px;
  line-height:1.5;
}
/* 这些代码颜色都一样。加点儿高亮区别来 */
.token.selector{ color: rgb(133,153,0) }
.token.property{ color: rgb(187,137,0) }
.token.punctuation{ color: yellow }
.token.function{ color: rgb(42,161,152) }
.token.comment{ color: rgb(177,177,177) }
/* 加个 3D 效果 */
html{
  -webkit-perspective: 1000px;
          perspective: 1000px;
}
.styleEditor {
  position: fixed; 
  ${isPc ? 'left: 0;' : 'left:0;right:0;margin:auto;'}
  top: 0; 
  -webkit-transition: none; 
  transition: none;   
  ${isPc ? '-webkit-transform: rotateY(10deg) translateZ(-100px) ;transform: rotateY(10deg) translateZ(-100px) ;' : '-webkit-transform: rotateX(-10deg) translateZ(-100px) ;transform: rotateX(-10deg) translateZ(-100px) ;'}
  ${isPc ? '' : '-webkit-transform-origin: 50% 0% 0;transform-origin: 50% 0% 0;'}
}

/* 再来一张信纸 */
.resumeEditor{
  position: fixed; 
  ${isPc ? 'right: 0;' : 'left:0;right:0;margin:auto;'}
  ${isPc ? 'top: 0;' : 'bottom:2%;'}
  padding: .5em;  
  ${isPc ? 'margin: .5em;' : ''}
  ${isPc ? 'width: 48%;height: 96%;' : 'width: 96%;height: 50%;'}
  border: 1px solid;
  color: #222;
  overflow: auto;
  font-size: 14px;
  line-height:1.5;
  ${isPc ? '-webkit-transform: rotateY(-10deg) translateZ(-100px) ;transform: rotateY(-10deg) translateZ(-100px) ;' : '-webkit-transform: rotateX(10deg) translateZ(-100px) ;transform: rotateX(10deg) translateZ(-100px) ;'}
    ${isPc ? '' : '-webkit-transform-origin: 50% 0% 0;transform-origin: 50% 0% 0;'}
  }
/* 我开始写了 */


`, `
/* 是不是看着很简陋粗糙？
 * 因为这是 Markdown 格式的
 * 一种程序员用来写文档日志的简易语言
 * 翻译成 网页 就行了
 */
`, `
/* 再加点样式 */
.resumeEditor{
  padding: 2em;
  line-height:1.8;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
  font-size:18px;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;            
  content: counters(section, ".") " ";  
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: rgba(221,221,221,.5);
}

/* OK。完成！ */

`],
            currentMarkdown: '',
            fullMarkdown: `CYB 👩‍❤️‍👨 HXY
----

2023年02月28日，我们在知乎发起了第一次聊天。  
已有 \`${getDateDiff(new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(), '2023-02-28') + 1}\` 天

重要的日子
----

* 每年0308 🎉
* 2023.02.28 😯
* 中秋节 💖
* 2023.05.23 ~ 2023.05.25 💕
* …… 

一起呲过的餐厅
----

* 萨莉亚
* ……

一起看过的电影
----

1. 《泰囧》
2. 《流浪地球2》
3. ……

一起玩过的地方
----

* 广州塔 --- 这个真的刚刚好赶上了哈哈哈
* 海心桥 --- 好难忘那一晚，跟我的乖宝一起手牵手
* 广州南 --- 至今想起第一次见到的时候，回味无穷
* 北京路 --- 跟你一起喝的杨枝甘露，好喝~
* 圣心大教堂
* ……

喜欢的
----

* 菠萝🍍
* 草莓🍓
* 荔枝
* 杨梅
* 玫瑰花🌹
* ……

<br/>

>【Screw the world × Happy every day！】  
>>乖老婆，我不只想影响你的习惯，我还要去改变你的人生！
>>>余生请多多指教！

<br/>
<br/>
<br/>

>突然想起有这么个挺有趣的项目,
>就在星期天捣鼓捣鼓，好在顺利地完成了，
>就当做一个特别的礼物送给我最爱的乖宝吧mua（づ￣3￣）づ╭❤～

<br/>
<br/>
<br/>

*** 衣宽渐带终不悔，为伊消得人憔悴！***

<br/>
<br/>
<br/>

未完待续。。。

<br/>
<br/>
<br/>

<p align="right">CYB</p> 
<p align="right">2023.05.28</p>  

`
        };
    },
    created() {
        this.makeResume();
    },

    methods: {
        makeResume: async function () {
            await this.progressivelyShowStyle(0);
            await this.progressivelyShowResume();
            await this.progressivelyShowStyle(1);
            await this.showHtml();
            await this.progressivelyShowStyle(2);
        },
        showHtml: function () {
            return new Promise((resolve, reject) => {
                this.enableHtml = true;
                resolve();
            });
        },
        progressivelyShowStyle(n) {
            return new Promise((resolve, reject) => {
                let interval = this.interval;
                let showStyle = async function () {
                    let style = this.fullStyle[n];
                    if (!style) {
                        return;
                    }
                    // 计算前 n 个 style 的字符总数
                    let length = this.fullStyle.filter((_, index) => index <= n).map(item => item.length).reduce((p, c) => p + c, 0);
                    let prefixLength = length - style.length;
                    if (this.currentStyle.length < length) {
                        let l = this.currentStyle.length - prefixLength;
                        let char = style.substring(l, l + 1) || ' ';
                        this.currentStyle += char;
                        if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                            this.$nextTick(() => {
                                this.$refs.styleEditor.goBottom();
                            });
                        }
                        setTimeout(showStyle, interval);
                    } else {
                        resolve();
                    }
                }.bind(this);
                showStyle();
            });
        },
        progressivelyShowResume() {
            return new Promise((resolve, reject) => {
                let length = this.fullMarkdown.length;
                let interval = this.interval;
                let showResume = () => {
                    if (this.currentMarkdown.length < length) {
                        this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1);
                        let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1];
                        let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2];
                        if (prevChar === '\n' && this.$refs.resumeEditor) {
                            this.$nextTick(() => this.$refs.resumeEditor.goBottom());
                        }
                        setTimeout(showResume, interval);
                    } else {
                        resolve();
                    }
                };
                showResume();
            });
        }
    }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_marked__);
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['markdown', 'enableHtml'],
  name: 'ResumeEditor',
  computed: {
    result: function () {
      return this.enableHtml ? __WEBPACK_IMPORTED_MODULE_0_marked___default()(this.markdown) : this.markdown;
    }
  },
  methods: {
    goBottom: function () {
      this.$refs.container.scrollTop = 100000;
    }
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prismjs__);
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Editor',
  props: ['code'],
  computed: {
    highlightedCode: function () {
      return __WEBPACK_IMPORTED_MODULE_0_prismjs___default.a.highlight(this.code, __WEBPACK_IMPORTED_MODULE_0_prismjs___default.a.languages.css);
    },
    codeInStyleTag: function () {
      return `<style>${this.code}</style>`;
    }
  },
  methods: {
    goBottom() {
      this.$refs.container.scrollTop = 100000;
    }
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);



/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  render: h => h(__WEBPACK_IMPORTED_MODULE_1__App___default.a)
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(10)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(20),
  /* scopeId */
  "data-v-3539023c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(9)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(19),
  /* scopeId */
  "data-v-23b5cc2c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "container",
    staticClass: "styleEditor"
  }, [_c('div', {
    staticClass: "code",
    domProps: {
      "innerHTML": _vm._s(_vm.codeInStyleTag)
    }
  }), _vm._v(" "), _c('pre', {
    domProps: {
      "innerHTML": _vm._s(_vm.highlightedCode)
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "container",
    staticClass: "resumeEditor",
    class: {
      htmlMode: _vm.enableHtml
    }
  }, [(_vm.enableHtml) ? _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.result)
    }
  }) : _c('pre', [_vm._v(_vm._s(_vm.result))])])
},staticRenderFns: []}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('StyleEditor', {
    ref: "styleEditor",
    attrs: {
      "code": _vm.currentStyle
    }
  }), _vm._v(" "), _c('ResumeEditor', {
    ref: "resumeEditor",
    attrs: {
      "markdown": _vm.currentMarkdown,
      "enableHtml": _vm.enableHtml
    }
  })], 1)
},staticRenderFns: []}

/***/ })
],[7]);
