
<!-- Contains Image that scales out 1.2 -->

<template>
    <div class="card2" @mouseover="takeEffect()" @mouseleave="takeEffect()">
        <img class="image2" :class={image2Effect:effect} :src="getImageURL" :alt="getImageURL">
        <span class="text2" :class="{text2Effect:effect}"> 
            {{ text }} 
        </span> 
        <span class="name2" :class="{name2Effect:effect}"> 
            {{ updatedName[0] }}
            <span style="font-weight: bolder;">
                {{ updatedName[1] }}
            </span>
        </span>
        <div class="colorBox2" :class="{colorBox2Effect:effect}" />
        <div class="child2" :class="{child2Left:effect}" />
        <div class="child2" :class="{child2Right:effect}" />
    </div>
</template>

<script>
    export default {
        props: ['name', 'text', 'image'],
        data(){
            return{
                effect: false,
                updatedName: []
            }
        },
        methods: {
            takeEffect(){
                this.effect = !this.effect
            },
            updateName(){
                var temp = this.name
                this.updatedName = temp.split(' ')
            },
        },
        computed: {
            getImageURL(){
                return new URL(`../../assets/images/${this.image}`,
                import.meta.url)
            }
        },
       mounted(){
            this.updateName()
       }
    }
</script>

<style scoped>
    .card2{
        position: relative;
        width: 500px;
        height: 500px;
        overflow: hidden;
        border-radius: 4px;
        background-color: white;
    }

    .image2{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transform: scale(1.2);
        transition-property: transform;
    }

    .image2Effect{
        transform: scale(1);
    }

    .name2{
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 2;
        text-align: center;
        font-size: xx-large;
        transition-property: all;
        width: 100%;
    }

    .name2Effect{
        top: 45%;
    }

    .text2{
        position: absolute;
        top: 65%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 2;
        text-align: center;
        font-size: medium;
        transition-property: all;
    }

    .text2Effect{
        top: 60%;
    }

    .colorBox2{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(100, 149, 237, 0.4);
        opacity: 0;
        transition-property: opacity;
    }

    .colorBox2Effect{
        opacity: 1;
    }

    .child2{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 70%;
        height: 1px;
        background-color: whitesmoke;
        border-color: whitesmoke;
        border-style: solid;
        border-width: 1px;
        transition-property: transform;
    }

    .child2Left{
        transform: translate(-50%,-50%) rotateY(0) rotate(-45deg)
    }

    .child2Right{
        transform: translate(-50%,-50%) rotateY(0) rotate(45deg)
    }

    .image2, .child2, .name2, .text2, .colorBox2 {
        transition-duration: 0.4s;
        transition-timing-function: ease-in;
        pointer-events: none;
    }

</style>