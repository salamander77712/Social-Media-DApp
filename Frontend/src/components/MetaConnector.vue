<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      async connect(){
        //ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        window.web3 = new Web3(window.ethereum);
        //const contractAddress = "0x64656Dbb84De3A7bb12962C6843641763B4e6CAB";
        contract = new web3.eth.Contract(contractData.abi, contractAddress);
        //console.log(contract);
        //console.log(contract.currentProvider);
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