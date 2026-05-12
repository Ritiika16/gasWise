const gaswise = require("./index");

async function main() {

    const gas = await gaswise.getGasFees();

    console.log("Gas Fees:");
    console.log(gas);

    const gasPrice =
        parseFloat(gas.standard);

    console.log("\nEstimated Cost:");

    const estimate =
        gaswise.estimateTransactionCost(
            "erc20",
            gasPrice
        );

    console.log(estimate);

    console.log("\nConversion:");

    console.log(
        gaswise.gweiToWei(20).toString()
    );
}

main();