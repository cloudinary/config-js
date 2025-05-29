# Derived

## Example Usage

```typescript
import { Derived } from "@cloudinary/config/models/components";

let value: Derived = {
  publicId: "sample_image",
  resourceType: "image",
  type: "upload",
  format: "jpg",
  url:
    "http://res.cloudinary.com/demo/image/upload/v1620000000/sample_image.jpg",
  secureUrl:
    "https://res.cloudinary.com/demo/image/upload/v1620000000/sample_image.jpg",
  bytes: 123456,
  id: "1234abcd5678efgh",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `publicId`                                                                | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       | sample_image                                                              |
| `resourceType`                                                            | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       | image                                                                     |
| `type`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       | upload                                                                    |
| `format`                                                                  | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       | jpg                                                                       |
| `url`                                                                     | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       | http://res.cloudinary.com/demo/image/upload/v1620000000/sample_image.jpg  |
| `secureUrl`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       | https://res.cloudinary.com/demo/image/upload/v1620000000/sample_image.jpg |
| `bytes`                                                                   | *number*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       | 123456                                                                    |
| `id`                                                                      | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       | 1234abcd5678efgh                                                          |