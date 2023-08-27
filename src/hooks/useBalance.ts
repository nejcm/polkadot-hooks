import { AccountInfo } from '@polkadot/types/interfaces';
import { UseQueryResult } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useGlobalContext } from '../Provider';
import { ERC20 } from '../abis/ERC20';
import { cacheKeys } from '../constants';
import { QueryOptions } from '../helpers';
import { nativeToDecimal, prettyNumbers } from '../helpers/parseNumbers';
import { useContract } from './useContract';

export type UseBalanceProps = {
  /** token or contract address */
  contract?: string;
  /** account address */
  account?: string;
};
export type UseBalanceResponse = UseQueryResult<
  AccountInfo | undefined,
  unknown
> & {
  balance?: number;
  formatted?: string;
  enabled: boolean;
};

export const useBalance = (
  { contract, account }: UseBalanceProps,
  options?: QueryOptions,
): UseBalanceResponse => {
  const { api, address: defAddress } = useGlobalContext();
  const address = account || defAddress;

  const enabled = !!api && !!address && options?.enabled !== false;
  const query = useContract([cacheKeys.balance, contract, address], {
    cacheTime: 180000,
    staleTime: 180000,
    retry: 2,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    ...options,
    abi: ERC20,
    address: contract,
    method: 'balanceOf',
    args: [address],
    owner: address,
    enabled,
  });
  const { data } = query;
  const val = useMemo(() => {
    if (!data?.result?.isOk || data?.output === undefined) return undefined;
    const balance = nativeToDecimal(
      parseFloat(data.output.toString()) || 0,
    ).toNumber();
    return { balance, formatted: prettyNumbers(balance) };
  }, [data]);

  return {
    ...query,
    ...val,
    enabled,
  };
};
