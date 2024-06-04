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
    <div id="flexbox">
    <CharacterCard v-for="item in characters" :key="item.name" :Character="item"/>
    </div>
</template>

<style scoped>
#flexbox{
    display: flex;
    justify-content: right;
    align-items: center;
}

</style>