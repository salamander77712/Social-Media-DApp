<script>
  export default {
    data() {
      return {
      }
    },
    created(){
      if (typeof window.ethereum !== 'undefined') {
      this.$router.push('/connect');
      }
      else{
        this.$router.push('/meta-mask-qa');
      }
    }
  }
  </script>
  
  <template>
  </template>
  
  <style scoped>
  
  </style>