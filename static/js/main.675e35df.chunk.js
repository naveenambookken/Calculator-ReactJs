(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{13:function(_,e,t){},14:function(_,e,t){},16:function(_,e,t){"use strict";t.r(e);var a=t(1),c=t.n(a),s=t(3),l=t.n(s),n=(t(13),t(4)),r=t(0);var i=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(n.a,{})})};l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(i,{})}),document.getElementById("root"))},4:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Admin_Desktop_React_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),C_Users_Admin_Desktop_React_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),C_Users_Admin_Desktop_React_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),C_Users_Admin_Desktop_React_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_Calculator_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(14),_Calculator_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_Calculator_css__WEBPACK_IMPORTED_MODULE_5__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__),Calculator=function(_Component){Object(C_Users_Admin_Desktop_React_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Calculator,_Component);var _super=Object(C_Users_Admin_Desktop_React_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator);function Calculator(props){var _this;return Object(C_Users_Admin_Desktop_React_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),_this=_super.call(this,props),_this.calculate=function(){try{var result=eval(_this.state.data);_this.setState({data:result})}catch(e){_this.setState({data:"error"})}},_this.handleClick=function(_){var e=_.target.value;switch(e){case"all-clear":_this.setState({data:""});break;case"=":_this.calculate();break;default:_this.setState({data:_this.state.data+e})}},_this.state={data:""},_this}return Object(C_Users_Admin_Desktop_React_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{class:"calculator card col-xs-12 col-sm-6 col-md-8",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input",{type:"text",class:"calculator-screen z-depth-1",value:this.state.data,disabled:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{class:"calculator-keys",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:this.handleClick,type:"button",class:"operator btn btn-info",value:"+",children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:this.handleClick,type:"button",class:"operator btn btn-info",value:"-",children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:this.handleClick,type:"button",class:"operator btn btn-info",value:"*",children:"\xd7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:this.handleClick,type:"button",class:"operator btn btn-info",value:"/",children:"\xf7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:this.handleClick,type:"button",value:"7",class:"btn btn-outline-dark waves-effect",children:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:this.handleClick,type:"button",value:"8",class:"btn btn-outline-dark waves-effect",children:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:this.handleClick,type:"button",value:"9",class:"btn btn-outline-dark waves-effect",children:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:this.handleClick,type:"button",value:"4",class:"btn btn-outline-dark waves-effect",children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:this.handleClick,type:"button",value:"5",class:"btn btn-outline-dark waves-effect",children:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:this.handleClick,type:"button",value:"6",class:"btn btn-outline-dark waves-effect",children:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:this.handleClick,type:"button",value:"1",class:"btn btn-outline-dark waves-effect",children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:this.handleClick,type:"button",value:"2",class:"btn btn-outline-dark waves-effect",children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:this.handleClick,type:"button",value:"3",class:"btn btn-outline-dark waves-effect",children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:this.handleClick,type:"button",value:"0",class:"btn btn-outline-dark waves-effect",children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:this.handleClick,type:"button",class:"decimal function btn btn-secondary",value:".",children:"."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:this.handleClick,type:"button",class:"all-clear function btn btn-danger btn-sm",value:"all-clear",children:"AC"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:this.handleClick,type:"button",class:"equal-sign operator btn btn-success",value:"=",children:"="})]})]})}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=Calculator}},[[16,1,2]]]);
//# sourceMappingURL=main.675e35df.chunk.js.map