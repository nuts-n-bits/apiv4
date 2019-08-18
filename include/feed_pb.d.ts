// package: apiv4.feed
// file: include/feed.proto

import * as jspb from "google-protobuf";
import * as include_support_pb from "../include/support_pb";
import * as include_page_pb from "../include/page_pb";
import * as include_user_pb from "../include/user_pb";
import * as include_revision_pb from "../include/revision_pb";

export class Feed_metadata extends jspb.Message {
  getFeedIdBis(): string;
  setFeedIdBis(value: string): void;

  getNamespace(): string;
  setNamespace(value: string): void;

  getFeedName(): string;
  setFeedName(value: string): void;

  getFeedCreationTimeIso(): string;
  setFeedCreationTimeIso(value: string): void;

  hasCreator(): boolean;
  clearCreator(): void;
  getCreator(): include_user_pb.User_public_model | undefined;
  setCreator(value?: include_user_pb.User_public_model): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Feed_metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Feed_metadata): Feed_metadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Feed_metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Feed_metadata;
  static deserializeBinaryFromReader(message: Feed_metadata, reader: jspb.BinaryReader): Feed_metadata;
}

export namespace Feed_metadata {
  export type AsObject = {
    feedIdBis: string,
    namespace: string,
    feedName: string,
    feedCreationTimeIso: string,
    creator?: include_user_pb.User_public_model.AsObject,
  }
}

export class Feed_with_rendering_elements extends jspb.Message {
  hasFeedMeta(): boolean;
  clearFeedMeta(): void;
  getFeedMeta(): Feed_metadata | undefined;
  setFeedMeta(value?: Feed_metadata): void;

  clearFeedRenderList(): void;
  getFeedRenderList(): Array<include_page_pb.Page_with_rendering_elements>;
  setFeedRenderList(value: Array<include_page_pb.Page_with_rendering_elements>): void;
  addFeedRender(value?: include_page_pb.Page_with_rendering_elements, index?: number): include_page_pb.Page_with_rendering_elements;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Feed_with_rendering_elements.AsObject;
  static toObject(includeInstance: boolean, msg: Feed_with_rendering_elements): Feed_with_rendering_elements.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Feed_with_rendering_elements, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Feed_with_rendering_elements;
  static deserializeBinaryFromReader(message: Feed_with_rendering_elements, reader: jspb.BinaryReader): Feed_with_rendering_elements;
}

export namespace Feed_with_rendering_elements {
  export type AsObject = {
    feedMeta?: Feed_metadata.AsObject,
    feedRenderList: Array<include_page_pb.Page_with_rendering_elements.AsObject>,
  }
}

export class Request_feed_rendering_elements_by_name extends jspb.Message {
  getFeedName(): string;
  setFeedName(value: string): void;

  getNamespace(): string;
  setNamespace(value: string): void;

  getRequestAmountCeiling(): Request_feed_rendering_elements_by_name.Request_amount_ceilingMap[keyof Request_feed_rendering_elements_by_name.Request_amount_ceilingMap];
  setRequestAmountCeiling(value: Request_feed_rendering_elements_by_name.Request_amount_ceilingMap[keyof Request_feed_rendering_elements_by_name.Request_amount_ceilingMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request_feed_rendering_elements_by_name.AsObject;
  static toObject(includeInstance: boolean, msg: Request_feed_rendering_elements_by_name): Request_feed_rendering_elements_by_name.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Request_feed_rendering_elements_by_name, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request_feed_rendering_elements_by_name;
  static deserializeBinaryFromReader(message: Request_feed_rendering_elements_by_name, reader: jspb.BinaryReader): Request_feed_rendering_elements_by_name;
}

export namespace Request_feed_rendering_elements_by_name {
  export type AsObject = {
    feedName: string,
    namespace: string,
    requestAmountCeiling: Request_feed_rendering_elements_by_name.Request_amount_ceilingMap[keyof Request_feed_rendering_elements_by_name.Request_amount_ceilingMap],
  }

  export interface Request_amount_ceilingMap {
    _10: 0;
    _20: 1;
    _25: 2;
    _50: 3;
    _100: 4;
  }

  export const Request_amount_ceiling: Request_amount_ceilingMap;
}

export class Request_feed_metadata_by_name extends jspb.Message {
  getFeedName(): string;
  setFeedName(value: string): void;

  getNamespace(): string;
  setNamespace(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request_feed_metadata_by_name.AsObject;
  static toObject(includeInstance: boolean, msg: Request_feed_metadata_by_name): Request_feed_metadata_by_name.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Request_feed_metadata_by_name, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request_feed_metadata_by_name;
  static deserializeBinaryFromReader(message: Request_feed_metadata_by_name, reader: jspb.BinaryReader): Request_feed_metadata_by_name;
}

export namespace Request_feed_metadata_by_name {
  export type AsObject = {
    feedName: string,
    namespace: string,
  }
}

