
<template>
    <div class="notFound"> 
        <div class="contentWrapper bouncingAnim">
            404 - Content Not Found
        </div>
    </div>
</template>

<scirpt>
    export default {

    }
</scirpt>

<style scoped>
    .notFound{
        position: relative;
        min-height: 100vh;
        background-color: rgba(0,0,0,0.6);
        font-family: 'Spectral', serif;
    }

    .contentWrapper{
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%,-50%);
        z-index: 2;
        display: grid;
        place-content: center;
        width: 40%;
        height: 30%;
        padding: 30px;
        font-size: xx-large;
        font-family: 'Dancing Script', cursive;
        background-color: black;
        color: whitesmoke;
        border-color: whitesmoke;
        border-style: solid;
        border-radius: 4px;
        border-width: 2px;
    }

    @keyframes bouncing{
        0%{
            transform: translate(-50%,-50%) translateY(-50px);
        }

        50%{
            transform: translate(-50%,-50%) translateY(0);
        }

        100%{
            transform: translate(-50%,-50%) translateY(-50px);
        }
    }

    .bouncingAnim{
        animation-name: bouncing;
        animation-duration: 2s;
        animation-delay: 0;
        animation-timing-function: ease-in;
        animation-iteration-count: infinite;
        animation-direction: normal;
        animation-fill-mode: none;
    }

</style>