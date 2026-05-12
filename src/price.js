const axios = require("axios");

async function getEthPrice() {

    try {

        const response = await axios.get(
            "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
        );

        return response.data.ethereum.usd;

    } catch (error) {

        console.log(error.message);

    }
}

module.exports = {
    getEthPrice
};