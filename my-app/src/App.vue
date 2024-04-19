<template>
  <form>
<label for="fname">Email:</label><br>
<input type="text" id="email" name="fname"><br>
<label for="lname">Password</label><br>
<input type="text" id="pass" name="lname"><br>

</form>
<button @click="signUpNewUser()">sighin</button>


</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

async function signUpNewUser() {
  const { data, error } = await supabase.auth.signUp({
    email: document.querySelector('#email').value,
    password: document.querySelector('#pass').value,
    options: {
      emailRedirectTo: 'www.google.com',
    },
  })
}

async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'example@email.com',
    password: 'example-password',
  })
}

function gyat(){
  console.log(document.querySelector('#fname').value)
  
}
</script>