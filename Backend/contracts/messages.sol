pragma solidity >=0.4.22 <0.9.0;
//SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/access/Ownable.sol";

contract Messages is Ownable{
    uint tipFee = 100;
    uint usernameFee = 100;

    event MessageCreated(address author, uint id, string content);
    event CommentCreated(address author, uint id, address parentAuthor, uint parentID, string content);
    event MessageTipped(address author, uint messageID, uint tipAmount);
    event MessageDeleted(address author, uint id);
    event MessageEdited(address author, uint id, string newContent);
    event NewUsername(address user, string name);

    mapping (address => uint) authorToMessageID;

    function changeTipFee(uint newFee) onlyOwner public{
        require(newFee <= 500);
        tipFee = newFee;
    }
    function changeUsernameFee(uint newFee) onlyOwner public{
        usernameFee = newFee;
    }
    function withdraw() external onlyOwner {
    address payable _owner = payable(owner());
    _owner.transfer(address(this).balance);
    }
    
    function createMessage(string memory content) public{
        emit MessageCreated(msg.sender, authorToMessageID[msg.sender], content);
        authorToMessageID[msg.sender] += 1;
    }
    function createComment(string memory content, address parentAuthor, uint parentID) public{
        require(authorToMessageID[parentAuthor] >= parentID);
        emit CommentCreated(msg.sender, authorToMessageID[msg.sender], parentAuthor, parentID, content);
        authorToMessageID[msg.sender] += 1;
    }
    function tipMessage(address payable author, uint messageID) public payable{
        require(authorToMessageID[author] >= messageID);
        uint fee = msg.value * (tipFee / 1000);
        author.transfer(msg.value - fee);
        emit MessageTipped(author, messageID, msg.value);
    }
    function deleteMessage(uint id) public{
        require(authorToMessageID[msg.sender] >= id);
        emit MessageDeleted(msg.sender, id);
    }
    function editMessage(uint id, string memory newContent) public{
        require(authorToMessageID[msg.sender] >= id);
        emit MessageEdited(msg.sender, id, newContent);
    }
    function changeUsername(string memory name) public payable{
        require(msg.value == usernameFee);
        emit NewUsername(msg.sender, name);
    }
}