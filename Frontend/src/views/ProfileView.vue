<script setup>
import ProfilePage from '../components/ProfilePage.vue'
</script>

<template>
  <main>
    <ProfilePage :address="this.$route.params" />
  </main>
</template>
