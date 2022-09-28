<script>
import MassDisplayMessage from './MassDisplayMessage.vue'
  export default{
    /*
    {
      (all optional)
      comments: true,
      author: {
        is: ['address'],
        isNot: ['address']
      },
      id: {
        is: ['id]',
        isNot: ['id'],
        greaterThan: idNumber,
        lessThan: idNumber
      },
      username: {
        is: ['username'],
        isNot: ['username'],
        contains: ['user'],
        doesNotContain: ['name']
      },
      content: {
        contains: ['content'],
        doesNotContain: ['content']
      },
      tips: {
        greaterThan: number,
        lessThan: number
      }
    }
    */
    props: ['searchParams'],
    components: {
      MassDisplayMessage
     },
     data (){
      return {
      messages: [],
      addressToUsername: {}
      }
     },
     methods: {
      async getMessages(){
        await contract.getPastEvents("NewMessage", {fromBlock: 0, toBlock:"latest"}).then((events) => {
          for(let i = 0; i < events.length; i++){
            let message = events[i].returnValues;
            if(!this.addressToUsername[messsage.author]){
              this.addressToUsername[message.author] = message.author;
            }
            if(this.searchParams.author.is){
              if(!this.searchParams.author.is.includes(message.author)){
                continue;
              }
            }
            if(this.searchParams.author.isNot){
              if(this.searchParams.author.isNot.inclues(message.author){
                continue;
               }
            }
            if(this.searchParams.id.is){
              if(!this.searchParams.id.is.includes(message.id)){
                continue;
               }
            }
            if(this.searchParams.id.isNot){
              if(this.searchPArams.id.isNot.indcludes(message.id)){
                continue;
              }
            }
            if(this.searchParams.id.greaterThan){
              if(message.id <= this.searchParams.id.greaterThan){
                continue;
              }
            }
            if(this.searchParams.id.lessThan){
              if(message.id >= this.searchParams.id.lessThan){
                continue;
              }
            }
            if(this.searchParams.username.is){
              if(!this.searchParms.username.is.includes(this.addressToUsername[message.author])){
                continue;
              }
            }
            if(this.searchParams.username.isNot){
              if(this.searchParams.username.isNot.includes(this.addressToUsername[message.author])){
                continue;
              }
            }
            //username contains
            //username doesNotContain
            //content contains
            //content doesNotContain
            //tipsGreaterThan
            //tipsLessthan
            let formattedMessage = {};
          }
        });
      },
      async getUsernames(){
        await contract.getPastEvents("NewUsername", {fromBlock: 0, toBlock:"latest"}).then((events) => {
          for(event in events){
            this.addressToUsername[event.user] = event.name;
          }
        });
      }
     }
  }
</script>

<template>
  <MassDisplayMessage :datas=messages></MassDisplayMessage>
</template>
