const messages = artifacts.require("messages");

module.exports = function (deployer) {
  deployer.deploy(messages);
};
