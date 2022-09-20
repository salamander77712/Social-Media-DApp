<script setup>
import MessageDisplayFull from '../components/MessageDisplayFull.vue'
</script>
<script>
  export default{
    created(){
      //console.log(this.$route.params.address);
    }
  }
</script>

<template>
  <main>
    <MessageDisplayFull :author="this.$route.params.address" :id="this.$route.params.id" />
  </main>
</template>
