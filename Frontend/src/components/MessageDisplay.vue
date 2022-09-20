<script>
  export default {
    props: ['event'],
    data() {
      return {
        username: '',
        tips: 0,
        tipAmount: '',
        deleted: false,
        account: undefined,
        editText: ''
      }
    },
    methods: {
      async getUsername(){
        let temp;
        await contract.getPastEvents("NewUsername", {fromBlock: 0, toBlock:"latest"}).then((events) =>{
          temp = events;
          for(let i = temp.length - 1; i >= 0; i--){
          if(temp[i].returnValues.user.toUpperCase() == this.event.returnValues.author.toUpperCase()){
            this.username = temp[i].returnValues.name;
            return;
          }
        }
        this.username = this.address.address;
        });
      },
      async getTips(){
        let temp;
        await contract.getPastEvents("MessageTipped", {fromBlock: 0, toBlock:"latest"}).then((events) =>{
          temp = events;
          for(let i = 0; i < temp.length; i++){
          if(temp[i].returnValues.author.toUpperCase() == this.event.returnValues.author.toUpperCase()){
            if(temp[i].returnValues.messageID == this.event.returnValues.id){
              this.tips += Number(temp[i].returnValues.tipAmount);
            }
          }
        }
        });
      },
      async tip(){
        contract.methods.tipMessage(this.event.returnValues.author, this.event.returnValues.id).send({ from: this.account, value: this.tipAmount});
      },
      goToAuthor(){
        this.$router.push('/u/' + this.event.returnValues.author);
      },
      async deleteMessage(){
        contract.methods.deleteMessage(this.event.returnValues.id).send({ from: this.account});
      },
      async checkDeleted(){
        let temp;
        await contract.getPastEvents("MessageDeleted", {fromBlock: 0, toBlock:"latest"}).then((events) =>{
          temp = events;
          for(let i = 0; i < temp.length; i++){
          if(temp[i].returnValues.author.toUpperCase() == this.event.returnValues.author.toUpperCase()){
            if(temp[i].returnValues.id == this.event.returnValues.id){
              this.deleted = !this.deleted;
            }
          }
        }
        });
      },
      async getLatestEdit(){
        let temp;
        await contract.getPastEvents("MessageEdited", {fromBlock: 0, toBlock:"latest"}).then((events) =>{
          temp = events;
          for(let i = temp.length - 1; i >= 0; i--){
          if(temp[i].returnValues.author.toUpperCase() == this.event.returnValues.author.toUpperCase()){
            if(temp[i].returnValues.id == this.event.returnValues.id){
              this.event.returnValues.content = temp[i].returnValues.newContent;
            }
          }
        }
        });
      },
      async getAccount(){
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        this.account = accounts[0];
      },
      async editMessage(){
        contract.methods.editMessage(this.event.returnValues.id, this.editText).send({ from: this.account});
      }
    },
    computed:{
      isUser(){
        if(this.account == undefined){
          return false;
        }
        return (this.account.toUpperCase() == this.event.returnValues.author.toUpperCase());
      },
      deletedCSS(){
        if(this.deleted){
          return 'deleted';
        }
        else{
          return '';
        }
      },
      deleteButtonText(){
        if(this.deleted){
          return 'Restore';
        }
        else{
          return 'Delete';
        }
      }
    },
      created(){
      this.getUsername();
      this.getTips();
      this.checkDeleted();
      this.getAccount();
      this.getLatestEdit();
    }
    }
  </script>
  
  <template>
    <div class="container" v-if="!deleted || isUser">
      <h2 class="username" :class="deletedCSS">{{username}}</h2>
      <a @click="goToAuthor" :class="deletedCSS">@{{event.returnValues.author}}</a>
      <p class="messageID" :class="deletedCSS">{{event.returnValues.id}}</p>
      <p class="tips" :class="deletedCSS">Tips: {{tips}}</p>
      <p class="content" :class="deletedCSS">{{event.returnValues.content}}</p>
      <div class="buttons">
        <input type="number" v-model="tipAmount"/>
        <button @click="tip">Tip</button>
        <br>
        <button @click="$router.push('/u/' + event.returnValues.author + '/p/' + event.returnValues.id)">View Comments</button>
        <button v-if="isUser" @click="deleteMessage">{{deleteButtonText}}</button>
        <br v-if="isUser">
        <input type="text" v-model="editText" v-if="isUser">
        <button @click="editMessage" v-if="isUser">Edit</button>
      </div>
    </div>
  </template>
  
  <style scoped>
    .container{
      background-color : lightslategrey;
      float: left;
      padding-left: 10px;
      padding-right: 10px;
    }
    .username{
      text-align: center;
    }
    .content{
      text-align: center;
    }
    a{
      text-decoration: underline;
      cursor: pointer;
    }
    .deleted{
      text-decoration: line-through;
    }
  </style>