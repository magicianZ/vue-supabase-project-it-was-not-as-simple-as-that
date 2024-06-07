<script setup>
    import { onMounted } from 'vue';
    import { profile,characterfive,fourstar,threestar } from '../main';
    import { supabase } from '../supabase';
    import { ref } from 'vue';

    const update=ref(0)
    async function cash(){
    let add = profile[0].apologems+1600
    let {data,error} = await supabase
    .from('profiles')
    .update({apologems:add})
    .eq('id',profile[0].id)
    .select()
    profile.length = 0
    data.forEach((i)=>{
        profile.push(i)
    })
    update.value += 1
    console.log(profile)
    }

    async function callweapon(){
    let {data} = await supabase
    .from('weapons')  
    .select()

    console.log(data)
}
</script>

<template>
    <h1>i got really lazy click the button to get money</h1>
    <h3 v-for="thing in profile" :key="update">Your cash = {{ thing.apologems }}</h3>
<button @click="cash()">
    get cash
</button>
<button @click="callweapon">test</button>
</template>