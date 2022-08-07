/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Addr, Uint128, Duration, Threshold, PercentageThreshold, Decimal, ConfigResponse, CheckedDepositInfo, ExecuteMsg, CosmosMsgForEmpty, BankMsg, StakingMsg, DistributionMsg, Binary, IbcMsg, Timestamp, Uint64, WasmMsg, GovMsg, VoteOption, Vote, DepositToken, Coin, Empty, IbcTimeout, IbcTimeoutBlock, DepositInfo, GovernanceModulesResponse, InfoResponse, ContractVersion, InstantiateMsg, Expiration, Status, ListProposalsResponse, ProposalResponse, Proposal, Votes, ListVotesResponse, VoteInfo, MigrateMsg, ProposalCountResponse, ProposalHooksResponse, QueryMsg, ReverseProposalsResponse, VoteHooksResponse, VoteResponse } from "./CwProposalSingleContract";
export interface CwProposalSingleMessage {
  contractAddress: string;
  sender: string;
  propose: ({
    description,
    msgs,
    title
  }: {
    description: string;
    msgs: CosmosMsgForEmpty[];
    title: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  vote: ({
    proposalId,
    vote
  }: {
    proposalId: number;
    vote: Vote;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  execute: ({
    proposalId
  }: {
    proposalId: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  close: ({
    proposalId
  }: {
    proposalId: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateConfig: ({
    allowRevoting,
    dao,
    depositInfo,
    maxVotingPeriod,
    minVotingPeriod,
    onlyMembersExecute,
    threshold
  }: {
    allowRevoting: boolean;
    dao: string;
    depositInfo?: DepositInfo;
    maxVotingPeriod: Duration;
    minVotingPeriod?: Duration;
    onlyMembersExecute: boolean;
    threshold: Threshold;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  addProposalHook: ({
    address
  }: {
    address: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  removeProposalHook: ({
    address
  }: {
    address: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  addVoteHook: ({
    address
  }: {
    address: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  removeVoteHook: ({
    address
  }: {
    address: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class CwProposalSingleMessageComposer implements CwProposalSingleMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.propose = this.propose.bind(this);
    this.vote = this.vote.bind(this);
    this.execute = this.execute.bind(this);
    this.close = this.close.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
    this.addProposalHook = this.addProposalHook.bind(this);
    this.removeProposalHook = this.removeProposalHook.bind(this);
    this.addVoteHook = this.addVoteHook.bind(this);
    this.removeVoteHook = this.removeVoteHook.bind(this);
  }

  propose = ({
    description,
    msgs,
    title
  }: {
    description: string;
    msgs: CosmosMsgForEmpty[];
    title: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          propose: {
            description,
            msgs,
            title
          }
        })),
        funds
      })
    };
  };
  vote = ({
    proposalId,
    vote
  }: {
    proposalId: number;
    vote: Vote;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          vote: {
            proposal_id: proposalId,
            vote
          }
        })),
        funds
      })
    };
  };
  execute = ({
    proposalId
  }: {
    proposalId: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          execute: {
            proposal_id: proposalId
          }
        })),
        funds
      })
    };
  };
  close = ({
    proposalId
  }: {
    proposalId: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          close: {
            proposal_id: proposalId
          }
        })),
        funds
      })
    };
  };
  updateConfig = ({
    allowRevoting,
    dao,
    depositInfo,
    maxVotingPeriod,
    minVotingPeriod,
    onlyMembersExecute,
    threshold
  }: {
    allowRevoting: boolean;
    dao: string;
    depositInfo?: DepositInfo;
    maxVotingPeriod: Duration;
    minVotingPeriod?: Duration;
    onlyMembersExecute: boolean;
    threshold: Threshold;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_config: {
            allow_revoting: allowRevoting,
            dao,
            deposit_info: depositInfo,
            max_voting_period: maxVotingPeriod,
            min_voting_period: minVotingPeriod,
            only_members_execute: onlyMembersExecute,
            threshold
          }
        })),
        funds
      })
    };
  };
  addProposalHook = ({
    address
  }: {
    address: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          add_proposal_hook: {
            address
          }
        })),
        funds
      })
    };
  };
  removeProposalHook = ({
    address
  }: {
    address: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_proposal_hook: {
            address
          }
        })),
        funds
      })
    };
  };
  addVoteHook = ({
    address
  }: {
    address: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          add_vote_hook: {
            address
          }
        })),
        funds
      })
    };
  };
  removeVoteHook = ({
    address
  }: {
    address: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_vote_hook: {
            address
          }
        })),
        funds
      })
    };
  };
}