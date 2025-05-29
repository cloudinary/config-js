# CreateTriggerRequest

## Example Usage

```typescript
import { CreateTriggerRequest } from "@cloudinary/config/models/operations";

let value: CreateTriggerRequest = {
  uri: "https://trigger.site/124",
  eventType: "upload",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uri`                                                          | *string*                                                       | :heavy_check_mark:                                             | The URL that will receive the notification response.           | https://trigger.site/124                                       |
| `eventType`                                                    | *string*                                                       | :heavy_check_mark:                                             | The type of event that will trigger the notification response. | upload                                                         |