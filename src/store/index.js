/**
 * Created by Administrator on 2017/7/28.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import mutations from './mutations';
import actions from './actions';


export default new Vuex.Store({
    modules:{
        mutations
    },
    actions
})
