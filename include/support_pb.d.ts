// package: apiv4.support
// file: include/support.proto

import * as jspb from "google-protobuf";

export class Credential extends jspb.Message {
  getSessionIdBis(): string;
  setSessionIdBis(value: string): void;

  getSessionSecret(): string;
  setSessionSecret(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Credential.AsObject;
  static toObject(includeInstance: boolean, msg: Credential): Credential.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Credential, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Credential;
  static deserializeBinaryFromReader(message: Credential, reader: jspb.BinaryReader): Credential;
}

export namespace Credential {
  export type AsObject = {
    sessionIdBis: string,
    sessionSecret: string,
  }
}

export class Group_model extends jspb.Message {
  getGroupIdBis(): string;
  setGroupIdBis(value: string): void;

  getGroupNameBis(): string;
  setGroupNameBis(value: string): void;

  clearGroupPermissionsIdBisList(): void;
  getGroupPermissionsIdBisList(): Array<string>;
  setGroupPermissionsIdBisList(value: Array<string>): void;
  addGroupPermissionsIdBis(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Group_model.AsObject;
  static toObject(includeInstance: boolean, msg: Group_model): Group_model.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Group_model, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Group_model;
  static deserializeBinaryFromReader(message: Group_model, reader: jspb.BinaryReader): Group_model;
}

export namespace Group_model {
  export type AsObject = {
    groupIdBis: string,
    groupNameBis: string,
    groupPermissionsIdBisList: Array<string>,
  }
}

export class Proof_of_work_required_to_continue extends jspb.Message {
  getPowWorkletIdentifier(): string;
  setPowWorkletIdentifier(value: string): void;

  getPowType(): Proof_of_work_required_to_continue.Pow_typeMap[keyof Proof_of_work_required_to_continue.Pow_typeMap];
  setPowType(value: Proof_of_work_required_to_continue.Pow_typeMap[keyof Proof_of_work_required_to_continue.Pow_typeMap]): void;

  getPowChallenge(): string;
  setPowChallenge(value: string): void;

  getExpiryIso(): string;
  setExpiryIso(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Proof_of_work_required_to_continue.AsObject;
  static toObject(includeInstance: boolean, msg: Proof_of_work_required_to_continue): Proof_of_work_required_to_continue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Proof_of_work_required_to_continue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Proof_of_work_required_to_continue;
  static deserializeBinaryFromReader(message: Proof_of_work_required_to_continue, reader: jspb.BinaryReader): Proof_of_work_required_to_continue;
}

export namespace Proof_of_work_required_to_continue {
  export type AsObject = {
    powWorkletIdentifier: string,
    powType: Proof_of_work_required_to_continue.Pow_typeMap[keyof Proof_of_work_required_to_continue.Pow_typeMap],
    powChallenge: string,
    expiryIso: string,
  }

  export interface Pow_typeMap {
    CAPTCHA_1: 0;
    MEMORY_HARD_KEY_DERIVATION: 1;
  }

  export const Pow_type: Pow_typeMap;
}

export class Proof_of_work_produced extends jspb.Message {
  getPowWorkletIdentifier(): string;
  setPowWorkletIdentifier(value: string): void;

  getPowAnswer(): string;
  setPowAnswer(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Proof_of_work_produced.AsObject;
  static toObject(includeInstance: boolean, msg: Proof_of_work_produced): Proof_of_work_produced.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Proof_of_work_produced, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Proof_of_work_produced;
  static deserializeBinaryFromReader(message: Proof_of_work_produced, reader: jspb.BinaryReader): Proof_of_work_produced;
}

export namespace Proof_of_work_produced {
  export type AsObject = {
    powWorkletIdentifier: string,
    powAnswer: string,
  }
}

