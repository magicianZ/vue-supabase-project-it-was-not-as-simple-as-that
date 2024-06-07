<template>
    <div id="among">
        <button @click="wishcharacter(1)">pull1 </button>
        <button @click="wishcharacter(10)">pull 10</button>
        <h2 id="pity" v-for="data in profile" :key="forceupdate">{{data.pitycountfive}}</h2>
        <h2 id="pity" v-for="data in profile" :key="forceupdate">{{data.pitycountfour}}</h2>
    </div>
    <div v-if="on" id="results">
        <PullResults v-for="entry in pullresult" :Result="entry"/>
        <button v-on:click="hide()">Close</button>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';
    import { profile,characterfive,fourstar,threestar } from '../main';
    import { supabase } from '../supabase';
    import { ref } from 'vue';
    import PullResults from '../components/PullResults.vue'

    const on=ref(false)
    onMounted(()=>{
    console.log(threestar.fourstar,characterfive)
   })

   const forceupdate=ref(0)
   async function signout(){
    const { error } = await supabase.auth.signOut()
   }

async function updatepity(five,four){
    let {data,error} = await supabase
    .from('profiles')
    .update({pitycountfour:four, pitycountfive:five})
    .eq('id',profile[0].id)
    .select()
    profile.length = 0
    data.forEach((i)=>{
        profile.push(i)
    })
    console.log(profile)
    forceupdate.value += 1
}



function hide(){
    on.value=false
    console.log('why')
}

let pullresult = []
function wishcharacter(amount){
    pullresult.length=0 
    let pityfive = profile[0].pitycountfive
    let pityfour = profile[0].pitycountfour
    for(let i=0 ; i<amount ; i++){
        let result = Math.floor(Math.random() * 199) + 1;
        if(pityfive === 79){
        drawfivecharacter()
        pityfive=0
        pityfour = pityfour+1
        }else if(pityfour === 9){
        drawfour()
        pityfour = 0
        pityfive = pityfive+1
        }else if(result === 1){
        drawfivecharacter()
        pityfive=0
        pityfour=pityfour+1
        }else if(result>1 && result<16){
        drawfour()
        pityfive=pityfive+1
        pityfour=0
        }else{
        drawthree()
        pityfive = pityfive+1
        pityfour = pityfour+1
        }
    }
    updatepity(pityfive,pityfour)
    on.value=true
    console.log(pullresult)
}

function drawfour(){
    let random=Math.floor(Math.random() * fourstar[0].length);
    pullresult.push(fourstar[0][random])

}

function drawfivecharacter(){
    let random=Math.floor(Math.random() * characterfive[0].length);
    pullresult.push(characterfive[0][random])

}

function drawthree(){
    let random=Math.floor(Math.random() * threestar[0].length);
    pullresult.push(threestar[0][random])
}


   
</script>

<style scoped>
 #results{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 220px;
 }
</style>