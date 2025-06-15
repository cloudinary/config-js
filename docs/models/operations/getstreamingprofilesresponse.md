# GetStreamingProfilesResponse

Streaming profiles retrieved

## Example Usage

```typescript
import { GetStreamingProfilesResponse } from "@cloudinary/environment-config/models/operations";

let value: GetStreamingProfilesResponse = {
  data: [
    {
      externalId: "sp_123456789",
      name: "hd_1080p",
      displayName: "HD 1080p",
      predefined: false,
      representations: [
        {
          transformation: [
            {
              "width": 1920,
              "height": 1080,
              "crop": "scale",
              "video_codec": "h264",
              "bit_rate": "2500k",
              "audio_codec": "aac",
              "audio_bitrate": "128k",
              "fps": 30,
            },
          ],
        },
        {
          transformation: [
            {
              "width": 1280,
              "height": 720,
              "crop": "scale",
              "video_codec": "h264",
              "bit_rate": "1500k",
              "audio_codec": "aac",
              "audio_bitrate": "128k",
              "fps": 30,
            },
          ],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [components.StreamingProfile](../../models/components/streamingprofile.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |