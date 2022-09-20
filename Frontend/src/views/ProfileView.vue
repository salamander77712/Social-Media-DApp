<script setup>
import ProfilePage from '../components/ProfilePage.vue'
</script>

<template>
  <main>
    <ProfilePage :address="$route.params" />
  </main>
</template>
