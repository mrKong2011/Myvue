/**
 * Created by Administrator on 2017/7/28.
 */
export default {
    hideFooter({commit}){
        commit('hideFooter');
    },
    showFooter({commit}){
        commit('showFooter');
    },
    hideHeader({commit}){
        commit('hideHeader');
    },
    showHeader({commit}){
        commit('showHeader');
    },
    showLoading({commit}){
        commit('showLoading');
    },
    hideLoading({commit}){
        commit('hideLoading');
    },
}