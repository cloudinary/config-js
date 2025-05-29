# GetTransformationRequest

## Example Usage

```typescript
import { GetTransformationRequest } from "@cloudinary/config/models/operations";

let value: GetTransformationRequest = {
  transformation: "<value>",
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `transformation`                                                                                                                                                       | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The transformation identifier. Can be either a named transformation (e.g., 'small_profile_thumbnail') or a transformation string (e.g., 'w_100,h_150,c_fill,g_auto').<br/> |