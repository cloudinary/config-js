# ResponseBody

List response

## Example Usage

```typescript
import { ResponseBody } from "@cloudinary/environment-config/models/operations";

let value: ResponseBody = {
  mappings: [
    {
      folder: "my_folder",
      template: "http://example.com/files",
      externalId: "<id>",
    },
  ],
  totalEntries: 163977,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `mappings`                                                             | [components.UploadMapping](../../models/components/uploadmapping.md)[] | :heavy_check_mark:                                                     | Array of upload mapping objects                                        |
| `totalEntries`                                                         | *number*                                                               | :heavy_check_mark:                                                     | Total number of mappings                                               |
| `nextCursor`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | Cursor for getting the next page of results                            |