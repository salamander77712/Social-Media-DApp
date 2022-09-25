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
      messages: []
      }
     },
     methods: {
      async getMessages(){
        await contract.getPastEvents("NewMessage", {fromBlock: 0, toBlock:"latest"}).then((events) => {
          let foramttedMessages = [];
          for(let i = 0; i < events.length; i++){
            let message = events[i].returnValues;
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
          }
        });
      }
     }
  }
</script>

<template>
  <MassDisplayMessage :datas=messages></MassDisplayMessage>
</template>
