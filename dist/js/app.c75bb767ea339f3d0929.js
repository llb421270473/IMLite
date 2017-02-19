webpackJsonp([1,0,2],[
/* 0 */
/***/ function(module, exports) {

	import Vue from 'vue';
	import App from './App';
	import UserInfo from './components/UserInfo';
	
	import './css/main.css';
	import 'weui';
	
	new Vue({
	  el: 'body',
	  components: { App, UserInfo },
	  data() {
	    return {
	      currentView: 'app'
	    };
	  },
	  events: {
	    changeView(viewName) {
	      this.currentView = viewName;
	    }
	  }
	});

/***/ }
]);
//# sourceMappingURL=app.c75bb767ea339f3d0929.js.map