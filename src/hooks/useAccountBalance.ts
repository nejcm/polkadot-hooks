import { AccountInfo } from '@polkadot/types/interfaces';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useGlobalContext } from '../Provider';
import { cacheKeys } from '../constants';
import { QueryOptions, emptyCacheKey, emptyFn } from '../helpers';
import { nativeToDecimal, prettyNumbers } from '../helpers/parseNumbers';

export type UseAccountBalanceResponse = {
  balance?: number;
  formatted?: string;
  enabled: boolean;
} & UseQueryResult<AccountInfo | undefined, unknown>;

export type UseAccountBalanceOptions = QueryOptions<
  AccountInfo | undefined,
  unknown
>;

export const useAccountBalance = (
  address?: string,
  options?: UseAccountBalanceOptions,
): UseAccountBalanceResponse => {
  const { api, address: defAddress } = useGlobalContext();
  const accountAddress = address || defAddress;
  const enabled = !!api && !!accountAddress && options?.enabled !== false;
  const query = useQuery<AccountInfo | undefined, unknown>(
    enabled ? [cacheKeys.accountBalance, accountAddress] : emptyCacheKey,
    enabled
      ? () => api.query.system.account<AccountInfo>(accountAddress)
      : emptyFn,
    {
      cacheTime: 0,
      staleTime: 0,
      retry: 2,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      onError: console.error,
      ...options,
      enabled,
    },
  );
  const { data } = query;

  const val = useMemo(() => {
    if (!data?.data) return undefined;
    const balance = nativeToDecimal(data.data.free.toString()).toNumber();
    return { balance, formatted: prettyNumbers(balance) };
  }, [data?.data]);

  return {
    ...query,
    ...val,
    enabled,
  };
};
