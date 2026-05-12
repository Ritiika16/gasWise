const axios = require("axios");
require("dotenv").config();

const { CHAINS } = require("./chains");

async function getGasFees(
    chain = "ethereum"
) {

    try {

        const selectedChain =
            CHAINS[chain];

        if (!selectedChain) {

            return {
                error: "Unsupported chain"
            };

        }

        const apiKey =
            process.env.ETHERSCAN_API_KEY;

        const response = await axios.get(
            `https://api.etherscan.io/v2/api?chainid=${selectedChain.chainId}&module=gastracker&action=gasoracle&apikey=${apiKey}`
        );

        const data =
            response.data.result;

        return {
            chain,
            slow:
                data.SafeGasPrice + " gwei",

            standard:
                data.ProposeGasPrice + " gwei",

            fast:
                data.FastGasPrice + " gwei"
        };

    } catch (error) {

        console.log(error.message);

    }
}

module.exports = {
    getGasFees
};