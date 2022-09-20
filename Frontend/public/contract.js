var contractData = {
  "contractName": "Messages",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "author",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "parentAuthor",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "parentID",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "content",
          "type": "string"
        }
      ],
      "name": "CommentCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "author",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "content",
          "type": "string"
        }
      ],
      "name": "MessageCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "author",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "MessageDeleted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "author",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "newContent",
          "type": "string"
        }
      ],
      "name": "MessageEdited",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "author",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "messageID",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tipAmount",
          "type": "uint256"
        }
      ],
      "name": "MessageTipped",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "NewUsername",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newFee",
          "type": "uint256"
        }
      ],
      "name": "changeTipFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newFee",
          "type": "uint256"
        }
      ],
      "name": "changeUsernameFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "content",
          "type": "string"
        }
      ],
      "name": "createMessage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "content",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "parentAuthor",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "parentID",
          "type": "uint256"
        }
      ],
      "name": "createComment",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "author",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "messageID",
          "type": "uint256"
        }
      ],
      "name": "tipMessage",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "deleteMessage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "newContent",
          "type": "string"
        }
      ],
      "name": "editMessage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "changeUsername",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.9+commit.e5eed63a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"author\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"parentAuthor\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"parentID\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"content\",\"type\":\"string\"}],\"name\":\"CommentCreated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"author\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"content\",\"type\":\"string\"}],\"name\":\"MessageCreated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"author\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"MessageDeleted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"author\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"newContent\",\"type\":\"string\"}],\"name\":\"MessageEdited\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"author\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"messageID\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tipAmount\",\"type\":\"uint256\"}],\"name\":\"MessageTipped\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"NewUsername\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newFee\",\"type\":\"uint256\"}],\"name\":\"changeTipFee\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"changeUsername\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newFee\",\"type\":\"uint256\"}],\"name\":\"changeUsernameFee\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"content\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"parentAuthor\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"parentID\",\"type\":\"uint256\"}],\"name\":\"createComment\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"content\",\"type\":\"string\"}],\"name\":\"createMessage\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"deleteMessage\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"newContent\",\"type\":\"string\"}],\"name\":\"editMessage\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"author\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"messageID\",\"type\":\"uint256\"}],\"name\":\"tipMessage\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/messages.sol\":\"Messages\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"project:/contracts/messages.sol\":{\"keccak256\":\"0x5b9f85e55a2c13f4f53c5045111c676d274d5fc557a785814377fdcce728e375\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b377f6fc9a07e615e522b9ef50414e6cf20ad237b9c03a192ea7bddaa692629a\",\"dweb:/ipfs/QmPPYsdkDP14NB47SdxtxFEVUr1n1kade1njDpReSKobwY\"]}},\"version\":1}",
  "bytecode": "0x60806040526064600155606460025534801561001a57600080fd5b5061003761002c61003c60201b60201c565b61004460201b60201c565b610108565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611215806101176000396000f3fe6080604052600436106100a75760003560e01c80638da5cb5b116100645780638da5cb5b146101715780639edad5021461019c5780639f76968f146101c5578063b888690a146101e1578063bcdf202d1461020a578063f2fde38b14610233576100a7565b8063198a2de9146100ac5780633ccfd60b146100d55780636b7be000146100ec578063715018a61461011557806377c846af1461012c57806387f9b00a14610148575b600080fd5b3480156100b857600080fd5b506100d360048036038101906100ce9190610aa6565b61025c565b005b3480156100e157600080fd5b506100ea610330565b005b3480156100f857600080fd5b50610113600480360381019061010e9190610b25565b61038e565b005b34801561012157600080fd5b5061012a6103af565b005b61014660048036038101906101419190610aa6565b6103c3565b005b34801561015457600080fd5b5061016f600480360381019061016a9190610b52565b61040d565b005b34801561017d57600080fd5b50610186610498565b6040516101939190610bef565b60405180910390f35b3480156101a857600080fd5b506101c360048036038101906101be9190610b25565b6104c1565b005b6101df60048036038101906101da9190610c48565b6104d3565b005b3480156101ed57600080fd5b5061020860048036038101906102039190610b25565b6105d0565b005b34801561021657600080fd5b50610231600480360381019061022c9190610cb4565b610658565b005b34801561023f57600080fd5b5061025a60048036038101906102559190610d23565b61077e565b005b7f7ce6b5996cd8a8dc443abc72eb1e200d0054c57eb818dcfc9388cc4e4222c61633600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836040516102ce93929190610de7565b60405180910390a16001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103269190610e54565b9250508190555050565b610338610802565b6000610342610498565b90508073ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f1935050505015801561038a573d6000803e3d6000fd5b5050565b610396610802565b6101f48111156103a557600080fd5b8060018190555050565b6103b7610802565b6103c16000610880565b565b60025434146103d157600080fd5b7f1baf823fe862656b4bf0b5b9ce919ed86d595c8429b1153e99a9f52d7386062e3382604051610402929190610eaa565b60405180910390a150565b81600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561045957600080fd5b7f3b34332ca8cafb0d2591c6d73cdb267b6dbd63fb7e2c008a3a07acbf361a30ec33838360405161048c93929190610de7565b60405180910390a15050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6104c9610802565b8060028190555050565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561051f57600080fd5b60006103e86001546105319190610f09565b3461053c9190610f3a565b90508273ffffffffffffffffffffffffffffffffffffffff166108fc82346105649190610f94565b9081150290604051600060405180830381858888f1935050505015801561058f573d6000803e3d6000fd5b507fc55fcf18db99100757262cbdff392dd8e0f067f22181577616771301e11766b58383346040516105c393929190611027565b60405180910390a1505050565b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561061c57600080fd5b7f636bbf15c0522de78e45a4607aa8708931f7d74979e04f9522da0f86d70093ad338260405161064d92919061105e565b60405180910390a150565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156106a457600080fd5b7fe0debd436a616786e33ab99b9cd00eee1cde754d7046faba960530d39ebf2e4933600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205484848760405161071a959493929190611087565b60405180910390a16001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107729190610e54565b92505081905550505050565b610786610802565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ed90611153565b60405180910390fd5b6107ff81610880565b50565b61080a610944565b73ffffffffffffffffffffffffffffffffffffffff16610828610498565b73ffffffffffffffffffffffffffffffffffffffff161461087e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610875906111bf565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6109b38261096a565b810181811067ffffffffffffffff821117156109d2576109d161097b565b5b80604052505050565b60006109e561094c565b90506109f182826109aa565b919050565b600067ffffffffffffffff821115610a1157610a1061097b565b5b610a1a8261096a565b9050602081019050919050565b82818337600083830152505050565b6000610a49610a44846109f6565b6109db565b905082815260208101848484011115610a6557610a64610965565b5b610a70848285610a27565b509392505050565b600082601f830112610a8d57610a8c610960565b5b8135610a9d848260208601610a36565b91505092915050565b600060208284031215610abc57610abb610956565b5b600082013567ffffffffffffffff811115610ada57610ad961095b565b5b610ae684828501610a78565b91505092915050565b6000819050919050565b610b0281610aef565b8114610b0d57600080fd5b50565b600081359050610b1f81610af9565b92915050565b600060208284031215610b3b57610b3a610956565b5b6000610b4984828501610b10565b91505092915050565b60008060408385031215610b6957610b68610956565b5b6000610b7785828601610b10565b925050602083013567ffffffffffffffff811115610b9857610b9761095b565b5b610ba485828601610a78565b9150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bd982610bae565b9050919050565b610be981610bce565b82525050565b6000602082019050610c046000830184610be0565b92915050565b6000610c1582610bae565b9050919050565b610c2581610c0a565b8114610c3057600080fd5b50565b600081359050610c4281610c1c565b92915050565b60008060408385031215610c5f57610c5e610956565b5b6000610c6d85828601610c33565b9250506020610c7e85828601610b10565b9150509250929050565b610c9181610bce565b8114610c9c57600080fd5b50565b600081359050610cae81610c88565b92915050565b600080600060608486031215610ccd57610ccc610956565b5b600084013567ffffffffffffffff811115610ceb57610cea61095b565b5b610cf786828701610a78565b9350506020610d0886828701610c9f565b9250506040610d1986828701610b10565b9150509250925092565b600060208284031215610d3957610d38610956565b5b6000610d4784828501610c9f565b91505092915050565b610d5981610aef565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d99578082015181840152602081019050610d7e565b83811115610da8576000848401525b50505050565b6000610db982610d5f565b610dc38185610d6a565b9350610dd3818560208601610d7b565b610ddc8161096a565b840191505092915050565b6000606082019050610dfc6000830186610be0565b610e096020830185610d50565b8181036040830152610e1b8184610dae565b9050949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e5f82610aef565b9150610e6a83610aef565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e9f57610e9e610e25565b5b828201905092915050565b6000604082019050610ebf6000830185610be0565b8181036020830152610ed18184610dae565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610f1482610aef565b9150610f1f83610aef565b925082610f2f57610f2e610eda565b5b828204905092915050565b6000610f4582610aef565b9150610f5083610aef565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610f8957610f88610e25565b5b828202905092915050565b6000610f9f82610aef565b9150610faa83610aef565b925082821015610fbd57610fbc610e25565b5b828203905092915050565b6000819050919050565b6000610fed610fe8610fe384610bae565b610fc8565b610bae565b9050919050565b6000610fff82610fd2565b9050919050565b600061101182610ff4565b9050919050565b61102181611006565b82525050565b600060608201905061103c6000830186611018565b6110496020830185610d50565b6110566040830184610d50565b949350505050565b60006040820190506110736000830185610be0565b6110806020830184610d50565b9392505050565b600060a08201905061109c6000830188610be0565b6110a96020830187610d50565b6110b66040830186610be0565b6110c36060830185610d50565b81810360808301526110d58184610dae565b90509695505050505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061113d602683610d6a565b9150611148826110e1565b604082019050919050565b6000602082019050818103600083015261116c81611130565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006111a9602083610d6a565b91506111b482611173565b602082019050919050565b600060208201905081810360008301526111d88161119c565b905091905056fea26469706673582212208d513660a38fb456230d49f1a198d1ced946580aa6085643aee9373116f4764964736f6c63430008090033",
  "deployedBytecode": "0x6080604052600436106100a75760003560e01c80638da5cb5b116100645780638da5cb5b146101715780639edad5021461019c5780639f76968f146101c5578063b888690a146101e1578063bcdf202d1461020a578063f2fde38b14610233576100a7565b8063198a2de9146100ac5780633ccfd60b146100d55780636b7be000146100ec578063715018a61461011557806377c846af1461012c57806387f9b00a14610148575b600080fd5b3480156100b857600080fd5b506100d360048036038101906100ce9190610aa6565b61025c565b005b3480156100e157600080fd5b506100ea610330565b005b3480156100f857600080fd5b50610113600480360381019061010e9190610b25565b61038e565b005b34801561012157600080fd5b5061012a6103af565b005b61014660048036038101906101419190610aa6565b6103c3565b005b34801561015457600080fd5b5061016f600480360381019061016a9190610b52565b61040d565b005b34801561017d57600080fd5b50610186610498565b6040516101939190610bef565b60405180910390f35b3480156101a857600080fd5b506101c360048036038101906101be9190610b25565b6104c1565b005b6101df60048036038101906101da9190610c48565b6104d3565b005b3480156101ed57600080fd5b5061020860048036038101906102039190610b25565b6105d0565b005b34801561021657600080fd5b50610231600480360381019061022c9190610cb4565b610658565b005b34801561023f57600080fd5b5061025a60048036038101906102559190610d23565b61077e565b005b7f7ce6b5996cd8a8dc443abc72eb1e200d0054c57eb818dcfc9388cc4e4222c61633600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836040516102ce93929190610de7565b60405180910390a16001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103269190610e54565b9250508190555050565b610338610802565b6000610342610498565b90508073ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f1935050505015801561038a573d6000803e3d6000fd5b5050565b610396610802565b6101f48111156103a557600080fd5b8060018190555050565b6103b7610802565b6103c16000610880565b565b60025434146103d157600080fd5b7f1baf823fe862656b4bf0b5b9ce919ed86d595c8429b1153e99a9f52d7386062e3382604051610402929190610eaa565b60405180910390a150565b81600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561045957600080fd5b7f3b34332ca8cafb0d2591c6d73cdb267b6dbd63fb7e2c008a3a07acbf361a30ec33838360405161048c93929190610de7565b60405180910390a15050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6104c9610802565b8060028190555050565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561051f57600080fd5b60006103e86001546105319190610f09565b3461053c9190610f3a565b90508273ffffffffffffffffffffffffffffffffffffffff166108fc82346105649190610f94565b9081150290604051600060405180830381858888f1935050505015801561058f573d6000803e3d6000fd5b507fc55fcf18db99100757262cbdff392dd8e0f067f22181577616771301e11766b58383346040516105c393929190611027565b60405180910390a1505050565b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561061c57600080fd5b7f636bbf15c0522de78e45a4607aa8708931f7d74979e04f9522da0f86d70093ad338260405161064d92919061105e565b60405180910390a150565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156106a457600080fd5b7fe0debd436a616786e33ab99b9cd00eee1cde754d7046faba960530d39ebf2e4933600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205484848760405161071a959493929190611087565b60405180910390a16001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107729190610e54565b92505081905550505050565b610786610802565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ed90611153565b60405180910390fd5b6107ff81610880565b50565b61080a610944565b73ffffffffffffffffffffffffffffffffffffffff16610828610498565b73ffffffffffffffffffffffffffffffffffffffff161461087e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610875906111bf565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6109b38261096a565b810181811067ffffffffffffffff821117156109d2576109d161097b565b5b80604052505050565b60006109e561094c565b90506109f182826109aa565b919050565b600067ffffffffffffffff821115610a1157610a1061097b565b5b610a1a8261096a565b9050602081019050919050565b82818337600083830152505050565b6000610a49610a44846109f6565b6109db565b905082815260208101848484011115610a6557610a64610965565b5b610a70848285610a27565b509392505050565b600082601f830112610a8d57610a8c610960565b5b8135610a9d848260208601610a36565b91505092915050565b600060208284031215610abc57610abb610956565b5b600082013567ffffffffffffffff811115610ada57610ad961095b565b5b610ae684828501610a78565b91505092915050565b6000819050919050565b610b0281610aef565b8114610b0d57600080fd5b50565b600081359050610b1f81610af9565b92915050565b600060208284031215610b3b57610b3a610956565b5b6000610b4984828501610b10565b91505092915050565b60008060408385031215610b6957610b68610956565b5b6000610b7785828601610b10565b925050602083013567ffffffffffffffff811115610b9857610b9761095b565b5b610ba485828601610a78565b9150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bd982610bae565b9050919050565b610be981610bce565b82525050565b6000602082019050610c046000830184610be0565b92915050565b6000610c1582610bae565b9050919050565b610c2581610c0a565b8114610c3057600080fd5b50565b600081359050610c4281610c1c565b92915050565b60008060408385031215610c5f57610c5e610956565b5b6000610c6d85828601610c33565b9250506020610c7e85828601610b10565b9150509250929050565b610c9181610bce565b8114610c9c57600080fd5b50565b600081359050610cae81610c88565b92915050565b600080600060608486031215610ccd57610ccc610956565b5b600084013567ffffffffffffffff811115610ceb57610cea61095b565b5b610cf786828701610a78565b9350506020610d0886828701610c9f565b9250506040610d1986828701610b10565b9150509250925092565b600060208284031215610d3957610d38610956565b5b6000610d4784828501610c9f565b91505092915050565b610d5981610aef565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d99578082015181840152602081019050610d7e565b83811115610da8576000848401525b50505050565b6000610db982610d5f565b610dc38185610d6a565b9350610dd3818560208601610d7b565b610ddc8161096a565b840191505092915050565b6000606082019050610dfc6000830186610be0565b610e096020830185610d50565b8181036040830152610e1b8184610dae565b9050949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e5f82610aef565b9150610e6a83610aef565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e9f57610e9e610e25565b5b828201905092915050565b6000604082019050610ebf6000830185610be0565b8181036020830152610ed18184610dae565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610f1482610aef565b9150610f1f83610aef565b925082610f2f57610f2e610eda565b5b828204905092915050565b6000610f4582610aef565b9150610f5083610aef565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610f8957610f88610e25565b5b828202905092915050565b6000610f9f82610aef565b9150610faa83610aef565b925082821015610fbd57610fbc610e25565b5b828203905092915050565b6000819050919050565b6000610fed610fe8610fe384610bae565b610fc8565b610bae565b9050919050565b6000610fff82610fd2565b9050919050565b600061101182610ff4565b9050919050565b61102181611006565b82525050565b600060608201905061103c6000830186611018565b6110496020830185610d50565b6110566040830184610d50565b949350505050565b60006040820190506110736000830185610be0565b6110806020830184610d50565b9392505050565b600060a08201905061109c6000830188610be0565b6110a96020830187610d50565b6110b66040830186610be0565b6110c36060830185610d50565b81810360808301526110d58184610dae565b90509695505050505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061113d602683610d6a565b9150611148826110e1565b604082019050919050565b6000602082019050818103600083015261116c81611130565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006111a9602083610d6a565b91506111b482611173565b602082019050919050565b600060208201905081810360008301526111d88161119c565b905091905056fea26469706673582212208d513660a38fb456230d49f1a198d1ced946580aa6085643aee9373116f4764964736f6c63430008090033",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:15016:4",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "47:35:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "57:19:4",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "73:2:4",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "67:5:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "67:9:4"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "57:6:4"
                    }
                  ]
                }
              ]
            },
            "name": "allocate_unbounded",
            "nodeType": "YulFunctionDefinition",
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "40:6:4",
                "type": ""
              }
            ],
            "src": "7:75:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "177:28:4",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "194:1:4",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "197:1:4",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "187:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "187:12:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "187:12:4"
                }
              ]
            },
            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            "nodeType": "YulFunctionDefinition",
            "src": "88:117:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "300:28:4",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "317:1:4",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "320:1:4",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "310:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "310:12:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "310:12:4"
                }
              ]
            },
            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            "nodeType": "YulFunctionDefinition",
            "src": "211:117:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "423:28:4",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "440:1:4",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "443:1:4",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "433:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "433:12:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "433:12:4"
                }
              ]
            },
            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
            "nodeType": "YulFunctionDefinition",
            "src": "334:117:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "546:28:4",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "563:1:4",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "566:1:4",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "556:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "556:12:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "556:12:4"
                }
              ]
            },
            "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
            "nodeType": "YulFunctionDefinition",
            "src": "457:117:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "628:54:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "638:38:4",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "656:5:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "663:2:4",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "652:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "652:14:4"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "672:2:4",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "668:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "668:7:4"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "648:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "648:28:4"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "638:6:4"
                    }
                  ]
                }
              ]
            },
            "name": "round_up_to_mul_of_32",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "611:5:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "621:6:4",
                "type": ""
              }
            ],
            "src": "580:102:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "716:152:4",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "733:1:4",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "736:77:4",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "726:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "726:88:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "726:88:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "830:1:4",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "833:4:4",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "823:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "823:15:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "823:15:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "854:1:4",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "857:4:4",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "847:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "847:15:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "847:15:4"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "688:180:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "917:238:4",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "927:58:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "949:6:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "size",
                            "nodeType": "YulIdentifier",
                            "src": "979:4:4"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "957:21:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "957:27:4"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "945:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "945:40:4"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "931:10:4",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1096:22:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "1098:16:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1098:18:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1098:18:4"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "1039:10:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1051:18:4",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "1036:2:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1036:34:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "1075:10:4"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "1087:6:4"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "1072:2:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1072:22:4"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "1033:2:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1033:62:4"
                  },
                  "nodeType": "YulIf",
                  "src": "1030:88:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1134:2:4",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "1138:10:4"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1127:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1127:22:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1127:22:4"
                }
              ]
            },
            "name": "finalize_allocation",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "903:6:4",
                "type": ""
              },
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "911:4:4",
                "type": ""
              }
            ],
            "src": "874:281:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1202:88:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1212:30:4",
                  "value": {
                    "arguments": [],
                    "functionName": {
                      "name": "allocate_unbounded",
                      "nodeType": "YulIdentifier",
                      "src": "1222:18:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1222:20:4"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "1212:6:4"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "1271:6:4"
                      },
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "1279:4:4"
                      }
                    ],
                    "functionName": {
                      "name": "finalize_allocation",
                      "nodeType": "YulIdentifier",
                      "src": "1251:19:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1251:33:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1251:33:4"
                }
              ]
            },
            "name": "allocate_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "1186:4:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "1195:6:4",
                "type": ""
              }
            ],
            "src": "1161:129:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1363:241:4",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1468:22:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "1470:16:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1470:18:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1470:18:4"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1440:6:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1448:18:4",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1437:2:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1437:30:4"
                  },
                  "nodeType": "YulIf",
                  "src": "1434:56:4"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1500:37:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1530:6:4"
                      }
                    ],
                    "functionName": {
                      "name": "round_up_to_mul_of_32",
                      "nodeType": "YulIdentifier",
                      "src": "1508:21:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1508:29:4"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "1500:4:4"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1574:23:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "1586:4:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1592:4:4",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1582:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1582:15:4"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "1574:4:4"
                    }
                  ]
                }
              ]
            },
            "name": "array_allocation_size_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1347:6:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "1358:4:4",
                "type": ""
              }
            ],
            "src": "1296:308:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1661:103:4",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "1684:3:4"
                      },
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "1689:3:4"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1694:6:4"
                      }
                    ],
                    "functionName": {
                      "name": "calldatacopy",
                      "nodeType": "YulIdentifier",
                      "src": "1671:12:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1671:30:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1671:30:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "1742:3:4"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "1747:6:4"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1738:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1738:16:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1756:1:4",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1731:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1731:27:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1731:27:4"
                }
              ]
            },
            "name": "copy_calldata_to_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "1643:3:4",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "1648:3:4",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1653:6:4",
                "type": ""
              }
            ],
            "src": "1610:154:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1854:328:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1864:75:4",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "1931:6:4"
                          }
                        ],
                        "functionName": {
                          "name": "array_allocation_size_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "1889:41:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1889:49:4"
                      }
                    ],
                    "functionName": {
                      "name": "allocate_memory",
                      "nodeType": "YulIdentifier",
                      "src": "1873:15:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1873:66:4"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "1864:5:4"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "1955:5:4"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1962:6:4"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1948:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1948:21:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1948:21:4"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1978:27:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "1993:5:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2000:4:4",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1989:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1989:16:4"
                  },
                  "variables": [
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "1982:3:4",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2043:83:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                            "nodeType": "YulIdentifier",
                            "src": "2045:77:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2045:79:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2045:79:4"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "src",
                            "nodeType": "YulIdentifier",
                            "src": "2024:3:4"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2029:6:4"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2020:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2020:16:4"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "2038:3:4"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "2017:2:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2017:25:4"
                  },
                  "nodeType": "YulIf",
                  "src": "2014:112:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "2159:3:4"
                      },
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "2164:3:4"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2169:6:4"
                      }
                    ],
                    "functionName": {
                      "name": "copy_calldata_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "2135:23:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2135:41:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2135:41:4"
                }
              ]
            },
            "name": "abi_decode_available_length_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "1827:3:4",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1832:6:4",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "1840:3:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "1848:5:4",
                "type": ""
              }
            ],
            "src": "1770:412:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2264:278:4",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2313:83:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                            "nodeType": "YulIdentifier",
                            "src": "2315:77:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2315:79:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2315:79:4"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2292:6:4"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2300:4:4",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2288:3:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2288:17:4"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "2307:3:4"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "2284:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2284:27:4"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "2277:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2277:35:4"
                  },
                  "nodeType": "YulIf",
                  "src": "2274:122:4"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2405:34:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "2432:6:4"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2419:12:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2419:20:4"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "2409:6:4",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2448:88:4",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "2509:6:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2517:4:4",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2505:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2505:17:4"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2524:6:4"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "2532:3:4"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_available_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "2457:47:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2457:79:4"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "2448:5:4"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "2242:6:4",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "2250:3:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "2258:5:4",
                "type": ""
              }
            ],
            "src": "2202:340:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2624:433:4",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2670:83:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "2672:77:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2672:79:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2672:79:4"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2645:7:4"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2654:9:4"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2641:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2641:23:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2666:2:4",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2637:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2637:32:4"
                  },
                  "nodeType": "YulIf",
                  "src": "2634:119:4"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "2763:287:4",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "2778:45:4",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2809:9:4"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2820:1:4",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2805:3:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2805:17:4"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "2792:12:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2792:31:4"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "2782:6:4",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "2870:83:4",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                "nodeType": "YulIdentifier",
                                "src": "2872:77:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2872:79:4"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "2872:79:4"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "2842:6:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2850:18:4",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "2839:2:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2839:30:4"
                      },
                      "nodeType": "YulIf",
                      "src": "2836:117:4"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2967:73:4",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3012:9:4"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3023:6:4"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3008:3:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3008:22:4"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3032:7:4"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "2977:30:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2977:63:4"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "2967:6:4"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2594:9:4",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2605:7:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2617:6:4",
                "type": ""
              }
            ],
            "src": "2548:509:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3108:32:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3118:16:4",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "3129:5:4"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "3118:7:4"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3090:5:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "3100:7:4",
                "type": ""
              }
            ],
            "src": "3063:77:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3189:79:4",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3246:16:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3255:1:4",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3258:1:4",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3248:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3248:12:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3248:12:4"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "3212:5:4"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "3237:5:4"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "3219:17:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3219:24:4"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "3209:2:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3209:35:4"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "3202:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3202:43:4"
                  },
                  "nodeType": "YulIf",
                  "src": "3199:63:4"
                }
              ]
            },
            "name": "validator_revert_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3182:5:4",
                "type": ""
              }
            ],
            "src": "3146:122:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3326:87:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3336:29:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "3358:6:4"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "3345:12:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3345:20:4"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "3336:5:4"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "3401:5:4"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "3374:26:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3374:33:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3374:33:4"
                }
              ]
            },
            "name": "abi_decode_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "3304:6:4",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "3312:3:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3320:5:4",
                "type": ""
              }
            ],
            "src": "3274:139:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3485:263:4",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3531:83:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "3533:77:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3533:79:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3533:79:4"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3506:7:4"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3515:9:4"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3502:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3502:23:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3527:2:4",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3498:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3498:32:4"
                  },
                  "nodeType": "YulIf",
                  "src": "3495:119:4"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3624:117:4",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3639:15:4",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3653:1:4",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3643:6:4",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3668:63:4",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3703:9:4"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3714:6:4"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3699:3:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3699:22:4"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3723:7:4"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "3678:20:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3678:53:4"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "3668:6:4"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3455:9:4",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "3466:7:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3478:6:4",
                "type": ""
              }
            ],
            "src": "3419:329:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3847:561:4",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3893:83:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "3895:77:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3895:79:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3895:79:4"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3868:7:4"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3877:9:4"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3864:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3864:23:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3889:2:4",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3860:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3860:32:4"
                  },
                  "nodeType": "YulIf",
                  "src": "3857:119:4"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3986:117:4",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4001:15:4",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4015:1:4",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4005:6:4",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4030:63:4",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4065:9:4"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4076:6:4"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4061:3:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4061:22:4"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4085:7:4"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "4040:20:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4040:53:4"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4030:6:4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4113:288:4",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4128:46:4",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4159:9:4"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4170:2:4",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4155:3:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4155:18:4"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "4142:12:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4142:32:4"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4132:6:4",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "4221:83:4",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                "nodeType": "YulIdentifier",
                                "src": "4223:77:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4223:79:4"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "4223:79:4"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "4193:6:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4201:18:4",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "4190:2:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4190:30:4"
                      },
                      "nodeType": "YulIf",
                      "src": "4187:117:4"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4318:73:4",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4363:9:4"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4374:6:4"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4359:3:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4359:22:4"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4383:7:4"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "4328:30:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4328:63:4"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "4318:6:4"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3809:9:4",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "3820:7:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3832:6:4",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "3840:6:4",
                "type": ""
              }
            ],
            "src": "3754:654:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4459:81:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4469:65:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4484:5:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4491:42:4",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "4480:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4480:54:4"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "4469:7:4"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint160",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4441:5:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "4451:7:4",
                "type": ""
              }
            ],
            "src": "4414:126:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4591:51:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4601:35:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4630:5:4"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "4612:17:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4612:24:4"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "4601:7:4"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4573:5:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "4583:7:4",
                "type": ""
              }
            ],
            "src": "4546:96:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4713:53:4",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4730:3:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "4753:5:4"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "4735:17:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4735:24:4"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4723:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4723:37:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4723:37:4"
                }
              ]
            },
            "name": "abi_encode_t_address_to_t_address_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4701:5:4",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4708:3:4",
                "type": ""
              }
            ],
            "src": "4648:118:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4870:124:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4880:26:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4892:9:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4903:2:4",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4888:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4888:18:4"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4880:4:4"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "4960:6:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4973:9:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4984:1:4",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4969:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4969:17:4"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "4916:43:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4916:71:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4916:71:4"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4842:9:4",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4854:6:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4865:4:4",
                "type": ""
              }
            ],
            "src": "4772:222:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5053:51:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5063:35:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "5092:5:4"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "5074:17:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5074:24:4"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "5063:7:4"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_address_payable",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5035:5:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "5045:7:4",
                "type": ""
              }
            ],
            "src": "5000:104:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5161:87:4",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5226:16:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5235:1:4",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5238:1:4",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "5228:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5228:12:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5228:12:4"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "5184:5:4"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "5217:5:4"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address_payable",
                              "nodeType": "YulIdentifier",
                              "src": "5191:25:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5191:32:4"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "5181:2:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5181:43:4"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "5174:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5174:51:4"
                  },
                  "nodeType": "YulIf",
                  "src": "5171:71:4"
                }
              ]
            },
            "name": "validator_revert_t_address_payable",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5154:5:4",
                "type": ""
              }
            ],
            "src": "5110:138:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5314:95:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5324:29:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "5346:6:4"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "5333:12:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5333:20:4"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "5324:5:4"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "5397:5:4"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_address_payable",
                      "nodeType": "YulIdentifier",
                      "src": "5362:34:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5362:41:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5362:41:4"
                }
              ]
            },
            "name": "abi_decode_t_address_payable",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "5292:6:4",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "5300:3:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5308:5:4",
                "type": ""
              }
            ],
            "src": "5254:155:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5506:399:4",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5552:83:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "5554:77:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5554:79:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5554:79:4"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5527:7:4"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5536:9:4"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "5523:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5523:23:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5548:2:4",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "5519:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5519:32:4"
                  },
                  "nodeType": "YulIf",
                  "src": "5516:119:4"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5645:125:4",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5660:15:4",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5674:1:4",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "5664:6:4",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5689:71:4",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5732:9:4"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5743:6:4"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5728:3:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5728:22:4"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5752:7:4"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address_payable",
                          "nodeType": "YulIdentifier",
                          "src": "5699:28:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5699:61:4"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "5689:6:4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5780:118:4",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5795:16:4",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5809:2:4",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "5799:6:4",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5825:63:4",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5860:9:4"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5871:6:4"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5856:3:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5856:22:4"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5880:7:4"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "5835:20:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5835:53:4"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "5825:6:4"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address_payablet_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5468:9:4",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "5479:7:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5491:6:4",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "5499:6:4",
                "type": ""
              }
            ],
            "src": "5415:490:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5954:79:4",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6011:16:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6020:1:4",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6023:1:4",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "6013:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6013:12:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6013:12:4"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "5977:5:4"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "6002:5:4"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nodeType": "YulIdentifier",
                              "src": "5984:17:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5984:24:4"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "5974:2:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5974:35:4"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "5967:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5967:43:4"
                  },
                  "nodeType": "YulIf",
                  "src": "5964:63:4"
                }
              ]
            },
            "name": "validator_revert_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5947:5:4",
                "type": ""
              }
            ],
            "src": "5911:122:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6091:87:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6101:29:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "6123:6:4"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "6110:12:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6110:20:4"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "6101:5:4"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6166:5:4"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "6139:26:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6139:33:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6139:33:4"
                }
              ]
            },
            "name": "abi_decode_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "6069:6:4",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "6077:3:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6085:5:4",
                "type": ""
              }
            ],
            "src": "6039:139:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6294:689:4",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6340:83:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "6342:77:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6342:79:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6342:79:4"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "6315:7:4"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6324:9:4"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "6311:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6311:23:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6336:2:4",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "6307:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6307:32:4"
                  },
                  "nodeType": "YulIf",
                  "src": "6304:119:4"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "6433:287:4",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "6448:45:4",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "6479:9:4"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6490:1:4",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6475:3:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6475:17:4"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "6462:12:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6462:31:4"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "6452:6:4",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "6540:83:4",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                "nodeType": "YulIdentifier",
                                "src": "6542:77:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6542:79:4"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "6542:79:4"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "6512:6:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6520:18:4",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "6509:2:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6509:30:4"
                      },
                      "nodeType": "YulIf",
                      "src": "6506:117:4"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "6637:73:4",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "6682:9:4"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "6693:6:4"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6678:3:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6678:22:4"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "6702:7:4"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "6647:30:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6647:63:4"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "6637:6:4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "6730:118:4",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "6745:16:4",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6759:2:4",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "6749:6:4",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "6775:63:4",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "6810:9:4"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "6821:6:4"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6806:3:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6806:22:4"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "6830:7:4"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "6785:20:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6785:53:4"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "6775:6:4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "6858:118:4",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "6873:16:4",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6887:2:4",
                        "type": "",
                        "value": "64"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "6877:6:4",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "6903:63:4",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "6938:9:4"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "6949:6:4"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6934:3:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6934:22:4"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "6958:7:4"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "6913:20:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6913:53:4"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "6903:6:4"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_string_memory_ptrt_addresst_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6248:9:4",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "6259:7:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6271:6:4",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "6279:6:4",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "6287:6:4",
                "type": ""
              }
            ],
            "src": "6184:799:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7055:263:4",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7101:83:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "7103:77:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7103:79:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7103:79:4"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "7076:7:4"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7085:9:4"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "7072:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7072:23:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7097:2:4",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "7068:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7068:32:4"
                  },
                  "nodeType": "YulIf",
                  "src": "7065:119:4"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "7194:117:4",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "7209:15:4",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7223:1:4",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "7213:6:4",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "7238:63:4",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "7273:9:4"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "7284:6:4"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "7269:3:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7269:22:4"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "7293:7:4"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "7248:20:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7248:53:4"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "7238:6:4"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7025:9:4",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "7036:7:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "7048:6:4",
                "type": ""
              }
            ],
            "src": "6989:329:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7389:53:4",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7406:3:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "7429:5:4"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "7411:17:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7411:24:4"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7399:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7399:37:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7399:37:4"
                }
              ]
            },
            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "7377:5:4",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "7384:3:4",
                "type": ""
              }
            ],
            "src": "7324:118:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7507:40:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7518:22:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "7534:5:4"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "7528:5:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7528:12:4"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "7518:6:4"
                    }
                  ]
                }
              ]
            },
            "name": "array_length_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "7490:5:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "7500:6:4",
                "type": ""
              }
            ],
            "src": "7448:99:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7649:73:4",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7666:3:4"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "7671:6:4"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7659:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7659:19:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7659:19:4"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7687:29:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7706:3:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7711:4:4",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7702:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7702:14:4"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "7687:11:4"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "7621:3:4",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "7626:6:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "7637:11:4",
                "type": ""
              }
            ],
            "src": "7553:169:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7777:258:4",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7787:10:4",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "7796:1:4",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "7791:1:4",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7856:63:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "7881:3:4"
                                },
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "7886:1:4"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "7877:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7877:11:4"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "src",
                                      "nodeType": "YulIdentifier",
                                      "src": "7900:3:4"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "7905:1:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "7896:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "7896:11:4"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "7890:5:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7890:18:4"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "7870:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7870:39:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7870:39:4"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "7817:1:4"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "7820:6:4"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "7814:2:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7814:13:4"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "7828:19:4",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "7830:15:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "7839:1:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7842:2:4",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7835:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7835:10:4"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "7830:1:4"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "7810:3:4",
                    "statements": []
                  },
                  "src": "7806:113:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7953:76:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "8003:3:4"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "8008:6:4"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "7999:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7999:16:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8017:1:4",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "7992:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7992:27:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7992:27:4"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "7934:1:4"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "7937:6:4"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "7931:2:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7931:13:4"
                  },
                  "nodeType": "YulIf",
                  "src": "7928:101:4"
                }
              ]
            },
            "name": "copy_memory_to_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "7759:3:4",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "7764:3:4",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "7769:6:4",
                "type": ""
              }
            ],
            "src": "7728:307:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8133:272:4",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "8143:53:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "8190:5:4"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "8157:32:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8157:39:4"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "8147:6:4",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8205:78:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8271:3:4"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "8276:6:4"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "8212:58:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8212:71:4"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "8205:3:4"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "8318:5:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8325:4:4",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8314:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8314:16:4"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8332:3:4"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "8337:6:4"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "8292:21:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8292:52:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8292:52:4"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8353:46:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8364:3:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "8391:6:4"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "8369:21:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8369:29:4"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8360:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8360:39:4"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "8353:3:4"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "8114:5:4",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "8121:3:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "8129:3:4",
                "type": ""
              }
            ],
            "src": "8041:364:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8585:359:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8595:26:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8607:9:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8618:2:4",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8603:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8603:18:4"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8595:4:4"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "8675:6:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8688:9:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8699:1:4",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8684:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8684:17:4"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "8631:43:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8631:71:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8631:71:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "8756:6:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8769:9:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8780:2:4",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8765:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8765:18:4"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "8712:43:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8712:72:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8712:72:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8805:9:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8816:2:4",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8801:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8801:18:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "8825:4:4"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8831:9:4"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "8821:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8821:20:4"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8794:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8794:48:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8794:48:4"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8851:86:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "8923:6:4"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "8932:4:4"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "8859:63:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8859:78:4"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8851:4:4"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_uint256_t_string_memory_ptr__to_t_address_t_uint256_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8541:9:4",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "8553:6:4",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "8561:6:4",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "8569:6:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8580:4:4",
                "type": ""
              }
            ],
            "src": "8411:533:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8978:152:4",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8995:1:4",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8998:77:4",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8988:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8988:88:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8988:88:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9092:1:4",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9095:4:4",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9085:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9085:15:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9085:15:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9116:1:4",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9119:4:4",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "9109:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9109:15:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9109:15:4"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "8950:180:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9180:261:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9190:25:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "9213:1:4"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "9195:17:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9195:20:4"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "9190:1:4"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9224:25:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "9247:1:4"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "9229:17:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9229:20:4"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "9224:1:4"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9387:22:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "9389:16:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9389:18:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9389:18:4"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "9308:1:4"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9315:66:4",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "9383:1:4"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "9311:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9311:74:4"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "9305:2:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9305:81:4"
                  },
                  "nodeType": "YulIf",
                  "src": "9302:107:4"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9419:16:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "9430:1:4"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "9433:1:4"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9426:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9426:9:4"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "9419:3:4"
                    }
                  ]
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "9167:1:4",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "9170:1:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "9176:3:4",
                "type": ""
              }
            ],
            "src": "9136:305:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9593:277:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9603:26:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9615:9:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9626:2:4",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9611:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9611:18:4"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9603:4:4"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "9683:6:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9696:9:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9707:1:4",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9692:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9692:17:4"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "9639:43:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9639:71:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9639:71:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9731:9:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9742:2:4",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9727:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9727:18:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "9751:4:4"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9757:9:4"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "9747:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9747:20:4"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9720:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9720:48:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9720:48:4"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9777:86:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "9849:6:4"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "9858:4:4"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "9785:63:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9785:78:4"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9777:4:4"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_string_memory_ptr__to_t_address_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9557:9:4",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "9569:6:4",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "9577:6:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9588:4:4",
                "type": ""
              }
            ],
            "src": "9447:423:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9904:152:4",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9921:1:4",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9924:77:4",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9914:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9914:88:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9914:88:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10018:1:4",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10021:4:4",
                        "type": "",
                        "value": "0x12"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10011:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10011:15:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10011:15:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10042:1:4",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10045:4:4",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "10035:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10035:15:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10035:15:4"
                }
              ]
            },
            "name": "panic_error_0x12",
            "nodeType": "YulFunctionDefinition",
            "src": "9876:180:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10104:143:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10114:25:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "10137:1:4"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "10119:17:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10119:20:4"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "10114:1:4"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10148:25:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "10171:1:4"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "10153:17:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10153:20:4"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "10148:1:4"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10195:22:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x12",
                            "nodeType": "YulIdentifier",
                            "src": "10197:16:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10197:18:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10197:18:4"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "10192:1:4"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "10185:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10185:9:4"
                  },
                  "nodeType": "YulIf",
                  "src": "10182:35:4"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10227:14:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "10236:1:4"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "10239:1:4"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "10232:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10232:9:4"
                  },
                  "variableNames": [
                    {
                      "name": "r",
                      "nodeType": "YulIdentifier",
                      "src": "10227:1:4"
                    }
                  ]
                }
              ]
            },
            "name": "checked_div_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "10093:1:4",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "10096:1:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "r",
                "nodeType": "YulTypedName",
                "src": "10102:1:4",
                "type": ""
              }
            ],
            "src": "10062:185:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10301:300:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10311:25:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "10334:1:4"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "10316:17:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10316:20:4"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "10311:1:4"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10345:25:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "10368:1:4"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "10350:17:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10350:20:4"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "10345:1:4"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10543:22:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "10545:16:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10545:18:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10545:18:4"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "x",
                                "nodeType": "YulIdentifier",
                                "src": "10455:1:4"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "10448:6:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "10448:9:4"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "10441:6:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10441:17:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "10463:1:4"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "10470:66:4",
                                "type": "",
                                "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                              },
                              {
                                "name": "x",
                                "nodeType": "YulIdentifier",
                                "src": "10538:1:4"
                              }
                            ],
                            "functionName": {
                              "name": "div",
                              "nodeType": "YulIdentifier",
                              "src": "10466:3:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "10466:74:4"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "10460:2:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10460:81:4"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "10437:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10437:105:4"
                  },
                  "nodeType": "YulIf",
                  "src": "10434:131:4"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10575:20:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "10590:1:4"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "10593:1:4"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "10586:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10586:9:4"
                  },
                  "variableNames": [
                    {
                      "name": "product",
                      "nodeType": "YulIdentifier",
                      "src": "10575:7:4"
                    }
                  ]
                }
              ]
            },
            "name": "checked_mul_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "10284:1:4",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "10287:1:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "product",
                "nodeType": "YulTypedName",
                "src": "10293:7:4",
                "type": ""
              }
            ],
            "src": "10253:348:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10652:146:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10662:25:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "10685:1:4"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "10667:17:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10667:20:4"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "10662:1:4"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10696:25:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "10719:1:4"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "10701:17:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10701:20:4"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "10696:1:4"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10743:22:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "10745:16:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10745:18:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10745:18:4"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "10737:1:4"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "10740:1:4"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "10734:2:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10734:8:4"
                  },
                  "nodeType": "YulIf",
                  "src": "10731:34:4"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10775:17:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "10787:1:4"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "10790:1:4"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "10783:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10783:9:4"
                  },
                  "variableNames": [
                    {
                      "name": "diff",
                      "nodeType": "YulIdentifier",
                      "src": "10775:4:4"
                    }
                  ]
                }
              ]
            },
            "name": "checked_sub_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "10638:1:4",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "10641:1:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "diff",
                "nodeType": "YulTypedName",
                "src": "10647:4:4",
                "type": ""
              }
            ],
            "src": "10607:191:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10836:28:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10846:12:4",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "10853:5:4"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "10846:3:4"
                    }
                  ]
                }
              ]
            },
            "name": "identity",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "10822:5:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "10832:3:4",
                "type": ""
              }
            ],
            "src": "10804:60:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10930:82:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10940:66:4",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "10998:5:4"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint160",
                              "nodeType": "YulIdentifier",
                              "src": "10980:17:4"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "10980:24:4"
                          }
                        ],
                        "functionName": {
                          "name": "identity",
                          "nodeType": "YulIdentifier",
                          "src": "10971:8:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10971:34:4"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "10953:17:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10953:53:4"
                  },
                  "variableNames": [
                    {
                      "name": "converted",
                      "nodeType": "YulIdentifier",
                      "src": "10940:9:4"
                    }
                  ]
                }
              ]
            },
            "name": "convert_t_uint160_to_t_uint160",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "10910:5:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "converted",
                "nodeType": "YulTypedName",
                "src": "10920:9:4",
                "type": ""
              }
            ],
            "src": "10870:142:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11078:66:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11088:50:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "11132:5:4"
                      }
                    ],
                    "functionName": {
                      "name": "convert_t_uint160_to_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "11101:30:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11101:37:4"
                  },
                  "variableNames": [
                    {
                      "name": "converted",
                      "nodeType": "YulIdentifier",
                      "src": "11088:9:4"
                    }
                  ]
                }
              ]
            },
            "name": "convert_t_uint160_to_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "11058:5:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "converted",
                "nodeType": "YulTypedName",
                "src": "11068:9:4",
                "type": ""
              }
            ],
            "src": "11018:126:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11218:66:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11228:50:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "11272:5:4"
                      }
                    ],
                    "functionName": {
                      "name": "convert_t_uint160_to_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "11241:30:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11241:37:4"
                  },
                  "variableNames": [
                    {
                      "name": "converted",
                      "nodeType": "YulIdentifier",
                      "src": "11228:9:4"
                    }
                  ]
                }
              ]
            },
            "name": "convert_t_address_payable_to_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "11198:5:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "converted",
                "nodeType": "YulTypedName",
                "src": "11208:9:4",
                "type": ""
              }
            ],
            "src": "11150:134:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11363:74:4",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "11380:3:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "11424:5:4"
                          }
                        ],
                        "functionName": {
                          "name": "convert_t_address_payable_to_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "11385:38:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11385:45:4"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11373:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11373:58:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11373:58:4"
                }
              ]
            },
            "name": "abi_encode_t_address_payable_to_t_address_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "11351:5:4",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "11358:3:4",
                "type": ""
              }
            ],
            "src": "11290:147:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11605:296:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11615:26:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11627:9:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11638:2:4",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11623:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11623:18:4"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11615:4:4"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "11703:6:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11716:9:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11727:1:4",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11712:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11712:17:4"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_payable_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "11651:51:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11651:79:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11651:79:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "11784:6:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11797:9:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11808:2:4",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11793:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11793:18:4"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "11740:43:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11740:72:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11740:72:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "11866:6:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11879:9:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11890:2:4",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11875:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11875:18:4"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "11822:43:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11822:72:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11822:72:4"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_payable_t_uint256_t_uint256__to_t_address_t_uint256_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11561:9:4",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "11573:6:4",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "11581:6:4",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "11589:6:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "11600:4:4",
                "type": ""
              }
            ],
            "src": "11443:458:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12033:206:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12043:26:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12055:9:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12066:2:4",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12051:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12051:18:4"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12043:4:4"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "12123:6:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12136:9:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12147:1:4",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12132:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12132:17:4"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "12079:43:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12079:71:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12079:71:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "12204:6:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12217:9:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12228:2:4",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12213:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12213:18:4"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "12160:43:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12160:72:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12160:72:4"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11997:9:4",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "12009:6:4",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "12017:6:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "12028:4:4",
                "type": ""
              }
            ],
            "src": "11907:332:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12475:525:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12485:27:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12497:9:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12508:3:4",
                        "type": "",
                        "value": "160"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12493:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12493:19:4"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12485:4:4"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "12566:6:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12579:9:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12590:1:4",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12575:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12575:17:4"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "12522:43:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12522:71:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12522:71:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "12647:6:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12660:9:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12671:2:4",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12656:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12656:18:4"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "12603:43:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12603:72:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12603:72:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "12729:6:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12742:9:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12753:2:4",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12738:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12738:18:4"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "12685:43:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12685:72:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12685:72:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value3",
                        "nodeType": "YulIdentifier",
                        "src": "12811:6:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12824:9:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12835:2:4",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12820:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12820:18:4"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "12767:43:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12767:72:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12767:72:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12860:9:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12871:3:4",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12856:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12856:19:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "12881:4:4"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12887:9:4"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "12877:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12877:20:4"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12849:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12849:49:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12849:49:4"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12907:86:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "value4",
                        "nodeType": "YulIdentifier",
                        "src": "12979:6:4"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "12988:4:4"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "12915:63:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12915:78:4"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12907:4:4"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_uint256_t_address_t_uint256_t_string_memory_ptr__to_t_address_t_uint256_t_address_t_uint256_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "12415:9:4",
                "type": ""
              },
              {
                "name": "value4",
                "nodeType": "YulTypedName",
                "src": "12427:6:4",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "12435:6:4",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "12443:6:4",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "12451:6:4",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "12459:6:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "12470:4:4",
                "type": ""
              }
            ],
            "src": "12245:755:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13112:119:4",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "13134:6:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13142:1:4",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13130:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13130:14:4"
                      },
                      {
                        "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "13146:34:4",
                        "type": "",
                        "value": "Ownable: new owner is the zero a"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13123:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13123:58:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13123:58:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "13202:6:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13210:2:4",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13198:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13198:15:4"
                      },
                      {
                        "hexValue": "646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "13215:8:4",
                        "type": "",
                        "value": "ddress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13191:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13191:33:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13191:33:4"
                }
              ]
            },
            "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "13104:6:4",
                "type": ""
              }
            ],
            "src": "13006:225:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13383:220:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "13393:74:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13459:3:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13464:2:4",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13400:58:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13400:67:4"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "13393:3:4"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13565:3:4"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
                      "nodeType": "YulIdentifier",
                      "src": "13476:88:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13476:93:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13476:93:4"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13578:19:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13589:3:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13594:2:4",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13585:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13585:12:4"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "13578:3:4"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "13371:3:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "13379:3:4",
                "type": ""
              }
            ],
            "src": "13237:366:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13780:248:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "13790:26:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13802:9:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13813:2:4",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13798:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13798:18:4"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13790:4:4"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13837:9:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13848:1:4",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13833:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13833:17:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "13856:4:4"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13862:9:4"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "13852:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13852:20:4"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13826:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13826:47:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13826:47:4"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13882:139:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "14016:4:4"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13890:124:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13890:131:4"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13882:4:4"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "13760:9:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "13775:4:4",
                "type": ""
              }
            ],
            "src": "13609:419:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14140:76:4",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "14162:6:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14170:1:4",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14158:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14158:14:4"
                      },
                      {
                        "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14174:34:4",
                        "type": "",
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14151:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14151:58:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14151:58:4"
                }
              ]
            },
            "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "14132:6:4",
                "type": ""
              }
            ],
            "src": "14034:182:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14368:220:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "14378:74:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "14444:3:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14449:2:4",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "14385:58:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14385:67:4"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "14378:3:4"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "14550:3:4"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
                      "nodeType": "YulIdentifier",
                      "src": "14461:88:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14461:93:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14461:93:4"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14563:19:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "14574:3:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14579:2:4",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14570:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14570:12:4"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "14563:3:4"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "14356:3:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "14364:3:4",
                "type": ""
              }
            ],
            "src": "14222:366:4"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14765:248:4",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "14775:26:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14787:9:4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14798:2:4",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14783:3:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14783:18:4"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14775:4:4"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14822:9:4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14833:1:4",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14818:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14818:17:4"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "14841:4:4"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14847:9:4"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "14837:3:4"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14837:20:4"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14811:6:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14811:47:4"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14811:47:4"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14867:139:4",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "15001:4:4"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "14875:124:4"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14875:131:4"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14867:4:4"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "14745:9:4",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "14760:4:4",
                "type": ""
              }
            ],
            "src": "14594:419:4"
          }
        ]
      },
      "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_calldata_to_memory(src, dst, length) {\n        calldatacopy(dst, src, length)\n        // clear end\n        mstore(add(dst, length), 0)\n    }\n\n    function abi_decode_available_length_t_string_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_string_memory_ptr(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := calldataload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value0 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_uint256t_string_memory_ptr(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value1 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function cleanup_t_address_payable(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address_payable(value) {\n        if iszero(eq(value, cleanup_t_address_payable(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address_payable(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address_payable(value)\n    }\n\n    function abi_decode_tuple_t_address_payablet_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address_payable(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_string_memory_ptrt_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := calldataload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value0 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_address_t_uint256_t_string_memory_ptr__to_t_address_t_uint256_t_string_memory_ptr__fromStack_reversed(headStart , value2, value1, value0) -> tail {\n        tail := add(headStart, 96)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n        mstore(add(headStart, 64), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value2,  tail)\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function abi_encode_tuple_t_address_t_string_memory_ptr__to_t_address_t_string_memory_ptr__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        mstore(add(headStart, 32), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value1,  tail)\n\n    }\n\n    function panic_error_0x12() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n\n    function checked_div_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n\n        r := div(x, y)\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x != 0 and y > (maxValue / x)\n        if and(iszero(iszero(x)), gt(y, div(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, x))) { panic_error_0x11() }\n\n        product := mul(x, y)\n    }\n\n    function checked_sub_t_uint256(x, y) -> diff {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        if lt(x, y) { panic_error_0x11() }\n\n        diff := sub(x, y)\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint160_to_t_uint160(value) -> converted {\n        converted := cleanup_t_uint160(identity(cleanup_t_uint160(value)))\n    }\n\n    function convert_t_uint160_to_t_address(value) -> converted {\n        converted := convert_t_uint160_to_t_uint160(value)\n    }\n\n    function convert_t_address_payable_to_t_address(value) -> converted {\n        converted := convert_t_uint160_to_t_address(value)\n    }\n\n    function abi_encode_t_address_payable_to_t_address_fromStack(value, pos) {\n        mstore(pos, convert_t_address_payable_to_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address_payable_t_uint256_t_uint256__to_t_address_t_uint256_t_uint256__fromStack_reversed(headStart , value2, value1, value0) -> tail {\n        tail := add(headStart, 96)\n\n        abi_encode_t_address_payable_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n    }\n\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function abi_encode_tuple_t_address_t_uint256_t_address_t_uint256_t_string_memory_ptr__to_t_address_t_uint256_t_address_t_uint256_t_string_memory_ptr__fromStack_reversed(headStart , value4, value3, value2, value1, value0) -> tail {\n        tail := add(headStart, 160)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_address_to_t_address_fromStack(value2,  add(headStart, 64))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value3,  add(headStart, 96))\n\n        mstore(add(headStart, 128), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value4,  tail)\n\n    }\n\n    function store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: new owner is the zero a\")\n\n        mstore(add(memPtr, 32), \"ddress\")\n\n    }\n\n    function abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: caller is not the owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n}\n",
      "id": 4,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "122:2247:3:-:0;;;171:3;157:17;;200:3;181:22;;122:2247;;;;;;;;;;936:32:0;955:12;:10;;;:12;;:::i;:::-;936:18;;;:32;;:::i;:::-;122:2247:3;;640:96:1;693:7;719:10;712:17;;640:96;:::o;2433:187:0:-;2506:16;2525:6;;;;;;;;;;;2506:25;;2550:8;2541:6;;:17;;;;;;;;;;;;;;;;;;2604:8;2573:40;;2594:8;2573:40;;;;;;;;;;;;2496:124;2433:187;:::o;122:2247:3:-;;;;;;;",
  "deployedSourceMap": "122:2247:3:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1063:187;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;911:140;;;;;;;;;;;;;:::i;:::-;;686:118;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1831:101:0;;;;;;;;;;;;;:::i;:::-;;2211:155:3;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2023:182;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1201:85:0;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;810:95:3;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1573:291;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1870:147;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1256:311;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2081:198:0;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1063:187:3;1131:66;1146:10;1158:17;:29;1176:10;1158:29;;;;;;;;;;;;;;;;1189:7;1131:66;;;;;;;;:::i;:::-;;;;;;;;1241:1;1208:17;:29;1226:10;1208:29;;;;;;;;;;;;;;;;:34;;;;;;;:::i;:::-;;;;;;;;1063:187;:::o;911:140::-;1094:13:0;:11;:13::i;:::-;957:22:3::1;990:7;:5;:7::i;:::-;957:41;;1005:6;:15;;:38;1021:21;1005:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;950:101;911:140::o:0;686:118::-;1094:13:0;:11;:13::i;:::-;766:3:3::1;756:6;:13;;748:22;;;::::0;::::1;;790:6;781;:15;;;;686:118:::0;:::o;1831:101:0:-;1094:13;:11;:13::i;:::-;1895:30:::1;1922:1;1895:18;:30::i;:::-;1831:101::o:0;2211:155:3:-;2301:11;;2288:9;:24;2280:33;;;;;;2329:29;2341:10;2353:4;2329:29;;;;;;;:::i;:::-;;;;;;;;2211:155;:::o;2023:182::-;2137:2;2104:17;:29;2122:10;2104:29;;;;;;;;;;;;;;;;:35;;2096:44;;;;;;2156:41;2170:10;2182:2;2186:10;2156:41;;;;;;;;:::i;:::-;;;;;;;;2023:182;;:::o;1201:85:0:-;1247:7;1273:6;;;;;;;;;;;1266:13;;1201:85;:::o;810:95:3:-;1094:13:0;:11;:13::i;:::-;891:6:3::1;877:11;:20;;;;810:95:::0;:::o;1573:291::-;1695:9;1666:17;:25;1684:6;1666:25;;;;;;;;;;;;;;;;:38;;1658:47;;;;;;1716:8;1749:4;1740:6;;:13;;;;:::i;:::-;1727:9;:27;;;;:::i;:::-;1716:38;;1765:6;:15;;:32;1793:3;1781:9;:15;;;;:::i;:::-;1765:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1813:43;1827:6;1835:9;1846;1813:43;;;;;;;;:::i;:::-;;;;;;;;1647:217;1573:291;;:::o;1870:147::-;1960:2;1927:17;:29;1945:10;1927:29;;;;;;;;;;;;;;;;:35;;1919:44;;;;;;1979:30;1994:10;2006:2;1979:30;;;;;;;:::i;:::-;;;;;;;;1870:147;:::o;1256:311::-;1399:8;1364:17;:31;1382:12;1364:31;;;;;;;;;;;;;;;;:43;;1356:52;;;;;;1424:90;1439:10;1451:17;:29;1469:10;1451:29;;;;;;;;;;;;;;;;1482:12;1496:8;1506:7;1424:90;;;;;;;;;;:::i;:::-;;;;;;;;1558:1;1525:17;:29;1543:10;1525:29;;;;;;;;;;;;;;;;:34;;;;;;;:::i;:::-;;;;;;;;1256:311;;;:::o;2081:198:0:-;1094:13;:11;:13::i;:::-;2189:1:::1;2169:22;;:8;:22;;;;2161:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;2244:28;2263:8;2244:18;:28::i;:::-;2081:198:::0;:::o;1359:130::-;1433:12;:10;:12::i;:::-;1422:23;;:7;:5;:7::i;:::-;:23;;;1414:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;1359:130::o;2433:187::-;2506:16;2525:6;;;;;;;;;;;2506:25;;2550:8;2541:6;;:17;;;;;;;;;;;;;;;;;;2604:8;2573:40;;2594:8;2573:40;;;;;;;;;;;;2496:124;2433:187;:::o;640:96:1:-;693:7;719:10;712:17;;640:96;:::o;7:75:4:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:117;443:1;440;433:12;457:117;566:1;563;556:12;580:102;621:6;672:2;668:7;663:2;656:5;652:14;648:28;638:38;;580:102;;;:::o;688:180::-;736:77;733:1;726:88;833:4;830:1;823:15;857:4;854:1;847:15;874:281;957:27;979:4;957:27;:::i;:::-;949:6;945:40;1087:6;1075:10;1072:22;1051:18;1039:10;1036:34;1033:62;1030:88;;;1098:18;;:::i;:::-;1030:88;1138:10;1134:2;1127:22;917:238;874:281;;:::o;1161:129::-;1195:6;1222:20;;:::i;:::-;1212:30;;1251:33;1279:4;1271:6;1251:33;:::i;:::-;1161:129;;;:::o;1296:308::-;1358:4;1448:18;1440:6;1437:30;1434:56;;;1470:18;;:::i;:::-;1434:56;1508:29;1530:6;1508:29;:::i;:::-;1500:37;;1592:4;1586;1582:15;1574:23;;1296:308;;;:::o;1610:154::-;1694:6;1689:3;1684;1671:30;1756:1;1747:6;1742:3;1738:16;1731:27;1610:154;;;:::o;1770:412::-;1848:5;1873:66;1889:49;1931:6;1889:49;:::i;:::-;1873:66;:::i;:::-;1864:75;;1962:6;1955:5;1948:21;2000:4;1993:5;1989:16;2038:3;2029:6;2024:3;2020:16;2017:25;2014:112;;;2045:79;;:::i;:::-;2014:112;2135:41;2169:6;2164:3;2159;2135:41;:::i;:::-;1854:328;1770:412;;;;;:::o;2202:340::-;2258:5;2307:3;2300:4;2292:6;2288:17;2284:27;2274:122;;2315:79;;:::i;:::-;2274:122;2432:6;2419:20;2457:79;2532:3;2524:6;2517:4;2509:6;2505:17;2457:79;:::i;:::-;2448:88;;2264:278;2202:340;;;;:::o;2548:509::-;2617:6;2666:2;2654:9;2645:7;2641:23;2637:32;2634:119;;;2672:79;;:::i;:::-;2634:119;2820:1;2809:9;2805:17;2792:31;2850:18;2842:6;2839:30;2836:117;;;2872:79;;:::i;:::-;2836:117;2977:63;3032:7;3023:6;3012:9;3008:22;2977:63;:::i;:::-;2967:73;;2763:287;2548:509;;;;:::o;3063:77::-;3100:7;3129:5;3118:16;;3063:77;;;:::o;3146:122::-;3219:24;3237:5;3219:24;:::i;:::-;3212:5;3209:35;3199:63;;3258:1;3255;3248:12;3199:63;3146:122;:::o;3274:139::-;3320:5;3358:6;3345:20;3336:29;;3374:33;3401:5;3374:33;:::i;:::-;3274:139;;;;:::o;3419:329::-;3478:6;3527:2;3515:9;3506:7;3502:23;3498:32;3495:119;;;3533:79;;:::i;:::-;3495:119;3653:1;3678:53;3723:7;3714:6;3703:9;3699:22;3678:53;:::i;:::-;3668:63;;3624:117;3419:329;;;;:::o;3754:654::-;3832:6;3840;3889:2;3877:9;3868:7;3864:23;3860:32;3857:119;;;3895:79;;:::i;:::-;3857:119;4015:1;4040:53;4085:7;4076:6;4065:9;4061:22;4040:53;:::i;:::-;4030:63;;3986:117;4170:2;4159:9;4155:18;4142:32;4201:18;4193:6;4190:30;4187:117;;;4223:79;;:::i;:::-;4187:117;4328:63;4383:7;4374:6;4363:9;4359:22;4328:63;:::i;:::-;4318:73;;4113:288;3754:654;;;;;:::o;4414:126::-;4451:7;4491:42;4484:5;4480:54;4469:65;;4414:126;;;:::o;4546:96::-;4583:7;4612:24;4630:5;4612:24;:::i;:::-;4601:35;;4546:96;;;:::o;4648:118::-;4735:24;4753:5;4735:24;:::i;:::-;4730:3;4723:37;4648:118;;:::o;4772:222::-;4865:4;4903:2;4892:9;4888:18;4880:26;;4916:71;4984:1;4973:9;4969:17;4960:6;4916:71;:::i;:::-;4772:222;;;;:::o;5000:104::-;5045:7;5074:24;5092:5;5074:24;:::i;:::-;5063:35;;5000:104;;;:::o;5110:138::-;5191:32;5217:5;5191:32;:::i;:::-;5184:5;5181:43;5171:71;;5238:1;5235;5228:12;5171:71;5110:138;:::o;5254:155::-;5308:5;5346:6;5333:20;5324:29;;5362:41;5397:5;5362:41;:::i;:::-;5254:155;;;;:::o;5415:490::-;5491:6;5499;5548:2;5536:9;5527:7;5523:23;5519:32;5516:119;;;5554:79;;:::i;:::-;5516:119;5674:1;5699:61;5752:7;5743:6;5732:9;5728:22;5699:61;:::i;:::-;5689:71;;5645:125;5809:2;5835:53;5880:7;5871:6;5860:9;5856:22;5835:53;:::i;:::-;5825:63;;5780:118;5415:490;;;;;:::o;5911:122::-;5984:24;6002:5;5984:24;:::i;:::-;5977:5;5974:35;5964:63;;6023:1;6020;6013:12;5964:63;5911:122;:::o;6039:139::-;6085:5;6123:6;6110:20;6101:29;;6139:33;6166:5;6139:33;:::i;:::-;6039:139;;;;:::o;6184:799::-;6271:6;6279;6287;6336:2;6324:9;6315:7;6311:23;6307:32;6304:119;;;6342:79;;:::i;:::-;6304:119;6490:1;6479:9;6475:17;6462:31;6520:18;6512:6;6509:30;6506:117;;;6542:79;;:::i;:::-;6506:117;6647:63;6702:7;6693:6;6682:9;6678:22;6647:63;:::i;:::-;6637:73;;6433:287;6759:2;6785:53;6830:7;6821:6;6810:9;6806:22;6785:53;:::i;:::-;6775:63;;6730:118;6887:2;6913:53;6958:7;6949:6;6938:9;6934:22;6913:53;:::i;:::-;6903:63;;6858:118;6184:799;;;;;:::o;6989:329::-;7048:6;7097:2;7085:9;7076:7;7072:23;7068:32;7065:119;;;7103:79;;:::i;:::-;7065:119;7223:1;7248:53;7293:7;7284:6;7273:9;7269:22;7248:53;:::i;:::-;7238:63;;7194:117;6989:329;;;;:::o;7324:118::-;7411:24;7429:5;7411:24;:::i;:::-;7406:3;7399:37;7324:118;;:::o;7448:99::-;7500:6;7534:5;7528:12;7518:22;;7448:99;;;:::o;7553:169::-;7637:11;7671:6;7666:3;7659:19;7711:4;7706:3;7702:14;7687:29;;7553:169;;;;:::o;7728:307::-;7796:1;7806:113;7820:6;7817:1;7814:13;7806:113;;;7905:1;7900:3;7896:11;7890:18;7886:1;7881:3;7877:11;7870:39;7842:2;7839:1;7835:10;7830:15;;7806:113;;;7937:6;7934:1;7931:13;7928:101;;;8017:1;8008:6;8003:3;7999:16;7992:27;7928:101;7777:258;7728:307;;;:::o;8041:364::-;8129:3;8157:39;8190:5;8157:39;:::i;:::-;8212:71;8276:6;8271:3;8212:71;:::i;:::-;8205:78;;8292:52;8337:6;8332:3;8325:4;8318:5;8314:16;8292:52;:::i;:::-;8369:29;8391:6;8369:29;:::i;:::-;8364:3;8360:39;8353:46;;8133:272;8041:364;;;;:::o;8411:533::-;8580:4;8618:2;8607:9;8603:18;8595:26;;8631:71;8699:1;8688:9;8684:17;8675:6;8631:71;:::i;:::-;8712:72;8780:2;8769:9;8765:18;8756:6;8712:72;:::i;:::-;8831:9;8825:4;8821:20;8816:2;8805:9;8801:18;8794:48;8859:78;8932:4;8923:6;8859:78;:::i;:::-;8851:86;;8411:533;;;;;;:::o;8950:180::-;8998:77;8995:1;8988:88;9095:4;9092:1;9085:15;9119:4;9116:1;9109:15;9136:305;9176:3;9195:20;9213:1;9195:20;:::i;:::-;9190:25;;9229:20;9247:1;9229:20;:::i;:::-;9224:25;;9383:1;9315:66;9311:74;9308:1;9305:81;9302:107;;;9389:18;;:::i;:::-;9302:107;9433:1;9430;9426:9;9419:16;;9136:305;;;;:::o;9447:423::-;9588:4;9626:2;9615:9;9611:18;9603:26;;9639:71;9707:1;9696:9;9692:17;9683:6;9639:71;:::i;:::-;9757:9;9751:4;9747:20;9742:2;9731:9;9727:18;9720:48;9785:78;9858:4;9849:6;9785:78;:::i;:::-;9777:86;;9447:423;;;;;:::o;9876:180::-;9924:77;9921:1;9914:88;10021:4;10018:1;10011:15;10045:4;10042:1;10035:15;10062:185;10102:1;10119:20;10137:1;10119:20;:::i;:::-;10114:25;;10153:20;10171:1;10153:20;:::i;:::-;10148:25;;10192:1;10182:35;;10197:18;;:::i;:::-;10182:35;10239:1;10236;10232:9;10227:14;;10062:185;;;;:::o;10253:348::-;10293:7;10316:20;10334:1;10316:20;:::i;:::-;10311:25;;10350:20;10368:1;10350:20;:::i;:::-;10345:25;;10538:1;10470:66;10466:74;10463:1;10460:81;10455:1;10448:9;10441:17;10437:105;10434:131;;;10545:18;;:::i;:::-;10434:131;10593:1;10590;10586:9;10575:20;;10253:348;;;;:::o;10607:191::-;10647:4;10667:20;10685:1;10667:20;:::i;:::-;10662:25;;10701:20;10719:1;10701:20;:::i;:::-;10696:25;;10740:1;10737;10734:8;10731:34;;;10745:18;;:::i;:::-;10731:34;10790:1;10787;10783:9;10775:17;;10607:191;;;;:::o;10804:60::-;10832:3;10853:5;10846:12;;10804:60;;;:::o;10870:142::-;10920:9;10953:53;10971:34;10980:24;10998:5;10980:24;:::i;:::-;10971:34;:::i;:::-;10953:53;:::i;:::-;10940:66;;10870:142;;;:::o;11018:126::-;11068:9;11101:37;11132:5;11101:37;:::i;:::-;11088:50;;11018:126;;;:::o;11150:134::-;11208:9;11241:37;11272:5;11241:37;:::i;:::-;11228:50;;11150:134;;;:::o;11290:147::-;11385:45;11424:5;11385:45;:::i;:::-;11380:3;11373:58;11290:147;;:::o;11443:458::-;11600:4;11638:2;11627:9;11623:18;11615:26;;11651:79;11727:1;11716:9;11712:17;11703:6;11651:79;:::i;:::-;11740:72;11808:2;11797:9;11793:18;11784:6;11740:72;:::i;:::-;11822;11890:2;11879:9;11875:18;11866:6;11822:72;:::i;:::-;11443:458;;;;;;:::o;11907:332::-;12028:4;12066:2;12055:9;12051:18;12043:26;;12079:71;12147:1;12136:9;12132:17;12123:6;12079:71;:::i;:::-;12160:72;12228:2;12217:9;12213:18;12204:6;12160:72;:::i;:::-;11907:332;;;;;:::o;12245:755::-;12470:4;12508:3;12497:9;12493:19;12485:27;;12522:71;12590:1;12579:9;12575:17;12566:6;12522:71;:::i;:::-;12603:72;12671:2;12660:9;12656:18;12647:6;12603:72;:::i;:::-;12685;12753:2;12742:9;12738:18;12729:6;12685:72;:::i;:::-;12767;12835:2;12824:9;12820:18;12811:6;12767:72;:::i;:::-;12887:9;12881:4;12877:20;12871:3;12860:9;12856:19;12849:49;12915:78;12988:4;12979:6;12915:78;:::i;:::-;12907:86;;12245:755;;;;;;;;:::o;13006:225::-;13146:34;13142:1;13134:6;13130:14;13123:58;13215:8;13210:2;13202:6;13198:15;13191:33;13006:225;:::o;13237:366::-;13379:3;13400:67;13464:2;13459:3;13400:67;:::i;:::-;13393:74;;13476:93;13565:3;13476:93;:::i;:::-;13594:2;13589:3;13585:12;13578:19;;13237:366;;;:::o;13609:419::-;13775:4;13813:2;13802:9;13798:18;13790:26;;13862:9;13856:4;13852:20;13848:1;13837:9;13833:17;13826:47;13890:131;14016:4;13890:131;:::i;:::-;13882:139;;13609:419;;;:::o;14034:182::-;14174:34;14170:1;14162:6;14158:14;14151:58;14034:182;:::o;14222:366::-;14364:3;14385:67;14449:2;14444:3;14385:67;:::i;:::-;14378:74;;14461:93;14550:3;14461:93;:::i;:::-;14579:2;14574:3;14570:12;14563:19;;14222:366;;;:::o;14594:419::-;14760:4;14798:2;14787:9;14783:18;14775:26;;14847:9;14841:4;14837:20;14833:1;14822:9;14818:17;14811:47;14875:131;15001:4;14875:131;:::i;:::-;14867:139;;14594:419;;;:::o",
  "source": "pragma solidity >=0.4.22 <0.9.0;\r\n//SPDX-License-Identifier: MIT\r\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\r\n\r\ncontract Messages is Ownable{\r\n    uint tipFee = 100;\r\n    uint usernameFee = 100;\r\n\r\n    event MessageCreated(address author, uint id, string content);\r\n    event CommentCreated(address author, uint id, address parentAuthor, uint parentID, string content);\r\n    event MessageTipped(address author, uint messageID, uint tipAmount);\r\n    event MessageDeleted(address author, uint id);\r\n    event MessageEdited(address author, uint id, string newContent);\r\n    event NewUsername(address user, string name);\r\n\r\n    mapping (address => uint) authorToMessageID;\r\n\r\n    function changeTipFee(uint newFee) onlyOwner public{\r\n        require(newFee <= 500);\r\n        tipFee = newFee;\r\n    }\r\n    function changeUsernameFee(uint newFee) onlyOwner public{\r\n        usernameFee = newFee;\r\n    }\r\n    function withdraw() external onlyOwner {\r\n    address payable _owner = payable(owner());\r\n    _owner.transfer(address(this).balance);\r\n    }\r\n    \r\n    function createMessage(string memory content) public{\r\n        emit MessageCreated(msg.sender, authorToMessageID[msg.sender], content);\r\n        authorToMessageID[msg.sender] += 1;\r\n    }\r\n    function createComment(string memory content, address parentAuthor, uint parentID) public{\r\n        require(authorToMessageID[parentAuthor] >= parentID);\r\n        emit CommentCreated(msg.sender, authorToMessageID[msg.sender], parentAuthor, parentID, content);\r\n        authorToMessageID[msg.sender] += 1;\r\n    }\r\n    function tipMessage(address payable author, uint messageID) public payable{\r\n        require(authorToMessageID[author] >= messageID);\r\n        uint fee = msg.value * (tipFee / 1000);\r\n        author.transfer(msg.value - fee);\r\n        emit MessageTipped(author, messageID, msg.value);\r\n    }\r\n    function deleteMessage(uint id) public{\r\n        require(authorToMessageID[msg.sender] >= id);\r\n        emit MessageDeleted(msg.sender, id);\r\n    }\r\n    function editMessage(uint id, string memory newContent) public{\r\n        require(authorToMessageID[msg.sender] >= id);\r\n        emit MessageEdited(msg.sender, id, newContent);\r\n    }\r\n    function changeUsername(string memory name) public payable{\r\n        require(msg.value == usernameFee);\r\n        emit NewUsername(msg.sender, name);\r\n    }\r\n}",
  "sourcePath": "C:\\Git\\Social Media DApp\\Backend\\contracts\\messages.sol",
  "ast": {
    "absolutePath": "project:/contracts/messages.sol",
    "exportedSymbols": {
      "Context": [
        134
      ],
      "Messages": [
        451
      ],
      "Ownable": [
        112
      ]
    },
    "id": 452,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 169,
        "literals": [
          "solidity",
          ">=",
          "0.4",
          ".22",
          "<",
          "0.9",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:32:3"
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 170,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 452,
        "sourceUnit": 113,
        "src": "66:52:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 171,
              "name": "Ownable",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 112,
              "src": "143:7:3"
            },
            "id": 172,
            "nodeType": "InheritanceSpecifier",
            "src": "143:7:3"
          }
        ],
        "canonicalName": "Messages",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 451,
        "linearizedBaseContracts": [
          451,
          112,
          134
        ],
        "name": "Messages",
        "nameLocation": "131:8:3",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 175,
            "mutability": "mutable",
            "name": "tipFee",
            "nameLocation": "162:6:3",
            "nodeType": "VariableDeclaration",
            "scope": 451,
            "src": "157:17:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 173,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "157:4:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313030",
              "id": 174,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "171:3:3",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100_by_1",
                "typeString": "int_const 100"
              },
              "value": "100"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 178,
            "mutability": "mutable",
            "name": "usernameFee",
            "nameLocation": "186:11:3",
            "nodeType": "VariableDeclaration",
            "scope": 451,
            "src": "181:22:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 176,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "181:4:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313030",
              "id": 177,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "200:3:3",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100_by_1",
                "typeString": "int_const 100"
              },
              "value": "100"
            },
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "id": 186,
            "name": "MessageCreated",
            "nameLocation": "218:14:3",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 185,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 180,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "author",
                  "nameLocation": "241:6:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 186,
                  "src": "233:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 179,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "233:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 182,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "254:2:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 186,
                  "src": "249:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 181,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "249:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 184,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "content",
                  "nameLocation": "265:7:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 186,
                  "src": "258:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 183,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "258:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "232:41:3"
            },
            "src": "212:62:3"
          },
          {
            "anonymous": false,
            "id": 198,
            "name": "CommentCreated",
            "nameLocation": "286:14:3",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 197,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 188,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "author",
                  "nameLocation": "309:6:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 198,
                  "src": "301:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 187,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "301:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 190,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "322:2:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 198,
                  "src": "317:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 189,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "317:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 192,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "parentAuthor",
                  "nameLocation": "334:12:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 198,
                  "src": "326:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 191,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "326:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 194,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "parentID",
                  "nameLocation": "353:8:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 198,
                  "src": "348:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 193,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "348:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 196,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "content",
                  "nameLocation": "370:7:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 198,
                  "src": "363:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 195,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "300:78:3"
            },
            "src": "280:99:3"
          },
          {
            "anonymous": false,
            "id": 206,
            "name": "MessageTipped",
            "nameLocation": "391:13:3",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 200,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "author",
                  "nameLocation": "413:6:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 206,
                  "src": "405:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 199,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "405:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 202,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "messageID",
                  "nameLocation": "426:9:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 206,
                  "src": "421:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 201,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "421:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 204,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "tipAmount",
                  "nameLocation": "442:9:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 206,
                  "src": "437:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 203,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "437:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "404:48:3"
            },
            "src": "385:68:3"
          },
          {
            "anonymous": false,
            "id": 212,
            "name": "MessageDeleted",
            "nameLocation": "465:14:3",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 211,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 208,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "author",
                  "nameLocation": "488:6:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 212,
                  "src": "480:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 207,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "480:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 210,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "501:2:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 212,
                  "src": "496:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 209,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "496:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "479:25:3"
            },
            "src": "459:46:3"
          },
          {
            "anonymous": false,
            "id": 220,
            "name": "MessageEdited",
            "nameLocation": "517:13:3",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 219,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 214,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "author",
                  "nameLocation": "539:6:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 220,
                  "src": "531:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 213,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "531:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 216,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "552:2:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 220,
                  "src": "547:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 215,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "547:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 218,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newContent",
                  "nameLocation": "563:10:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 220,
                  "src": "556:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 217,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "556:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "530:44:3"
            },
            "src": "511:64:3"
          },
          {
            "anonymous": false,
            "id": 226,
            "name": "NewUsername",
            "nameLocation": "587:11:3",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 225,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 222,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "607:4:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 226,
                  "src": "599:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 221,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "599:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 224,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "620:4:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 226,
                  "src": "613:11:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 223,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "613:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "598:27:3"
            },
            "src": "581:45:3"
          },
          {
            "constant": false,
            "id": 230,
            "mutability": "mutable",
            "name": "authorToMessageID",
            "nameLocation": "660:17:3",
            "nodeType": "VariableDeclaration",
            "scope": 451,
            "src": "634:43:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 229,
              "keyType": {
                "id": 227,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "643:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "634:25:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 228,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "654:4:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 247,
              "nodeType": "Block",
              "src": "737:67:3",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 240,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 238,
                          "name": "newFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 232,
                          "src": "756:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "hexValue": "353030",
                          "id": 239,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "766:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_500_by_1",
                            "typeString": "int_const 500"
                          },
                          "value": "500"
                        },
                        "src": "756:13:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 237,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "748:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 241,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "748:22:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 242,
                  "nodeType": "ExpressionStatement",
                  "src": "748:22:3"
                },
                {
                  "expression": {
                    "id": 245,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 243,
                      "name": "tipFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 175,
                      "src": "781:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 244,
                      "name": "newFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 232,
                      "src": "790:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "781:15:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 246,
                  "nodeType": "ExpressionStatement",
                  "src": "781:15:3"
                }
              ]
            },
            "functionSelector": "6b7be000",
            "id": 248,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 235,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 234,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "721:9:3"
                },
                "nodeType": "ModifierInvocation",
                "src": "721:9:3"
              }
            ],
            "name": "changeTipFee",
            "nameLocation": "695:12:3",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 233,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 232,
                  "mutability": "mutable",
                  "name": "newFee",
                  "nameLocation": "713:6:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 248,
                  "src": "708:11:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 231,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "708:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "707:13:3"
            },
            "returnParameters": {
              "id": 236,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "737:0:3"
            },
            "scope": 451,
            "src": "686:118:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 259,
              "nodeType": "Block",
              "src": "866:39:3",
              "statements": [
                {
                  "expression": {
                    "id": 257,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 255,
                      "name": "usernameFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 178,
                      "src": "877:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 256,
                      "name": "newFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 250,
                      "src": "891:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "877:20:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 258,
                  "nodeType": "ExpressionStatement",
                  "src": "877:20:3"
                }
              ]
            },
            "functionSelector": "9edad502",
            "id": 260,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 253,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 252,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "850:9:3"
                },
                "nodeType": "ModifierInvocation",
                "src": "850:9:3"
              }
            ],
            "name": "changeUsernameFee",
            "nameLocation": "819:17:3",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 251,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 250,
                  "mutability": "mutable",
                  "name": "newFee",
                  "nameLocation": "842:6:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 260,
                  "src": "837:11:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 249,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "837:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "836:13:3"
            },
            "returnParameters": {
              "id": 254,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "866:0:3"
            },
            "scope": 451,
            "src": "810:95:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 283,
              "nodeType": "Block",
              "src": "950:101:3",
              "statements": [
                {
                  "assignments": [
                    266
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 266,
                      "mutability": "mutable",
                      "name": "_owner",
                      "nameLocation": "973:6:3",
                      "nodeType": "VariableDeclaration",
                      "scope": 283,
                      "src": "957:22:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      },
                      "typeName": {
                        "id": 265,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "957:15:3",
                        "stateMutability": "payable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 272,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 269,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 40,
                          "src": "990:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 270,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "990:7:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 268,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "982:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_payable_$",
                        "typeString": "type(address payable)"
                      },
                      "typeName": {
                        "id": 267,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "982:8:3",
                        "stateMutability": "payable",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 271,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "982:16:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "957:41:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 278,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967268,
                              "src": "1029:4:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Messages_$451",
                                "typeString": "contract Messages"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_Messages_$451",
                                "typeString": "contract Messages"
                              }
                            ],
                            "id": 277,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1021:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 276,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1021:7:3",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 279,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1021:13:3",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 280,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "src": "1021:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 273,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 266,
                        "src": "1005:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 275,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "src": "1005:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 281,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1005:38:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 282,
                  "nodeType": "ExpressionStatement",
                  "src": "1005:38:3"
                }
              ]
            },
            "functionSelector": "3ccfd60b",
            "id": 284,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 263,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 262,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "940:9:3"
                },
                "nodeType": "ModifierInvocation",
                "src": "940:9:3"
              }
            ],
            "name": "withdraw",
            "nameLocation": "920:8:3",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 261,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "928:2:3"
            },
            "returnParameters": {
              "id": 264,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "950:0:3"
            },
            "scope": 451,
            "src": "911:140:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 306,
              "nodeType": "Block",
              "src": "1115:135:3",
              "statements": [
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 290,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1146:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 291,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1146:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "baseExpression": {
                          "id": 292,
                          "name": "authorToMessageID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 230,
                          "src": "1158:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 295,
                        "indexExpression": {
                          "expression": {
                            "id": 293,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "1176:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 294,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "1176:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1158:29:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 296,
                        "name": "content",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 286,
                        "src": "1189:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 289,
                      "name": "MessageCreated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 186,
                      "src": "1131:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,string memory)"
                      }
                    },
                    "id": 297,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1131:66:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 298,
                  "nodeType": "EmitStatement",
                  "src": "1126:71:3"
                },
                {
                  "expression": {
                    "id": 304,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 299,
                        "name": "authorToMessageID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 230,
                        "src": "1208:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 302,
                      "indexExpression": {
                        "expression": {
                          "id": 300,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1226:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 301,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1226:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1208:29:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "hexValue": "31",
                      "id": 303,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1241:1:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "1208:34:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 305,
                  "nodeType": "ExpressionStatement",
                  "src": "1208:34:3"
                }
              ]
            },
            "functionSelector": "198a2de9",
            "id": 307,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "createMessage",
            "nameLocation": "1072:13:3",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 287,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 286,
                  "mutability": "mutable",
                  "name": "content",
                  "nameLocation": "1100:7:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 307,
                  "src": "1086:21:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 285,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1086:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1085:23:3"
            },
            "returnParameters": {
              "id": 288,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1115:0:3"
            },
            "scope": 451,
            "src": "1063:187:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 343,
              "nodeType": "Block",
              "src": "1345:222:3",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 321,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "id": 317,
                            "name": "authorToMessageID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 230,
                            "src": "1364:17:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 319,
                          "indexExpression": {
                            "id": 318,
                            "name": "parentAuthor",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 311,
                            "src": "1382:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1364:31:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 320,
                          "name": "parentID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 313,
                          "src": "1399:8:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1364:43:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 316,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1356:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 322,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1356:52:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 323,
                  "nodeType": "ExpressionStatement",
                  "src": "1356:52:3"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 325,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1439:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 326,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1439:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "baseExpression": {
                          "id": 327,
                          "name": "authorToMessageID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 230,
                          "src": "1451:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 330,
                        "indexExpression": {
                          "expression": {
                            "id": 328,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "1469:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 329,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "1469:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1451:29:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 331,
                        "name": "parentAuthor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 311,
                        "src": "1482:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 332,
                        "name": "parentID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 313,
                        "src": "1496:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 333,
                        "name": "content",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 309,
                        "src": "1506:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 324,
                      "name": "CommentCreated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 198,
                      "src": "1424:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_address_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,address,uint256,string memory)"
                      }
                    },
                    "id": 334,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1424:90:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 335,
                  "nodeType": "EmitStatement",
                  "src": "1419:95:3"
                },
                {
                  "expression": {
                    "id": 341,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 336,
                        "name": "authorToMessageID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 230,
                        "src": "1525:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 339,
                      "indexExpression": {
                        "expression": {
                          "id": 337,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1543:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 338,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1543:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1525:29:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "hexValue": "31",
                      "id": 340,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1558:1:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "1525:34:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 342,
                  "nodeType": "ExpressionStatement",
                  "src": "1525:34:3"
                }
              ]
            },
            "functionSelector": "bcdf202d",
            "id": 344,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "createComment",
            "nameLocation": "1265:13:3",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 314,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 309,
                  "mutability": "mutable",
                  "name": "content",
                  "nameLocation": "1293:7:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 344,
                  "src": "1279:21:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 308,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1279:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 311,
                  "mutability": "mutable",
                  "name": "parentAuthor",
                  "nameLocation": "1310:12:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 344,
                  "src": "1302:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 310,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1302:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 313,
                  "mutability": "mutable",
                  "name": "parentID",
                  "nameLocation": "1329:8:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 344,
                  "src": "1324:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 312,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1324:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1278:60:3"
            },
            "returnParameters": {
              "id": 315,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1345:0:3"
            },
            "scope": 451,
            "src": "1256:311:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 385,
              "nodeType": "Block",
              "src": "1647:217:3",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 356,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "id": 352,
                            "name": "authorToMessageID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 230,
                            "src": "1666:17:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 354,
                          "indexExpression": {
                            "id": 353,
                            "name": "author",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 346,
                            "src": "1684:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1666:25:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 355,
                          "name": "messageID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 348,
                          "src": "1695:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1666:38:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 351,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1658:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 357,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1658:47:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 358,
                  "nodeType": "ExpressionStatement",
                  "src": "1658:47:3"
                },
                {
                  "assignments": [
                    360
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 360,
                      "mutability": "mutable",
                      "name": "fee",
                      "nameLocation": "1721:3:3",
                      "nodeType": "VariableDeclaration",
                      "scope": 385,
                      "src": "1716:8:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 359,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1716:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 368,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 367,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 361,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967281,
                        "src": "1727:3:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 362,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "src": "1727:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 365,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 363,
                            "name": "tipFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 175,
                            "src": "1740:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "hexValue": "31303030",
                            "id": 364,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1749:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1000_by_1",
                              "typeString": "int_const 1000"
                            },
                            "value": "1000"
                          },
                          "src": "1740:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 366,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1739:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1727:27:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1716:38:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 375,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 372,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "1781:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 373,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "src": "1781:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 374,
                          "name": "fee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 360,
                          "src": "1793:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1781:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 369,
                        "name": "author",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 346,
                        "src": "1765:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 371,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "src": "1765:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 376,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1765:32:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 377,
                  "nodeType": "ExpressionStatement",
                  "src": "1765:32:3"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 379,
                        "name": "author",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 346,
                        "src": "1827:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "id": 380,
                        "name": "messageID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 348,
                        "src": "1835:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 381,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1846:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 382,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "src": "1846:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 378,
                      "name": "MessageTipped",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 206,
                      "src": "1813:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256,uint256)"
                      }
                    },
                    "id": 383,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1813:43:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 384,
                  "nodeType": "EmitStatement",
                  "src": "1808:48:3"
                }
              ]
            },
            "functionSelector": "9f76968f",
            "id": 386,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tipMessage",
            "nameLocation": "1582:10:3",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 349,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 346,
                  "mutability": "mutable",
                  "name": "author",
                  "nameLocation": "1609:6:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 386,
                  "src": "1593:22:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 345,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1593:15:3",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 348,
                  "mutability": "mutable",
                  "name": "messageID",
                  "nameLocation": "1622:9:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 386,
                  "src": "1617:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 347,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1617:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1592:40:3"
            },
            "returnParameters": {
              "id": 350,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1647:0:3"
            },
            "scope": 451,
            "src": "1573:291:3",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 406,
              "nodeType": "Block",
              "src": "1908:109:3",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 397,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "id": 392,
                            "name": "authorToMessageID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 230,
                            "src": "1927:17:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 395,
                          "indexExpression": {
                            "expression": {
                              "id": 393,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "1945:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 394,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "1945:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1927:29:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 396,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 388,
                          "src": "1960:2:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1927:35:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 391,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1919:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 398,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1919:44:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 399,
                  "nodeType": "ExpressionStatement",
                  "src": "1919:44:3"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 401,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1994:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 402,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1994:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 403,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 388,
                        "src": "2006:2:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 400,
                      "name": "MessageDeleted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 212,
                      "src": "1979:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 404,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1979:30:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 405,
                  "nodeType": "EmitStatement",
                  "src": "1974:35:3"
                }
              ]
            },
            "functionSelector": "b888690a",
            "id": 407,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deleteMessage",
            "nameLocation": "1879:13:3",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 389,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 388,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "1898:2:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 407,
                  "src": "1893:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 387,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1893:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1892:9:3"
            },
            "returnParameters": {
              "id": 390,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1908:0:3"
            },
            "scope": 451,
            "src": "1870:147:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 430,
              "nodeType": "Block",
              "src": "2085:120:3",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 420,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "id": 415,
                            "name": "authorToMessageID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 230,
                            "src": "2104:17:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 418,
                          "indexExpression": {
                            "expression": {
                              "id": 416,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "2122:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 417,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "2122:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2104:29:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 419,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 409,
                          "src": "2137:2:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2104:35:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 414,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2096:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 421,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2096:44:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 422,
                  "nodeType": "ExpressionStatement",
                  "src": "2096:44:3"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 424,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "2170:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 425,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2170:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 426,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 409,
                        "src": "2182:2:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 427,
                        "name": "newContent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 411,
                        "src": "2186:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 423,
                      "name": "MessageEdited",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 220,
                      "src": "2156:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,string memory)"
                      }
                    },
                    "id": 428,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2156:41:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 429,
                  "nodeType": "EmitStatement",
                  "src": "2151:46:3"
                }
              ]
            },
            "functionSelector": "87f9b00a",
            "id": 431,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "editMessage",
            "nameLocation": "2032:11:3",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 412,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 409,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "2049:2:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 431,
                  "src": "2044:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 408,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2044:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 411,
                  "mutability": "mutable",
                  "name": "newContent",
                  "nameLocation": "2067:10:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 431,
                  "src": "2053:24:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 410,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2053:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2043:35:3"
            },
            "returnParameters": {
              "id": 413,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2085:0:3"
            },
            "scope": 451,
            "src": "2023:182:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 449,
              "nodeType": "Block",
              "src": "2269:97:3",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 440,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 437,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "2288:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 438,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "src": "2288:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "id": 439,
                          "name": "usernameFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 178,
                          "src": "2301:11:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2288:24:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 436,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2280:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 441,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2280:33:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 442,
                  "nodeType": "ExpressionStatement",
                  "src": "2280:33:3"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 444,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "2341:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 445,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2341:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 446,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 433,
                        "src": "2353:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 443,
                      "name": "NewUsername",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 226,
                      "src": "2329:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,string memory)"
                      }
                    },
                    "id": 447,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2329:29:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 448,
                  "nodeType": "EmitStatement",
                  "src": "2324:34:3"
                }
              ]
            },
            "functionSelector": "77c846af",
            "id": 450,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "changeUsername",
            "nameLocation": "2220:14:3",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 434,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 433,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2249:4:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 450,
                  "src": "2235:18:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 432,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2235:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2234:20:3"
            },
            "returnParameters": {
              "id": 435,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2269:0:3"
            },
            "scope": 451,
            "src": "2211:155:3",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 452,
        "src": "122:2247:3",
        "usedErrors": []
      }
    ],
    "src": "0:2369:3"
  },
  "legacyAST": {
    "absolutePath": "project:/contracts/messages.sol",
    "exportedSymbols": {
      "Context": [
        134
      ],
      "Messages": [
        451
      ],
      "Ownable": [
        112
      ]
    },
    "id": 452,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 169,
        "literals": [
          "solidity",
          ">=",
          "0.4",
          ".22",
          "<",
          "0.9",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:32:3"
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 170,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 452,
        "sourceUnit": 113,
        "src": "66:52:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 171,
              "name": "Ownable",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 112,
              "src": "143:7:3"
            },
            "id": 172,
            "nodeType": "InheritanceSpecifier",
            "src": "143:7:3"
          }
        ],
        "canonicalName": "Messages",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 451,
        "linearizedBaseContracts": [
          451,
          112,
          134
        ],
        "name": "Messages",
        "nameLocation": "131:8:3",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 175,
            "mutability": "mutable",
            "name": "tipFee",
            "nameLocation": "162:6:3",
            "nodeType": "VariableDeclaration",
            "scope": 451,
            "src": "157:17:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 173,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "157:4:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313030",
              "id": 174,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "171:3:3",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100_by_1",
                "typeString": "int_const 100"
              },
              "value": "100"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 178,
            "mutability": "mutable",
            "name": "usernameFee",
            "nameLocation": "186:11:3",
            "nodeType": "VariableDeclaration",
            "scope": 451,
            "src": "181:22:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 176,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "181:4:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313030",
              "id": 177,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "200:3:3",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100_by_1",
                "typeString": "int_const 100"
              },
              "value": "100"
            },
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "id": 186,
            "name": "MessageCreated",
            "nameLocation": "218:14:3",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 185,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 180,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "author",
                  "nameLocation": "241:6:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 186,
                  "src": "233:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 179,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "233:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 182,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "254:2:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 186,
                  "src": "249:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 181,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "249:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 184,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "content",
                  "nameLocation": "265:7:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 186,
                  "src": "258:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 183,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "258:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "232:41:3"
            },
            "src": "212:62:3"
          },
          {
            "anonymous": false,
            "id": 198,
            "name": "CommentCreated",
            "nameLocation": "286:14:3",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 197,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 188,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "author",
                  "nameLocation": "309:6:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 198,
                  "src": "301:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 187,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "301:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 190,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "322:2:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 198,
                  "src": "317:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 189,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "317:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 192,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "parentAuthor",
                  "nameLocation": "334:12:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 198,
                  "src": "326:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 191,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "326:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 194,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "parentID",
                  "nameLocation": "353:8:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 198,
                  "src": "348:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 193,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "348:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 196,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "content",
                  "nameLocation": "370:7:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 198,
                  "src": "363:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 195,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "300:78:3"
            },
            "src": "280:99:3"
          },
          {
            "anonymous": false,
            "id": 206,
            "name": "MessageTipped",
            "nameLocation": "391:13:3",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 200,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "author",
                  "nameLocation": "413:6:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 206,
                  "src": "405:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 199,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "405:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 202,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "messageID",
                  "nameLocation": "426:9:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 206,
                  "src": "421:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 201,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "421:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 204,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "tipAmount",
                  "nameLocation": "442:9:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 206,
                  "src": "437:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 203,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "437:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "404:48:3"
            },
            "src": "385:68:3"
          },
          {
            "anonymous": false,
            "id": 212,
            "name": "MessageDeleted",
            "nameLocation": "465:14:3",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 211,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 208,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "author",
                  "nameLocation": "488:6:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 212,
                  "src": "480:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 207,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "480:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 210,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "501:2:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 212,
                  "src": "496:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 209,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "496:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "479:25:3"
            },
            "src": "459:46:3"
          },
          {
            "anonymous": false,
            "id": 220,
            "name": "MessageEdited",
            "nameLocation": "517:13:3",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 219,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 214,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "author",
                  "nameLocation": "539:6:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 220,
                  "src": "531:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 213,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "531:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 216,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "552:2:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 220,
                  "src": "547:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 215,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "547:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 218,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newContent",
                  "nameLocation": "563:10:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 220,
                  "src": "556:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 217,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "556:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "530:44:3"
            },
            "src": "511:64:3"
          },
          {
            "anonymous": false,
            "id": 226,
            "name": "NewUsername",
            "nameLocation": "587:11:3",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 225,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 222,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "607:4:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 226,
                  "src": "599:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 221,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "599:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 224,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "620:4:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 226,
                  "src": "613:11:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 223,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "613:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "598:27:3"
            },
            "src": "581:45:3"
          },
          {
            "constant": false,
            "id": 230,
            "mutability": "mutable",
            "name": "authorToMessageID",
            "nameLocation": "660:17:3",
            "nodeType": "VariableDeclaration",
            "scope": 451,
            "src": "634:43:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 229,
              "keyType": {
                "id": 227,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "643:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "634:25:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 228,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "654:4:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 247,
              "nodeType": "Block",
              "src": "737:67:3",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 240,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 238,
                          "name": "newFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 232,
                          "src": "756:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "hexValue": "353030",
                          "id": 239,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "766:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_500_by_1",
                            "typeString": "int_const 500"
                          },
                          "value": "500"
                        },
                        "src": "756:13:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 237,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "748:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 241,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "748:22:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 242,
                  "nodeType": "ExpressionStatement",
                  "src": "748:22:3"
                },
                {
                  "expression": {
                    "id": 245,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 243,
                      "name": "tipFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 175,
                      "src": "781:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 244,
                      "name": "newFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 232,
                      "src": "790:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "781:15:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 246,
                  "nodeType": "ExpressionStatement",
                  "src": "781:15:3"
                }
              ]
            },
            "functionSelector": "6b7be000",
            "id": 248,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 235,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 234,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "721:9:3"
                },
                "nodeType": "ModifierInvocation",
                "src": "721:9:3"
              }
            ],
            "name": "changeTipFee",
            "nameLocation": "695:12:3",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 233,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 232,
                  "mutability": "mutable",
                  "name": "newFee",
                  "nameLocation": "713:6:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 248,
                  "src": "708:11:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 231,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "708:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "707:13:3"
            },
            "returnParameters": {
              "id": 236,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "737:0:3"
            },
            "scope": 451,
            "src": "686:118:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 259,
              "nodeType": "Block",
              "src": "866:39:3",
              "statements": [
                {
                  "expression": {
                    "id": 257,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 255,
                      "name": "usernameFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 178,
                      "src": "877:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 256,
                      "name": "newFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 250,
                      "src": "891:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "877:20:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 258,
                  "nodeType": "ExpressionStatement",
                  "src": "877:20:3"
                }
              ]
            },
            "functionSelector": "9edad502",
            "id": 260,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 253,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 252,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "850:9:3"
                },
                "nodeType": "ModifierInvocation",
                "src": "850:9:3"
              }
            ],
            "name": "changeUsernameFee",
            "nameLocation": "819:17:3",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 251,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 250,
                  "mutability": "mutable",
                  "name": "newFee",
                  "nameLocation": "842:6:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 260,
                  "src": "837:11:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 249,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "837:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "836:13:3"
            },
            "returnParameters": {
              "id": 254,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "866:0:3"
            },
            "scope": 451,
            "src": "810:95:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 283,
              "nodeType": "Block",
              "src": "950:101:3",
              "statements": [
                {
                  "assignments": [
                    266
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 266,
                      "mutability": "mutable",
                      "name": "_owner",
                      "nameLocation": "973:6:3",
                      "nodeType": "VariableDeclaration",
                      "scope": 283,
                      "src": "957:22:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      },
                      "typeName": {
                        "id": 265,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "957:15:3",
                        "stateMutability": "payable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 272,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 269,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 40,
                          "src": "990:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 270,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "990:7:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 268,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "982:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_payable_$",
                        "typeString": "type(address payable)"
                      },
                      "typeName": {
                        "id": 267,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "982:8:3",
                        "stateMutability": "payable",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 271,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "982:16:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "957:41:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 278,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967268,
                              "src": "1029:4:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Messages_$451",
                                "typeString": "contract Messages"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_Messages_$451",
                                "typeString": "contract Messages"
                              }
                            ],
                            "id": 277,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1021:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 276,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1021:7:3",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 279,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1021:13:3",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 280,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "src": "1021:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 273,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 266,
                        "src": "1005:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 275,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "src": "1005:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 281,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1005:38:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 282,
                  "nodeType": "ExpressionStatement",
                  "src": "1005:38:3"
                }
              ]
            },
            "functionSelector": "3ccfd60b",
            "id": 284,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 263,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 262,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "940:9:3"
                },
                "nodeType": "ModifierInvocation",
                "src": "940:9:3"
              }
            ],
            "name": "withdraw",
            "nameLocation": "920:8:3",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 261,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "928:2:3"
            },
            "returnParameters": {
              "id": 264,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "950:0:3"
            },
            "scope": 451,
            "src": "911:140:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 306,
              "nodeType": "Block",
              "src": "1115:135:3",
              "statements": [
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 290,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1146:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 291,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1146:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "baseExpression": {
                          "id": 292,
                          "name": "authorToMessageID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 230,
                          "src": "1158:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 295,
                        "indexExpression": {
                          "expression": {
                            "id": 293,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "1176:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 294,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "1176:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1158:29:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 296,
                        "name": "content",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 286,
                        "src": "1189:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 289,
                      "name": "MessageCreated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 186,
                      "src": "1131:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,string memory)"
                      }
                    },
                    "id": 297,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1131:66:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 298,
                  "nodeType": "EmitStatement",
                  "src": "1126:71:3"
                },
                {
                  "expression": {
                    "id": 304,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 299,
                        "name": "authorToMessageID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 230,
                        "src": "1208:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 302,
                      "indexExpression": {
                        "expression": {
                          "id": 300,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1226:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 301,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1226:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1208:29:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "hexValue": "31",
                      "id": 303,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1241:1:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "1208:34:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 305,
                  "nodeType": "ExpressionStatement",
                  "src": "1208:34:3"
                }
              ]
            },
            "functionSelector": "198a2de9",
            "id": 307,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "createMessage",
            "nameLocation": "1072:13:3",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 287,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 286,
                  "mutability": "mutable",
                  "name": "content",
                  "nameLocation": "1100:7:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 307,
                  "src": "1086:21:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 285,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1086:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1085:23:3"
            },
            "returnParameters": {
              "id": 288,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1115:0:3"
            },
            "scope": 451,
            "src": "1063:187:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 343,
              "nodeType": "Block",
              "src": "1345:222:3",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 321,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "id": 317,
                            "name": "authorToMessageID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 230,
                            "src": "1364:17:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 319,
                          "indexExpression": {
                            "id": 318,
                            "name": "parentAuthor",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 311,
                            "src": "1382:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1364:31:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 320,
                          "name": "parentID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 313,
                          "src": "1399:8:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1364:43:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 316,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1356:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 322,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1356:52:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 323,
                  "nodeType": "ExpressionStatement",
                  "src": "1356:52:3"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 325,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1439:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 326,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1439:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "baseExpression": {
                          "id": 327,
                          "name": "authorToMessageID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 230,
                          "src": "1451:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 330,
                        "indexExpression": {
                          "expression": {
                            "id": 328,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "1469:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 329,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "1469:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1451:29:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 331,
                        "name": "parentAuthor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 311,
                        "src": "1482:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 332,
                        "name": "parentID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 313,
                        "src": "1496:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 333,
                        "name": "content",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 309,
                        "src": "1506:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 324,
                      "name": "CommentCreated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 198,
                      "src": "1424:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_address_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,address,uint256,string memory)"
                      }
                    },
                    "id": 334,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1424:90:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 335,
                  "nodeType": "EmitStatement",
                  "src": "1419:95:3"
                },
                {
                  "expression": {
                    "id": 341,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 336,
                        "name": "authorToMessageID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 230,
                        "src": "1525:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 339,
                      "indexExpression": {
                        "expression": {
                          "id": 337,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1543:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 338,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1543:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1525:29:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "hexValue": "31",
                      "id": 340,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1558:1:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "1525:34:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 342,
                  "nodeType": "ExpressionStatement",
                  "src": "1525:34:3"
                }
              ]
            },
            "functionSelector": "bcdf202d",
            "id": 344,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "createComment",
            "nameLocation": "1265:13:3",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 314,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 309,
                  "mutability": "mutable",
                  "name": "content",
                  "nameLocation": "1293:7:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 344,
                  "src": "1279:21:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 308,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1279:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 311,
                  "mutability": "mutable",
                  "name": "parentAuthor",
                  "nameLocation": "1310:12:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 344,
                  "src": "1302:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 310,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1302:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 313,
                  "mutability": "mutable",
                  "name": "parentID",
                  "nameLocation": "1329:8:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 344,
                  "src": "1324:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 312,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1324:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1278:60:3"
            },
            "returnParameters": {
              "id": 315,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1345:0:3"
            },
            "scope": 451,
            "src": "1256:311:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 385,
              "nodeType": "Block",
              "src": "1647:217:3",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 356,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "id": 352,
                            "name": "authorToMessageID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 230,
                            "src": "1666:17:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 354,
                          "indexExpression": {
                            "id": 353,
                            "name": "author",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 346,
                            "src": "1684:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1666:25:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 355,
                          "name": "messageID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 348,
                          "src": "1695:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1666:38:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 351,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1658:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 357,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1658:47:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 358,
                  "nodeType": "ExpressionStatement",
                  "src": "1658:47:3"
                },
                {
                  "assignments": [
                    360
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 360,
                      "mutability": "mutable",
                      "name": "fee",
                      "nameLocation": "1721:3:3",
                      "nodeType": "VariableDeclaration",
                      "scope": 385,
                      "src": "1716:8:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 359,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1716:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 368,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 367,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 361,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967281,
                        "src": "1727:3:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 362,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "src": "1727:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 365,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 363,
                            "name": "tipFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 175,
                            "src": "1740:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "hexValue": "31303030",
                            "id": 364,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1749:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1000_by_1",
                              "typeString": "int_const 1000"
                            },
                            "value": "1000"
                          },
                          "src": "1740:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 366,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1739:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1727:27:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1716:38:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 375,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 372,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "1781:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 373,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "src": "1781:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 374,
                          "name": "fee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 360,
                          "src": "1793:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1781:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 369,
                        "name": "author",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 346,
                        "src": "1765:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 371,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "src": "1765:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 376,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1765:32:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 377,
                  "nodeType": "ExpressionStatement",
                  "src": "1765:32:3"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 379,
                        "name": "author",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 346,
                        "src": "1827:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "id": 380,
                        "name": "messageID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 348,
                        "src": "1835:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 381,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1846:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 382,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "src": "1846:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 378,
                      "name": "MessageTipped",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 206,
                      "src": "1813:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256,uint256)"
                      }
                    },
                    "id": 383,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1813:43:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 384,
                  "nodeType": "EmitStatement",
                  "src": "1808:48:3"
                }
              ]
            },
            "functionSelector": "9f76968f",
            "id": 386,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tipMessage",
            "nameLocation": "1582:10:3",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 349,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 346,
                  "mutability": "mutable",
                  "name": "author",
                  "nameLocation": "1609:6:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 386,
                  "src": "1593:22:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 345,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1593:15:3",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 348,
                  "mutability": "mutable",
                  "name": "messageID",
                  "nameLocation": "1622:9:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 386,
                  "src": "1617:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 347,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1617:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1592:40:3"
            },
            "returnParameters": {
              "id": 350,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1647:0:3"
            },
            "scope": 451,
            "src": "1573:291:3",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 406,
              "nodeType": "Block",
              "src": "1908:109:3",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 397,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "id": 392,
                            "name": "authorToMessageID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 230,
                            "src": "1927:17:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 395,
                          "indexExpression": {
                            "expression": {
                              "id": 393,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "1945:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 394,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "1945:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1927:29:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 396,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 388,
                          "src": "1960:2:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1927:35:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 391,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1919:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 398,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1919:44:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 399,
                  "nodeType": "ExpressionStatement",
                  "src": "1919:44:3"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 401,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1994:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 402,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1994:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 403,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 388,
                        "src": "2006:2:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 400,
                      "name": "MessageDeleted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 212,
                      "src": "1979:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 404,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1979:30:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 405,
                  "nodeType": "EmitStatement",
                  "src": "1974:35:3"
                }
              ]
            },
            "functionSelector": "b888690a",
            "id": 407,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deleteMessage",
            "nameLocation": "1879:13:3",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 389,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 388,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "1898:2:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 407,
                  "src": "1893:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 387,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1893:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1892:9:3"
            },
            "returnParameters": {
              "id": 390,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1908:0:3"
            },
            "scope": 451,
            "src": "1870:147:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 430,
              "nodeType": "Block",
              "src": "2085:120:3",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 420,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "id": 415,
                            "name": "authorToMessageID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 230,
                            "src": "2104:17:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 418,
                          "indexExpression": {
                            "expression": {
                              "id": 416,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "2122:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 417,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "2122:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2104:29:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 419,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 409,
                          "src": "2137:2:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2104:35:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 414,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2096:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 421,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2096:44:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 422,
                  "nodeType": "ExpressionStatement",
                  "src": "2096:44:3"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 424,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "2170:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 425,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2170:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 426,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 409,
                        "src": "2182:2:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 427,
                        "name": "newContent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 411,
                        "src": "2186:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 423,
                      "name": "MessageEdited",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 220,
                      "src": "2156:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,string memory)"
                      }
                    },
                    "id": 428,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2156:41:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 429,
                  "nodeType": "EmitStatement",
                  "src": "2151:46:3"
                }
              ]
            },
            "functionSelector": "87f9b00a",
            "id": 431,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "editMessage",
            "nameLocation": "2032:11:3",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 412,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 409,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "2049:2:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 431,
                  "src": "2044:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 408,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2044:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 411,
                  "mutability": "mutable",
                  "name": "newContent",
                  "nameLocation": "2067:10:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 431,
                  "src": "2053:24:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 410,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2053:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2043:35:3"
            },
            "returnParameters": {
              "id": 413,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2085:0:3"
            },
            "scope": 451,
            "src": "2023:182:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 449,
              "nodeType": "Block",
              "src": "2269:97:3",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 440,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 437,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "2288:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 438,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "src": "2288:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "id": 439,
                          "name": "usernameFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 178,
                          "src": "2301:11:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2288:24:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 436,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2280:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 441,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2280:33:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 442,
                  "nodeType": "ExpressionStatement",
                  "src": "2280:33:3"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 444,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "2341:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 445,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2341:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 446,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 433,
                        "src": "2353:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 443,
                      "name": "NewUsername",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 226,
                      "src": "2329:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,string memory)"
                      }
                    },
                    "id": 447,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2329:29:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 448,
                  "nodeType": "EmitStatement",
                  "src": "2324:34:3"
                }
              ]
            },
            "functionSelector": "77c846af",
            "id": 450,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "changeUsername",
            "nameLocation": "2220:14:3",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 434,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 433,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2249:4:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 450,
                  "src": "2235:18:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 432,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2235:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2234:20:3"
            },
            "returnParameters": {
              "id": 435,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2269:0:3"
            },
            "scope": 451,
            "src": "2211:155:3",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 452,
        "src": "122:2247:3",
        "usedErrors": []
      }
    ],
    "src": "0:2369:3"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.9+commit.e5eed63a.Emscripten.clang"
  },
  "networks": {
    "5": {
      "events": {},
      "links": {},
      "address": "0x64656Dbb84De3A7bb12962C6843641763B4e6CAB",
      "transactionHash": "0xff00d7432b481ed14a64df5d408935fc6210b00264b3bfd25402e34b8d08ae87"
    }
  },
  "schemaVersion": "3.4.3",
  "updatedAt": "2022-09-15T04:19:38.090Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}