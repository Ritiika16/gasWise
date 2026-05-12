const { ethers } = require("ethers");

function weiToEth(value) {
    return ethers.formatEther(value);
}

function ethToWei(value) {
    return ethers.parseEther(value.toString());
}

function gweiToWei(value) {
    return ethers.parseUnits(value.toString(), "gwei");
}

function weiToGwei(value) {
    return ethers.formatUnits(value.toString(), "gwei");
}

module.exports = {
    weiToEth,
    ethToWei,
    gweiToWei,
    weiToGwei
};