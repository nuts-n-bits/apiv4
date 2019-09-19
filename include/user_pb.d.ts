// package: apiv4.user
// file: include/user.proto

import * as jspb from "google-protobuf";
import * as include_support_pb from "../include/support_pb";

export class User_public_model extends jspb.Message {
  getUserIdBis(): string;
  setUserIdBis(value: string): void;

  getUserCreationTimeIso(): string;
  setUserCreationTimeIso(value: string): void;

  getUserName(): string;
  setUserName(value: string): void;

  getUserNickName(): string;
  setUserNickName(value: string): void;

  clearUserGroupsList(): void;
  getUserGroupsList(): Array<string>;
  setUserGroupsList(value: Array<string>): void;
  addUserGroups(value: string, index?: number): string;

  clearUserTagsList(): void;
  getUserTagsList(): Array<string>;
  setUserTagsList(value: Array<string>): void;
  addUserTags(value: string, index?: number): string;

  clearUserActivitiesList(): void;
  getUserActivitiesList(): Array<string>;
  setUserActivitiesList(value: Array<string>): void;
  addUserActivities(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User_public_model.AsObject;
  static toObject(includeInstance: boolean, msg: User_public_model): User_public_model.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User_public_model, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User_public_model;
  static deserializeBinaryFromReader(message: User_public_model, reader: jspb.BinaryReader): User_public_model;
}

export namespace User_public_model {
  export type AsObject = {
    userIdBis: string,
    userCreationTimeIso: string,
    userName: string,
    userNickName: string,
    userGroupsList: Array<string>,
    userTagsList: Array<string>,
    userActivitiesList: Array<string>,
  }
}

export class User_private_model extends jspb.Message {
  hasUserPublicModel(): boolean;
  clearUserPublicModel(): void;
  getUserPublicModel(): User_public_model | undefined;
  setUserPublicModel(value?: User_public_model): void;

  getEmail(): string;
  setEmail(value: string): void;

  getEmailVerified(): boolean;
  setEmailVerified(value: boolean): void;

  getLastPasswordUpdateIso(): string;
  setLastPasswordUpdateIso(value: string): void;

  clearBookmarksList(): void;
  getBookmarksList(): Array<string>;
  setBookmarksList(value: Array<string>): void;
  addBookmarks(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User_private_model.AsObject;
  static toObject(includeInstance: boolean, msg: User_private_model): User_private_model.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User_private_model, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User_private_model;
  static deserializeBinaryFromReader(message: User_private_model, reader: jspb.BinaryReader): User_private_model;
}

export namespace User_private_model {
  export type AsObject = {
    userPublicModel?: User_public_model.AsObject,
    email: string,
    emailVerified: boolean,
    lastPasswordUpdateIso: string,
    bookmarksList: Array<string>,
  }
}

export class Obtain_credential_by_password_naive_attempt extends jspb.Message {
  getUserNameNormalized(): string;
  setUserNameNormalized(value: string): void;

  getUserEmailPrimary(): string;
  setUserEmailPrimary(value: string): void;

  getMhkd8192(): string;
  setMhkd8192(value: string): void;

  getRequireExpiry(): Require_credential_expiryMap[keyof Require_credential_expiryMap];
  setRequireExpiry(value: Require_credential_expiryMap[keyof Require_credential_expiryMap]): void;

  getHmacSignedProofNoTotpNeededOnThisDevice(): string;
  setHmacSignedProofNoTotpNeededOnThisDevice(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Obtain_credential_by_password_naive_attempt.AsObject;
  static toObject(includeInstance: boolean, msg: Obtain_credential_by_password_naive_attempt): Obtain_credential_by_password_naive_attempt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Obtain_credential_by_password_naive_attempt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Obtain_credential_by_password_naive_attempt;
  static deserializeBinaryFromReader(message: Obtain_credential_by_password_naive_attempt, reader: jspb.BinaryReader): Obtain_credential_by_password_naive_attempt;
}

export namespace Obtain_credential_by_password_naive_attempt {
  export type AsObject = {
    userNameNormalized: string,
    userEmailPrimary: string,
    mhkd8192: string,
    requireExpiry: Require_credential_expiryMap[keyof Require_credential_expiryMap],
    hmacSignedProofNoTotpNeededOnThisDevice: string,
  }
}

export class Reply_2fa_hmac_totp_required_to_obtain_credential extends jspb.Message {
  getTargetUidBis(): string;
  setTargetUidBis(value: string): void;

  getIntermediateAccessGrantToken(): string;
  setIntermediateAccessGrantToken(value: string): void;

  getExpiryIso(): string;
  setExpiryIso(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reply_2fa_hmac_totp_required_to_obtain_credential.AsObject;
  static toObject(includeInstance: boolean, msg: Reply_2fa_hmac_totp_required_to_obtain_credential): Reply_2fa_hmac_totp_required_to_obtain_credential.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Reply_2fa_hmac_totp_required_to_obtain_credential, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Reply_2fa_hmac_totp_required_to_obtain_credential;
  static deserializeBinaryFromReader(message: Reply_2fa_hmac_totp_required_to_obtain_credential, reader: jspb.BinaryReader): Reply_2fa_hmac_totp_required_to_obtain_credential;
}

export namespace Reply_2fa_hmac_totp_required_to_obtain_credential {
  export type AsObject = {
    targetUidBis: string,
    intermediateAccessGrantToken: string,
    expiryIso: string,
  }
}

export class Obtain_credential_2fa_hmac_totp_code extends jspb.Message {
  getTargetUidBis(): string;
  setTargetUidBis(value: string): void;

  getIntermediateAccessGrantToken(): string;
  setIntermediateAccessGrantToken(value: string): void;

  getTotpToken(): string;
  setTotpToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Obtain_credential_2fa_hmac_totp_code.AsObject;
  static toObject(includeInstance: boolean, msg: Obtain_credential_2fa_hmac_totp_code): Obtain_credential_2fa_hmac_totp_code.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Obtain_credential_2fa_hmac_totp_code, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Obtain_credential_2fa_hmac_totp_code;
  static deserializeBinaryFromReader(message: Obtain_credential_2fa_hmac_totp_code, reader: jspb.BinaryReader): Obtain_credential_2fa_hmac_totp_code;
}

export namespace Obtain_credential_2fa_hmac_totp_code {
  export type AsObject = {
    targetUidBis: string,
    intermediateAccessGrantToken: string,
    totpToken: string,
  }
}

export class Reply_2fa_mail_otp_step_0_verify_email_addr extends jspb.Message {
  getTargetUidBis(): string;
  setTargetUidBis(value: string): void;

  getIntermediateAccessGrantToken(): string;
  setIntermediateAccessGrantToken(value: string): void;

  getEmailHint(): string;
  setEmailHint(value: string): void;

  getExpiryIso(): string;
  setExpiryIso(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reply_2fa_mail_otp_step_0_verify_email_addr.AsObject;
  static toObject(includeInstance: boolean, msg: Reply_2fa_mail_otp_step_0_verify_email_addr): Reply_2fa_mail_otp_step_0_verify_email_addr.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Reply_2fa_mail_otp_step_0_verify_email_addr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Reply_2fa_mail_otp_step_0_verify_email_addr;
  static deserializeBinaryFromReader(message: Reply_2fa_mail_otp_step_0_verify_email_addr, reader: jspb.BinaryReader): Reply_2fa_mail_otp_step_0_verify_email_addr;
}

export namespace Reply_2fa_mail_otp_step_0_verify_email_addr {
  export type AsObject = {
    targetUidBis: string,
    intermediateAccessGrantToken: string,
    emailHint: string,
    expiryIso: string,
  }
}

export class Obtain_credential_mail_otp_step_0_response extends jspb.Message {
  getTargetUidBis(): string;
  setTargetUidBis(value: string): void;

  getIntermediateAccessGrantToken(): string;
  setIntermediateAccessGrantToken(value: string): void;

  getFullEmail(): string;
  setFullEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Obtain_credential_mail_otp_step_0_response.AsObject;
  static toObject(includeInstance: boolean, msg: Obtain_credential_mail_otp_step_0_response): Obtain_credential_mail_otp_step_0_response.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Obtain_credential_mail_otp_step_0_response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Obtain_credential_mail_otp_step_0_response;
  static deserializeBinaryFromReader(message: Obtain_credential_mail_otp_step_0_response, reader: jspb.BinaryReader): Obtain_credential_mail_otp_step_0_response;
}

export namespace Obtain_credential_mail_otp_step_0_response {
  export type AsObject = {
    targetUidBis: string,
    intermediateAccessGrantToken: string,
    fullEmail: string,
  }
}

export class Reply_2fa_mail_otp_step_1_mail_sent extends jspb.Message {
  getExpiryIso(): string;
  setExpiryIso(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reply_2fa_mail_otp_step_1_mail_sent.AsObject;
  static toObject(includeInstance: boolean, msg: Reply_2fa_mail_otp_step_1_mail_sent): Reply_2fa_mail_otp_step_1_mail_sent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Reply_2fa_mail_otp_step_1_mail_sent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Reply_2fa_mail_otp_step_1_mail_sent;
  static deserializeBinaryFromReader(message: Reply_2fa_mail_otp_step_1_mail_sent, reader: jspb.BinaryReader): Reply_2fa_mail_otp_step_1_mail_sent;
}

export namespace Reply_2fa_mail_otp_step_1_mail_sent {
  export type AsObject = {
    expiryIso: string,
  }
}

export class Obtain_credential_mail_otp_step_1_response extends jspb.Message {
  getTargetUidBis(): string;
  setTargetUidBis(value: string): void;

  getIntermediateAccessGrantToken(): string;
  setIntermediateAccessGrantToken(value: string): void;

  getMailToken(): string;
  setMailToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Obtain_credential_mail_otp_step_1_response.AsObject;
  static toObject(includeInstance: boolean, msg: Obtain_credential_mail_otp_step_1_response): Obtain_credential_mail_otp_step_1_response.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Obtain_credential_mail_otp_step_1_response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Obtain_credential_mail_otp_step_1_response;
  static deserializeBinaryFromReader(message: Obtain_credential_mail_otp_step_1_response, reader: jspb.BinaryReader): Obtain_credential_mail_otp_step_1_response;
}

export namespace Obtain_credential_mail_otp_step_1_response {
  export type AsObject = {
    targetUidBis: string,
    intermediateAccessGrantToken: string,
    mailToken: string,
  }
}

export class Response_credential_granted extends jspb.Message {
  hasCredential(): boolean;
  clearCredential(): void;
  getCredential(): include_support_pb.Credential | undefined;
  setCredential(value?: include_support_pb.Credential): void;

  getExpiryIso(): string;
  setExpiryIso(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response_credential_granted.AsObject;
  static toObject(includeInstance: boolean, msg: Response_credential_granted): Response_credential_granted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Response_credential_granted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response_credential_granted;
  static deserializeBinaryFromReader(message: Response_credential_granted, reader: jspb.BinaryReader): Response_credential_granted;
}

export namespace Response_credential_granted {
  export type AsObject = {
    credential?: include_support_pb.Credential.AsObject,
    expiryIso: string,
  }
}

export class Request_create_user_naive_attempt extends jspb.Message {
  getIdentifyingName(): string;
  setIdentifyingName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getEmailPrimary(): string;
  setEmailPrimary(value: string): void;

  getMhkd8192(): string;
  setMhkd8192(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request_create_user_naive_attempt.AsObject;
  static toObject(includeInstance: boolean, msg: Request_create_user_naive_attempt): Request_create_user_naive_attempt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Request_create_user_naive_attempt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request_create_user_naive_attempt;
  static deserializeBinaryFromReader(message: Request_create_user_naive_attempt, reader: jspb.BinaryReader): Request_create_user_naive_attempt;
}

export namespace Request_create_user_naive_attempt {
  export type AsObject = {
    identifyingName: string,
    displayName: string,
    emailPrimary: string,
    mhkd8192: string,
  }
}

export class Response_user_created extends jspb.Message {
  getUserIdBis(): string;
  setUserIdBis(value: string): void;

  hasCredential(): boolean;
  clearCredential(): void;
  getCredential(): include_support_pb.Credential | undefined;
  setCredential(value?: include_support_pb.Credential): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response_user_created.AsObject;
  static toObject(includeInstance: boolean, msg: Response_user_created): Response_user_created.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Response_user_created, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response_user_created;
  static deserializeBinaryFromReader(message: Response_user_created, reader: jspb.BinaryReader): Response_user_created;
}

export namespace Response_user_created {
  export type AsObject = {
    userIdBis: string,
    credential?: include_support_pb.Credential.AsObject,
  }
}

export interface Require_credential_expiryMap {
  EXPIRY_TYPE_ONE_DAY: 0;
  EXPIRY_TYPE_90_DAYS: 1;
}

export const Require_credential_expiry: Require_credential_expiryMap;

