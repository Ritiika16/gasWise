const gaswise = require("./index");

async function main() {

    const gas =
        await gaswise.getGasFees(
            "polygon"
        );

    console.log("\nGas Fees:");
    console.log(gas);

    const gasPrice =
        parseFloat(gas.maxFee);

    const estimate =
        await gaswise
        .estimateTransactionCost(
            "erc20",
            gasPrice,
            "polygon"
        );

    console.log("\nEstimated Cost:");
    console.log(estimate);

}

main();