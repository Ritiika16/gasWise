export interface GasFees {
    success: boolean;
    chain?: string;
    slow?: string;
    standard?: string;
    fast?: string;
    error?: string;
}

export interface TransactionEstimate {
    success: boolean;
    chain?: string;
    nativeToken?: string;
    transactionType?: string;
    gasLimit?: number;
    gasPriceGwei?: number;
    totalNative?: string;
    estimatedUsd?: string;
    error?: string;
}

export function getGasFees(
    chain?: string
): Promise<GasFees>;

export function estimateTransactionCost(
    transactionType: string,
    gasPriceGwei: number,
    chain?: string
): Promise<TransactionEstimate>;

export function weiToEth(
    value: string | bigint
): string;

export function ethToWei(
    value: string | number
): bigint;

export function gweiToWei(
    value: string | number
): bigint;

export function weiToGwei(
    value: string | bigint
): string;