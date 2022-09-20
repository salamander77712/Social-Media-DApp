<script setup>
  import MessageDisplay from './MessageDisplay.vue'
</script>
<script>
  export default {
    data() {
      return {
        messages: [],
      }
    },
    methods: {
      async getMessages(){
        let temp;
        if (contract == undefined) {
          window.web3 = new Web3(window.ethereum);
          contract = new web3.eth.Contract(contractData.abi, contractAddress);
        }
        await contract.getPastEvents("MessageCreated", {fromBlock: 0, toBlock:"latest"}).then(function(events){
          temp = events;
        });
        this.messages=temp;
      }
    },
    created(){
      this.getMessages();
    }
  }
  </script>
  
  <template>
    <div class="messageContainer" v-for="message in messages">
      <MessageDisplay :event="message"></MessageDisplay>
    </div>
  </template>
  
  <style scoped>
  
  </style>