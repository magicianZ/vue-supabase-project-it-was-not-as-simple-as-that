<template>
    <div>
        <button>pull1 </button>
        <button>pull 10</button>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';
    import { profile } from '../main';

  
   onMounted(()=>{
    console.log(profile)
   })

   
</script>

<style lang="scss" scoped>

</style>