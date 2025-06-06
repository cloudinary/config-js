/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { transformationsCreateTransformation } from "../../funcs/transformationsCreateTransformation.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateTransformationRequest$inboundSchema,
};

export const tool$transformationsCreateTransformation: ToolDefinition<
  typeof args
> = {
  name: "create-transformation",
  description: `Create a named transformation

Creates a new named transformation with the given name and transformation string.
`,
  scopes: ["builder"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await transformationsCreateTransformation(
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
