/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
} from "@alephium/web3";
import { DeployContractExecutionResult } from "@alephium/cli";
import { default as WrongNFTTestContractJson } from "../nft/WrongNFTTest.ral.json";
import { getContractByCodeHash } from "./contracts";
import { loadContractInstanceFromDeployments } from "./utils";

// Custom types for the contract
export namespace WrongNFTTestTypes {
  export type Fields = {
    collectionId: HexString;
    nftIndex: bigint;
    uri: HexString;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getTokenUri: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getCollectionIndex: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<[HexString, bigint]>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<
  WrongNFTTestInstance,
  WrongNFTTestTypes.Fields
> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as WrongNFTTestTypes.Fields;
  }

  at(address: string): WrongNFTTestInstance {
    return new WrongNFTTestInstance(address);
  }

  tests = {
    getTokenUri: async (
      params: Omit<
        TestContractParams<WrongNFTTestTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getTokenUri", params);
    },
    getCollectionIndex: async (
      params: Omit<
        TestContractParams<WrongNFTTestTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<[HexString, bigint]>> => {
      return testMethod(this, "getCollectionIndex", params);
    },
  };
}

// Use this object to test and deploy the contract
export const WrongNFTTest = new Factory(
  Contract.fromJson(
    WrongNFTTestContractJson,
    "",
    "7dd2ed643a98b2a1a52a9b9e536fcdae60d961b583b8109f777d846bfdfcae8d"
  )
);

// Use this class to interact with the blockchain
export class WrongNFTTestInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  static in(
    allDeployments: {
      deployerAddress: string;
      contracts: Record<string, DeployContractExecutionResult>;
    }[],
    group?: number,
    taskId?: string
  ): WrongNFTTestInstance | undefined {
    return loadContractInstanceFromDeployments<WrongNFTTestInstance>(
      allDeployments,
      "WrongNFTTest",
      group,
      taskId
    );
  }

  async fetchState(): Promise<WrongNFTTestTypes.State> {
    return fetchContractState(WrongNFTTest, this);
  }

  methods = {
    getTokenUri: async (
      params?: WrongNFTTestTypes.CallMethodParams<"getTokenUri">
    ): Promise<WrongNFTTestTypes.CallMethodResult<"getTokenUri">> => {
      return callMethod(
        WrongNFTTest,
        this,
        "getTokenUri",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getCollectionIndex: async (
      params?: WrongNFTTestTypes.CallMethodParams<"getCollectionIndex">
    ): Promise<WrongNFTTestTypes.CallMethodResult<"getCollectionIndex">> => {
      return callMethod(
        WrongNFTTest,
        this,
        "getCollectionIndex",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends WrongNFTTestTypes.MultiCallParams>(
    calls: Calls
  ): Promise<WrongNFTTestTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      WrongNFTTest,
      this,
      calls,
      getContractByCodeHash
    )) as WrongNFTTestTypes.MultiCallResults<Calls>;
  }
}
