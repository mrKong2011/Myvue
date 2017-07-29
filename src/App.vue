<template>
    <div id="app">
        <loading v-if="loadingshow"></loading>
        <NavHeader v-if="headershow"></NavHeader>
        <transition name="slide-down">
            <keep-alive>
                <router-view class="router-view"></router-view>
            </keep-alive>
        </transition>
        <NavFooter v-if="footshow"></NavFooter>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    import NavHeader from './components/Nav.vue';
    import NavFooter from './components/Footer.vue';
    export default {
        name: 'app',
        data () {
            return {}
        },
        mounted(){
        },
        watch: {
            $route(to){  // 监控路由的 变化
                let path = to.path.substring(1);
                this.changeHeader(path);
                this.changefooter(path);
            }
        },
        methods: {
            changeHeader(path){
                if (path == 'user-info' || path == 'user-register' || path == 'user-login' || path.indexOf('article') != -1) {
                    this.$store.dispatch('hideHeader');
                } else {
                    this.$store.dispatch('showHeader');
                }
            },
            changefooter(path){
                if (path.indexOf('article') == -1) {
                    this.$store.dispatch('showFooter');
                } else {
                    this.$store.dispatch('hideFooter');
                }
            }
        },
        components: {
            NavHeader,
            NavFooter,
        },
        computed: mapGetters([
            'footshow',
            'headershow',
            'loadingshow'
        ])
    }
</script>

<style scoped>
    .slide-down-enter-active,.slide-down-leave-active{
        transition:all 0.4s;
        opacity: 0.1;
        transform: translate3d(0,6em,0);
    }
    .slide-down-enter{
        opacity: .1;
        transform: translate3d(0,6em, 0);
    }
</style>
