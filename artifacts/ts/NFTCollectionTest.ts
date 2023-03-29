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
  SubscribeOptions,
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
import { default as NFTCollectionTestContractJson } from "../nft/nft_collection_test.ral.json";

// Custom types for the contract
export namespace NFTCollectionTestTypes {
  export type Fields = {
    nftTemplateId: HexString;
    name: HexString;
    symbol: HexString;
    totalSupply: bigint;
    currentTokenIndex: bigint;
    __stdId: HexString;
  };

  export type State = ContractState<Fields>;

  export type MintedEvent = ContractEvent<{
    minter: HexString;
    tokenIndex: bigint;
    tokenId: HexString;
  }>;

  export interface CallMethodTable {
    getName: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getSymbol: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    totalSupply: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    nftByIndex: {
      params: CallContractParams<{ index: bigint }>;
      result: CallContractResult<HexString>;
    };
    mint: {
      params: CallContractParams<{ nftUri: HexString }>;
      result: CallContractResult<HexString>;
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
  NFTCollectionTestInstance,
  NFTCollectionTestTypes.Fields
> {
  at(address: string): NFTCollectionTestInstance {
    return new NFTCollectionTestInstance(address);
  }

  tests = {
    getName: async (
      params: Omit<
        TestContractParams<NFTCollectionTestTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getName", params);
    },
    getSymbol: async (
      params: Omit<
        TestContractParams<NFTCollectionTestTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getSymbol", params);
    },
    totalSupply: async (
      params: Omit<
        TestContractParams<NFTCollectionTestTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "totalSupply", params);
    },
    nftByIndex: async (
      params: TestContractParams<
        NFTCollectionTestTypes.Fields,
        { index: bigint }
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "nftByIndex", params);
    },
    mint: async (
      params: TestContractParams<
        NFTCollectionTestTypes.Fields,
        { nftUri: HexString }
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "mint", params);
    },
  };
}

// Use this object to test and deploy the contract
export const NFTCollectionTest = new Factory(
  Contract.fromJson(
    NFTCollectionTestContractJson,
    "",
    "d0d43c8b4dfa692b2927d3340f33f8e642ee3699b1842b95b80cc772ec154f1c"
  )
);

// Use this class to interact with the blockchain
export class NFTCollectionTestInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<NFTCollectionTestTypes.State> {
    return fetchContractState(NFTCollectionTest, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeMintedEvent(
    options: SubscribeOptions<NFTCollectionTestTypes.MintedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      NFTCollectionTest.contract,
      this,
      options,
      "Minted",
      fromCount
    );
  }

  methods = {
    getName: async (
      params?: NFTCollectionTestTypes.CallMethodParams<"getName">
    ): Promise<NFTCollectionTestTypes.CallMethodResult<"getName">> => {
      return callMethod(
        NFTCollectionTest,
        this,
        "getName",
        params === undefined ? {} : params
      );
    },
    getSymbol: async (
      params?: NFTCollectionTestTypes.CallMethodParams<"getSymbol">
    ): Promise<NFTCollectionTestTypes.CallMethodResult<"getSymbol">> => {
      return callMethod(
        NFTCollectionTest,
        this,
        "getSymbol",
        params === undefined ? {} : params
      );
    },
    totalSupply: async (
      params?: NFTCollectionTestTypes.CallMethodParams<"totalSupply">
    ): Promise<NFTCollectionTestTypes.CallMethodResult<"totalSupply">> => {
      return callMethod(
        NFTCollectionTest,
        this,
        "totalSupply",
        params === undefined ? {} : params
      );
    },
    nftByIndex: async (
      params: NFTCollectionTestTypes.CallMethodParams<"nftByIndex">
    ): Promise<NFTCollectionTestTypes.CallMethodResult<"nftByIndex">> => {
      return callMethod(NFTCollectionTest, this, "nftByIndex", params);
    },
    mint: async (
      params: NFTCollectionTestTypes.CallMethodParams<"mint">
    ): Promise<NFTCollectionTestTypes.CallMethodResult<"mint">> => {
      return callMethod(NFTCollectionTest, this, "mint", params);
    },
  };

  async multicall<Calls extends NFTCollectionTestTypes.MultiCallParams>(
    calls: Calls
  ): Promise<NFTCollectionTestTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      NFTCollectionTest,
      this,
      calls
    )) as NFTCollectionTestTypes.MultiCallResults<Calls>;
  }
}
