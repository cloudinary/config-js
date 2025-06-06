/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetTransformationGlobals = {
  /**
   * The cloud name of your product environment.
   */
  cloudName?: string | undefined;
};

export type GetTransformationRequest = {
  /**
   * The transformation identifier. Can be either a named transformation (e.g., 'small_profile_thumbnail') or a transformation string (e.g., 'w_100,h_150,c_fill,g_auto').
   *
   * @remarks
   */
  transformation: string;
};

/** @internal */
export const GetTransformationGlobals$inboundSchema: z.ZodType<
  GetTransformationGlobals,
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
export type GetTransformationGlobals$Outbound = {
  cloud_name?: string | undefined;
};

/** @internal */
export const GetTransformationGlobals$outboundSchema: z.ZodType<
  GetTransformationGlobals$Outbound,
  z.ZodTypeDef,
  GetTransformationGlobals
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
export namespace GetTransformationGlobals$ {
  /** @deprecated use `GetTransformationGlobals$inboundSchema` instead. */
  export const inboundSchema = GetTransformationGlobals$inboundSchema;
  /** @deprecated use `GetTransformationGlobals$outboundSchema` instead. */
  export const outboundSchema = GetTransformationGlobals$outboundSchema;
  /** @deprecated use `GetTransformationGlobals$Outbound` instead. */
  export type Outbound = GetTransformationGlobals$Outbound;
}

export function getTransformationGlobalsToJSON(
  getTransformationGlobals: GetTransformationGlobals,
): string {
  return JSON.stringify(
    GetTransformationGlobals$outboundSchema.parse(getTransformationGlobals),
  );
}

export function getTransformationGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetTransformationGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTransformationGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTransformationGlobals' from JSON`,
  );
}

/** @internal */
export const GetTransformationRequest$inboundSchema: z.ZodType<
  GetTransformationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  transformation: z.string(),
});

/** @internal */
export type GetTransformationRequest$Outbound = {
  transformation: string;
};

/** @internal */
export const GetTransformationRequest$outboundSchema: z.ZodType<
  GetTransformationRequest$Outbound,
  z.ZodTypeDef,
  GetTransformationRequest
> = z.object({
  transformation: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTransformationRequest$ {
  /** @deprecated use `GetTransformationRequest$inboundSchema` instead. */
  export const inboundSchema = GetTransformationRequest$inboundSchema;
  /** @deprecated use `GetTransformationRequest$outboundSchema` instead. */
  export const outboundSchema = GetTransformationRequest$outboundSchema;
  /** @deprecated use `GetTransformationRequest$Outbound` instead. */
  export type Outbound = GetTransformationRequest$Outbound;
}

export function getTransformationRequestToJSON(
  getTransformationRequest: GetTransformationRequest,
): string {
  return JSON.stringify(
    GetTransformationRequest$outboundSchema.parse(getTransformationRequest),
  );
}

export function getTransformationRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetTransformationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTransformationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTransformationRequest' from JSON`,
  );
}
