<script setup>
import Account from '../components/Account.vue';
import { supabase } from '../supabase'
import { RouterLink, RouterView } from 'vue-router'



</script>

<template>
     <div>
     <RouterLink to="/">Menu</RouterLink>
     </div>

<RouterView/>
</template>