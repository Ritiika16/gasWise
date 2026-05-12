const { GAS_LIMITS } = require("./constants");

function estimateTransactionCost(
    transactionType,
    gasPriceGwei
) {

    const gasLimit =
        GAS_LIMITS[transactionType];

    if (!gasLimit) {

        return {
            error: "Invalid transaction type"
        };

    }

    const totalGwei =
        gasLimit * gasPriceGwei;

    const totalEth =
        totalGwei / 1e9;

    return {
        transactionType,
        gasLimit,
        gasPriceGwei,
        totalEth: totalEth.toFixed(8)
    };
}

module.exports = {
    estimateTransactionCost
};