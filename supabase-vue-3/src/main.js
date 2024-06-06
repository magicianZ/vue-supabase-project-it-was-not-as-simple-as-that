import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import { supabase } from './supabase'


createApp(App)
.use(router)
.mount('#app')

export const characters = []
let people = []
async function call(){
    let {data} = await supabase
  .from('characters')  
    .select()

    data.forEach((i)=>{
        characters.push(i)
    })
}


call()
console.log(characters)

export let profile = []
async function grabprofile(){
    profile = []
    let {data} = await supabase
    .from('profiles')  
    .select()
    data.forEach((i)=>{
        profile.push(i)
    })
}



grabprofile()

