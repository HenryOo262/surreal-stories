
<!-- This component is wrapped around the text to center them -->
<!-- Two versions - xxlarge font and medium font versions -->

<template>
    <div class="textWrapper" :class="{header: isHeader, article: !isHeader}">
        <span>
            {{ text }}
        </span>
    </div>
</template>

<script>
    export default {
        props: ['text', 'isHeader'],
    }
</script>

<style scoped>
    .textWrapper{
        text-align: center;
        position: relative;
        padding: 20px;
    }
    .header{
        font-size: xx-large;
        letter-spacing: 8px;
    }
    .article{
        font-size: medium;
        letter-spacing: normal;
    }
</style>