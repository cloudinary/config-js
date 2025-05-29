# ListTriggerResponse

List response

## Example Usage

```typescript
import { ListTriggerResponse } from "@cloudinary/config/models/operations";

let value: ListTriggerResponse = {
  triggers: [
    {
      id: "c2c822dd1aa41ba6d81299df8b5ae949",
      productEnvironmentId: "7fabb2ff3d687d05b63134cf8fa006ba16",
      uriType: "webhook",
      uri: "http://example.com",
      eventType: "all",
      createdAt: new Date("2025-05-13T09:40:29+00:00"),
      updatedAt: new Date("2025-05-13T09:40:29+00:00"),
    },
  ],
  total: 1,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `triggers`                                                         | [components.TriggerInfo](../../models/components/triggerinfo.md)[] | :heavy_check_mark:                                                 | List of trigger objects.                                           |                                                                    |
| `total`                                                            | *number*                                                           | :heavy_check_mark:                                                 | Total number of triggers.                                          | 1                                                                  |