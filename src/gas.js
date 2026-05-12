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

        const slow =
            Number(
                ethers.formatUnits(
                    feeData.gasPrice,
                    "gwei"
                )
            );

        return {

            chain,

            slow:
                slow.toFixed(2) + " gwei",

            standard:
                (slow * 1.1).toFixed(2)
                + " gwei",

            fast:
                (slow * 1.2).toFixed(2)
                + " gwei"
        };

    } catch (error) {

        console.log(error.message);

    }
}

module.exports = {
    getGasFees
};