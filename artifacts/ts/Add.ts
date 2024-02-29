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
import { default as AddContractJson } from "../add/Add.ral.json";
import { getContractByCodeHash } from "./contracts";
import { loadContractInstanceFromDeployments } from "./utils";

// Custom types for the contract
export namespace AddTypes {
  export type Fields = {
    sub: HexString;
    result: bigint;
  };

  export type State = ContractState<Fields>;

  export type AddEvent = ContractEvent<{ x: bigint; y: bigint }>;
  export type Add1Event = ContractEvent<{ a: bigint; b: bigint }>;

  export interface CallMethodTable {
    add: {
      params: CallContractParams<{ array: [bigint, bigint] }>;
      result: CallContractResult<[bigint, bigint]>;
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

class Factory extends ContractFactory<AddInstance, AddTypes.Fields> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as AddTypes.Fields;
  }

  eventIndex = { Add: 0, Add1: 1 };

  at(address: string): AddInstance {
    return new AddInstance(address);
  }

  tests = {
    add: async (
      params: TestContractParams<AddTypes.Fields, { array: [bigint, bigint] }>
    ): Promise<TestContractResult<[bigint, bigint]>> => {
      return testMethod(this, "add", params);
    },
    addPrivate: async (
      params: TestContractParams<AddTypes.Fields, { array: [bigint, bigint] }>
    ): Promise<TestContractResult<[bigint, bigint]>> => {
      return testMethod(this, "addPrivate", params);
    },
    createSubContract: async (
      params: TestContractParams<
        AddTypes.Fields,
        { a: bigint; path: HexString; subContractId: HexString; payer: Address }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "createSubContract", params);
    },
    destroy: async (
      params: TestContractParams<AddTypes.Fields, { caller: Address }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "destroy", params);
    },
  };
}

// Use this object to test and deploy the contract
export const Add = new Factory(
  Contract.fromJson(
    AddContractJson,
    "=8+4=1-1=2-2+64=3-1+d=37+77e010a=1+1646450726976617465=154",
    "a49f0624ccbec8df1bf3ad7f628fb47a42cc448fe7369fc0da02071df6787b69"
  )
);

// Use this class to interact with the blockchain
export class AddInstance extends ContractInstance {
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
  ): AddInstance | undefined {
    return loadContractInstanceFromDeployments<AddInstance>(
      allDeployments,
      "Add",
      group,
      taskId
    );
  }

  async fetchState(): Promise<AddTypes.State> {
    return fetchContractState(Add, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeAddEvent(
    options: EventSubscribeOptions<AddTypes.AddEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Add.contract,
      this,
      options,
      "Add",
      fromCount
    );
  }

  subscribeAdd1Event(
    options: EventSubscribeOptions<AddTypes.Add1Event>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Add.contract,
      this,
      options,
      "Add1",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<AddTypes.AddEvent | AddTypes.Add1Event>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(Add.contract, this, options, fromCount);
  }

  methods = {
    add: async (
      params: AddTypes.CallMethodParams<"add">
    ): Promise<AddTypes.CallMethodResult<"add">> => {
      return callMethod(Add, this, "add", params, getContractByCodeHash);
    },
  };

  async multicall<Calls extends AddTypes.MultiCallParams>(
    calls: Calls
  ): Promise<AddTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      Add,
      this,
      calls,
      getContractByCodeHash
    )) as AddTypes.MultiCallResults<Calls>;
  }
}
