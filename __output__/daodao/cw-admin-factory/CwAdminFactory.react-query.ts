/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions } from "react-query";
import { ExecuteMsg, Binary, InstantiateMsg, QueryMsg } from "./CwAdminFactory.types";
import { CwAdminFactoryQueryClient } from "./CwAdminFactoryclient";
export interface CwAdminFactoryReactQuery<TResponse, TData = TResponse> {
  client: CwAdminFactoryQueryClient;
  options?: UseQueryOptions<TResponse, Error, TData>;
}