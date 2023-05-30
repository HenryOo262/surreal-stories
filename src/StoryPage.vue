
<script setup>
    import { people } from './javascript/people'
    import { stories } from './javascript/stories'
</script>

<template>
    <button class="btn" @click="turnoffAnimation()"> Off </button>
    <div class="story">
        <div class="textWrapper">
            <header class="headerWrapper"> 
                {{ updatedPeopleData[0] }} 
                <span style="font-weight: bolder;">
                    {{ updatedPeopleData[1] }}
                </span>
            </header>
            <article v-if="animation == true" class="articleWrapper"> </article>
            <div class="articleWrapper">
                <article v-if="animation == false" v-for="item in updatedStoriesData">
                    {{ item }} <br> <br>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                animation: false,
                peopleData: people,
                storiesData: stories,
                updatedStoriesData: [],
                updatedPeopleData: []
            }
        },
        methods: {
            updateData(){
                // Split String into Paragraphs
                var temp = this.storiesData[this.$route.params.id]
                this.updatedStoriesData = temp.split('\n')
                // Split Adj and Name
                temp = this.peopleData[this.$route.params.id].name
                this.updatedPeopleData = temp.split(' ')
            },
            async animate(){
                // query Selector for articleBox 
                var article = document.querySelector('.articleWrapper')
                // loop each paragraph
                for(var i=0; i<this.updatedStoriesData.length; i++){
                    // each word of paragraph into charArray temp
                    var temp = Array.from(this.updatedStoriesData[i])
                    // loop each word of a paragraph
                    for(var j=0; j<temp.length; j++){
                        // wait for a promise resolve before appending each word
                        await new Promise((resolve,reject)=>{
                            setTimeout(resolve,1)
                        })
                        // promise returns and appends a word
                        article.innerHTML += temp[j]
                    }
                    // appending br after each paragraph
                    article.appendChild(document.createElement('br'))
                    article.appendChild(document.createElement('br'))
                }
            },
            turnoffAnimation(){
                if(this.animation){
                    this.animation = false
                }else{
                    alert('animation already turned off')
                }
            }
        },
        created(){
            this.animation = true
        },
        mounted(){
            this.updateData()
            if(this.animation){
                this.animate()
            }
        },
    }
</script>

<style scoped>
.story{
    position: relative;
    display: grid;
    place-items: center;
    min-height: 100vh;
    font-family: 'Spectral', serif;
    background-color: rgba(0,0,0,0.2);
    color: whitesmoke;
    padding: 10px;
}

.textWrapper{
    height: 100%;
    width: 80%;
    padding: 40px;
    background-color: rgba(0,0,0,0.8);
    border-color: whitesmoke;
    border-style: solid;
    border-width: 1.5px;
    border-radius: 4px;
}

.headerWrapper{
    font-family: 'Dancing Script', cursive;
    font-size: xx-large;
    letter-spacing: 8px;
    text-align: center;
    margin-bottom: 50px;
}

.articleWrapper{
    font-size: large;
    letter-spacing: 3px;
}

.articleWrapper::first-letter{
    font-size: xx-large;
    font-family: 'Dancing Script', cursive;
}
</style>