/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { streamingProfilesUpdateStreamingProfile } from "../../funcs/streamingProfilesUpdateStreamingProfile.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  name: z.string(),
  streamingProfileUpdate: components.StreamingProfileUpdate$inboundSchema,
};

export const tool$streamingProfilesUpdateStreamingProfile: ToolDefinition<
  typeof args
> = {
  name: "update-streaming-profile",
  description:
    `Modifies an existing adaptive streaming profile's configuration`,
  scopes: ["builder"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await streamingProfilesUpdateStreamingProfile(
      client,
      args.name,
      args.streamingProfileUpdate,
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
