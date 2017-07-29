/**
 * Created by Administrator on 2017/7/28.
 */
const state = {
    footshow:true,
    headershow:true,
    loadingshow:true,
};

const getters ={
    footshow(state){
        return state.footshow;
    },
    headershow(state){
        return state.headershow;
    },
    loadingshow(state){
        return state.loadingshow;
    },

}
const mutations ={
    hideFooter(state){
        state.footshow = false;
    },
    showFooter(state){
        state.footshow = true;
    },
    hideHeader(state){
        state.headershow = false;
    },
    showHeader(state){
        state.headershow = true;
    },
    showLoading(state){
        state.loadingshow = true;
    },
    hideLoading(state){
        state.loadingshow = false;
    },
}
export default {
    state,
    getters,
    mutations
}

