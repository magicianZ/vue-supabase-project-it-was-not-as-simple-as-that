<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'

const loading = ref(false)
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    })
    if (error) throw error
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false
  }
}

</script>

<template>
    <form class="row flex-center flex" @submit.prevent="handleLogin">
      <div class="col-6 form-widget">
        <h1 class="header">Supabase + Vue 3</h1>
        <p class="description">Sign up</p>
        <div>
          <input class="inputField" required type="email" placeholder="Your email" v-model="email" />
          <input class="inputField" required type="password" placeholder="Password" v-model="password" />
          <div>
            <input id="remember" name="remember" type="checkbox" onclick="validate()" />
            <div id="terms"><p>By checking this box, I agree to the </p><a target="_blank" href="https://en.wikipedia.org/wiki/Terms_and_Conditions_May_Apply">Terms and Conditions</a></div>
          </div>
          
        </div>
        <div>
          <input
            type="submit"
            class="button block"
            :value="loading ? 'Loading' : 'Send magic link'"
            :disabled="loading"
          />
        </div>
      </div>
    </form>
  </template>

<style scoped>
 #terms{
  display: flex;
 }
</style>