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

function openCity(evt, target) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(target).style.display = "block";
  evt.currentTarget.className += " active";
}
</script>

<template>
  <div v-if="session" :session="session">
    <RouterLink to="/">pleaseman</RouterLink>
      <RouterLink to="/index">accoun</RouterLink>
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