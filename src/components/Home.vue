<template>
    <div class="content mt40">
        <Slider></Slider>
        <div class="newsList">
            <ul>

                <li v-for="item in dataList">
                    <router-link :to="'/article/'+item.id">
                        <h2>{{item.title}}</h2>
                        <p>{{item.detail}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Slider from '../components/Slide.vue';
    export default{
        data(){
            return {
                dataList:[],
            }
        },
        components:{
            Slider
        },
        mounted(){
            this.getList()
        },
        methods:{
            getList(){
                this.$http.get('src/data/index.data').then((res)=>{
                    console.log(res);
                    if(res.status==200){
                        this.dataList = res.data;
                    }
                }).catch((err)=>{
                    console.log('错误'+err);
                })
            }
        }
    }
</script>
<style scoped>
    .mt40{
        margin-top: 40px;
    }
</style>