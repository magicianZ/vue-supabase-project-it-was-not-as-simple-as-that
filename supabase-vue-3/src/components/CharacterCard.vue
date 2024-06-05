<script setup>
    const props = defineProps({
    Character:Object,
})
</script>

<template>
    <div>
        <h2>{{Character.name}}</h2>
        <img v-bind:src=Character.imgurl>
    </div>
    
</template>