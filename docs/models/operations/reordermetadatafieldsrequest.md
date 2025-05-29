# ReorderMetadataFieldsRequest

## Example Usage

```typescript
import { ReorderMetadataFieldsRequest } from "@cloudinary/config/models/operations";

let value: ReorderMetadataFieldsRequest = {
  orderBy: "label",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `orderBy`                                                                                              | [operations.ReorderMetadataFieldsOrderBy](../../models/operations/reordermetadatafieldsorderby.md)     | :heavy_check_mark:                                                                                     | The field to order by.                                                                                 |
| `direction`                                                                                            | [operations.ReorderMetadataFieldsDirection](../../models/operations/reordermetadatafieldsdirection.md) | :heavy_minus_sign:                                                                                     | The direction to order by.                                                                             |