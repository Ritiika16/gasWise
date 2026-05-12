# GasWise ⛽

A lightweight multi-chain Node.js SDK and CLI tool for gas fee estimation, transaction cost calculation, and blockchain unit conversion.

GasWise supports:
- Ethereum
- Polygon
- Arbitrum
- Base

with live RPC-based gas estimation and USD transaction cost calculation.

---

# Features

✅ Multi-chain gas fee tracking  
✅ RPC-based gas estimation  
✅ USD transaction cost estimation  
✅ Transaction-type gas estimation  
✅ Wei / Gwei / ETH conversion utilities  
✅ CLI support  
✅ Lightweight and modular architecture  
✅ EIP-1559 ready architecture  

---

# Supported Chains

| Chain | Native Token |
|---|---|
| Ethereum | ETH |
| Polygon | MATIC |
| Arbitrum | ETH |
| Base | ETH |

---

# Supported Transaction Types

| Transaction Type | Gas Limit |
|---|---|
| transfer | 21000 |
| erc20 | 65000 |
| nft | 120000 |

---

# Installation

```bash
npm install gaswise
```

---

# CLI Usage

## Ethereum

```bash
gaswise ethereum
```

---

## Polygon

```bash
gaswise polygon
```

---

## Arbitrum

```bash
gaswise arbitrum
```

---

## Base

```bash
gaswise base
```

---

# Example CLI Output

```txt
POLYGON GAS TRACKER

Slow: 285.95 gwei
Standard: 285.95 gwei
Fast: 298.08 gwei

Estimated ERC20 Cost: $0.0019
```

---

# SDK Usage

## Import Package

```js
const gaswise = require("gaswise");
```

---

# Get Live Gas Fees

```js
const gas =
    await gaswise.getGasFees(
        "polygon"
    );

console.log(gas);
```

---

# Example Output

```js
{
  chain: 'polygon',
  slow: '285.95 gwei',
  standard: '285.95 gwei',
  fast: '298.08 gwei'
}
```

---

# Estimate Transaction Cost

```js
const estimate =
    await gaswise
    .estimateTransactionCost(
        "erc20",
        285.95,
        "polygon"
    );

console.log(estimate);
```

---

# Example Output

```js
{
  chain: 'polygon',
  nativeToken: 'MATIC',
  transactionType: 'erc20',
  gasLimit: 65000,
  gasPriceGwei: 285.95,
  totalNative: '0.01858',
  estimatedUsd: '$0.0019'
}
```

---

# Conversion Utilities

## Gwei → Wei

```js
gaswise.gweiToWei(20);
```

---

## Wei → Gwei

```js
gaswise.weiToGwei(value);
```

---

## ETH → Wei

```js
gaswise.ethToWei(1);
```

---

## Wei → ETH

```js
gaswise.weiToEth(value);
```

---

# Full SDK Example

```js
const gaswise = require("gaswise");

async function main() {

    const gas =
        await gaswise.getGasFees(
            "polygon"
        );

    console.log(gas);

    const gasPrice =
        parseFloat(gas.standard);

    const estimate =
        await gaswise
        .estimateTransactionCost(
            "erc20",
            gasPrice,
            "polygon"
        );

    console.log(estimate);

    console.log(
        gaswise
        .gweiToWei(20)
        .toString()
    );
}

main();
```

---

# Project Structure

```txt
gaswise/
│
├── cli.js
├── index.js
├── package.json
├── README.md
│
└── src/
    ├── gas.js
    ├── estimator.js
    ├── converter.js
    ├── chains.js
    ├── constants.js
    └── price.js
```

---

# Tech Stack

- Node.js
- ethers.js
- axios
- CoinGecko API
- RPC Providers

---

# Architecture

GasWise uses:
- RPC providers for reliable gas estimation
- CoinGecko for native token USD pricing
- modular chain configuration
- CLI + SDK dual support

---

# Upcoming Features

- EIP-1559 support
- TypeScript definitions
- Smart contract deployment estimation
- Swap/bridge estimation
- Historical gas analytics
- Custom RPC support

---

# Contributing

Contributions are welcome.

Feel free to:
- open issues
- suggest improvements
- submit pull requests

---

# License

MIT