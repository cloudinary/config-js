/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Representation = {
  /**
   * The transformation parameters for this representation
   */
  transformation?: Array<{ [k: string]: any }> | undefined;
};

export type StreamingProfile = {
  /**
   * The unique identifier of the streaming profile
   */
  externalId: string;
  /**
   * The name of the streaming profile
   */
  name: string;
  /**
   * The display name of the streaming profile
   */
  displayName?: string | undefined;
  /**
   * Whether this is a predefined streaming profile
   */
  predefined: boolean;
  /**
   * The list of representations in the streaming profile
   */
  representations?: Array<Representation> | undefined;
};

/** @internal */
export const Representation$inboundSchema: z.ZodType<
  Representation,
  z.ZodTypeDef,
  unknown
> = z.object({
  transformation: z.array(z.record(z.any())).optional(),
});

/** @internal */
export type Representation$Outbound = {
  transformation?: Array<{ [k: string]: any }> | undefined;
};

/** @internal */
export const Representation$outboundSchema: z.ZodType<
  Representation$Outbound,
  z.ZodTypeDef,
  Representation
> = z.object({
  transformation: z.array(z.record(z.any())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Representation$ {
  /** @deprecated use `Representation$inboundSchema` instead. */
  export const inboundSchema = Representation$inboundSchema;
  /** @deprecated use `Representation$outboundSchema` instead. */
  export const outboundSchema = Representation$outboundSchema;
  /** @deprecated use `Representation$Outbound` instead. */
  export type Outbound = Representation$Outbound;
}

export function representationToJSON(representation: Representation): string {
  return JSON.stringify(Representation$outboundSchema.parse(representation));
}

export function representationFromJSON(
  jsonString: string,
): SafeParseResult<Representation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Representation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Representation' from JSON`,
  );
}

/** @internal */
export const StreamingProfile$inboundSchema: z.ZodType<
  StreamingProfile,
  z.ZodTypeDef,
  unknown
> = z.object({
  external_id: z.string(),
  name: z.string(),
  display_name: z.string().optional(),
  predefined: z.boolean(),
  representations: z.array(z.lazy(() => Representation$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "external_id": "externalId",
    "display_name": "displayName",
  });
});

/** @internal */
export type StreamingProfile$Outbound = {
  external_id: string;
  name: string;
  display_name?: string | undefined;
  predefined: boolean;
  representations?: Array<Representation$Outbound> | undefined;
};

/** @internal */
export const StreamingProfile$outboundSchema: z.ZodType<
  StreamingProfile$Outbound,
  z.ZodTypeDef,
  StreamingProfile
> = z.object({
  externalId: z.string(),
  name: z.string(),
  displayName: z.string().optional(),
  predefined: z.boolean(),
  representations: z.array(z.lazy(() => Representation$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    externalId: "external_id",
    displayName: "display_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StreamingProfile$ {
  /** @deprecated use `StreamingProfile$inboundSchema` instead. */
  export const inboundSchema = StreamingProfile$inboundSchema;
  /** @deprecated use `StreamingProfile$outboundSchema` instead. */
  export const outboundSchema = StreamingProfile$outboundSchema;
  /** @deprecated use `StreamingProfile$Outbound` instead. */
  export type Outbound = StreamingProfile$Outbound;
}

export function streamingProfileToJSON(
  streamingProfile: StreamingProfile,
): string {
  return JSON.stringify(
    StreamingProfile$outboundSchema.parse(streamingProfile),
  );
}

export function streamingProfileFromJSON(
  jsonString: string,
): SafeParseResult<StreamingProfile, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => StreamingProfile$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'StreamingProfile' from JSON`,
  );
}
