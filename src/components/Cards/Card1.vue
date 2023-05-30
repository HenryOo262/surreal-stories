
<!-- Reusable Card -->
<!-- Contains Image that moves 50px to the left when card is hovered -->

<template>
    <div class="card1" @mouseover="takeEffect()" @mouseleave="takeEffect()">
        <img class="image1" :class="{image1Effect:effect}" :src="getImageURL" :alt="getImageURL">
        <span class="name1" :class="{name1Effect:effect}"> 
            {{ updatedName[0] }} 
            <span style="font-weight: bolder;"> 
                {{ updatedName[1] }} 
            </span> 
        </span>
        <span class="text1" :class="{text1Effect:effect}"> {{ text }} </span>
        <div class="child1" :class="{child1Effect:effect}" />
    </div>
</template>

<script>
    export default {
        props: [ 'image', 'name', 'text' ],
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
            },
        },
        mounted(){
            this.updateName()
        }
    }
</script>

<style scoped>
    .card1{
        position: relative;
        width: 500px;
        height: 500px;
        overflow: hidden;
        border-radius: 4px;
        background-color: white;
    }

    .image1{
        width: calc(100% + 50px);
        height: 100%;
        object-fit: cover;
        object-position: center;
        transition-property: transform;
    }

    .image1Effect{
        transform: translate(-50px,0);
    }

    .child1{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%) rotateY(0) rotate(45deg);
        z-index: 2;
        width: 0%;
        height: 0%;
        opacity: 0;
        border-style: solid;
        border-color: whitesmoke;
        border-width: 3px;
        transition-property: width, height, opacity;
    }

    .child1Effect {
        width: 40%;
        height: 40%;
        opacity: 1;
    }

    .name1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 2;
        opacity: 1;
        text-align: center;
        font-size: xx-large;
        transition-property: opacity;
    }

    .name1Effect{
        opacity: 0;
    }

    .text1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 2;
        opacity: 0;
        text-align: center;
        font-size: small;
        transition-property: opacity;
    }

    .text1Effect{
        opacity: 1;
    }

    .image1, .child1, .name1, .text1 {
        transition-duration: 0.4s;
        transition-timing-function: ease-in;
        pointer-events: none;
    }
</style>
