/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetStreamingProfileGlobals = {
  /**
   * The cloud name of your product environment.
   */
  cloudName?: string | undefined;
};

export type GetStreamingProfileRequest = {
  name: string;
};

/**
 * Streaming profile retrieved
 */
export type GetStreamingProfileResponse = {
  data: components.StreamingProfile;
};

/** @internal */
export const GetStreamingProfileGlobals$inboundSchema: z.ZodType<
  GetStreamingProfileGlobals,
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
export type GetStreamingProfileGlobals$Outbound = {
  cloud_name?: string | undefined;
};

/** @internal */
export const GetStreamingProfileGlobals$outboundSchema: z.ZodType<
  GetStreamingProfileGlobals$Outbound,
  z.ZodTypeDef,
  GetStreamingProfileGlobals
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
export namespace GetStreamingProfileGlobals$ {
  /** @deprecated use `GetStreamingProfileGlobals$inboundSchema` instead. */
  export const inboundSchema = GetStreamingProfileGlobals$inboundSchema;
  /** @deprecated use `GetStreamingProfileGlobals$outboundSchema` instead. */
  export const outboundSchema = GetStreamingProfileGlobals$outboundSchema;
  /** @deprecated use `GetStreamingProfileGlobals$Outbound` instead. */
  export type Outbound = GetStreamingProfileGlobals$Outbound;
}

export function getStreamingProfileGlobalsToJSON(
  getStreamingProfileGlobals: GetStreamingProfileGlobals,
): string {
  return JSON.stringify(
    GetStreamingProfileGlobals$outboundSchema.parse(getStreamingProfileGlobals),
  );
}

export function getStreamingProfileGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetStreamingProfileGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetStreamingProfileGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetStreamingProfileGlobals' from JSON`,
  );
}

/** @internal */
export const GetStreamingProfileRequest$inboundSchema: z.ZodType<
  GetStreamingProfileRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
});

/** @internal */
export type GetStreamingProfileRequest$Outbound = {
  name: string;
};

/** @internal */
export const GetStreamingProfileRequest$outboundSchema: z.ZodType<
  GetStreamingProfileRequest$Outbound,
  z.ZodTypeDef,
  GetStreamingProfileRequest
> = z.object({
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStreamingProfileRequest$ {
  /** @deprecated use `GetStreamingProfileRequest$inboundSchema` instead. */
  export const inboundSchema = GetStreamingProfileRequest$inboundSchema;
  /** @deprecated use `GetStreamingProfileRequest$outboundSchema` instead. */
  export const outboundSchema = GetStreamingProfileRequest$outboundSchema;
  /** @deprecated use `GetStreamingProfileRequest$Outbound` instead. */
  export type Outbound = GetStreamingProfileRequest$Outbound;
}

export function getStreamingProfileRequestToJSON(
  getStreamingProfileRequest: GetStreamingProfileRequest,
): string {
  return JSON.stringify(
    GetStreamingProfileRequest$outboundSchema.parse(getStreamingProfileRequest),
  );
}

export function getStreamingProfileRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetStreamingProfileRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetStreamingProfileRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetStreamingProfileRequest' from JSON`,
  );
}

/** @internal */
export const GetStreamingProfileResponse$inboundSchema: z.ZodType<
  GetStreamingProfileResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: components.StreamingProfile$inboundSchema,
});

/** @internal */
export type GetStreamingProfileResponse$Outbound = {
  data: components.StreamingProfile$Outbound;
};

/** @internal */
export const GetStreamingProfileResponse$outboundSchema: z.ZodType<
  GetStreamingProfileResponse$Outbound,
  z.ZodTypeDef,
  GetStreamingProfileResponse
> = z.object({
  data: components.StreamingProfile$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStreamingProfileResponse$ {
  /** @deprecated use `GetStreamingProfileResponse$inboundSchema` instead. */
  export const inboundSchema = GetStreamingProfileResponse$inboundSchema;
  /** @deprecated use `GetStreamingProfileResponse$outboundSchema` instead. */
  export const outboundSchema = GetStreamingProfileResponse$outboundSchema;
  /** @deprecated use `GetStreamingProfileResponse$Outbound` instead. */
  export type Outbound = GetStreamingProfileResponse$Outbound;
}

export function getStreamingProfileResponseToJSON(
  getStreamingProfileResponse: GetStreamingProfileResponse,
): string {
  return JSON.stringify(
    GetStreamingProfileResponse$outboundSchema.parse(
      getStreamingProfileResponse,
    ),
  );
}

export function getStreamingProfileResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetStreamingProfileResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetStreamingProfileResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetStreamingProfileResponse' from JSON`,
  );
}
