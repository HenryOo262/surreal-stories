<script setup>
    import TextWrapper from './components/textWrapper.vue';
    import MovingTextWrapper from './components/MovingTextWrapper.vue';
    import GridWrapper from './components/GridWrapper.vue';
    import ContentWrapper from './components/ContentWrapper.vue';
    import Card1 from './components/Cards/Card1.vue';
    import Card2 from './components/Cards/Card2.vue';
    import Card3 from './components/Cards/Card3.vue';
    import Modal from './components/Modal.vue';
    import { people } from './javascript/people'
</script>

<template>
    <div class="main">
        <button class="btn" @click="showModal=!showModal"> ? </button>
        <Modal v-if="showModal == true"/>
        <TextWrapper :text="header" :isHeader="passTrue" />
        <MovingTextWrapper :movingText="movingText" />
        <GridWrapper>
            <ContentWrapper>
                <router-link to="/story/1" class="routerLink">
                    <Card1 :image="peopleData[1].image" :text="peopleData[1].text" :name="peopleData[1].name" />
                </router-link>
                <router-link to="/story/0" class="routerLink">
                    <Card1 :image="peopleData[0].image" :text="peopleData[0].text" :name="peopleData[0].name" />
                </router-link>
            </ContentWrapper>
        </GridWrapper>
        <TextWrapper :text="article1" :isHeader="passFalse" />
        <GridWrapper>
            <ContentWrapper>
                <router-link to="/story/2" class="routerLink">
                    <Card2 :image="peopleData[2].image" :text="peopleData[2].text" :name="peopleData[2].name" />
                </router-link>
                <router-link to="/story/3" class="routerLink">
                    <Card2 :image="peopleData[3].image" :text="peopleData[3].text" :name="peopleData[3].name" />
                </router-link>
            </ContentWrapper>
        </GridWrapper>
        <TextWrapper :text="article2" :isHeader="passFalse"/>
        <GridWrapper>
            <ContentWrapper>
                <router-link to="/story/4" class="routerLink">
                    <Card3 :image="peopleData[4].image" :text="peopleData[4].text" :name="peopleData[4].name" />
                </router-link>
                <router-link to="/story/5" class="routerLink">
                    <Card3 :image="peopleData[5].image" :text="peopleData[5].text" :name="peopleData[5].name" />
                </router-link>
                </ContentWrapper>
        </GridWrapper>
    </div>
</template>

<script>
    export default {
        components: { 
            TextWrapper, MovingTextWrapper,
            GridWrapper, ContentWrapper, Card1, Card2, Card3, Modal
        },
        data(){
            return{
                passTrue: true,
                passFalse: false,
                showModal: false,
                header: 'Surreal Stories',
                movingText: 'She discovered the world where dreams defy gravity',
                article1: 'In a realm far beyond the boundaries, there existed a world unlike any other',
                article2: 'Where time ebbed and flowed in mesmerizing patterns, and the fabric of reality shimmered with infinite possibilities',
                peopleData: people,
            }
        },
        mounted(){
            console.log(this.peopleData[0])
        }
    }
</script>

<style scoped>
.main{
    min-height: 100vh;
    background-color: rgba(0,0,0,0.2);
    color: whitesmoke;
    font-family: 'Spectral', serif;
    padding: 10px;
  }

.routerLink{
    text-decoration: none; 
    color: whitesmoke;
}
</style>