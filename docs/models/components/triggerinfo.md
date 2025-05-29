# TriggerInfo

## Example Usage

```typescript
import { TriggerInfo } from "@cloudinary/config/models/components";

let value: TriggerInfo = {
  id: "c2c822dd1aa41ba6d81299df8b5ae949",
  productEnvironmentId: "7fabb2ff3d687d05b63134cf8fa006ba16",
  uriType: "flow",
  uri: "http://example.com",
  eventType: "all",
  createdAt: new Date("2025-05-13T09:40:29+00:00"),
  updatedAt: new Date("2025-05-13T09:40:29+00:00"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | c2c822dd1aa41ba6d81299df8b5ae949                                                              |
| `productEnvironmentId`                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 7fabb2ff3d687d05b63134cf8fa006ba16                                                            |
| `uriType`                                                                                     | [components.UriType](../../models/components/uritype.md)                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `uri`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | http://example.com                                                                            |
| `eventType`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | all                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2025-05-13T09:40:29+00:00                                                                     |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2025-05-13T09:40:29+00:00                                                                     |