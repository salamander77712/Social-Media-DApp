
<script>
  export default {
    props: ['author', 'id'],
    data() {
      return {
        username: '',
        tips: 0,
        tipAmount: '',
        comments: [],
        event: {
          returnValues: {
            author: 'Something',
            id: 'is',
            content: 'wrong'
          }
        },
        commentContent: ''
      }
    },
    methods: {
      async getUsername(){
        let temp;
        await contract.getPastEvents("NewUsername", {fromBlock: 0, toBlock:"latest"}).then((events) => {
          temp = events;
          for(let i = temp.length - 1; i >= 0; i--){
          if(temp[i].returnValues.user.toUpperCase() == this.event.returnValues.author.toUpperCase()){
            this.username = temp[i].returnValues.name;
            return;
          }
        }
        this.username = this.author;
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
      async getComments(){
        let temp;
        await contract.getPastEvents("CommentCreated", {fromBlock: 0, toBlock:"latest"}).then((events) => {
          temp = events;
          for(let i = 0; i < temp.length; i++){
          if(temp[i].returnValues.parentAuthor.toUpperCase() == this.event.returnValues.author.toUpperCase()){
            if(temp[i].returnValues.parentID == this.event.returnValues.id){
              this.comments.push(temp[i]);
            }
          }
        }
        });
      },
      async getEvent(){
        if (contract == undefined) {
          window.web3 = new Web3(window.ethereum);
          contract = new web3.eth.Contract(contractData.abi, contractAddress);
        }
        let temp;
        await contract.getPastEvents("MessageCreated", {fromBlock: 0, toBlock:"latest"}).then((events) =>{
          temp = events;
          for(let i = 0; i < temp.length; i++){
          if(temp[i].returnValues.author.toUpperCase() == this.author.toUpperCase()){
            if(temp[i].returnValues.id == this.id){
              this.event.returnValues.author = temp[i].returnValues.author;
              this.event.returnValues.id = temp[i].returnValues.id;
              this.event.returnValues.content = temp[i].returnValues.content;
              return;
            }
          }
      }});
        temp;
        await contract.getPastEvents("CommentCreated", {fromBlock: 0, toBlock:"latest"}).then( (events) => {
          temp = events;
          for(let i = 0; i < temp.length; i++){
          if(temp[i].returnValues.author.toUpperCase() == this.author.toUpperCase()){
            if(temp[i].returnValues.id == this.id){
              this.event.returnValues.author = temp[i].returnValues.author;
              this.event.returnValues.id = temp[i].returnValues.id;
              this.event.returnValues.content = temp[i].returnValues.content;
              return;
            }
          }
        }
        });
      },
      async tip(){
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        contract.methods.tipMessage(this.event.returnValues.author, this.event.returnValues.id).send({ from: account, value: this.tipAmount});
      },
      async comment(){
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        contract.methods.createComment(this.commentContent, this.event.returnValues.author, this.event.returnValues.id).send({ from: account});
      },
      goToAuthor(){
        this.$router.push('/u/' + this.event.returnValues.author);
      }
    },
      created(){
      this.getEvent().then( () => {
          this.getUsername().then( () => {
            this.getTips().then( () => {
              this.getComments();
            });
          });
        });
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
        <input type="number" v-model="tipAmount">
        <button @click="tip">Tip</button>
        <br>
        <input type="text" v-model="commentContent">
        <button @click="comment">Comment</button>
      </div>
      <div class="commentContainer">
        <div class="comment" v-for="comment in comments">
          <MessageDisplayFull :author="comment.returnValues.author" :id="comment.returnValues.id"></MessageDisplayFull>
        </div>
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
    .commentContainer {
  width: 200px;
  margin: 0 auto;
  background-color: yellow;
    }

    .comment {
  margin-left: 50px;
  background-color: orange;
    }
  </style>