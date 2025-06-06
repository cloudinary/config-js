/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteStreamingProfileGlobals = {
  /**
   * The cloud name of your product environment.
   */
  cloudName?: string | undefined;
};

export type DeleteStreamingProfileRequest = {
  name: string;
};

/**
 * Streaming profile deleted or reverted
 */
export type DeleteStreamingProfileResponse = {
  message: string;
};

/** @internal */
export const DeleteStreamingProfileGlobals$inboundSchema: z.ZodType<
  DeleteStreamingProfileGlobals,
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
export type DeleteStreamingProfileGlobals$Outbound = {
  cloud_name?: string | undefined;
};

/** @internal */
export const DeleteStreamingProfileGlobals$outboundSchema: z.ZodType<
  DeleteStreamingProfileGlobals$Outbound,
  z.ZodTypeDef,
  DeleteStreamingProfileGlobals
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
export namespace DeleteStreamingProfileGlobals$ {
  /** @deprecated use `DeleteStreamingProfileGlobals$inboundSchema` instead. */
  export const inboundSchema = DeleteStreamingProfileGlobals$inboundSchema;
  /** @deprecated use `DeleteStreamingProfileGlobals$outboundSchema` instead. */
  export const outboundSchema = DeleteStreamingProfileGlobals$outboundSchema;
  /** @deprecated use `DeleteStreamingProfileGlobals$Outbound` instead. */
  export type Outbound = DeleteStreamingProfileGlobals$Outbound;
}

export function deleteStreamingProfileGlobalsToJSON(
  deleteStreamingProfileGlobals: DeleteStreamingProfileGlobals,
): string {
  return JSON.stringify(
    DeleteStreamingProfileGlobals$outboundSchema.parse(
      deleteStreamingProfileGlobals,
    ),
  );
}

export function deleteStreamingProfileGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<DeleteStreamingProfileGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteStreamingProfileGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteStreamingProfileGlobals' from JSON`,
  );
}

/** @internal */
export const DeleteStreamingProfileRequest$inboundSchema: z.ZodType<
  DeleteStreamingProfileRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
});

/** @internal */
export type DeleteStreamingProfileRequest$Outbound = {
  name: string;
};

/** @internal */
export const DeleteStreamingProfileRequest$outboundSchema: z.ZodType<
  DeleteStreamingProfileRequest$Outbound,
  z.ZodTypeDef,
  DeleteStreamingProfileRequest
> = z.object({
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteStreamingProfileRequest$ {
  /** @deprecated use `DeleteStreamingProfileRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteStreamingProfileRequest$inboundSchema;
  /** @deprecated use `DeleteStreamingProfileRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteStreamingProfileRequest$outboundSchema;
  /** @deprecated use `DeleteStreamingProfileRequest$Outbound` instead. */
  export type Outbound = DeleteStreamingProfileRequest$Outbound;
}

export function deleteStreamingProfileRequestToJSON(
  deleteStreamingProfileRequest: DeleteStreamingProfileRequest,
): string {
  return JSON.stringify(
    DeleteStreamingProfileRequest$outboundSchema.parse(
      deleteStreamingProfileRequest,
    ),
  );
}

export function deleteStreamingProfileRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteStreamingProfileRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteStreamingProfileRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteStreamingProfileRequest' from JSON`,
  );
}

/** @internal */
export const DeleteStreamingProfileResponse$inboundSchema: z.ZodType<
  DeleteStreamingProfileResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
});

/** @internal */
export type DeleteStreamingProfileResponse$Outbound = {
  message: string;
};

/** @internal */
export const DeleteStreamingProfileResponse$outboundSchema: z.ZodType<
  DeleteStreamingProfileResponse$Outbound,
  z.ZodTypeDef,
  DeleteStreamingProfileResponse
> = z.object({
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteStreamingProfileResponse$ {
  /** @deprecated use `DeleteStreamingProfileResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteStreamingProfileResponse$inboundSchema;
  /** @deprecated use `DeleteStreamingProfileResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteStreamingProfileResponse$outboundSchema;
  /** @deprecated use `DeleteStreamingProfileResponse$Outbound` instead. */
  export type Outbound = DeleteStreamingProfileResponse$Outbound;
}

export function deleteStreamingProfileResponseToJSON(
  deleteStreamingProfileResponse: DeleteStreamingProfileResponse,
): string {
  return JSON.stringify(
    DeleteStreamingProfileResponse$outboundSchema.parse(
      deleteStreamingProfileResponse,
    ),
  );
}

export function deleteStreamingProfileResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteStreamingProfileResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteStreamingProfileResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteStreamingProfileResponse' from JSON`,
  );
}
