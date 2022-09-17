<script>
  export default {
    props: ['event'],
    data() {
      return {
      }
    },
    methods: {
      }
    }
  </script>
  
  <template>
    <div class="container">
      <h2 class="username">{{event.returnValues.author}}</h2>
      <h3 class="author">@{{event.returnValues.author}}</h3>
      <p class="messageID">{{event.returnValues.id}}</p>
      <p class="content">{{event.returnValues.content}}</p>
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
  </style>