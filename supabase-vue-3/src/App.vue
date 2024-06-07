<script setup>
import { onMounted, ref } from 'vue'
import Account from './components/Account.vue'
import SignUp from './components/SignUp.vue'
import { supabase } from './supabase'
import SignIn from './components/SignIn.vue';
import { RouterLink, RouterView, useRouter } from 'vue-router'
import router from './router/router';
import LoginPage from './views/LoginPage.vue';
import MainMenu from './views/MainMenu.vue';
import { profile } from './main';

const session = ref()


onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})

async function signout(){
  const {error} = await supabase.auth.signOut()
}

</script>

<template>
  <div v-if="session" :session="session" id="big">
    <div id="navbar">
      <div id="navigate">
    <RouterLink id="router" to="/">Home</RouterLink>
    <RouterLink id="router" to="/index">Index</RouterLink>
    <RouterLink id="router" to="/test">tesing</RouterLink>
    <RouterLink id="router" to="/gacha">pull</RouterLink>
    </div>
    <div id="money">
      <button @click="signout()">bye bye</button>
    </div>
    </div>
    <RouterView/>
  </div>
  <LoginPage v-else/>
</template>

<style scoped>
  .tabcontent {
    display: none;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
  }
 
#router{
  height: 100%;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: aliceblue;
  font-size: 25px;
}

#router:hover{
  background-color: #000000;
}

#navigate{
  display: flex;
  height: 100%;
}

  #navbar{
    display: flex;
    width: 100%;
    height: 75px;
    align-items: center;
    justify-content: space-between;
    background-color: #313131;
  }
</style>