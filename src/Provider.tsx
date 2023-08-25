import { ApiPromise } from '@polkadot/api';
import { ReactNode, createContext, useContext, useMemo } from 'react';

export interface State {
  api?: ApiPromise;
  signer?: unknown; // TODO: fix type
  address?: string;
}

const HooksGlobalContext = createContext<State | undefined>(undefined);

export const HooksGlobalProvider = ({
  children,
  api,
  signer,
  address,
}: { children: ReactNode } & State) => {
  const providerValue = useMemo<State>(
    () => ({
      api,
      signer,
      address,
    }),
    [api, signer, address],
  );
  return (
    <HooksGlobalContext.Provider value={providerValue}>
      {children}
    </HooksGlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const state = useContext(HooksGlobalContext);
  if (!state) throw new Error('SharedStateProvider not defined!');
  return state;
};
