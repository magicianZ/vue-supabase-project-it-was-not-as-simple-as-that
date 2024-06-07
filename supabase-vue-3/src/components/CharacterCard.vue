<script setup>
    const props = defineProps({
    Character:Object,
})
</script>

<template>
    <div id="card">
        <img id="img" v-bind:src=Character.imgurl>
        <h2 id="text">{{Character.name}}</h2>
    </div>
    
</template>

<style scoped>
    #card{
        display:flex;
        flex-direction: column;
        background-color: #858585;
        height: 350px;
        width: 200px;
        margin: 10px;
        justify-self: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    #text{
        color: black;
        z-index: 1;
    }

    #img{
        height:100%;
        position: absolute;

    }
</style>