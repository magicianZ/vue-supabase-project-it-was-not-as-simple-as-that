<script setup>
import { supabase } from '../supabase';
import {onMounted} from 'vue'
import CharacterCard from '../components/CharacterCard.vue';
import {characters} from '../main.js'
import Account from '../components/Account.vue';



onMounted(()=>{
    console.log(characters)
})




</script>

<template>
    <p>I odnt know why its sortesd like this man</p>
    <div id="flexbox">
        
        <CharacterCard v-for="item in characters" :key="item.name" :Character="item"/>
    </div>
</template>

<style scoped>
#flexbox{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
}

</style>