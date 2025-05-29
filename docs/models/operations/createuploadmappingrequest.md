# CreateUploadMappingRequest

## Example Usage

```typescript
import { CreateUploadMappingRequest } from "@cloudinary/config/models/operations";

let value: CreateUploadMappingRequest = {
  folder: "my_folder",
  template: "http://example.com/files",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     | Example                         |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `folder`                        | *string*                        | :heavy_check_mark:              | The folder name for the mapping | my_folder                       |
| `template`                      | *string*                        | :heavy_check_mark:              | The template URL                | http://example.com/files        |