<script setup>
  import MessageDisplay from './MessageDisplay.vue'
</script>
<script>
  export default {
    props: ['address'],
    data() {
      return {
        messages: [],
        newUsername: '',
        username: ''
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
        for(let i = 0; i < temp.length; i++){
          if(temp[i].returnValues.author.toUpperCase() == this.address.address.toUpperCase()){
            this.messages.push(temp[i]);
          }
        }
      },
      changeUsername(){
        contract.methods.changeUsername(this.newUsername).send({ from: account, value: 100})
      },
      async getUsername(){
        let temp;
        await contract.getPastEvents("NewUsername", {fromBlock: 0, toBlock:"latest"}).then(function(events){
          temp = events;
        });
        for(let i = temp.length - 1; i >= 0; i--){
          if(temp[i].returnValues.user.toUpperCase() == this.address.address.toUpperCase()){
            this.username = temp[i].returnValues.name;
            return;
          }
        }
        this.username = this.address.address;
      }
    },
    computed:{
      isUser(){
        if(account == undefined){
          return false;
        }
        return (account.toUpperCase() == this.address.address.toUpperCase());
      }
    },
    created(){
      this.getMessages();
      this.getUsername();
    }
  }
  </script>
  
  <template>
    <h1>{{username}}</h1>
    <h2>@{{address.address}}</h2>
    <input type="text" v-model="newUsername" />
    <button @click="changeUsername" v-if="isUser">Change Username</button>
    <div class="messageContainer" v-for="message in messages">
      <MessageDisplay :event="message"></MessageDisplay>
    </div>
  </template>
  
  <style scoped>
  
  </style>