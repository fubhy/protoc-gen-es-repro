// @generated by protoc-gen-es v1.0.0 with parameter "target=ts"
// @generated from file sf/substreams/v1/modules.proto (package sf.substreams.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message sf.substreams.v1.Modules
 */
export class Modules extends Message<Modules> {
  /**
   * @generated from field: repeated sf.substreams.v1.Module modules = 1;
   */
  modules: Module[] = [];

  /**
   * @generated from field: repeated sf.substreams.v1.Binary binaries = 2;
   */
  binaries: Binary[] = [];

  constructor(data?: PartialMessage<Modules>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "sf.substreams.v1.Modules";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "modules", kind: "message", T: Module, repeated: true },
    { no: 2, name: "binaries", kind: "message", T: Binary, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Modules {
    return new Modules().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Modules {
    return new Modules().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Modules {
    return new Modules().fromJsonString(jsonString, options);
  }

  static equals(a: Modules | PlainMessage<Modules> | undefined, b: Modules | PlainMessage<Modules> | undefined): boolean {
    return proto3.util.equals(Modules, a, b);
  }
}

/**
 * Binary represents some code compiled to its binary form.
 *
 * @generated from message sf.substreams.v1.Binary
 */
export class Binary extends Message<Binary> {
  /**
   * @generated from field: string type = 1;
   */
  type = "";

  /**
   * @generated from field: bytes content = 2;
   */
  content = new Uint8Array(0);

  constructor(data?: PartialMessage<Binary>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "sf.substreams.v1.Binary";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "content", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Binary {
    return new Binary().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Binary {
    return new Binary().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Binary {
    return new Binary().fromJsonString(jsonString, options);
  }

  static equals(a: Binary | PlainMessage<Binary> | undefined, b: Binary | PlainMessage<Binary> | undefined): boolean {
    return proto3.util.equals(Binary, a, b);
  }
}

/**
 * @generated from message sf.substreams.v1.Module
 */
export class Module extends Message<Module> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from oneof sf.substreams.v1.Module.kind
   */
  kind: {
    /**
     * @generated from field: sf.substreams.v1.Module.KindMap kind_map = 2;
     */
    value: Module_KindMap;
    case: "kindMap";
  } | {
    /**
     * @generated from field: sf.substreams.v1.Module.KindStore kind_store = 3;
     */
    value: Module_KindStore;
    case: "kindStore";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * @generated from field: uint32 binary_index = 4;
   */
  binaryIndex = 0;

  /**
   * @generated from field: string binary_entrypoint = 5;
   */
  binaryEntrypoint = "";

  /**
   * @generated from field: repeated sf.substreams.v1.Module.Input inputs = 6;
   */
  inputs: Module_Input[] = [];

  /**
   * @generated from field: sf.substreams.v1.Module.Output output = 7;
   */
  output?: Module_Output;

  /**
   * @generated from field: uint64 initial_block = 8;
   */
  initialBlock = protoInt64.zero;

  constructor(data?: PartialMessage<Module>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "sf.substreams.v1.Module";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "kind_map", kind: "message", T: Module_KindMap, oneof: "kind" },
    { no: 3, name: "kind_store", kind: "message", T: Module_KindStore, oneof: "kind" },
    { no: 4, name: "binary_index", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "binary_entrypoint", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "inputs", kind: "message", T: Module_Input, repeated: true },
    { no: 7, name: "output", kind: "message", T: Module_Output },
    { no: 8, name: "initial_block", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module {
    return new Module().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module {
    return new Module().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module {
    return new Module().fromJsonString(jsonString, options);
  }

  static equals(a: Module | PlainMessage<Module> | undefined, b: Module | PlainMessage<Module> | undefined): boolean {
    return proto3.util.equals(Module, a, b);
  }
}

/**
 * @generated from message sf.substreams.v1.Module.KindMap
 */
export class Module_KindMap extends Message<Module_KindMap> {
  /**
   * @generated from field: string output_type = 1;
   */
  outputType = "";

  constructor(data?: PartialMessage<Module_KindMap>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "sf.substreams.v1.Module.KindMap";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "output_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module_KindMap {
    return new Module_KindMap().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module_KindMap {
    return new Module_KindMap().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module_KindMap {
    return new Module_KindMap().fromJsonString(jsonString, options);
  }

  static equals(a: Module_KindMap | PlainMessage<Module_KindMap> | undefined, b: Module_KindMap | PlainMessage<Module_KindMap> | undefined): boolean {
    return proto3.util.equals(Module_KindMap, a, b);
  }
}

/**
 * @generated from message sf.substreams.v1.Module.KindStore
 */
export class Module_KindStore extends Message<Module_KindStore> {
  /**
   * The `update_policy` determines the functions available to mutate the store
   * (like `set()`, `set_if_not_exists()` or `sum()`, etc..) in
   * order to ensure that parallel operations are possible and deterministic
   *
   * Say a store cumulates keys from block 0 to 1M, and a second store
   * cumulates keys from block 1M to 2M. When we want to use this
   * store as a dependency for a downstream module, we will merge the
   * two stores according to this policy.
   *
   * @generated from field: sf.substreams.v1.Module.KindStore.UpdatePolicy update_policy = 1;
   */
  updatePolicy = Module_KindStore_UpdatePolicy.UNSET;

  /**
   * @generated from field: string value_type = 2;
   */
  valueType = "";

  constructor(data?: PartialMessage<Module_KindStore>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "sf.substreams.v1.Module.KindStore";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "update_policy", kind: "enum", T: proto3.getEnumType(Module_KindStore_UpdatePolicy) },
    { no: 2, name: "value_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module_KindStore {
    return new Module_KindStore().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module_KindStore {
    return new Module_KindStore().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module_KindStore {
    return new Module_KindStore().fromJsonString(jsonString, options);
  }

  static equals(a: Module_KindStore | PlainMessage<Module_KindStore> | undefined, b: Module_KindStore | PlainMessage<Module_KindStore> | undefined): boolean {
    return proto3.util.equals(Module_KindStore, a, b);
  }
}

/**
 * @generated from enum sf.substreams.v1.Module.KindStore.UpdatePolicy
 */
export enum Module_KindStore_UpdatePolicy {
  /**
   * @generated from enum value: UPDATE_POLICY_UNSET = 0;
   */
  UNSET = 0,

  /**
   * Provides a store where you can `set()` keys, and the latest key wins
   *
   * @generated from enum value: UPDATE_POLICY_SET = 1;
   */
  SET = 1,

  /**
   * Provides a store where you can `set_if_not_exists()` keys, and the first key wins
   *
   * @generated from enum value: UPDATE_POLICY_SET_IF_NOT_EXISTS = 2;
   */
  SET_IF_NOT_EXISTS = 2,

  /**
   * Provides a store where you can `add_*()` keys, where two stores merge by summing its values.
   *
   * @generated from enum value: UPDATE_POLICY_ADD = 3;
   */
  ADD = 3,

  /**
   * Provides a store where you can `min_*()` keys, where two stores merge by leaving the minimum value.
   *
   * @generated from enum value: UPDATE_POLICY_MIN = 4;
   */
  MIN = 4,

  /**
   * Provides a store where you can `max_*()` keys, where two stores merge by leaving the maximum value.
   *
   * @generated from enum value: UPDATE_POLICY_MAX = 5;
   */
  MAX = 5,

  /**
   * Provides a store where you can `append()` keys, where two stores merge by concatenating the bytes in order.
   *
   * @generated from enum value: UPDATE_POLICY_APPEND = 6;
   */
  APPEND = 6,
}
// Retrieve enum metadata with: proto3.getEnumType(Module_KindStore_UpdatePolicy)
proto3.util.setEnumType(Module_KindStore_UpdatePolicy, "sf.substreams.v1.Module.KindStore.UpdatePolicy", [
  { no: 0, name: "UPDATE_POLICY_UNSET" },
  { no: 1, name: "UPDATE_POLICY_SET" },
  { no: 2, name: "UPDATE_POLICY_SET_IF_NOT_EXISTS" },
  { no: 3, name: "UPDATE_POLICY_ADD" },
  { no: 4, name: "UPDATE_POLICY_MIN" },
  { no: 5, name: "UPDATE_POLICY_MAX" },
  { no: 6, name: "UPDATE_POLICY_APPEND" },
]);

/**
 * @generated from message sf.substreams.v1.Module.Input
 */
export class Module_Input extends Message<Module_Input> {
  /**
   * @generated from oneof sf.substreams.v1.Module.Input.input
   */
  input: {
    /**
     * @generated from field: sf.substreams.v1.Module.Input.Source source = 1;
     */
    value: Module_Input_Source;
    case: "source";
  } | {
    /**
     * @generated from field: sf.substreams.v1.Module.Input.Map map = 2;
     */
    value: Module_Input_Map;
    case: "map";
  } | {
    /**
     * @generated from field: sf.substreams.v1.Module.Input.Store store = 3;
     */
    value: Module_Input_Store;
    case: "store";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Module_Input>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "sf.substreams.v1.Module.Input";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "source", kind: "message", T: Module_Input_Source, oneof: "input" },
    { no: 2, name: "map", kind: "message", T: Module_Input_Map, oneof: "input" },
    { no: 3, name: "store", kind: "message", T: Module_Input_Store, oneof: "input" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module_Input {
    return new Module_Input().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module_Input {
    return new Module_Input().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module_Input {
    return new Module_Input().fromJsonString(jsonString, options);
  }

  static equals(a: Module_Input | PlainMessage<Module_Input> | undefined, b: Module_Input | PlainMessage<Module_Input> | undefined): boolean {
    return proto3.util.equals(Module_Input, a, b);
  }
}

/**
 * @generated from message sf.substreams.v1.Module.Input.Source
 */
export class Module_Input_Source extends Message<Module_Input_Source> {
  /**
   * ex: "sf.ethereum.type.v1.Block"
   *
   * @generated from field: string type = 1;
   */
  type = "";

  constructor(data?: PartialMessage<Module_Input_Source>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "sf.substreams.v1.Module.Input.Source";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module_Input_Source {
    return new Module_Input_Source().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module_Input_Source {
    return new Module_Input_Source().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module_Input_Source {
    return new Module_Input_Source().fromJsonString(jsonString, options);
  }

  static equals(a: Module_Input_Source | PlainMessage<Module_Input_Source> | undefined, b: Module_Input_Source | PlainMessage<Module_Input_Source> | undefined): boolean {
    return proto3.util.equals(Module_Input_Source, a, b);
  }
}

/**
 * @generated from message sf.substreams.v1.Module.Input.Map
 */
export class Module_Input_Map extends Message<Module_Input_Map> {
  /**
   * ex: "block_to_pairs"
   *
   * @generated from field: string module_name = 1;
   */
  moduleName = "";

  constructor(data?: PartialMessage<Module_Input_Map>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "sf.substreams.v1.Module.Input.Map";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "module_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module_Input_Map {
    return new Module_Input_Map().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module_Input_Map {
    return new Module_Input_Map().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module_Input_Map {
    return new Module_Input_Map().fromJsonString(jsonString, options);
  }

  static equals(a: Module_Input_Map | PlainMessage<Module_Input_Map> | undefined, b: Module_Input_Map | PlainMessage<Module_Input_Map> | undefined): boolean {
    return proto3.util.equals(Module_Input_Map, a, b);
  }
}

/**
 * @generated from message sf.substreams.v1.Module.Input.Store
 */
export class Module_Input_Store extends Message<Module_Input_Store> {
  /**
   * @generated from field: string module_name = 1;
   */
  moduleName = "";

  /**
   * @generated from field: sf.substreams.v1.Module.Input.Store.Mode mode = 2;
   */
  mode = Module_Input_Store_Mode.UNSET;

  constructor(data?: PartialMessage<Module_Input_Store>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "sf.substreams.v1.Module.Input.Store";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "module_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "mode", kind: "enum", T: proto3.getEnumType(Module_Input_Store_Mode) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module_Input_Store {
    return new Module_Input_Store().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module_Input_Store {
    return new Module_Input_Store().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module_Input_Store {
    return new Module_Input_Store().fromJsonString(jsonString, options);
  }

  static equals(a: Module_Input_Store | PlainMessage<Module_Input_Store> | undefined, b: Module_Input_Store | PlainMessage<Module_Input_Store> | undefined): boolean {
    return proto3.util.equals(Module_Input_Store, a, b);
  }
}

/**
 * @generated from enum sf.substreams.v1.Module.Input.Store.Mode
 */
export enum Module_Input_Store_Mode {
  /**
   * @generated from enum value: UNSET = 0;
   */
  UNSET = 0,

  /**
   * @generated from enum value: GET = 1;
   */
  GET = 1,

  /**
   * @generated from enum value: DELTAS = 2;
   */
  DELTAS = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(Module_Input_Store_Mode)
proto3.util.setEnumType(Module_Input_Store_Mode, "sf.substreams.v1.Module.Input.Store.Mode", [
  { no: 0, name: "UNSET" },
  { no: 1, name: "GET" },
  { no: 2, name: "DELTAS" },
]);

/**
 * @generated from message sf.substreams.v1.Module.Output
 */
export class Module_Output extends Message<Module_Output> {
  /**
   * @generated from field: string type = 1;
   */
  type = "";

  constructor(data?: PartialMessage<Module_Output>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "sf.substreams.v1.Module.Output";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module_Output {
    return new Module_Output().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module_Output {
    return new Module_Output().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module_Output {
    return new Module_Output().fromJsonString(jsonString, options);
  }

  static equals(a: Module_Output | PlainMessage<Module_Output> | undefined, b: Module_Output | PlainMessage<Module_Output> | undefined): boolean {
    return proto3.util.equals(Module_Output, a, b);
  }
}

