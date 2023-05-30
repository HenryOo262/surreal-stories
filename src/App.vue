<script setup>
  import MainPage from './MainPage.vue';
  import StoryPage from './StoryPage.vue'
</script>

<template>
  <router-view />
</template>

<script>
  export default {
    components: { MainPage, StoryPage },
  }
</script>

<style>
.btn{
    position: absolute;
    top: 3%;
    left: 1%;
    z-index: 2;
    padding: 10px;
    font-family: monospace;
    font-weight: bolder;
    color: whitesmoke;
    background-color: rgba(0,0,0,0.8);
    border-color: whitesmoke;
    border-style: solid;
    border-width: 1px;
    border-radius: 4px;
}

.btn:hover{
    transform: scale(1.1);
}
</style>