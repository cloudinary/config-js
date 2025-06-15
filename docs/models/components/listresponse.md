# ListResponse

## Example Usage

```typescript
import { ListResponse } from "@cloudinary/environment-config/models/components";

let value: ListResponse = {
  transformations: [
    {
      name: "t_small_profile_thumbnail",
      allowedForStrict: true,
      used: false,
      named: true,
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `transformations`                                                                      | [components.TransformationSummary](../../models/components/transformationsummary.md)[] | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `nextCursor`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |