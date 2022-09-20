<script>
  export default {
    props: ['event'],
    data() {
      return {
        username: '',
        tips: 0,
        tipAmount: ''
      }
    },
    methods: {
      async getUsername(){
        let temp;
        await contract.getPastEvents("NewUsername", {fromBlock: 0, toBlock:"latest"}).then(function(events){
          temp = events;
        });
        for(let i = temp.length - 1; i >= 0; i--){
          if(temp[i].returnValues.user.toUpperCase() == this.event.returnValues.author.toUpperCase()){
            this.username = temp[i].returnValues.name;
            return;
          }
        }
        this.username = this.address.address;
      },
      async getTips(){
        let temp;
        await contract.getPastEvents("MessageTipped", {fromBlock: 0, toBlock:"latest"}).then(function(events){
          temp = events;
        });
        for(let i = 0; i < temp.length; i++){
          if(temp[i].returnValues.author.toUpperCase() == this.event.returnValues.author.toUpperCase()){
            if(temp[i].returnValues.messageID == this.event.returnValues.id){
              this.tips += Number(temp[i].returnValues.tipAmount);
            }
          }
        }
      },
      async tip(){
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        contract.methods.tipMessage(this.event.returnValues.author, this.event.returnValues.id).send({ from: account, value: this.tipAmount});
      },
      goToAuthor(){
        this.$router.push('/u/' + this.event.returnValues.author);
      }
    },
      created(){
      this.getUsername();
      this.getTips();
    }
    }
  </script>
  
  <template>
    <div class="container">
      <h2 class="username">{{username}}</h2>
      <a @click="goToAuthor">@{{event.returnValues.author}}</a>
      <p class="messageID">{{event.returnValues.id}}</p>
      <p class="tips">Tips: {{tips}}</p>
      <p class="content">{{event.returnValues.content}}</p>
      <div class="buttons">
        <input type="number" v-model="tipAmount"/>
        <button @click="tip">Tip</button>
        <br>
        <button @click="$router.push('/u/' + event.returnValues.author + '/p/' + event.returnValues.id)">View Comments</button>
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
  </style>