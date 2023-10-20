
<!-- Misc, not really reusable -->

<template>
    <span class="movingTextWrapper" :class="{ movingTextWrapperFade: fade }"
    ref="movingTextWrapper">
        {{ movingText }} 
    </span>
</template>

<script>
    export default {
        props: ['movingText'],
        data(){
            return{
                fade: false,
            }
        },
        created(){
            document.addEventListener('DOMContentLoaded', ()=>{
                if(this.$refs.movingTextWrapper.getBoundingClientRect().top <= 100){
                    this.fade = true
                }
            })
        },
    }
</script>

<style scoped> 
    .movingTextWrapper{
        position: absolute;
        text-align: center;
        font-size: 14px;
        letter-spacing: 5px;
        padding: 20px;
        transform: translate3d(-100px,0,0);
        top: 80px;
        right: 50px;

        transition-property: all;
        transition-duration: 0.6s;
        transition-timing-function: ease-in;
        opacity: 0;
    }

    @media screen and (max-width:768px) {
        .movingTextWrapper {
            font-size: 12px;
        }
    }

    .movingTextWrapperFade{
        transform: translate3d(0,0,0);
        opacity: 1;
    }
</style>