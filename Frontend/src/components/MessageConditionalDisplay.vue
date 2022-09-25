<script>
import MassDisplayMessage from './MassDisplayMessage.vue'
  export default{
    /*
    {
      (all optional)
      comments: true,
      author: {
        is: 'address',
        isNot: 'address'
      },
      id: {
        is: 'id',
        isNot: 'id',
        greaterThan: idNumber,
        lessThan: idNumber
      }
    }
    */
    props: ['searchParams'],
    components: {
      MassDisplayMessage
     },
     
  }
</script>

<template>
  <MassDisplayMessage :datas=messages></MassDisplayMessage>
</template>
