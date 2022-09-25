<script>
  export default {
    /*
    {
      contentHistory: ["mostRecentEdit", ..., "OrigonalContent"],
      author: "address",
      id: idNumber,
      username: "username",
      tips: numberOfTips,
      (optional) deleted: true,
      (optional) comments: [{commentsInSameFormat}, ..., {comments to comments are nested}],
      (optional) numberOfComments: numberOfComments
    }
    
    */
    props: ['event'],
    data() {
      return {
        tipAmount: '',
        editText: ''
      }
    },
    methods: {
      async tip(){
        contract.methods.tipMessage(this.event.returnValues.author, this.event.id).send({ from: account, value: this.tipAmount});
      },
      goToAuthor(){
        this.$router.push('/u/' + this.event.author);
      },
      async deleteMessage(){
        contract.methods.deleteMessage(this.event.id).send({ from: account});
      },
      async editMessage(){
        contract.methods.editMessage(this.event.id, this.editText).send({ from: account});
      }
    },
    computed:{
      isUser(){
        if(account == undefined){
          return false;
        }
        return (account.toUpperCase() == this.event.returnValues.author.toUpperCase());
      },
      deletedCSS(){
        if(this.event.deleted){
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
    }
    }
  </script>
  
  <template>
    <div class="container" v-if="!event.deleted || isUser">
      <h2 class="username" :class="deletedCSS">{{event.username}}</h2>
      <a @click="goToAuthor" :class="deletedCSS">@{{event.author}}</a>
      <p class="messageID" :class="deletedCSS">{{eventid}}</p>
      <p class="tips" :class="deletedCSS">Tips: {{event.tips}}</p>
      <p class="content" :class="deletedCSS">{{event.contentHistory[0]}}</p>
      <div class="buttons">
        <input type="number" v-model="tipAmount"/>
        <button @click="tip">Tip</button>
        <br>
        <button @click="$router.push('/u/' + event.returnValues.author + '/p/' + event.returnValues.id)" v-if="event.comments == undefined">View {{event.numberOfComments}} Comments</button>
        <button v-if="isUser" @click="deleteMessage">{{deleteButtonText}}</button>
        <br v-if="isUser">
        <input type="text" v-model="editText" v-if="isUser">
        <button @click="editMessage" v-if="isUser">Edit</button>
      </div>
      <div class="commentContainer" v-if="event.comments">
        <div class="comment" v-for="comment in event.comments">
          <MessageDisplay :event="comment"></MessageDisplay>
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
    .deleted{
      text-decoration: line-through;
    }
    .commentContainer{
      width: 200px;
      margin: 0 auto;
    }

    .comment{
      margin-left: 50px;
    }
  </style>
