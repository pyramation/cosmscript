/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
export type ExecuteMsg = {
  instantiate_contract_with_self_admin: {
    code_id: number;
    instantiate_msg: Binary;
    label: string;
    [k: string]: unknown;
  };
};
export type Binary = string;
export interface InstantiateMsg {
  [k: string]: unknown;
}
export type QueryMsg = string;
export type CwAdminFactoryExecuteMsg = ExecuteMsg;
export interface CwAdminFactoryReadOnlyInterface {
  contractAddress: string;
}
export class CwAdminFactoryQueryClient implements CwAdminFactoryReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
  }

}
export interface CwAdminFactoryInterface extends CwAdminFactoryReadOnlyInterface {
  contractAddress: string;
  sender: string;
  instantiateContractWithSelfAdmin: ({
    codeId,
    instantiateMsg,
    label
  }: {
    codeId: number;
    instantiateMsg: string;
    label: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
export class CwAdminFactoryClient extends CwAdminFactoryQueryClient implements CwAdminFactoryInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.instantiateContractWithSelfAdmin = this.instantiateContractWithSelfAdmin.bind(this);
  }

  instantiateContractWithSelfAdmin = async ({
    codeId,
    instantiateMsg,
    label
  }: {
    codeId: number;
    instantiateMsg: string;
    label: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      instantiate_contract_with_self_admin: {
        code_id: codeId,
        instantiate_msg: instantiateMsg,
        label
      }
    }, fee, memo, funds);
  };
}