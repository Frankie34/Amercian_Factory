import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'



Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(ElementUI);
Vue.component('v-chart', ECharts)

new Vue({
  render: h => h(App),
}).$mount('#app')
