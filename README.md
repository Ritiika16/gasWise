# GasWise ⛽

A lightweight Node.js package for Ethereum gas fee estimation, transaction cost calculation, and unit conversion.

## Features

- Live Ethereum gas fee tracking
- Transaction cost estimation
- Wei / Gwei / ETH conversion utilities
- Modular and lightweight
- Easy to integrate into blockchain projects

---

# Installation

```bash
npm install gaswise
```

---

# Setup

Create a `.env` file in your project root:

```env
ETHERSCAN_API_KEY=YOUR_API_KEY
```

Get your free API key from:

https://etherscan.io/apis

---

# Usage

## Import Package

```js
const gaswise = require("gaswise");
```

---

# Get Live Gas Fees

```js
const gas = await gaswise.getGasFees();

console.log(gas);
```

### Example Output

```js
{
  slow: '1.2 gwei',
  standard: '1.5 gwei',
  fast: '2.0 gwei'
}
```

---

# Estimate Transaction Cost

```js
const estimate =
    gaswise.estimateTransactionCost(
        "erc20",
        1.5
    );

console.log(estimate);
```

### Example Output

```js
{
  transactionType: 'erc20',
  gasLimit: 65000,
  gasPriceGwei: 1.5,
  totalEth: '0.00009750'
}
```

---

# Supported Transaction Types

| Type      | Gas Limit |
|-----------|-----------|
| transfer  | 21000 |
| erc20     | 65000 |
| nft       | 120000 |

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

# Example

```js
const gaswise = require("gaswise");

async function main() {

    const gas =
        await gaswise.getGasFees();

    console.log(gas);

    const gasPrice =
        parseFloat(gas.standard);

    const estimate =
        gaswise.estimateTransactionCost(
            "erc20",
            gasPrice
        );

    console.log(estimate);

    console.log(
        gaswise.gweiToWei(20).toString()
    );
}

main();
```

---

# Tech Stack

- Node.js
- ethers.js
- axios
- dotenv

---

# Future Improvements

- Multi-chain support
- EIP-1559 fee calculations
- USD transaction cost estimation
- CLI support
- TypeScript support

---

# License

MIT