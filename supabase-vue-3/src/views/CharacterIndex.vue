<script setup>
import { supabase } from '../supabase';
import {onMounted} from 'vue'


let data = []
async function call(){
    const {data} = await supabase
    .from('characters')
    .select()

    data = data
}

onMounted(()=>{
    call()
})

console.log(data[0])
</script>

<template>
    hello
</template>