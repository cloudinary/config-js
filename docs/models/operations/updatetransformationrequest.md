# UpdateTransformationRequest

## Example Usage

```typescript
import { UpdateTransformationRequest } from "@cloudinary/config/models/operations";

let value: UpdateTransformationRequest = {
  transformation: "<value>",
  updateRequest: {
    unsafeUpdate: "w_200,h_200,c_fill,g_face",
    allowedForStrict: true,
  },
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `transformation`                                                                                                                                                       | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The transformation identifier. Can be either a named transformation (e.g., 'small_profile_thumbnail') or a transformation string (e.g., 'w_100,h_150,c_fill,g_auto').<br/> |
| `updateRequest`                                                                                                                                                        | [components.UpdateRequest](../../models/components/updaterequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |