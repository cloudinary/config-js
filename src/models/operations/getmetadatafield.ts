/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetMetadataFieldGlobals = {
  /**
   * The cloud name of your product environment.
   */
  cloudName?: string | undefined;
};

export type GetMetadataFieldRequest = {
  /**
   * The external ID of the metadata field to retrieve.
   */
  externalId: string;
};

/** @internal */
export const GetMetadataFieldGlobals$inboundSchema: z.ZodType<
  GetMetadataFieldGlobals,
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
export type GetMetadataFieldGlobals$Outbound = {
  cloud_name?: string | undefined;
};

/** @internal */
export const GetMetadataFieldGlobals$outboundSchema: z.ZodType<
  GetMetadataFieldGlobals$Outbound,
  z.ZodTypeDef,
  GetMetadataFieldGlobals
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
export namespace GetMetadataFieldGlobals$ {
  /** @deprecated use `GetMetadataFieldGlobals$inboundSchema` instead. */
  export const inboundSchema = GetMetadataFieldGlobals$inboundSchema;
  /** @deprecated use `GetMetadataFieldGlobals$outboundSchema` instead. */
  export const outboundSchema = GetMetadataFieldGlobals$outboundSchema;
  /** @deprecated use `GetMetadataFieldGlobals$Outbound` instead. */
  export type Outbound = GetMetadataFieldGlobals$Outbound;
}

export function getMetadataFieldGlobalsToJSON(
  getMetadataFieldGlobals: GetMetadataFieldGlobals,
): string {
  return JSON.stringify(
    GetMetadataFieldGlobals$outboundSchema.parse(getMetadataFieldGlobals),
  );
}

export function getMetadataFieldGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetMetadataFieldGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetMetadataFieldGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetMetadataFieldGlobals' from JSON`,
  );
}

/** @internal */
export const GetMetadataFieldRequest$inboundSchema: z.ZodType<
  GetMetadataFieldRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  external_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "external_id": "externalId",
  });
});

/** @internal */
export type GetMetadataFieldRequest$Outbound = {
  external_id: string;
};

/** @internal */
export const GetMetadataFieldRequest$outboundSchema: z.ZodType<
  GetMetadataFieldRequest$Outbound,
  z.ZodTypeDef,
  GetMetadataFieldRequest
> = z.object({
  externalId: z.string(),
}).transform((v) => {
  return remap$(v, {
    externalId: "external_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMetadataFieldRequest$ {
  /** @deprecated use `GetMetadataFieldRequest$inboundSchema` instead. */
  export const inboundSchema = GetMetadataFieldRequest$inboundSchema;
  /** @deprecated use `GetMetadataFieldRequest$outboundSchema` instead. */
  export const outboundSchema = GetMetadataFieldRequest$outboundSchema;
  /** @deprecated use `GetMetadataFieldRequest$Outbound` instead. */
  export type Outbound = GetMetadataFieldRequest$Outbound;
}

export function getMetadataFieldRequestToJSON(
  getMetadataFieldRequest: GetMetadataFieldRequest,
): string {
  return JSON.stringify(
    GetMetadataFieldRequest$outboundSchema.parse(getMetadataFieldRequest),
  );
}

export function getMetadataFieldRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetMetadataFieldRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetMetadataFieldRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetMetadataFieldRequest' from JSON`,
  );
}
