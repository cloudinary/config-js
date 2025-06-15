# CreateTransformationRequest

## Example Usage

```typescript
import { CreateTransformationRequest } from "@cloudinary/environment-config/models/operations";

let value: CreateTransformationRequest = {
  transformation: "small_profile_thumbnail",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `transformation`                                                     | *string*                                                             | :heavy_check_mark:                                                   | The valid transformation name to create.<br/>                        | small_profile_thumbnail                                              |
| `createRequest`                                                      | [components.CreateRequest](../../models/components/createrequest.md) | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |