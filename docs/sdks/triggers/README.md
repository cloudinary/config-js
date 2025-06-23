# Triggers
(*triggers*)

## Overview

Enables you to manage event triggers and notifications.

### Available Operations

* [listTrigger](#listtrigger) - Lists all webhook notification triggers configured for your product environmentcloudinary
* [createTrigger](#createtrigger) - Creates a new notification trigger (webhook) by specifying an event type and a destination
* [updateTrigger](#updatetrigger) - Updates the callback URL of an existing webhook trigger in your Cloudinary account
* [deleteTrigger](#deletetrigger) - Deletes a notification trigger

## listTrigger

Retrieves a list of all event triggers and notifications within your product environment.


### Example Usage

```typescript
import { CloudinaryEnvConfig } from "@cloudinary/environment-config";

const cloudinaryEnvConfig = new CloudinaryEnvConfig({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryEnvConfig.triggers.listTrigger();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryEnvConfigCore } from "@cloudinary/environment-config/core.js";
import { triggersListTrigger } from "@cloudinary/environment-config/funcs/triggersListTrigger.js";

// Use `CloudinaryEnvConfigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryEnvConfig = new CloudinaryEnvConfigCore({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await triggersListTrigger(cloudinaryEnvConfig);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("triggersListTrigger failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `eventType`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The type of event that will trigger the notification response.                                                                                                                 |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListTriggerResponse](../../models/operations/listtriggerresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## createTrigger

Creates a new trigger. 
Your product environment supports triggers up to a maximum determined by multiplying the number of unique event types by the limit of 30 notification URLs.


### Example Usage

```typescript
import { CloudinaryEnvConfig } from "@cloudinary/environment-config";

const cloudinaryEnvConfig = new CloudinaryEnvConfig({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryEnvConfig.triggers.createTrigger({
    uri: "https://trigger.site/124",
    eventType: "upload",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryEnvConfigCore } from "@cloudinary/environment-config/core.js";
import { triggersCreateTrigger } from "@cloudinary/environment-config/funcs/triggersCreateTrigger.js";

// Use `CloudinaryEnvConfigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryEnvConfig = new CloudinaryEnvConfigCore({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await triggersCreateTrigger(cloudinaryEnvConfig, {
    uri: "https://trigger.site/124",
    eventType: "upload",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("triggersCreateTrigger failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `uri`                                                                                                                                                                          | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The URL that will receive the notification response.                                                                                                                           | [object Object]                                                                                                                                                                |
| `eventType`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The type of event that will trigger the notification response.                                                                                                                 | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.TriggerInfo](../../models/components/triggerinfo.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 409    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateTrigger

Updates a notification URL for a trigger.

### Example Usage

```typescript
import { CloudinaryEnvConfig } from "@cloudinary/environment-config";

const cloudinaryEnvConfig = new CloudinaryEnvConfig({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryEnvConfig.triggers.updateTrigger("c2c822dd1aa41ba6d81299df8b5ae949", {
    newUri: "http://example.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryEnvConfigCore } from "@cloudinary/environment-config/core.js";
import { triggersUpdateTrigger } from "@cloudinary/environment-config/funcs/triggersUpdateTrigger.js";

// Use `CloudinaryEnvConfigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryEnvConfig = new CloudinaryEnvConfigCore({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await triggersUpdateTrigger(cloudinaryEnvConfig, "c2c822dd1aa41ba6d81299df8b5ae949", {
    newUri: "http://example.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("triggersUpdateTrigger failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `requestBody`                                                                                                                                                                  | [operations.UpdateTriggerRequestBody](../../models/operations/updatetriggerrequestbody.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.UpdateTriggerResponse](../../models/operations/updatetriggerresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## deleteTrigger

Deletes a trigger.

### Example Usage

```typescript
import { CloudinaryEnvConfig } from "@cloudinary/environment-config";

const cloudinaryEnvConfig = new CloudinaryEnvConfig({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryEnvConfig.triggers.deleteTrigger("c2c822dd1aa41ba6d81299df8b5ae949");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryEnvConfigCore } from "@cloudinary/environment-config/core.js";
import { triggersDeleteTrigger } from "@cloudinary/environment-config/funcs/triggersDeleteTrigger.js";

// Use `CloudinaryEnvConfigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryEnvConfig = new CloudinaryEnvConfigCore({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await triggersDeleteTrigger(cloudinaryEnvConfig, "c2c822dd1aa41ba6d81299df8b5ae949");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("triggersDeleteTrigger failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.DeleteTriggerResponse](../../models/operations/deletetriggerresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |