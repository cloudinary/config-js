# UpdateUploadPresetRequest

## Example Usage

```typescript
import { UpdateUploadPresetRequest } from "@cloudinary/config/models/operations";

let value: UpdateUploadPresetRequest = {
  name: "<value>",
  uploadPreset: {
    headers: "X-Robots-Tag: noindex",
    moderation: "manual",
    rawConvert: "google_speech:vtt:en-US",
    backgroundRemoval: "pixelz",
    format: "jpg",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    autoTagging: 0.5,
    detection: "coco_v2",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `uploadPreset`                                                     | [components.UploadPreset](../../models/components/uploadpreset.md) | :heavy_check_mark:                                                 | N/A                                                                |