<script>
import MessageDisplay from './MessageDisplay.vue'
  export default{
    props: ['datas'],
    components: {
      MessageDisplay
    }
  }
</script>

<template>
  <div v-for="data in datas">
    <MessageDisplay :event=data></MessageDisplay>
  </div>
</template>
