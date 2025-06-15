# ListTriggerResponse

List response

## Example Usage

```typescript
import { ListTriggerResponse } from "@cloudinary/environment-config/models/operations";

let value: ListTriggerResponse = {
  triggers: [],
  total: 1,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `triggers`                                                         | [components.TriggerInfo](../../models/components/triggerinfo.md)[] | :heavy_check_mark:                                                 | List of trigger objects.                                           |                                                                    |
| `total`                                                            | *number*                                                           | :heavy_check_mark:                                                 | Total number of triggers.                                          | 1                                                                  |