const gaswise = require("./index");

async function main() {

    const chain =
        process.argv[2] || "ethereum";

    console.log(
        `\n${chain.toUpperCase()} GAS TRACKER\n`
    );

    const gas =
        await gaswise.getGasFees(chain);

    console.log(
        `Slow: ${gas.slow}`
    );

    console.log(
        `Standard: ${gas.standard}`
    );

    console.log(
        `Fast: ${gas.fast}\n`
    );

    const gasPrice =
        parseFloat(gas.standard);

    const estimate =
        await gaswise
        .estimateTransactionCost(
            "erc20",
            gasPrice,
            chain
        );

    console.log(
        `Estimated ERC20 Cost: ${estimate.estimatedUsd}`
    );

}

main();