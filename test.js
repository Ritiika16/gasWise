const gaswise = require("./index");

async function main() {

    const gas = await gaswise.getGasFees(
        "polygon"
    );

    const gasPrice = parseFloat(gas.standard);

    const estimate =await gaswise
        .estimateTransactionCost(
            "erc20",
            gasPrice,
            "polygon"
        );

    console.log(estimate);

    console.log("\nConversion:");

    console.log(
        gaswise.gweiToWei(20).toString()
    );
}

main();