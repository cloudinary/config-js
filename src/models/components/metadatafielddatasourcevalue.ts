/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type MetadataFieldDatasourceValue = {
  /**
   * The external ID of the datasource value.
   */
  externalId?: string | undefined;
  /**
   * The value of the option.
   */
  value?: string | undefined;
};

/** @internal */
export const MetadataFieldDatasourceValue$inboundSchema: z.ZodType<
  MetadataFieldDatasourceValue,
  z.ZodTypeDef,
  unknown
> = z.object({
  external_id: z.string().optional(),
  value: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "external_id": "externalId",
  });
});

/** @internal */
export type MetadataFieldDatasourceValue$Outbound = {
  external_id?: string | undefined;
  value?: string | undefined;
};

/** @internal */
export const MetadataFieldDatasourceValue$outboundSchema: z.ZodType<
  MetadataFieldDatasourceValue$Outbound,
  z.ZodTypeDef,
  MetadataFieldDatasourceValue
> = z.object({
  externalId: z.string().optional(),
  value: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    externalId: "external_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetadataFieldDatasourceValue$ {
  /** @deprecated use `MetadataFieldDatasourceValue$inboundSchema` instead. */
  export const inboundSchema = MetadataFieldDatasourceValue$inboundSchema;
  /** @deprecated use `MetadataFieldDatasourceValue$outboundSchema` instead. */
  export const outboundSchema = MetadataFieldDatasourceValue$outboundSchema;
  /** @deprecated use `MetadataFieldDatasourceValue$Outbound` instead. */
  export type Outbound = MetadataFieldDatasourceValue$Outbound;
}

export function metadataFieldDatasourceValueToJSON(
  metadataFieldDatasourceValue: MetadataFieldDatasourceValue,
): string {
  return JSON.stringify(
    MetadataFieldDatasourceValue$outboundSchema.parse(
      metadataFieldDatasourceValue,
    ),
  );
}

export function metadataFieldDatasourceValueFromJSON(
  jsonString: string,
): SafeParseResult<MetadataFieldDatasourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MetadataFieldDatasourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MetadataFieldDatasourceValue' from JSON`,
  );
}
