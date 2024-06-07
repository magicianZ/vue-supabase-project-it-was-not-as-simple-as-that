import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import { supabase } from './supabase'


createApp(App)
.use(router)
.mount('#app')

export const characters = []
export const weapons = []
export const characterfive = []
export const weaponfive = []
export const fourstar = []
export const threestar = []
export let profile = []

async function callcharacter(){
    let {data} = await supabase
  .from('characters')  
    .select()

    data.forEach((i)=>{
        characters.push(i)
    })
    characterfive.push(data.filter((i)=> i.rarity === 5))
    fourstar.push(data.filter((i)=> i.rarity === 4))
}

async function callweapon(){
    let {data} = await supabase
    .from('weapons')  
    .select()

    console.log(data)
    data.forEach((i)=>{
        console.log(i)
        weapons.push(i)
    })
    weaponfive.push(data.filter((i)=> i.rarity === 5))
    fourstar.push(data.filter((i)=> i.rarity === 4))
    threestar.push(data.filter((i)=> i.rarity === 3))
}

async function grabprofile(){
    profile = []
    let {data} = await supabase
    .from('profiles')  
    .select()
    data.forEach((i)=>{
        profile.push(i)
    })
}

callweapon()
callcharacter()
grabprofile()



