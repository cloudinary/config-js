# ReorderMetadataFieldRequest

## Example Usage

```typescript
import { ReorderMetadataFieldRequest } from "@cloudinary/config/models/operations";

let value: ReorderMetadataFieldRequest = {
  externalId: "<id>",
  requestBody: {
    position: 182327,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `externalId`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The external ID of the metadata field to reorder.                                                        |
| `requestBody`                                                                                            | [operations.ReorderMetadataFieldRequestBody](../../models/operations/reordermetadatafieldrequestbody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |