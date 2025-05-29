# UploadMapping

Represents an upload mapping

## Example Usage

```typescript
import { UploadMapping } from "@cloudinary/config/models/components";

let value: UploadMapping = {
  folder: "my_folder",
  template: "http://example.com/files",
  externalId: "<id>",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `folder`                                      | *string*                                      | :heavy_check_mark:                            | The folder name                               | my_folder                                     |
| `template`                                    | *string*                                      | :heavy_check_mark:                            | The template URL                              | http://example.com/files                      |
| `externalId`                                  | *string*                                      | :heavy_check_mark:                            | Unique identifier for the mapping             |                                               |
| `uploadPresetName`                            | *string*                                      | :heavy_minus_sign:                            | Name of an upload preset if one is associated |                                               |