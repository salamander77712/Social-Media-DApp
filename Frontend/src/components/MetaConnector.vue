<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      async connect(){
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        account = accounts[0];
        if(window.ethereum.networkVersion == 5){
              window.web3 = new Web3(window.ethereum);
            }
            else{
              account = undefined;
              this.$router.push('/meta-mask-qa');
            }
        contract = new web3.eth.Contract(contractData.abi, contractAddress);
        this.$router.push('/u/' + account);
      }
    }
  }
  </script>
  
  <template>
    <button @click="connect">Connect Ethereum Account</button>
  </template>
  
  <style scoped>
  
  </style>