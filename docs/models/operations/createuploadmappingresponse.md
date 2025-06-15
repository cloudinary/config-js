# CreateUploadMappingResponse

Upload mapping created successfully

## Example Usage

```typescript
import { CreateUploadMappingResponse } from "@cloudinary/environment-config/models/operations";

let value: CreateUploadMappingResponse = {
  message: "created",
  folder: "<value>",
  externalId: "<id>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       | Example                           |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `message`                         | *string*                          | :heavy_check_mark:                | N/A                               | created                           |
| `folder`                          | *string*                          | :heavy_check_mark:                | The folder name that was created  |                                   |
| `externalId`                      | *string*                          | :heavy_check_mark:                | Unique identifier for the mapping |                                   |