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
          if(window.ethereum != undefined){
            window.web3 = new Web3(window.ethereum);
          }
          else{
            window.web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/3500b93fc44b48c58086a2fedeb8fc2e'));
          }
          contract = new web3.eth.Contract(contractData.abi, contractAddress);
          await contract.getPastEvents("MessageCreated", {fromBlock: 0, toBlock:"latest"}).then(function(events){
          temp = events;
        });
        this.messages=temp;
        }
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