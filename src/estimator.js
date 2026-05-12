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

    try {

        const gasLimit =
            GAS_LIMITS[
                transactionType
            ];

        if (!gasLimit) {

            return {
                success: false,
                error:
                    "Invalid transaction type"
            };

        }

        const selectedChain =
            CHAINS[chain];

        if (!selectedChain) {

            return {
                success: false,
                error:
                    "Unsupported chain"
            };

        }

        const totalGwei =
            gasLimit *
            gasPriceGwei;

        const totalNative =
            totalGwei / 1e9;

        const tokenPrice =
            await getTokenPrice(
                selectedChain.coingeckoId
            );

        if (!tokenPrice) {

            return {
                success: false,
                error:
                    "Token price unavailable"
            };

        }

        const estimatedUsd =
            totalNative *
            tokenPrice;

        return {

            success: true,

            chain,

            nativeToken:
                selectedChain
                .nativeToken,

            transactionType,

            gasLimit,

            gasPriceGwei,

            totalNative:
                totalNative
                .toFixed(8),

            estimatedUsd:
                "$"
                + estimatedUsd
                .toFixed(4)
        };

    } catch (error) {

        return {

            success: false,

            error:
                error.message
        };
    }
}

module.exports = {
    estimateTransactionCost
};