<script setup>
    const props = defineProps({
    Result:Object,
})
</script>

<template>
    <div id="card">
        <h3>{{ Result.name }}</h3>
        <img id="img" v-bind:src="Result.smallimg">
    </div>
</template>



<style scoped>
#card{
    width: 200px;
    height: 200px;
    background-color: #a0cec6;
    position: relative
}

#img{
    width: 100%;
    position: absolute;
}


</style>