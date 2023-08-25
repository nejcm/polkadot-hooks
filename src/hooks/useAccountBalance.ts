import { AccountInfo } from '@polkadot/types/interfaces';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useGlobalContext } from '../Provider';
import { cacheKeys } from '../constants';
import { QueryOptions, emptyCacheKey, emptyFn } from '../helpers';
import { nativeToDecimal, prettyNumbers } from '../helpers/parseNumbers';

export interface UseAccountBalanceResponse {
  query: UseQueryResult<AccountInfo | undefined, unknown>;
  balance?: string;
  enabled: boolean;
}

export const useAccountBalance = (
  address?: string,
  options?: QueryOptions<AccountInfo | undefined, unknown>,
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

  const balance = useMemo(() => {
    if (!data?.data || !accountAddress) return undefined;
    return prettyNumbers(nativeToDecimal(data.data.free.toString()).toNumber());
  }, [data?.data, accountAddress]);

  return {
    query,
    balance,
    enabled,
  };
};
