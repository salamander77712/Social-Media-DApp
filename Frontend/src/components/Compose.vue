<script>
  export default {
    data() {
      return {
        message: ''
      }
    },
    methods: {
      async writeMessage(){
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        contract.methods.createMessage(this.message).send({ from: account});
      }
    }
  }
  </script>
  
  <template>
    <h1>Write A New Message</h1>
    <input type="text" v-model="message">
    <button @click="writeMessage">Write</button>
  </template>
  
  <style scoped>
  
  </style>