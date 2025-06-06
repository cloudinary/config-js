/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SearchMetadataFieldDatasourceGlobals = {
  /**
   * The cloud name of your product environment.
   */
  cloudName?: string | undefined;
};

export type SearchMetadataFieldDatasourceRequest = {
  /**
   * The term to search for. Can be any substring of the value.
   */
  term?: string | undefined;
  /**
   * The maximum number of results to return.
   */
  maxResults?: number | undefined;
};

export type SearchMetadataFieldDatasourceResponse = {
  /**
   * The external ID of the metadata field.
   */
  fieldId?: string | undefined;
  /**
   * The external ID of the option.
   */
  id?: string | undefined;
  /**
   * The value of the option.
   */
  value?: string | undefined;
};

/** @internal */
export const SearchMetadataFieldDatasourceGlobals$inboundSchema: z.ZodType<
  SearchMetadataFieldDatasourceGlobals,
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
export type SearchMetadataFieldDatasourceGlobals$Outbound = {
  cloud_name?: string | undefined;
};

/** @internal */
export const SearchMetadataFieldDatasourceGlobals$outboundSchema: z.ZodType<
  SearchMetadataFieldDatasourceGlobals$Outbound,
  z.ZodTypeDef,
  SearchMetadataFieldDatasourceGlobals
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
export namespace SearchMetadataFieldDatasourceGlobals$ {
  /** @deprecated use `SearchMetadataFieldDatasourceGlobals$inboundSchema` instead. */
  export const inboundSchema =
    SearchMetadataFieldDatasourceGlobals$inboundSchema;
  /** @deprecated use `SearchMetadataFieldDatasourceGlobals$outboundSchema` instead. */
  export const outboundSchema =
    SearchMetadataFieldDatasourceGlobals$outboundSchema;
  /** @deprecated use `SearchMetadataFieldDatasourceGlobals$Outbound` instead. */
  export type Outbound = SearchMetadataFieldDatasourceGlobals$Outbound;
}

export function searchMetadataFieldDatasourceGlobalsToJSON(
  searchMetadataFieldDatasourceGlobals: SearchMetadataFieldDatasourceGlobals,
): string {
  return JSON.stringify(
    SearchMetadataFieldDatasourceGlobals$outboundSchema.parse(
      searchMetadataFieldDatasourceGlobals,
    ),
  );
}

export function searchMetadataFieldDatasourceGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<SearchMetadataFieldDatasourceGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      SearchMetadataFieldDatasourceGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SearchMetadataFieldDatasourceGlobals' from JSON`,
  );
}

/** @internal */
export const SearchMetadataFieldDatasourceRequest$inboundSchema: z.ZodType<
  SearchMetadataFieldDatasourceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  term: z.string().optional(),
  max_results: z.number().int().default(100),
}).transform((v) => {
  return remap$(v, {
    "max_results": "maxResults",
  });
});

/** @internal */
export type SearchMetadataFieldDatasourceRequest$Outbound = {
  term?: string | undefined;
  max_results: number;
};

/** @internal */
export const SearchMetadataFieldDatasourceRequest$outboundSchema: z.ZodType<
  SearchMetadataFieldDatasourceRequest$Outbound,
  z.ZodTypeDef,
  SearchMetadataFieldDatasourceRequest
> = z.object({
  term: z.string().optional(),
  maxResults: z.number().int().default(100),
}).transform((v) => {
  return remap$(v, {
    maxResults: "max_results",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchMetadataFieldDatasourceRequest$ {
  /** @deprecated use `SearchMetadataFieldDatasourceRequest$inboundSchema` instead. */
  export const inboundSchema =
    SearchMetadataFieldDatasourceRequest$inboundSchema;
  /** @deprecated use `SearchMetadataFieldDatasourceRequest$outboundSchema` instead. */
  export const outboundSchema =
    SearchMetadataFieldDatasourceRequest$outboundSchema;
  /** @deprecated use `SearchMetadataFieldDatasourceRequest$Outbound` instead. */
  export type Outbound = SearchMetadataFieldDatasourceRequest$Outbound;
}

export function searchMetadataFieldDatasourceRequestToJSON(
  searchMetadataFieldDatasourceRequest: SearchMetadataFieldDatasourceRequest,
): string {
  return JSON.stringify(
    SearchMetadataFieldDatasourceRequest$outboundSchema.parse(
      searchMetadataFieldDatasourceRequest,
    ),
  );
}

export function searchMetadataFieldDatasourceRequestFromJSON(
  jsonString: string,
): SafeParseResult<SearchMetadataFieldDatasourceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      SearchMetadataFieldDatasourceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SearchMetadataFieldDatasourceRequest' from JSON`,
  );
}

/** @internal */
export const SearchMetadataFieldDatasourceResponse$inboundSchema: z.ZodType<
  SearchMetadataFieldDatasourceResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  field_id: z.string().optional(),
  id: z.string().optional(),
  value: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "field_id": "fieldId",
  });
});

/** @internal */
export type SearchMetadataFieldDatasourceResponse$Outbound = {
  field_id?: string | undefined;
  id?: string | undefined;
  value?: string | undefined;
};

/** @internal */
export const SearchMetadataFieldDatasourceResponse$outboundSchema: z.ZodType<
  SearchMetadataFieldDatasourceResponse$Outbound,
  z.ZodTypeDef,
  SearchMetadataFieldDatasourceResponse
> = z.object({
  fieldId: z.string().optional(),
  id: z.string().optional(),
  value: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    fieldId: "field_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchMetadataFieldDatasourceResponse$ {
  /** @deprecated use `SearchMetadataFieldDatasourceResponse$inboundSchema` instead. */
  export const inboundSchema =
    SearchMetadataFieldDatasourceResponse$inboundSchema;
  /** @deprecated use `SearchMetadataFieldDatasourceResponse$outboundSchema` instead. */
  export const outboundSchema =
    SearchMetadataFieldDatasourceResponse$outboundSchema;
  /** @deprecated use `SearchMetadataFieldDatasourceResponse$Outbound` instead. */
  export type Outbound = SearchMetadataFieldDatasourceResponse$Outbound;
}

export function searchMetadataFieldDatasourceResponseToJSON(
  searchMetadataFieldDatasourceResponse: SearchMetadataFieldDatasourceResponse,
): string {
  return JSON.stringify(
    SearchMetadataFieldDatasourceResponse$outboundSchema.parse(
      searchMetadataFieldDatasourceResponse,
    ),
  );
}

export function searchMetadataFieldDatasourceResponseFromJSON(
  jsonString: string,
): SafeParseResult<SearchMetadataFieldDatasourceResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      SearchMetadataFieldDatasourceResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SearchMetadataFieldDatasourceResponse' from JSON`,
  );
}
