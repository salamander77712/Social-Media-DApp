<script setup>
  import MessageDisplay from './MessageDisplay.vue'
</script>
<script>
  export default {
    props: ['address'],
    data() {
      return {
        messages: []
      }
    },
    methods: {
      async getMessages(){
        var temp;
        await contract.getPastEvents("MessageCreated", {fromBlock: 0, toBlock:"latest"}).then(function(events){
          temp = events;
        });
        this.messages = temp;
        console.log(this,messages);
      }
    },
    created(){
      this.getMessages();
    }
  }
  </script>
  
  <template>
    <h1>NOUSERNAME</h1>
    <h2>@{{address.address}}</h2>
    <button @click="this.$router.push('/compose');">Write New Message</button>
    <div class="messageContainer" v-for="message in messages">
      <MessageDisplay :event="message"></MessageDisplay>
    </div>
  </template>
  
  <style scoped>
  
  </style>