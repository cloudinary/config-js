# DeleteUploadMappingResponse

Upload mapping deleted successfully

## Example Usage

```typescript
import { DeleteUploadMappingResponse } from "@cloudinary/environment-config/models/operations";

let value: DeleteUploadMappingResponse = {
  message: "deleted",
  externalId: "<id>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `message`                                | *string*                                 | :heavy_check_mark:                       | N/A                                      | deleted                                  |
| `externalId`                             | *string*                                 | :heavy_check_mark:                       | Unique identifier of the deleted mapping |                                          |