/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { metadataFieldsDeleteMetadataFieldDatasource } from "../../funcs/metadataFieldsDeleteMetadataFieldDatasource.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteMetadataFieldDatasourceRequest$inboundSchema,
};

export const tool$metadataFieldsDeleteMetadataFieldDatasource: ToolDefinition<
  typeof args
> = {
  name: "delete-metadata-datasource-values",
  description: `Delete datasource values

Removes specific values from a metadata field's datasource by their external IDs.`,
  scopes: ["builder"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await metadataFieldsDeleteMetadataFieldDatasource(
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
