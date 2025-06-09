# ListUploadPresetsResponse

upload presets retrieved

## Example Usage

```typescript
import { ListUploadPresetsResponse } from "@cloudinary/config/models/operations";

let value: ListUploadPresetsResponse = {
  presets: [
    {
      headers: "X-Robots-Tag: noindex",
      moderation: "metascan",
      rawConvert: "google_speech:vtt:en-US",
      backgroundRemoval: "pixelz",
      format: "jpg",
      allowedFormats: "mp4,ogv,jpg,png,pdf",
      autoTagging: 0.5,
      detection: "coco_v2",
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `presets`                                                            | [components.UploadPreset](../../models/components/uploadpreset.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |