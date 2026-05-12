const { ethers } = require("ethers");

const { CHAINS } =
    require("./chains");

async function getGasFees(
    chain = "ethereum"
) {

    try {

        const selectedChain =
            CHAINS[chain];

        if (!selectedChain) {

            return {
                success: false,
                error:
                    "Unsupported chain"
            };

        }

        const provider =
            new ethers.JsonRpcProvider(
                selectedChain.rpc
            );

        const feeData =
            await provider.getFeeData();

        if (!feeData.gasPrice) {

            return {
                success: false,
                error:
                    "Gas data unavailable"
            };

        }

        const gasPrice =
            Number(
                ethers.formatUnits(
                    feeData.gasPrice,
                    "gwei"
                )
            );

        return {

            success: true,

            chain,

            slow:
                gasPrice
                .toFixed(2)
                + " gwei",

            standard:
                (gasPrice * 1.1)
                .toFixed(2)
                + " gwei",

            fast:
                (gasPrice * 1.2)
                .toFixed(2)
                + " gwei"
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
    getGasFees
};