# UpdateMetadataFieldRequest

## Example Usage

```typescript
import { UpdateMetadataFieldRequest } from "@cloudinary/config/models/operations";

let value: UpdateMetadataFieldRequest = {
  externalId: "<id>",
  metadataField: {
    type: "integer",
    label: "<value>",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `externalId`                                                         | *string*                                                             | :heavy_check_mark:                                                   | The external ID of the metadata field to retrieve.                   |
| `metadataField`                                                      | [components.MetadataField](../../models/components/metadatafield.md) | :heavy_check_mark:                                                   | N/A                                                                  |