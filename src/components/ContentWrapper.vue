
<!-- This component is the grid of 2 columns, used to wrap the cards -->
<!-- This component is usually wrapped by the GridWrapper -->

<template>
    <div class="contentWrapper">
        <slot/>
    </div>
</template>

<script>
    export default { }
</script>

<style scoped>
    .contentWrapper{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        align-items: center;
        place-items: center;
        gap: 50px;
    }
</style>