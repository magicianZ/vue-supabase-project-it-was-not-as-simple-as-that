<script setup>
import { supabase } from '../supabase';
import {onMounted} from 'vue'
import { ref } from 'vue';

let characters = ref([])
let people = []
async function call(){
    const {data} = await supabase
    .from('characters')
    .select()

    characters = data
}



onMounted(()=>{
    call()
})

console.log(characters)


</script>

<template>
    hello
</template>