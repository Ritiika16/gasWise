const axios = require("axios");
require("dotenv").config();

async function getGasFees() {

    try {

        const apiKey = process.env.ETHERSCAN_API_KEY;

        const response = await axios.get(
            `https://api.etherscan.io/v2/api?chainid=1&module=gastracker&action=gasoracle&apikey=${apiKey}`
        );

        const data = response.data.result;

        return {
            slow: data.SafeGasPrice + " gwei",
            standard: data.ProposeGasPrice + " gwei",
            fast: data.FastGasPrice + " gwei"
        };

    } catch (error) {

        console.log(error.message);

    }
}

module.exports = {
    getGasFees
};