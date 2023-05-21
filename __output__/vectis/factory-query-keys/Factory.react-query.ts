/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "react-query";
import { AdminAddrResponse, CodeIdResponse, CodeIdType, Uint128, Binary, CreateWalletMsg, Guardians, MultiSig, Coin, Cw20Coin, ExecuteMsg, Addr, ProxyMigrationTxMsg, WalletAddr, CanonicalAddr, RelayTransaction, FeeResponse, GovecAddrResponse, InstantiateMsg, QueryMsg, WalletQueryPrefix, Duration, StakingOptions, WalletInfo, ContractVersion, WalletsOfResponse, WalletsResponse } from "./Factory.types";
import { FactoryQueryClient } from "./Factoryclient";
export const factoryQueryKeys = {
  contract: ([{
    contract: "factory"
  }] as const),
  address: (contractAddress: string) => ([{ ...factoryQueryKeys.contract[0],
    address: contractAddress
  }] as const),
  wallets: (contractAddress: string, args?: Record<string, unknown>) => ([{ ...factoryQueryKeys.address(contractAddress)[0],
    method: "wallets",
    args
  }] as const),
  walletsOf: (contractAddress: string, args?: Record<string, unknown>) => ([{ ...factoryQueryKeys.address(contractAddress)[0],
    method: "wallets_of",
    args
  }] as const),
  codeId: (contractAddress: string, args?: Record<string, unknown>) => ([{ ...factoryQueryKeys.address(contractAddress)[0],
    method: "code_id",
    args
  }] as const),
  fee: (contractAddress: string, args?: Record<string, unknown>) => ([{ ...factoryQueryKeys.address(contractAddress)[0],
    method: "fee",
    args
  }] as const),
  govecAddr: (contractAddress: string, args?: Record<string, unknown>) => ([{ ...factoryQueryKeys.address(contractAddress)[0],
    method: "govec_addr",
    args
  }] as const),
  adminAddr: (contractAddress: string, args?: Record<string, unknown>) => ([{ ...factoryQueryKeys.address(contractAddress)[0],
    method: "admin_addr",
    args
  }] as const)
};
export const factoryQueries = {
  wallets: <TData = WalletsResponse,>({
    client,
    args,
    options
  }: FactoryWalletsQuery<TData>): UseQueryOptions<WalletsResponse, Error, TData> => ({
    queryKey: factoryQueryKeys.wallets(client?.contractAddress, args),
    queryFn: () => client.wallets({
      limit: args.limit,
      startAfter: args.startAfter
    }),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  walletsOf: <TData = WalletsOfResponse,>({
    client,
    args,
    options
  }: FactoryWalletsOfQuery<TData>): UseQueryOptions<WalletsOfResponse, Error, TData> => ({
    queryKey: factoryQueryKeys.walletsOf(client?.contractAddress, args),
    queryFn: () => client.walletsOf({
      limit: args.limit,
      startAfter: args.startAfter,
      user: args.user
    }),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  codeId: <TData = CodeIdResponse,>({
    client,
    args,
    options
  }: FactoryCodeIdQuery<TData>): UseQueryOptions<CodeIdResponse, Error, TData> => ({
    queryKey: factoryQueryKeys.codeId(client?.contractAddress, args),
    queryFn: () => client.codeId({
      ty: args.ty
    }),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  fee: <TData = FeeResponse,>({
    client,
    options
  }: FactoryFeeQuery<TData>): UseQueryOptions<FeeResponse, Error, TData> => ({
    queryKey: factoryQueryKeys.fee(client?.contractAddress),
    queryFn: () => client.fee(),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  govecAddr: <TData = GovecAddrResponse,>({
    client,
    options
  }: FactoryGovecAddrQuery<TData>): UseQueryOptions<GovecAddrResponse, Error, TData> => ({
    queryKey: factoryQueryKeys.govecAddr(client?.contractAddress),
    queryFn: () => client.govecAddr(),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  adminAddr: <TData = AdminAddrResponse,>({
    client,
    options
  }: FactoryAdminAddrQuery<TData>): UseQueryOptions<AdminAddrResponse, Error, TData> => ({
    queryKey: factoryQueryKeys.adminAddr(client?.contractAddress),
    queryFn: () => client.adminAddr(),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  })
};
export interface FactoryReactQuery<TResponse, TData = TResponse> {
  client: FactoryQueryClient;
  options?: UseQueryOptions<TResponse, Error, TData>;
}
export interface FactoryAdminAddrQuery<TData> extends FactoryReactQuery<AdminAddrResponse, TData> {}
export function useFactoryAdminAddrQuery<TData = AdminAddrResponse>({
  client,
  options
}: FactoryAdminAddrQuery<TData>) {
  return useQuery<AdminAddrResponse, Error, TData>(factoryQueryKeys.adminAddr(client.contractAddress), () => client.adminAddr(), options);
}
export interface FactoryGovecAddrQuery<TData> extends FactoryReactQuery<GovecAddrResponse, TData> {}
export function useFactoryGovecAddrQuery<TData = GovecAddrResponse>({
  client,
  options
}: FactoryGovecAddrQuery<TData>) {
  return useQuery<GovecAddrResponse, Error, TData>(factoryQueryKeys.govecAddr(client.contractAddress), () => client.govecAddr(), options);
}
export interface FactoryFeeQuery<TData> extends FactoryReactQuery<FeeResponse, TData> {}
export function useFactoryFeeQuery<TData = FeeResponse>({
  client,
  options
}: FactoryFeeQuery<TData>) {
  return useQuery<FeeResponse, Error, TData>(factoryQueryKeys.fee(client.contractAddress), () => client.fee(), options);
}
export interface FactoryCodeIdQuery<TData> extends FactoryReactQuery<CodeIdResponse, TData> {
  args: {
    ty: CodeIdType;
  };
}
export function useFactoryCodeIdQuery<TData = CodeIdResponse>({
  client,
  args,
  options
}: FactoryCodeIdQuery<TData>) {
  return useQuery<CodeIdResponse, Error, TData>(factoryQueryKeys.codeId(client.contractAddress, args), () => client.codeId({
    ty: args.ty
  }), options);
}
export interface FactoryWalletsOfQuery<TData> extends FactoryReactQuery<WalletsOfResponse, TData> {
  args: {
    limit?: number;
    startAfter?: string;
    user: string;
  };
}
export function useFactoryWalletsOfQuery<TData = WalletsOfResponse>({
  client,
  args,
  options
}: FactoryWalletsOfQuery<TData>) {
  return useQuery<WalletsOfResponse, Error, TData>(factoryQueryKeys.walletsOf(client.contractAddress, args), () => client.walletsOf({
    limit: args.limit,
    startAfter: args.startAfter,
    user: args.user
  }), options);
}
export interface FactoryWalletsQuery<TData> extends FactoryReactQuery<WalletsResponse, TData> {
  args: {
    limit?: number;
    startAfter?: WalletQueryPrefix;
  };
}
export function useFactoryWalletsQuery<TData = WalletsResponse>({
  client,
  args,
  options
}: FactoryWalletsQuery<TData>) {
  return useQuery<WalletsResponse, Error, TData>(factoryQueryKeys.wallets(client.contractAddress, args), () => client.wallets({
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}