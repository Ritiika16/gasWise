const { GAS_LIMITS } =
    require("./constants");

const { CHAINS } =
    require("./chains");

const { getTokenPrice } =
    require("./price");

async function estimateTransactionCost(
    transactionType,
    gasPriceGwei,
    chain = "ethereum"
) {

    const gasLimit =
        GAS_LIMITS[transactionType];

    if (!gasLimit) {

        return {
            error:
                "Invalid transaction type"
        };

    }

    const selectedChain =
        CHAINS[chain];

    if (!selectedChain) {

        return {
            error:
                "Unsupported chain"
        };

    }

    const totalGwei =
        gasLimit * gasPriceGwei;

    const totalNative =
        totalGwei / 1e9;

    const tokenPrice =
        await getTokenPrice(
            selectedChain.coingeckoId
        );

    const estimatedUsd =
        totalNative * tokenPrice;

    return {

        chain,

        nativeToken:
            selectedChain.nativeToken,

        transactionType,

        gasLimit,

        gasPriceGwei,

        totalNative:
            totalNative.toFixed(8),

        estimatedUsd:
            "$" + estimatedUsd.toFixed(4)
    };
}

module.exports = {
    estimateTransactionCost
};