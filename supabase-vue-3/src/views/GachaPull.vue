<template>
    <div id="among">
        <button>pull1 </button>
        <button @click="updateprofile(10)">pull 10</button>
        <h2 id="pity" v-for="data in profile" >{{data.pitycount}}</h2>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';
    import { profile } from '../main';
    import { supabase } from '../supabase';

  
   onMounted(()=>{
   })

   async function signout(){
    const { error } = await supabase.auth.signOut()
   }

   async function updateprofile(pull){
    
    let {data,error} = await supabase
    .from('profiles')
    .update({pitycount:profile[0].pitycount+pull})
    .eq('id', profile[0].id)
    .select()
    profile.length = 0
    data.forEach((i)=>{
        profile.push(i)
    })
    console.log(profile)
    document.querySelector('#pity').remove()
    document.querySelector('#among').insertAdjacentHTML(
        "beforeend",
        `<h2 id="pity" v-for="data in profile">{{data.pitycount}}</h2>`
    )
}

   
</script>

<style lang="scss" scoped>

</style>