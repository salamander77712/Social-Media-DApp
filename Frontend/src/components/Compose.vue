<script>
  export default {
    data() {
      return {
        message: '',
        account: account //WHY
      }
    },
    methods: {
      async writeMessage(){
        contract.methods.createMessage(this.message).send({ from: account});
      }
    }
  }
  </script>
  
  <template>
    <div v-if="account != undefined">
      <h1>Write A New Message</h1>
      <input type="text" v-model="message">
      <button @click="writeMessage">Write</button>
    </div>
    <div v-if="account == undefined">
      <h1>You must be logged in to post a message</h1>
      <h2>You can click <a @click="$router.push('/check')">here</a> to login</h2>
    </div>
  </template>
  
  <style scoped>
    a{
      text-decoration: underline;
      cursor: pointer;
    }
  </style>