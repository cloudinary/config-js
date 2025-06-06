/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListMetadataRulesGlobals = {
  /**
   * The cloud name of your product environment.
   */
  cloudName?: string | undefined;
};

export type ListMetadataRulesRequest = {};

/**
 * metadata rules retrieved.
 */
export type ListMetadataRulesResponse = {
  metadataRules?: Array<components.MetadataRuleResponse> | undefined;
};

/** @internal */
export const ListMetadataRulesGlobals$inboundSchema: z.ZodType<
  ListMetadataRulesGlobals,
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
export type ListMetadataRulesGlobals$Outbound = {
  cloud_name?: string | undefined;
};

/** @internal */
export const ListMetadataRulesGlobals$outboundSchema: z.ZodType<
  ListMetadataRulesGlobals$Outbound,
  z.ZodTypeDef,
  ListMetadataRulesGlobals
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
export namespace ListMetadataRulesGlobals$ {
  /** @deprecated use `ListMetadataRulesGlobals$inboundSchema` instead. */
  export const inboundSchema = ListMetadataRulesGlobals$inboundSchema;
  /** @deprecated use `ListMetadataRulesGlobals$outboundSchema` instead. */
  export const outboundSchema = ListMetadataRulesGlobals$outboundSchema;
  /** @deprecated use `ListMetadataRulesGlobals$Outbound` instead. */
  export type Outbound = ListMetadataRulesGlobals$Outbound;
}

export function listMetadataRulesGlobalsToJSON(
  listMetadataRulesGlobals: ListMetadataRulesGlobals,
): string {
  return JSON.stringify(
    ListMetadataRulesGlobals$outboundSchema.parse(listMetadataRulesGlobals),
  );
}

export function listMetadataRulesGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListMetadataRulesGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListMetadataRulesGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListMetadataRulesGlobals' from JSON`,
  );
}

/** @internal */
export const ListMetadataRulesRequest$inboundSchema: z.ZodType<
  ListMetadataRulesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ListMetadataRulesRequest$Outbound = {};

/** @internal */
export const ListMetadataRulesRequest$outboundSchema: z.ZodType<
  ListMetadataRulesRequest$Outbound,
  z.ZodTypeDef,
  ListMetadataRulesRequest
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMetadataRulesRequest$ {
  /** @deprecated use `ListMetadataRulesRequest$inboundSchema` instead. */
  export const inboundSchema = ListMetadataRulesRequest$inboundSchema;
  /** @deprecated use `ListMetadataRulesRequest$outboundSchema` instead. */
  export const outboundSchema = ListMetadataRulesRequest$outboundSchema;
  /** @deprecated use `ListMetadataRulesRequest$Outbound` instead. */
  export type Outbound = ListMetadataRulesRequest$Outbound;
}

export function listMetadataRulesRequestToJSON(
  listMetadataRulesRequest: ListMetadataRulesRequest,
): string {
  return JSON.stringify(
    ListMetadataRulesRequest$outboundSchema.parse(listMetadataRulesRequest),
  );
}

export function listMetadataRulesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListMetadataRulesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListMetadataRulesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListMetadataRulesRequest' from JSON`,
  );
}

/** @internal */
export const ListMetadataRulesResponse$inboundSchema: z.ZodType<
  ListMetadataRulesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata_rules: z.array(components.MetadataRuleResponse$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "metadata_rules": "metadataRules",
  });
});

/** @internal */
export type ListMetadataRulesResponse$Outbound = {
  metadata_rules?: Array<components.MetadataRuleResponse$Outbound> | undefined;
};

/** @internal */
export const ListMetadataRulesResponse$outboundSchema: z.ZodType<
  ListMetadataRulesResponse$Outbound,
  z.ZodTypeDef,
  ListMetadataRulesResponse
> = z.object({
  metadataRules: z.array(components.MetadataRuleResponse$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    metadataRules: "metadata_rules",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMetadataRulesResponse$ {
  /** @deprecated use `ListMetadataRulesResponse$inboundSchema` instead. */
  export const inboundSchema = ListMetadataRulesResponse$inboundSchema;
  /** @deprecated use `ListMetadataRulesResponse$outboundSchema` instead. */
  export const outboundSchema = ListMetadataRulesResponse$outboundSchema;
  /** @deprecated use `ListMetadataRulesResponse$Outbound` instead. */
  export type Outbound = ListMetadataRulesResponse$Outbound;
}

export function listMetadataRulesResponseToJSON(
  listMetadataRulesResponse: ListMetadataRulesResponse,
): string {
  return JSON.stringify(
    ListMetadataRulesResponse$outboundSchema.parse(listMetadataRulesResponse),
  );
}

export function listMetadataRulesResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListMetadataRulesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListMetadataRulesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListMetadataRulesResponse' from JSON`,
  );
}
