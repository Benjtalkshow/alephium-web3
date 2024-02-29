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
import { default as GreeterContractJson } from "../greeter/Greeter.ral.json";
import { getContractByCodeHash } from "./contracts";
import { loadContractInstanceFromDeployments } from "./utils";

// Custom types for the contract
export namespace GreeterTypes {
  export type Fields = {
    btcPrice: bigint;
    array0: [[bigint, bigint], [bigint, bigint], [bigint, bigint]];
    array1: [[boolean, boolean], [boolean, boolean], [boolean, boolean]];
    array2: [
      [HexString, HexString],
      [HexString, HexString],
      [HexString, HexString]
    ];
    array3: [[Address, Address], [Address, Address], [Address, Address]];
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    greet: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
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

class Factory extends ContractFactory<GreeterInstance, GreeterTypes.Fields> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as GreeterTypes.Fields;
  }

  at(address: string): GreeterInstance {
    return new GreeterInstance(address);
  }

  tests = {
    greet: async (
      params: Omit<TestContractParams<GreeterTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "greet", params);
    },
  };
}

// Use this object to test and deploy the contract
export const Greeter = new Factory(
  Contract.fromJson(
    GreeterContractJson,
    "",
    "3813cf61a6e0f126463190119cd861a14ca9c2f92839e193c4f9934517b02477"
  )
);

// Use this class to interact with the blockchain
export class GreeterInstance extends ContractInstance {
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
  ): GreeterInstance | undefined {
    return loadContractInstanceFromDeployments<GreeterInstance>(
      allDeployments,
      "Greeter",
      group,
      taskId
    );
  }

  async fetchState(): Promise<GreeterTypes.State> {
    return fetchContractState(Greeter, this);
  }

  methods = {
    greet: async (
      params?: GreeterTypes.CallMethodParams<"greet">
    ): Promise<GreeterTypes.CallMethodResult<"greet">> => {
      return callMethod(
        Greeter,
        this,
        "greet",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends GreeterTypes.MultiCallParams>(
    calls: Calls
  ): Promise<GreeterTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      Greeter,
      this,
      calls,
      getContractByCodeHash
    )) as GreeterTypes.MultiCallResults<Calls>;
  }
}
