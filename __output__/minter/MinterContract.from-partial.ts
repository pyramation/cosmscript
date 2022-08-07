/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Timestamp, Uint64, Uint128, ConfigResponse, Coin, Addr, Config, ExecuteMsg, Decimal, InstantiateMsg, InstantiateMsg1, CollectionInfoForRoyaltyInfoResponse, RoyaltyInfoResponse, QueryMsg } from "./MinterContract";
export interface MinterMessage {
  contractAddress: string;
  sender: string;
  mint: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  setWhitelist: ({
    whitelist
  }: {
    whitelist: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateStartTime: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updatePerAddressLimit: ({
    perAddressLimit
  }: {
    perAddressLimit: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  mintTo: ({
    recipient
  }: {
    recipient: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  mintFor: ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  withdraw: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class MinterMessageComposer implements MinterMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.mint = this.mint.bind(this);
    this.setWhitelist = this.setWhitelist.bind(this);
    this.updateStartTime = this.updateStartTime.bind(this);
    this.updatePerAddressLimit = this.updatePerAddressLimit.bind(this);
    this.mintTo = this.mintTo.bind(this);
    this.mintFor = this.mintFor.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }

  mint = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          mint: {}
        })),
        funds
      })
    };
  };
  setWhitelist = ({
    whitelist
  }: {
    whitelist: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          set_whitelist: {
            whitelist
          }
        })),
        funds
      })
    };
  };
  updateStartTime = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_start_time: {}
        })),
        funds
      })
    };
  };
  updatePerAddressLimit = ({
    perAddressLimit
  }: {
    perAddressLimit: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_per_address_limit: {
            per_address_limit: perAddressLimit
          }
        })),
        funds
      })
    };
  };
  mintTo = ({
    recipient
  }: {
    recipient: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          mint_to: {
            recipient
          }
        })),
        funds
      })
    };
  };
  mintFor = ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          mint_for: {
            recipient,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  withdraw = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          withdraw: {}
        })),
        funds
      })
    };
  };
}