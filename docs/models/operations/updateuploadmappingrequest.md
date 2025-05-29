# UpdateUploadMappingRequest

## Example Usage

```typescript
import { UpdateUploadMappingRequest } from "@cloudinary/config/models/operations";

let value: UpdateUploadMappingRequest = {
  folder: "<value>",
  template: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `folder`                                 | *string*                                 | :heavy_check_mark:                       | The folder name of the mapping to update |
| `template`                               | *string*                                 | :heavy_check_mark:                       | The new URL template                     |