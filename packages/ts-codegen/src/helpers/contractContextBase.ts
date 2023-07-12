export const contractContextBase = `
import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate';

export interface IContractConstructor {
  address: string | undefined;
  cosmWasmClient: CosmWasmClient | undefined;
  signingCosmWasmClient: SigningCosmWasmClient | undefined;
}

export const noSigningErrorMessage = 'signingCosmWasmClient not connected';

export const noCosmWasmClientErrorMessage = 'cosmWasmClient not connected';

export const noAddressErrorMessage = "address doesn't exist";

export class ContractBase {
  constructor(
    public readonly address: string | undefined,
    public readonly cosmWasmClient: CosmWasmClient | undefined,
    public readonly signingCosmWasmClient: SigningCosmWasmClient | undefined
  ) {}
}

export function getSigningClientDefault<T>(
  intance: ContractBase,
  contractAddr: string,
  T: new (
    client: SigningCosmWasmClient,
    sender: string,
    contractAddress: string
  ) => T
): T {
  if (!intance.signingCosmWasmClient) throw new Error(noSigningErrorMessage);
  if (!intance.address) throw new Error(noAddressErrorMessage);
  return new T(intance.signingCosmWasmClient, intance.address, contractAddr);
}

export function getQueryClientDefault<T>(
  intance: ContractBase,
  contractAddr: string,
  T: new (client: CosmWasmClient, contractAddress: string) => T
): T {
  if (!intance.cosmWasmClient) throw new Error(noCosmWasmClientErrorMessage);
  return new T(intance.cosmWasmClient, contractAddr);
}

export function getMessageComposerDefault<T>(
  intance: ContractBase,
  contractAddr: string,
  T: new (address: string, contractAddress: string) => T
): T {
  if (!intance.address) throw new Error(noAddressErrorMessage);
  return new T(intance.address, contractAddr);
}
`