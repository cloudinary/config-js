/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateMetadataFieldGlobals = {
  /**
   * The cloud name of your product environment.
   */
  cloudName?: string | undefined;
};

export type UpdateMetadataFieldRequest = {
  /**
   * The external ID of the metadata field to retrieve.
   */
  externalId: string;
  metadataField: components.MetadataField;
};

/** @internal */
export const UpdateMetadataFieldGlobals$inboundSchema: z.ZodType<
  UpdateMetadataFieldGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  cloud_name: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "cloud_name": "cloudName",
  });
});

/** @internal */
export type UpdateMetadataFieldGlobals$Outbound = {
  cloud_name?: string | undefined;
};

/** @internal */
export const UpdateMetadataFieldGlobals$outboundSchema: z.ZodType<
  UpdateMetadataFieldGlobals$Outbound,
  z.ZodTypeDef,
  UpdateMetadataFieldGlobals
> = z.object({
  cloudName: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    cloudName: "cloud_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMetadataFieldGlobals$ {
  /** @deprecated use `UpdateMetadataFieldGlobals$inboundSchema` instead. */
  export const inboundSchema = UpdateMetadataFieldGlobals$inboundSchema;
  /** @deprecated use `UpdateMetadataFieldGlobals$outboundSchema` instead. */
  export const outboundSchema = UpdateMetadataFieldGlobals$outboundSchema;
  /** @deprecated use `UpdateMetadataFieldGlobals$Outbound` instead. */
  export type Outbound = UpdateMetadataFieldGlobals$Outbound;
}

export function updateMetadataFieldGlobalsToJSON(
  updateMetadataFieldGlobals: UpdateMetadataFieldGlobals,
): string {
  return JSON.stringify(
    UpdateMetadataFieldGlobals$outboundSchema.parse(updateMetadataFieldGlobals),
  );
}

export function updateMetadataFieldGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMetadataFieldGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMetadataFieldGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMetadataFieldGlobals' from JSON`,
  );
}

/** @internal */
export const UpdateMetadataFieldRequest$inboundSchema: z.ZodType<
  UpdateMetadataFieldRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  external_id: z.string(),
  metadata_field: components.MetadataField$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "external_id": "externalId",
    "metadata_field": "metadataField",
  });
});

/** @internal */
export type UpdateMetadataFieldRequest$Outbound = {
  external_id: string;
  metadata_field: components.MetadataField$Outbound;
};

/** @internal */
export const UpdateMetadataFieldRequest$outboundSchema: z.ZodType<
  UpdateMetadataFieldRequest$Outbound,
  z.ZodTypeDef,
  UpdateMetadataFieldRequest
> = z.object({
  externalId: z.string(),
  metadataField: components.MetadataField$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    externalId: "external_id",
    metadataField: "metadata_field",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMetadataFieldRequest$ {
  /** @deprecated use `UpdateMetadataFieldRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateMetadataFieldRequest$inboundSchema;
  /** @deprecated use `UpdateMetadataFieldRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateMetadataFieldRequest$outboundSchema;
  /** @deprecated use `UpdateMetadataFieldRequest$Outbound` instead. */
  export type Outbound = UpdateMetadataFieldRequest$Outbound;
}

export function updateMetadataFieldRequestToJSON(
  updateMetadataFieldRequest: UpdateMetadataFieldRequest,
): string {
  return JSON.stringify(
    UpdateMetadataFieldRequest$outboundSchema.parse(updateMetadataFieldRequest),
  );
}

export function updateMetadataFieldRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMetadataFieldRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMetadataFieldRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMetadataFieldRequest' from JSON`,
  );
}
