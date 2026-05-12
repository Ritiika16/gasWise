const { getGasFees } = require("./src/gas");

const {
    weiToEth,
    ethToWei,
    gweiToWei,
    weiToGwei
} = require("./src/converter");

const {
    estimateTransactionCost
} = require("./src/estimator");

module.exports = {
    getGasFees,
    weiToEth,
    ethToWei,
    gweiToWei,
    weiToGwei,
    estimateTransactionCost
};