const axios = require("axios");

async function getTokenPrice(
    coingeckoId
) {

    try {

        const response =
            await axios.get(
                `https://api.coingecko.com/api/v3/simple/price?ids=${coingeckoId}&vs_currencies=usd`
            );

        return response.data[
            coingeckoId
        ].usd;

    } catch (error) {

        console.log(error.message);

    }
}

module.exports = {
    getTokenPrice
};