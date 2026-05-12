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

        if (
            !feeData.maxFeePerGas ||
            !feeData.maxPriorityFeePerGas
        ) {

            return {
                success: false,
                error:
                    "EIP-1559 gas data unavailable"
            };

        }

        const maxFee =
            Number(
                ethers.formatUnits(
                    feeData.maxFeePerGas,
                    "gwei"
                )
            );

        const priorityFee =
            Number(
                ethers.formatUnits(
                    feeData.maxPriorityFeePerGas,
                    "gwei"
                )
            );

        const baseFee =
            maxFee - priorityFee;

        return {

            success: true,

            chain,

            baseFee:
                baseFee.toFixed(2)
                + " gwei",

            priorityFee:
                priorityFee.toFixed(2)
                + " gwei",

            maxFee:
                maxFee.toFixed(2)
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