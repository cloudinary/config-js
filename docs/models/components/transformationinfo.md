# TransformationInfo

## Example Usage

```typescript
import { TransformationInfo } from "@cloudinary/config/models/components";

let value: TransformationInfo = {
  name: "small_profile_thumbnail",
  allowedForStrict: true,
  used: true,
  named: true,
  info: [
    {
      width: 100,
      height: 150,
      crop: "fill",
      gravity: "auto",
    },
  ],
  derived: [
    {
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
    },
  ],
  nextCursor: "eyJvZmZzZXQiOjEwMH0=",
};
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 | Example                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                      | *string*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         | small_profile_thumbnail                                                                                                                                                     |
| `allowedForStrict`                                                                                                                                                          | *boolean*                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                          | Whether to allow this named transformation when [strict transformations](https://cloudinary.com/documentation/control_access_to_media#strict_transformations) are enabled.<br/> | true                                                                                                                                                                        |
| `used`                                                                                                                                                                      | *boolean*                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         | true                                                                                                                                                                        |
| `named`                                                                                                                                                                     | *boolean*                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         | true                                                                                                                                                                        |
| `info`                                                                                                                                                                      | [components.Info](../../models/components/info.md)[]                                                                                                                        | :heavy_minus_sign:                                                                                                                                                          | API transformation parameters                                                                                                                                               | [<br/>{<br/>"width": 100,<br/>"height": 150,<br/>"crop": "fill",<br/>"gravity": "auto"<br/>}<br/>]                                                                          |
| `derived`                                                                                                                                                                   | [components.Derived](../../models/components/derived.md)[]                                                                                                                  | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `nextCursor`                                                                                                                                                                | *string*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         | eyJvZmZzZXQiOjEwMH0=                                                                                                                                                        |