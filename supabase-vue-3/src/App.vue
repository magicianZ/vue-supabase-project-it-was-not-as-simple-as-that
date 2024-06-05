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

const session = ref()


onMounted(() => {

  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = session
  })

})

</script>

<template>
  <div v-if="session" :session="session">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/index">Index</RouterLink>
    <RouterLink to="/test">tesing</RouterLink>
    <RouterLink to="/gacha">pull</RouterLink>
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
</style>