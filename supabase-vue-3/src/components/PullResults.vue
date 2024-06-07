<script setup>
    const props = defineProps({
    Result:Object,
})
</script>

<template>
    <div id="card">
        <h3>{{ Result }}</h3>
        <img id="img" v-bind:src="Result.smallimg">
    </div>
</template>



<style scoped>
 #card{
    flex-direction: column;
    display: flex;
    position: relative;
    height: 100px;
    width: 100px;
    border: 10px;
    margin: 10px;
    border: 10px black;
 }


</style>