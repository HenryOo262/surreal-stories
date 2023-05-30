
<!-- This comment is flex box which wraps around the GridWrapper -->
<!-- Can also be used for other components -->

<template>
    <div class="gridWrapper">
        <slot />
    </div>
</template>

<script>
    export default { }
</script>

<style scoped>
    .gridWrapper{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 50px;
    }
</style>