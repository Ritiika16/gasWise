const { GAS_LIMITS } = require("./constants");
const { getEthPrice } = require("./price");

async function estimateTransactionCost(
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

    const ethPrice =
        await getEthPrice();

    const estimatedUsd =
        totalEth * ethPrice;

    return {
        transactionType,
        gasLimit,
        gasPriceGwei,
        totalEth: totalEth.toFixed(8),
        estimatedUsd:
            "$" + estimatedUsd.toFixed(4)
    };
}

module.exports = {
    estimateTransactionCost
};