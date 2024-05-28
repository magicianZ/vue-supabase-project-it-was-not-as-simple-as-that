<script setup>
import { onMounted, ref } from 'vue'
import Account from './components/Account.vue'
import SignUp from './components/SignUp.vue'
import { supabase } from './supabase'
import SignIn from './components/SignIn.vue';
import { RouterLink, RouterView } from 'vue-router'

const session = ref()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })

  document.getElementById("defaultopen").click();
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
  <div class="container" style="padding: 50px 0 100px 0">
    <Account v-if="session" :session="session" />
    <div v-else>
      <div class="tab">
      <button class="tablinks" id="defaultopen" @click="openCity(event, 'signin')">Sign In</button>
      <button class="tablinks" @click="openCity(event, 'signup')">Sign Up</button>
    </div>
      <div id="signin" class="tabcontent">
        <SignIn/>
      </div>

      <div id="signup" class="tabcontent">
        <SignUp/>
      </div>
    </div>
    
  


<!-- Tab content -->

  </div>
</template>

<style scoped>
  .tabcontent {
    display: none;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
  }
</style>