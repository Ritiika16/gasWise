const gaswise =
    require("./index");

async function main() {

    const chain =
        process.argv[2]
        || "ethereum";

    console.log(
        `\n${chain.toUpperCase()} GAS TRACKER\n`
    );

    const gas =
        await gaswise
        .getGasFees(chain);

    if (!gas.success) {

        console.log(
            `Error: ${gas.error}`
        );

        return;
    }

    console.log(
        `Base Fee: ${gas.baseFee}`
    );

    console.log(
        `Priority Fee: ${gas.priorityFee}`
    );

    console.log(
        `Max Fee: ${gas.maxFee}\n`
    );

    const gasPrice =
        parseFloat(gas.maxFee);

    const estimate =
        await gaswise
        .estimateTransactionCost(
            "erc20",
            gasPrice,
            chain
        );

    if (!estimate.success) {

        console.log(
            `Error: ${estimate.error}`
        );

        return;
    }

    console.log(
        `Estimated ERC20 Cost: ${estimate.estimatedUsd}`
    );
}

main();