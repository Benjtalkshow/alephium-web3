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
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
} from "@alephium/web3";
import { default as UserAccountContractJson } from "../test/UserAccount.ral.json";
import { getContractByCodeHash } from "./contracts";
import { Balances, MapValue, TokenBalance, AllStructs } from "./types";

// Custom types for the contract
export namespace UserAccountTypes {
  export type Fields = {
    id: HexString;
    address: Address;
    balances: Balances;
    name: HexString;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getBalances: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<Balances>;
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
  UserAccountInstance,
  UserAccountTypes.Fields
> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as UserAccountTypes.Fields;
  }

  at(address: string): UserAccountInstance {
    return new UserAccountInstance(address);
  }

  tests = {
    updateBalance: async (
      params: TestContractParamsWithoutMaps<
        UserAccountTypes.Fields,
        { tokens: [TokenBalance, TokenBalance] }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "updateBalance", params);
    },
    updateAddress: async (
      params: TestContractParamsWithoutMaps<
        UserAccountTypes.Fields,
        { newAddress: Address }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "updateAddress", params);
    },
    getBalances: async (
      params: Omit<
        TestContractParamsWithoutMaps<UserAccountTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<Balances>> => {
      return testMethod(this, "getBalances", params);
    },
  };
}

// Use this object to test and deploy the contract
export const UserAccount = new Factory(
  Contract.fromJson(
    UserAccountContractJson,
    "",
    "be41c84b7e99a544bd39df7eb24bc8c221f4ac66b7c0d774dfe96b92745167cc",
    AllStructs
  )
);

// Use this class to interact with the blockchain
export class UserAccountInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<UserAccountTypes.State> {
    return fetchContractState(UserAccount, this);
  }

  methods = {
    getBalances: async (
      params?: UserAccountTypes.CallMethodParams<"getBalances">
    ): Promise<UserAccountTypes.CallMethodResult<"getBalances">> => {
      return callMethod(
        UserAccount,
        this,
        "getBalances",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends UserAccountTypes.MultiCallParams>(
    calls: Calls
  ): Promise<UserAccountTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      UserAccount,
      this,
      calls,
      getContractByCodeHash
    )) as UserAccountTypes.MultiCallResults<Calls>;
  }
}
