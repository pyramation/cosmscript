/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "react-query";
import { Timestamp, Uint64, Uint128, ConfigResponse, Coin, Addr, Config, ExecuteMsg, Decimal, InstantiateMsg, InstantiateMsg1, CollectionInfoForRoyaltyInfoResponse, RoyaltyInfoResponse, QueryMsg } from "./Minter.types";
import { MinterQueryClient } from "./Minter.client";
export interface MinterReactQuery<TResponse, TData = TResponse> {
  client: MinterQueryClient;
  options?: UseQueryOptions<TResponse, Error, TData>;
}
export interface MinterMintCountQuery extends MinterReactQuery<MintCountResponse, TData> {
  args: {
    address: string;
  };
}
export function useMinterMintCountQuery<TData = MintCountResponse>({
  client,
  args,
  options
}: MinterMintCountQuery<TData>) {
  return useQuery<MintCountResponse, Error, TData>(["minterMintCount", client.contractAddress, JSON.stringify(args)], () => client.mintCount({
    address: args.address
  }), options);
}
export interface MinterMintPriceQuery extends MinterReactQuery<MintPriceResponse, TData> {}
export function useMinterMintPriceQuery<TData = MintPriceResponse>({
  client,
  options
}: MinterMintPriceQuery<TData>) {
  return useQuery<MintPriceResponse, Error, TData>(["minterMintPrice", client.contractAddress], () => client.mintPrice(), options);
}
export interface MinterStartTimeQuery extends MinterReactQuery<StartTimeResponse, TData> {}
export function useMinterStartTimeQuery<TData = StartTimeResponse>({
  client,
  options
}: MinterStartTimeQuery<TData>) {
  return useQuery<StartTimeResponse, Error, TData>(["minterStartTime", client.contractAddress], () => client.startTime(), options);
}
export interface MinterMintableNumTokensQuery extends MinterReactQuery<MintableNumTokensResponse, TData> {}
export function useMinterMintableNumTokensQuery<TData = MintableNumTokensResponse>({
  client,
  options
}: MinterMintableNumTokensQuery<TData>) {
  return useQuery<MintableNumTokensResponse, Error, TData>(["minterMintableNumTokens", client.contractAddress], () => client.mintableNumTokens(), options);
}
export interface MinterConfigQuery extends MinterReactQuery<ConfigResponse, TData> {}
export function useMinterConfigQuery<TData = ConfigResponse>({
  client,
  options
}: MinterConfigQuery<TData>) {
  return useQuery<ConfigResponse, Error, TData>(["minterConfig", client.contractAddress], () => client.config(), options);
}