/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { uploadPresetsListUploadPresets } from "../../funcs/uploadPresetsListUploadPresets.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListUploadPresetsRequest$inboundSchema,
};

export const tool$uploadPresetsListUploadPresets: ToolDefinition<typeof args> =
  {
    name: "list-upload-presets",
    description: `lists upload presets`,
    scopes: ["builder"],
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await uploadPresetsListUploadPresets(
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
