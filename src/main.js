import Vue from 'vue'
import App from './App'
import UserInfo from './components/UserInfo'

import './css/main.css'
import 'weui'

new Vue({
  el: 'body',
  components: {App, UserInfo},
  data(){
    return {
      currentView: 'app'
    }
  },
  events: {
    changeView(viewName){
      this.currentView = viewName
    }
  }
})
