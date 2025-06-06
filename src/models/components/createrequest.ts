/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateRequest = {
  /**
   * A valid transformation string.
   */
  transformation: string;
  /**
   * Whether to allow this named transformation when strict transformations are enabled. Strict transformations prevent transformations from being dynamically applied to media assets.
   *
   * @remarks
   */
  allowedForStrict?: boolean | undefined;
};

/** @internal */
export const CreateRequest$inboundSchema: z.ZodType<
  CreateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  transformation: z.string(),
  allowed_for_strict: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "allowed_for_strict": "allowedForStrict",
  });
});

/** @internal */
export type CreateRequest$Outbound = {
  transformation: string;
  allowed_for_strict?: boolean | undefined;
};

/** @internal */
export const CreateRequest$outboundSchema: z.ZodType<
  CreateRequest$Outbound,
  z.ZodTypeDef,
  CreateRequest
> = z.object({
  transformation: z.string(),
  allowedForStrict: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    allowedForStrict: "allowed_for_strict",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateRequest$ {
  /** @deprecated use `CreateRequest$inboundSchema` instead. */
  export const inboundSchema = CreateRequest$inboundSchema;
  /** @deprecated use `CreateRequest$outboundSchema` instead. */
  export const outboundSchema = CreateRequest$outboundSchema;
  /** @deprecated use `CreateRequest$Outbound` instead. */
  export type Outbound = CreateRequest$Outbound;
}

export function createRequestToJSON(createRequest: CreateRequest): string {
  return JSON.stringify(CreateRequest$outboundSchema.parse(createRequest));
}

export function createRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateRequest' from JSON`,
  );
}
