# ListUploadMappingsRequest

## Example Usage

```typescript
import { ListUploadMappingsRequest } from "@cloudinary/environment-config/models/operations";

let value: ListUploadMappingsRequest = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `folder`                                                                          | *string*                                                                          | :heavy_minus_sign:                                                                | Get details of a specific mapping by folder name                                  |
| `nextCursor`                                                                      | *string*                                                                          | :heavy_minus_sign:                                                                | For pagination - value from the previous response to get the next page of results |
| `maxResults`                                                                      | *number*                                                                          | :heavy_minus_sign:                                                                | Maximum number of results to return per request (1-500)                           |