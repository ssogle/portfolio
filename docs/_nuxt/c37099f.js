(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{224:function(t,e,n){"use strict";n.r(e);n(36),n(19),n(30),n(39),n(24),n(40);var r=n(14),l=n(27),c={props:{company:{type:String,required:!0},date:{type:String,required:!0},department:{type:String,required:!0},rank:{type:String,required:!0},explain:{type:Array,required:!0},project:{type:Array,required:!0},skill:{type:Array,required:!0}}},o=n(20);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var v={components:{CareerCard:Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full p-3 break-words"},[n("div",{staticClass:"rounded overflow-hidden shadow-lg bg-blue-100"},[n("div",{staticClass:"px-6 py-4"},[n("div",{staticClass:"font-bold text-xl mb-3 border-b pb-3 border-white"},[t._v("\n        "+t._s(t.company)+"\n      ")]),t._v(" "),n("div",{staticClass:"text-gray-500 mt-3 mb-2"},[t._v(t._s(t.date))]),t._v(" "),n("div",{staticClass:"text-xl"},[t._v(t._s(t.department)+" "+t._s(t.rank))])]),t._v(" "),n("div",{staticClass:"px-6 pb-4"},[n("div",{staticClass:"text-blue-500 mb-1"},[t._v("#업무내용")]),t._v(" "),t._l(t.explain,(function(e,r){return n("div",{key:r,staticClass:"\n          block\n          py-1\n          text-sm\n          font-semibold\n          text-gray-700\n          mb-1\n          ml-2\n          pl-3\n          relative\n        "},[n("span",{staticClass:"absolute top-1 left-0"},[t._v("- ")]),t._v(t._s(e)+"\n      ")])}))],2),t._v(" "),n("div",{staticClass:"px-6 pb-4"},[n("div",{staticClass:"text-blue-500 mb-1"},[t._v("#진행프로젝트")]),t._v(" "),t._l(t.project,(function(e,r){return n("div",{key:r,staticClass:"\n          block\n          py-1\n          text-sm\n          font-semibold\n          text-gray-700\n          mb-1\n          ml-2\n          pl-3\n          relative\n        "},[n("span",{staticClass:"absolute top-1 left-0"},[t._v("- ")]),t._v(t._s(e)+"\n      ")])}))],2),t._v(" "),n("div",{staticClass:"px-6 pb-4"},t._l(t.skill,(function(e,r){return n("span",{key:r,staticClass:"\n          inline-block\n          bg-blue-300\n          rounded-full\n          px-3\n          py-1\n          text-sm\n          font-semibold\n          text-white\n          mr-2\n          mb-2\n        "},[t._v(t._s(e))])})),0)])])}),[],!1,null,null,null).exports},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)("career",["list"]))},y=Object(o.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"container m-auto"},[n("div",{staticClass:"text-gray-700"},[n("div",{staticClass:"text-center pt-5"},[n("fa-icon",{attrs:{icon:"building",size:"3x"}})],1),t._v(" "),n("h2",{staticClass:"text-center text-xl pt-2 pb-4 uppercase"},[t._v("career")])]),t._v(" "),t._l(t.list,(function(t,e){return n("career-card",{key:e,attrs:{company:t.company,date:t.date,department:t.department,rank:t.rank,explain:t.explain,project:t.project,skill:t.skill}})}))],2)])}),[],!1,null,null,null);e.default=y.exports}}]);