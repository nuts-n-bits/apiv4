// package: 
// file: apiv4.proto

import * as jspb from "google-protobuf";
import * as include_support_pb from "./include/support_pb";
import * as include_page_pb from "./include/page_pb";
import * as include_feed_pb from "./include/feed_pb";
import * as include_user_pb from "./include/user_pb";

export class Api_request_wrapper extends jspb.Message {
  getMessageVersion(): string;
  setMessageVersion(value: string): void;

  hasCredential(): boolean;
  clearCredential(): void;
  getCredential(): include_support_pb.Credential | undefined;
  setCredential(value?: include_support_pb.Credential): void;

  hasPowReply(): boolean;
  clearPowReply(): void;
  getPowReply(): include_support_pb.Proof_of_work_produced | undefined;
  setPowReply(value?: include_support_pb.Proof_of_work_produced): void;

  hasPageRenderingElements(): boolean;
  clearPageRenderingElements(): void;
  getPageRenderingElements(): include_page_pb.Request_page_rendering_elements_by_name | undefined;
  setPageRenderingElements(value?: include_page_pb.Request_page_rendering_elements_by_name): void;

  hasPageMetadata(): boolean;
  clearPageMetadata(): void;
  getPageMetadata(): include_page_pb.Request_page_metadata_by_name | undefined;
  setPageMetadata(value?: include_page_pb.Request_page_metadata_by_name): void;

  hasCreateOrEditPage(): boolean;
  clearCreateOrEditPage(): void;
  getCreateOrEditPage(): include_page_pb.Request_create_or_edit_page | undefined;
  setCreateOrEditPage(value?: include_page_pb.Request_create_or_edit_page): void;

  hasFeedRenderingElements(): boolean;
  clearFeedRenderingElements(): void;
  getFeedRenderingElements(): include_feed_pb.Request_feed_rendering_elements_by_name | undefined;
  setFeedRenderingElements(value?: include_feed_pb.Request_feed_rendering_elements_by_name): void;

  hasFeedMetadata(): boolean;
  clearFeedMetadata(): void;
  getFeedMetadata(): include_feed_pb.Request_feed_metadata_by_name | undefined;
  setFeedMetadata(value?: include_feed_pb.Request_feed_metadata_by_name): void;

  hasSignInPwdNaive(): boolean;
  clearSignInPwdNaive(): void;
  getSignInPwdNaive(): include_user_pb.Obtain_credential_by_password_naive_attempt | undefined;
  setSignInPwdNaive(value?: include_user_pb.Obtain_credential_by_password_naive_attempt): void;

  hasSignInPwdPow1(): boolean;
  clearSignInPwdPow1(): void;
  getSignInPwdPow1(): include_user_pb.Obtain_credential_by_password_pow_1 | undefined;
  setSignInPwdPow1(value?: include_user_pb.Obtain_credential_by_password_pow_1): void;

  hasSignInHmacTotp(): boolean;
  clearSignInHmacTotp(): void;
  getSignInHmacTotp(): include_user_pb.Obtain_credential_2fa_hmac_totp_code | undefined;
  setSignInHmacTotp(value?: include_user_pb.Obtain_credential_2fa_hmac_totp_code): void;

  hasSignInMailOtp0(): boolean;
  clearSignInMailOtp0(): void;
  getSignInMailOtp0(): include_user_pb.Obtain_credential_mail_otp_step_0_response | undefined;
  setSignInMailOtp0(value?: include_user_pb.Obtain_credential_mail_otp_step_0_response): void;

  hasSignInMailOtp1(): boolean;
  clearSignInMailOtp1(): void;
  getSignInMailOtp1(): include_user_pb.Obtain_credential_mail_otp_step_1_response | undefined;
  setSignInMailOtp1(value?: include_user_pb.Obtain_credential_mail_otp_step_1_response): void;

  getActualMessageCase(): Api_request_wrapper.ActualMessageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Api_request_wrapper.AsObject;
  static toObject(includeInstance: boolean, msg: Api_request_wrapper): Api_request_wrapper.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Api_request_wrapper, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Api_request_wrapper;
  static deserializeBinaryFromReader(message: Api_request_wrapper, reader: jspb.BinaryReader): Api_request_wrapper;
}

export namespace Api_request_wrapper {
  export type AsObject = {
    messageVersion: string,
    credential?: include_support_pb.Credential.AsObject,
    powReply?: include_support_pb.Proof_of_work_produced.AsObject,
    pageRenderingElements?: include_page_pb.Request_page_rendering_elements_by_name.AsObject,
    pageMetadata?: include_page_pb.Request_page_metadata_by_name.AsObject,
    createOrEditPage?: include_page_pb.Request_create_or_edit_page.AsObject,
    feedRenderingElements?: include_feed_pb.Request_feed_rendering_elements_by_name.AsObject,
    feedMetadata?: include_feed_pb.Request_feed_metadata_by_name.AsObject,
    signInPwdNaive?: include_user_pb.Obtain_credential_by_password_naive_attempt.AsObject,
    signInPwdPow1?: include_user_pb.Obtain_credential_by_password_pow_1.AsObject,
    signInHmacTotp?: include_user_pb.Obtain_credential_2fa_hmac_totp_code.AsObject,
    signInMailOtp0?: include_user_pb.Obtain_credential_mail_otp_step_0_response.AsObject,
    signInMailOtp1?: include_user_pb.Obtain_credential_mail_otp_step_1_response.AsObject,
  }

  export enum ActualMessageCase {
    ACTUAL_MESSAGE_NOT_SET = 0,
    PAGE_RENDERING_ELEMENTS = 11,
    PAGE_METADATA = 12,
    CREATE_OR_EDIT_PAGE = 13,
    FEED_RENDERING_ELEMENTS = 21,
    FEED_METADATA = 22,
    SIGN_IN_PWD_NAIVE = 31,
    SIGN_IN_PWD_POW_1 = 32,
    SIGN_IN_HMAC_TOTP = 33,
    SIGN_IN_MAIL_OTP_0 = 34,
    SIGN_IN_MAIL_OTP_1 = 35,
  }
}

export class Api_response_wrapper extends jspb.Message {
  getMessageVersion(): string;
  setMessageVersion(value: string): void;

  getExecutionOk(): boolean;
  setExecutionOk(value: boolean): void;

  getError(): Api_response_wrapper.Broad_error_typeMap[keyof Api_response_wrapper.Broad_error_typeMap];
  setError(value: Api_response_wrapper.Broad_error_typeMap[keyof Api_response_wrapper.Broad_error_typeMap]): void;

  getMissionSpecificError(): string;
  setMissionSpecificError(value: string): void;

  hasPageRenderingElements(): boolean;
  clearPageRenderingElements(): void;
  getPageRenderingElements(): include_page_pb.Page_with_rendering_elements | undefined;
  setPageRenderingElements(value?: include_page_pb.Page_with_rendering_elements): void;

  hasPageMetadata(): boolean;
  clearPageMetadata(): void;
  getPageMetadata(): include_page_pb.Page_metadata | undefined;
  setPageMetadata(value?: include_page_pb.Page_metadata): void;

  hasFeedRenderingElements(): boolean;
  clearFeedRenderingElements(): void;
  getFeedRenderingElements(): include_feed_pb.Feed_with_rendering_elements | undefined;
  setFeedRenderingElements(value?: include_feed_pb.Feed_with_rendering_elements): void;

  hasFeedMetadata(): boolean;
  clearFeedMetadata(): void;
  getFeedMetadata(): include_feed_pb.Feed_metadata | undefined;
  setFeedMetadata(value?: include_feed_pb.Feed_metadata): void;

  hasPowRequired(): boolean;
  clearPowRequired(): void;
  getPowRequired(): include_support_pb.Proof_of_work_required_to_continue | undefined;
  setPowRequired(value?: include_support_pb.Proof_of_work_required_to_continue): void;

  hasSignInHmacTotpRequired(): boolean;
  clearSignInHmacTotpRequired(): void;
  getSignInHmacTotpRequired(): include_user_pb.Reply_2fa_hmac_totp_required_to_obtain_credential | undefined;
  setSignInHmacTotpRequired(value?: include_user_pb.Reply_2fa_hmac_totp_required_to_obtain_credential): void;

  hasSignInMailTotpStep0(): boolean;
  clearSignInMailTotpStep0(): void;
  getSignInMailTotpStep0(): include_user_pb.Reply_2fa_mail_otp_step_0_verify_email_addr | undefined;
  setSignInMailTotpStep0(value?: include_user_pb.Reply_2fa_mail_otp_step_0_verify_email_addr): void;

  hasSignInMailTotpStep1(): boolean;
  clearSignInMailTotpStep1(): void;
  getSignInMailTotpStep1(): include_user_pb.Reply_2fa_mail_otp_step_1_mail_sent | undefined;
  setSignInMailTotpStep1(value?: include_user_pb.Reply_2fa_mail_otp_step_1_mail_sent): void;

  hasCredentialGranted(): boolean;
  clearCredentialGranted(): void;
  getCredentialGranted(): include_user_pb.Response_credential_granted | undefined;
  setCredentialGranted(value?: include_user_pb.Response_credential_granted): void;

  getActualMessageCase(): Api_response_wrapper.ActualMessageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Api_response_wrapper.AsObject;
  static toObject(includeInstance: boolean, msg: Api_response_wrapper): Api_response_wrapper.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Api_response_wrapper, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Api_response_wrapper;
  static deserializeBinaryFromReader(message: Api_response_wrapper, reader: jspb.BinaryReader): Api_response_wrapper;
}

export namespace Api_response_wrapper {
  export type AsObject = {
    messageVersion: string,
    executionOk: boolean,
    error: Api_response_wrapper.Broad_error_typeMap[keyof Api_response_wrapper.Broad_error_typeMap],
    missionSpecificError: string,
    pageRenderingElements?: include_page_pb.Page_with_rendering_elements.AsObject,
    pageMetadata?: include_page_pb.Page_metadata.AsObject,
    feedRenderingElements?: include_feed_pb.Feed_with_rendering_elements.AsObject,
    feedMetadata?: include_feed_pb.Feed_metadata.AsObject,
    powRequired?: include_support_pb.Proof_of_work_required_to_continue.AsObject,
    signInHmacTotpRequired?: include_user_pb.Reply_2fa_hmac_totp_required_to_obtain_credential.AsObject,
    signInMailTotpStep0?: include_user_pb.Reply_2fa_mail_otp_step_0_verify_email_addr.AsObject,
    signInMailTotpStep1?: include_user_pb.Reply_2fa_mail_otp_step_1_mail_sent.AsObject,
    credentialGranted?: include_user_pb.Response_credential_granted.AsObject,
  }

  export interface Broad_error_typeMap {
    NO_INFO: 0;
    INSUFFICIENT_PERMISSION: 1;
    INVALID_MESSAGE: 2;
    DNE: 3;
    MISSION_SPECIFIC: 4;
    PROCEDURE_NOT_SUPPORTED: 5;
    MESSAGE_VERSION_TOO_OLD: 6;
    MESSAGE_VERSION_TOO_NEW: 7;
  }

  export const Broad_error_type: Broad_error_typeMap;

  export enum ActualMessageCase {
    ACTUAL_MESSAGE_NOT_SET = 0,
    PAGE_RENDERING_ELEMENTS = 11,
    PAGE_METADATA = 12,
    FEED_RENDERING_ELEMENTS = 21,
    FEED_METADATA = 22,
    POW_REQUIRED = 31,
    SIGN_IN_HMAC_TOTP_REQUIRED = 41,
    SIGN_IN_MAIL_TOTP_STEP_0 = 42,
    SIGN_IN_MAIL_TOTP_STEP_1 = 43,
    CREDENTIAL_GRANTED = 44,
  }
}

