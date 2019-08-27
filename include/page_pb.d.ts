// package: apiv4.page
// file: include/page.proto

import * as jspb from "google-protobuf";
import * as include_revision_pb from "../include/revision_pb";
import * as include_user_pb from "../include/user_pb";

export class Page_metadata extends jspb.Message {
  getPageName(): string;
  setPageName(value: string): void;

  getNamespace(): string;
  setNamespace(value: string): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  getPageIdBis(): string;
  setPageIdBis(value: string): void;

  getCreationTimeIso(): string;
  setCreationTimeIso(value: string): void;

  getUpdateTimeIso(): string;
  setUpdateTimeIso(value: string): void;

  getViewPermissionIdBis(): string;
  setViewPermissionIdBis(value: string): void;

  getLicenseName(): string;
  setLicenseName(value: string): void;

  getPageContentModel(): string;
  setPageContentModel(value: string): void;

  getEventIdBis(): string;
  setEventIdBis(value: string): void;

  getCreatorDisplayName(): string;
  setCreatorDisplayName(value: string): void;

  getCreatorIdName(): string;
  setCreatorIdName(value: string): void;

  getCurrentEditorDisplayName(): string;
  setCurrentEditorDisplayName(value: string): void;

  getCurrentEditorIdName(): string;
  setCurrentEditorIdName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Page_metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Page_metadata): Page_metadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Page_metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Page_metadata;
  static deserializeBinaryFromReader(message: Page_metadata, reader: jspb.BinaryReader): Page_metadata;
}

export namespace Page_metadata {
  export type AsObject = {
    pageName: string,
    namespace: string,
    languageCode: string,
    pageIdBis: string,
    creationTimeIso: string,
    updateTimeIso: string,
    viewPermissionIdBis: string,
    licenseName: string,
    pageContentModel: string,
    eventIdBis: string,
    creatorDisplayName: string,
    creatorIdName: string,
    currentEditorDisplayName: string,
    currentEditorIdName: string,
  }
}

export class Page_with_rendering_elements extends jspb.Message {
  hasPageMeta(): boolean;
  clearPageMeta(): void;
  getPageMeta(): Page_metadata | undefined;
  setPageMeta(value?: Page_metadata): void;

  hasRevMeta(): boolean;
  clearRevMeta(): void;
  getRevMeta(): include_revision_pb.Revision_metadata | undefined;
  setRevMeta(value?: include_revision_pb.Revision_metadata): void;

  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Page_with_rendering_elements.AsObject;
  static toObject(includeInstance: boolean, msg: Page_with_rendering_elements): Page_with_rendering_elements.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Page_with_rendering_elements, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Page_with_rendering_elements;
  static deserializeBinaryFromReader(message: Page_with_rendering_elements, reader: jspb.BinaryReader): Page_with_rendering_elements;
}

export namespace Page_with_rendering_elements {
  export type AsObject = {
    pageMeta?: Page_metadata.AsObject,
    revMeta?: include_revision_pb.Revision_metadata.AsObject,
    content: string,
  }
}

export class Request_page_rendering_elements_by_name extends jspb.Message {
  getPageName(): string;
  setPageName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request_page_rendering_elements_by_name.AsObject;
  static toObject(includeInstance: boolean, msg: Request_page_rendering_elements_by_name): Request_page_rendering_elements_by_name.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Request_page_rendering_elements_by_name, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request_page_rendering_elements_by_name;
  static deserializeBinaryFromReader(message: Request_page_rendering_elements_by_name, reader: jspb.BinaryReader): Request_page_rendering_elements_by_name;
}

export namespace Request_page_rendering_elements_by_name {
  export type AsObject = {
    pageName: string,
  }
}

export class Request_page_metadata_by_name extends jspb.Message {
  getPageName(): string;
  setPageName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request_page_metadata_by_name.AsObject;
  static toObject(includeInstance: boolean, msg: Request_page_metadata_by_name): Request_page_metadata_by_name.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Request_page_metadata_by_name, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request_page_metadata_by_name;
  static deserializeBinaryFromReader(message: Request_page_metadata_by_name, reader: jspb.BinaryReader): Request_page_metadata_by_name;
}

export namespace Request_page_metadata_by_name {
  export type AsObject = {
    pageName: string,
  }
}

export class Request_create_or_edit_page extends jspb.Message {
  getPageName(): string;
  setPageName(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getRevisionComment(): string;
  setRevisionComment(value: string): void;

  getVisibility(): Request_create_or_edit_page.VisibilityMap[keyof Request_create_or_edit_page.VisibilityMap];
  setVisibility(value: Request_create_or_edit_page.VisibilityMap[keyof Request_create_or_edit_page.VisibilityMap]): void;

  getContentType(): string;
  setContentType(value: string): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  getLicenseName(): string;
  setLicenseName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request_create_or_edit_page.AsObject;
  static toObject(includeInstance: boolean, msg: Request_create_or_edit_page): Request_create_or_edit_page.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Request_create_or_edit_page, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request_create_or_edit_page;
  static deserializeBinaryFromReader(message: Request_create_or_edit_page, reader: jspb.BinaryReader): Request_create_or_edit_page;
}

export namespace Request_create_or_edit_page {
  export type AsObject = {
    pageName: string,
    content: string,
    revisionComment: string,
    visibility: Request_create_or_edit_page.VisibilityMap[keyof Request_create_or_edit_page.VisibilityMap],
    contentType: string,
    languageCode: string,
    licenseName: string,
  }

  export interface VisibilityMap {
    ALL_VISIBLE: 0;
    ADMIN_VISIBLE: 1;
    SELF_VISIBLE: 2;
  }

  export const Visibility: VisibilityMap;
}

export class Request_history_rendering_elements_by_page_name_ns extends jspb.Message {
  getPageApparentName(): string;
  setPageApparentName(value: string): void;

  getDirection(): Request_history_rendering_elements_by_page_name_ns.DirectionMap[keyof Request_history_rendering_elements_by_page_name_ns.DirectionMap];
  setDirection(value: Request_history_rendering_elements_by_page_name_ns.DirectionMap[keyof Request_history_rendering_elements_by_page_name_ns.DirectionMap]): void;

  getStartFromMiddle(): boolean;
  setStartFromMiddle(value: boolean): void;

  hasRevIdBisNoninclusive(): boolean;
  clearRevIdBisNoninclusive(): void;
  getRevIdBisNoninclusive(): string;
  setRevIdBisNoninclusive(value: string): void;

  hasTimestampIsoNoninclusive(): boolean;
  clearTimestampIsoNoninclusive(): void;
  getTimestampIsoNoninclusive(): string;
  setTimestampIsoNoninclusive(value: string): void;

  getStartFromCase(): Request_history_rendering_elements_by_page_name_ns.StartFromCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request_history_rendering_elements_by_page_name_ns.AsObject;
  static toObject(includeInstance: boolean, msg: Request_history_rendering_elements_by_page_name_ns): Request_history_rendering_elements_by_page_name_ns.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Request_history_rendering_elements_by_page_name_ns, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request_history_rendering_elements_by_page_name_ns;
  static deserializeBinaryFromReader(message: Request_history_rendering_elements_by_page_name_ns, reader: jspb.BinaryReader): Request_history_rendering_elements_by_page_name_ns;
}

export namespace Request_history_rendering_elements_by_page_name_ns {
  export type AsObject = {
    pageApparentName: string,
    direction: Request_history_rendering_elements_by_page_name_ns.DirectionMap[keyof Request_history_rendering_elements_by_page_name_ns.DirectionMap],
    startFromMiddle: boolean,
    revIdBisNoninclusive: string,
    timestampIsoNoninclusive: string,
  }

  export interface DirectionMap {
    NEW_TO_OLD: 0;
    OLD_TO_NEW: 1;
  }

  export const Direction: DirectionMap;

  export enum StartFromCase {
    START_FROM_NOT_SET = 0,
    REV_ID_BIS_NONINCLUSIVE = 4,
    TIMESTAMP_ISO_NONINCLUSIVE = 5,
  }
}

export class Page_creation_report extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getNewPidBis(): string;
  setNewPidBis(value: string): void;

  getNewApparentPageName(): string;
  setNewApparentPageName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Page_creation_report.AsObject;
  static toObject(includeInstance: boolean, msg: Page_creation_report): Page_creation_report.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Page_creation_report, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Page_creation_report;
  static deserializeBinaryFromReader(message: Page_creation_report, reader: jspb.BinaryReader): Page_creation_report;
}

export namespace Page_creation_report {
  export type AsObject = {
    success: boolean,
    newPidBis: string,
    newApparentPageName: string,
  }
}

