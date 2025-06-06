/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { metadataFieldsDeleteMetadataField } from "../../funcs/metadataFieldsDeleteMetadataField.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteMetadataFieldRequest$inboundSchema,
};

export const tool$metadataFieldsDeleteMetadataField: ToolDefinition<
  typeof args
> = {
  name: "delete-metadata-field",
  description: `Delete metadata field

Permanently deletes the specified metadata field and all its associated data.`,
  scopes: ["builder"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await metadataFieldsDeleteMetadataField(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
