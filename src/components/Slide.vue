<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../assets/images/img_1.jpg" alt=""/>
                <div class="text-box">
                    <h2>还可以降低首付款健身房11111</h2>
                    <p>刘德华11 / 文</p>
                </div>
            </div>
            <div class="swiper-slide">
                <img src="../assets/images/img_2.jpg" alt=""/>
                <div class="text-box">
                    <h2>还可以降低首付款健身房2222</h2>
                    <p>刘德华22 / 文</p>
                </div>
            </div>
            <div class="swiper-slide">
                <img src="../assets/images/img_3.jpg" alt=""/>
                <div class="text-box">
                    <h2>还可以降低首付款健身房333</h2>
                    <p>刘德华33 / 文</p>
                </div>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>

</template>
<script>
    export default {
        mounted(){
            this.fnSlider();
        },
        methods:{
            fnSlider(){
                var mySwiper = new Swiper ('.swiper-container', {
                    loop: true,
                    autoplay: 2000,
                    // 如果需要分页器
                    pagination: '.swiper-pagination',

                    // 如果需要前进后退按钮
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                });
            }
        }
    }
</script>
<style>
    @import "../assets/css/swiper-3.4.2.min.css";
</style>
<style scoped>

    .swiper-container {
        width: 100%;
        height: 300px;
    }
    .swiper-container img{
        width: 100%;
        height: 300px;
    }

</style>