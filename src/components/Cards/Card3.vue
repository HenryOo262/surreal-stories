
<template>
    <div class="card3" @mouseover="takeEffect()" @mouseleave="takeEffect()">
        <img class="image3" :class={image3Effect:effect} :src="getImageURL" :alt="getImageURL">
        <div class="colorBox3" :class="{colorBox3Effect:effect}"> </div>
        <div class="contentWrapper3"> 
            <div class="name3">
                <span> 
                    {{ updatedName[0] }}
                    <span style="font-weight: bolder;">
                        {{ updatedName[1] }}
                    </span>
                </span>
            </div>
            <div class="text3Wrapper">
                <span class="text3 text3A" :class="{text3Effect:effect}"> 
                    {{ updatedText[0] }} 
                </span>
                <span class="text3 text3B" :class="{text3Effect:effect}"> 
                    {{ updatedText[1] }} 
                </span>
                <span class="text3 text3C" :class="{text3Effect:effect}"> 
                    {{ updatedText[2] }} 
                </span>
            </div>
        </div>
    </div>
</template>

<script> 
    export default {
        props: [ 'name','text','image' ],
        data(){
            return{
                effect: false,
                updatedName: [],
                updatedText: [],
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
            updateText(){
                var temp = this.text
                this.updatedText = temp.split(', ')
            }
        },
        computed: {
            getImageURL(){
                return new URL(`../../assets/images/${this.image}`,
                import.meta.url)
            }
        },
        mounted(){
            this.updateName()
            this.updateText()
        }
    }
</script>   

<style scoped>
    .card3{
        position: relative;
        width: 500px;
        height: 500px;
        overflow: hidden;
        background-color: white;
    }

    .image3{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .image3Effect{
        transform: scale(1.1);
    }

    .colorBox3{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        background-color: rgba(0,0,0,0.4);
        transition-property: opacity;
    }

    .colorBox3Effect{
        opacity: 1;
    }

    .contentWrapper3{
        position: absolute;
        top: 20%;
        left: 5%;
        display: grid;
        grid-template-rows: 1fr 2fr;
        gap: 10px;
        padding: 5px;
        z-index: 2;
        pointer-events: none;
    }

    .name3{
        z-index: 2;
        font-size: xx-large;
    }

    .text3Wrapper{
        display: flex; 
        flex-direction: column; 
        justify-content: center;
        pointer-events: none;
    }

    .text3{
        z-index: 2;
        position: relative;
        background-color: rgba(255,255,255,0.8);
        color: rgba(0,0,0,1);
        font-size: medium;
        width: fit-content;
        padding: 5px;
        margin: 5px;
        opacity: 0;
        transform: translate(-40px,0);
        transition-property: opacity, transform;
    }

    .text3A{
        transition-duration: 0.2s;
        transition-timing-function: ease-in;
    }

    .text3B{
        transition-duration: 0.3s;
        transition-timing-function: ease-in;
    }

    .text3C{
        transition-duration: 0.4s;
        transition-timing-function: ease-in;
    }

    .text3Effect{
        opacity: 1;
        transform: translate(0,0);
    }
    
    .image3, .name3, .colorBox3{
        pointer-events: none;
        transition-duration: 0.4s;
        transition-timing-function: ease-in;
    }
    
</style>