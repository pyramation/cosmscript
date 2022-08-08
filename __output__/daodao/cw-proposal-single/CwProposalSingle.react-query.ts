/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "react-query";
import { Addr, Uint128, Duration, Threshold, PercentageThreshold, Decimal, ConfigResponse, CheckedDepositInfo, ExecuteMsg, CosmosMsgForEmpty, BankMsg, StakingMsg, DistributionMsg, Binary, IbcMsg, Timestamp, Uint64, WasmMsg, GovMsg, VoteOption, Vote, DepositToken, Coin, Empty, IbcTimeout, IbcTimeoutBlock, DepositInfo, GovernanceModulesResponse, InfoResponse, ContractVersion, InstantiateMsg, Expiration, Status, ListProposalsResponse, ProposalResponse, Proposal, Votes, ListVotesResponse, VoteInfo, MigrateMsg, ProposalCountResponse, ProposalHooksResponse, QueryMsg, ReverseProposalsResponse, VoteHooksResponse, VoteResponse } from "./CwProposalSingle.types";
import { CwProposalSingleQueryClient } from "./CwProposalSingle.client";
export interface CwProposalSingleInfoQuery {
  client: CwProposalSingleQueryClient;
  options?: UseQueryOptions<InfoResponse, Error, InfoResponse, (string | undefined)[]>;
}
export function useCwProposalSingleInfoQuery({
  client,
  options
}: CwProposalSingleInfoQuery) {
  return useQuery<InfoResponse, Error, InfoResponse, (string | undefined)[]>(["cwProposalSingleInfo", client.contractAddress], () => client.info(), options);
}
export interface CwProposalSingleVoteHooksQuery {
  client: CwProposalSingleQueryClient;
  options?: UseQueryOptions<VoteHooksResponse, Error, VoteHooksResponse, (string | undefined)[]>;
}
export function useCwProposalSingleVoteHooksQuery({
  client,
  options
}: CwProposalSingleVoteHooksQuery) {
  return useQuery<VoteHooksResponse, Error, VoteHooksResponse, (string | undefined)[]>(["cwProposalSingleVoteHooks", client.contractAddress], () => client.voteHooks(), options);
}
export interface CwProposalSingleProposalHooksQuery {
  client: CwProposalSingleQueryClient;
  options?: UseQueryOptions<ProposalHooksResponse, Error, ProposalHooksResponse, (string | undefined)[]>;
}
export function useCwProposalSingleProposalHooksQuery({
  client,
  options
}: CwProposalSingleProposalHooksQuery) {
  return useQuery<ProposalHooksResponse, Error, ProposalHooksResponse, (string | undefined)[]>(["cwProposalSingleProposalHooks", client.contractAddress], () => client.proposalHooks(), options);
}
export interface CwProposalSingleListVotesQuery {
  client: CwProposalSingleQueryClient;
  options?: UseQueryOptions<ListVotesResponse, Error, ListVotesResponse, (string | undefined)[]>;
  args: {
    limit?: number;
    proposalId: number;
    startAfter?: string;
  };
}
export function useCwProposalSingleListVotesQuery({
  client,
  args,
  options
}: CwProposalSingleListVotesQuery) {
  return useQuery<ListVotesResponse, Error, ListVotesResponse, (string | undefined)[]>(["cwProposalSingleListVotes", client.contractAddress, JSON.stringify(args)], () => client.listVotes({
    limit: args.limit,
    proposalId: args.proposalId,
    startAfter: args.startAfter
  }), options);
}
export interface CwProposalSingleVoteQuery {
  client: CwProposalSingleQueryClient;
  options?: UseQueryOptions<VoteResponse, Error, VoteResponse, (string | undefined)[]>;
  args: {
    proposalId: number;
    voter: string;
  };
}
export function useCwProposalSingleVoteQuery({
  client,
  args,
  options
}: CwProposalSingleVoteQuery) {
  return useQuery<VoteResponse, Error, VoteResponse, (string | undefined)[]>(["cwProposalSingleVote", client.contractAddress, JSON.stringify(args)], () => client.vote({
    proposalId: args.proposalId,
    voter: args.voter
  }), options);
}
export interface CwProposalSingleProposalCountQuery {
  client: CwProposalSingleQueryClient;
  options?: UseQueryOptions<ProposalCountResponse, Error, ProposalCountResponse, (string | undefined)[]>;
}
export function useCwProposalSingleProposalCountQuery({
  client,
  options
}: CwProposalSingleProposalCountQuery) {
  return useQuery<ProposalCountResponse, Error, ProposalCountResponse, (string | undefined)[]>(["cwProposalSingleProposalCount", client.contractAddress], () => client.proposalCount(), options);
}
export interface CwProposalSingleReverseProposalsQuery {
  client: CwProposalSingleQueryClient;
  options?: UseQueryOptions<ReverseProposalsResponse, Error, ReverseProposalsResponse, (string | undefined)[]>;
  args: {
    limit?: number;
    startBefore?: number;
  };
}
export function useCwProposalSingleReverseProposalsQuery({
  client,
  args,
  options
}: CwProposalSingleReverseProposalsQuery) {
  return useQuery<ReverseProposalsResponse, Error, ReverseProposalsResponse, (string | undefined)[]>(["cwProposalSingleReverseProposals", client.contractAddress, JSON.stringify(args)], () => client.reverseProposals({
    limit: args.limit,
    startBefore: args.startBefore
  }), options);
}
export interface CwProposalSingleListProposalsQuery {
  client: CwProposalSingleQueryClient;
  options?: UseQueryOptions<ListProposalsResponse, Error, ListProposalsResponse, (string | undefined)[]>;
  args: {
    limit?: number;
    startAfter?: number;
  };
}
export function useCwProposalSingleListProposalsQuery({
  client,
  args,
  options
}: CwProposalSingleListProposalsQuery) {
  return useQuery<ListProposalsResponse, Error, ListProposalsResponse, (string | undefined)[]>(["cwProposalSingleListProposals", client.contractAddress, JSON.stringify(args)], () => client.listProposals({
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}
export interface CwProposalSingleProposalQuery {
  client: CwProposalSingleQueryClient;
  options?: UseQueryOptions<ProposalResponse, Error, ProposalResponse, (string | undefined)[]>;
  args: {
    proposalId: number;
  };
}
export function useCwProposalSingleProposalQuery({
  client,
  args,
  options
}: CwProposalSingleProposalQuery) {
  return useQuery<ProposalResponse, Error, ProposalResponse, (string | undefined)[]>(["cwProposalSingleProposal", client.contractAddress, JSON.stringify(args)], () => client.proposal({
    proposalId: args.proposalId
  }), options);
}
export interface CwProposalSingleConfigQuery {
  client: CwProposalSingleQueryClient;
  options?: UseQueryOptions<ConfigResponse, Error, ConfigResponse, (string | undefined)[]>;
}
export function useCwProposalSingleConfigQuery({
  client,
  options
}: CwProposalSingleConfigQuery) {
  return useQuery<ConfigResponse, Error, ConfigResponse, (string | undefined)[]>(["cwProposalSingleConfig", client.contractAddress], () => client.config(), options);
}