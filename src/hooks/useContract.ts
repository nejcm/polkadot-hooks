import { ApiPromise } from '@polkadot/api';
import { Abi, ContractPromise } from '@polkadot/api-contract';
import { ContractOptions } from '@polkadot/api-contract/types';
import { WeightV2 } from '@polkadot/types/interfaces';
import { QueryKey, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useGlobalContext } from '../Provider';
import { QueryOptions, emptyCacheKey, emptyFn } from '../helpers';

export type UseContractProps<T> = QueryOptions & {
  abi: T;
  address?: string;
  owner?: string;
  method: string;
  args?: any[];
  options?: ContractOptions | ((api: ApiPromise) => ContractOptions);
};
export const useContract = <T extends Abi | Record<string, unknown>>(
  key: QueryKey,
  { abi, address, owner, method, args, options, ...rest }: UseContractProps<T>,
) => {
  const { api } = useGlobalContext();
  const contract = useMemo(
    () => (api && address ? new ContractPromise(api, abi, address) : undefined),
    [abi, address, api],
  );
  const enabled = !!contract && rest.enabled !== false && !!api && !!owner;
  const query = useQuery(
    enabled ? key : emptyCacheKey,
    enabled
      ? async () => {
          const opts =
            typeof options === 'function'
              ? options(api)
              : options || {
                  gasLimit: api.createType<WeightV2>('WeightV2', {
                    refTime: '100000000000',
                    proofSize: '1000000',
                  }),
                  storageDepositLimit: null,
                };
          const response = await contract.query[method](
            owner,
            opts,
            ...(args || []),
          );
          if (!response?.result?.isOk || response?.output === undefined)
            throw response;
          return response;
        }
      : emptyFn,
    {
      ...rest,
      enabled,
    },
  );
  return { ...query, enabled };
};
