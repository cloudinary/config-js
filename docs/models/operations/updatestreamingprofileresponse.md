# UpdateStreamingProfileResponse

Streaming profile updated

## Example Usage

```typescript
import { UpdateStreamingProfileResponse } from "@cloudinary/environment-config/models/operations";

let value: UpdateStreamingProfileResponse = {
  message: "<value>",
  data: {
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
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `message`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `data`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | [components.StreamingProfile](../../models/components/streamingprofile.md)                                                                                                                                                                                                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | {<br/>"external_id": "sp_123456789",<br/>"name": "hd_1080p",<br/>"display_name": "HD 1080p",<br/>"predefined": false,<br/>"representations": [<br/>{<br/>"transformation": [<br/>{<br/>"width": 1920,<br/>"height": 1080,<br/>"crop": "scale",<br/>"video_codec": "h264",<br/>"bit_rate": "2500k",<br/>"audio_codec": "aac",<br/>"audio_bitrate": "128k",<br/>"fps": 30<br/>}<br/>]<br/>},<br/>{<br/>"transformation": [<br/>{<br/>"width": 1280,<br/>"height": 720,<br/>"crop": "scale",<br/>"video_codec": "h264",<br/>"bit_rate": "1500k",<br/>"audio_codec": "aac",<br/>"audio_bitrate": "128k",<br/>"fps": 30<br/>}<br/>]<br/>}<br/>]<br/>} |