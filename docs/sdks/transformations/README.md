# Transformations
(*transformations*)

## Overview

Enables you to manage named and unnamed transformations.

### Available Operations

* [listTransformations](#listtransformations) - Lists all transformation definitions in your account (including named transformations
* [getTransformation](#gettransformation) - Retrieves details of a specific transformation
* [createTransformation](#createtransformation) - Creates a new named transformation (assigning a custom name to a set of transformation
* [updateTransformation](#updatetransformation) - Updates the definition of an existing named transformation
* [deleteTransformation](#deletetransformation) - Deletes a named transformation from your account

## listTransformations

Retrieves a list of all transformations, which can be filtered to show either only named or unnamed transformations.


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
  const result = await cloudinaryEnvConfig.transformations.listTransformations(20, "8edbc61040178db60b0973ca9494bf3a");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryEnvConfigCore } from "@cloudinary/environment-config/core.js";
import { transformationsListTransformations } from "@cloudinary/environment-config/funcs/transformationsListTransformations.js";

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
  const res = await transformationsListTransformations(cloudinaryEnvConfig, 20, "8edbc61040178db60b0973ca9494bf3a");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transformationsListTransformations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                         | Type                                                                                                                                                                                                              | Required                                                                                                                                                                                                          | Description                                                                                                                                                                                                       | Example                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `named`                                                                                                                                                                                                           | *boolean*                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                | Whether to return only named (`true`) or unnamed (`false`) transformations. If this parameter isn't included, both named and unnamed transformations will be returned.                                            |                                                                                                                                                                                                                   |
| `maxResults`                                                                                                                                                                                                      | *number*                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                | Maximum number of transformations to return.                                                                                                                                                                      | [object Object]                                                                                                                                                                                                   |
| `nextCursor`                                                                                                                                                                                                      | *string*                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                | When a request has more results to return than `max_results`, the `next_cursor` value is returned as part of the response. You can then specify this value as the `next_cursor` parameter of a following request. | [object Object]                                                                                                                                                                                                   |
| `options`                                                                                                                                                                                                         | RequestOptions                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                | Used to set various options for making HTTP requests.                                                                                                                                                             |                                                                                                                                                                                                                   |
| `options.fetchOptions`                                                                                                                                                                                            | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                    |                                                                                                                                                                                                                   |
| `options.retries`                                                                                                                                                                                                 | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                  |                                                                                                                                                                                                                   |

### Response

**Promise\<[components.ListResponse](../../models/components/listresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 403    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getTransformation

Retrieves details for a named or unnamed transformation.


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
  const result = await cloudinaryEnvConfig.transformations.getTransformation("small_profile_thumbnail");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryEnvConfigCore } from "@cloudinary/environment-config/core.js";
import { transformationsGetTransformation } from "@cloudinary/environment-config/funcs/transformationsGetTransformation.js";

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
  const res = await transformationsGetTransformation(cloudinaryEnvConfig, "small_profile_thumbnail");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transformationsGetTransformation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `transformation`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The transformation identifier. Can be either a named transformation (e.g., 'small_profile_thumbnail') or a transformation string (e.g., 'w_100,h_150,c_fill,g_auto').<br/>     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.TransformationInfo](../../models/components/transformationinfo.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 400, 401, 403, 404 | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## createTransformation

Creates a new named transformation with the given name and transformation string.


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
  const result = await cloudinaryEnvConfig.transformations.createTransformation("small_profile_thumbnail", {
    transformation: "w_100,h_150,c_fill,g_auto",
    allowedForStrict: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryEnvConfigCore } from "@cloudinary/environment-config/core.js";
import { transformationsCreateTransformation } from "@cloudinary/environment-config/funcs/transformationsCreateTransformation.js";

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
  const res = await transformationsCreateTransformation(cloudinaryEnvConfig, "small_profile_thumbnail", {
    transformation: "w_100,h_150,c_fill,g_auto",
    allowedForStrict: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transformationsCreateTransformation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `transformation`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The valid transformation name to create.<br/>                                                                                                                                  | [object Object]                                                                                                                                                                |
| `createRequest`                                                                                                                                                                | [components.CreateRequest](../../models/components/createrequest.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.CreateTransformationResponse](../../models/operations/createtransformationresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 400, 401, 403, 409 | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## updateTransformation

Update an existing named or unnamed transformation.


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
  const result = await cloudinaryEnvConfig.transformations.updateTransformation("small_profile_thumbnail", {
    unsafeUpdate: "w_200,h_200,c_fill,g_face",
    allowedForStrict: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryEnvConfigCore } from "@cloudinary/environment-config/core.js";
import { transformationsUpdateTransformation } from "@cloudinary/environment-config/funcs/transformationsUpdateTransformation.js";

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
  const res = await transformationsUpdateTransformation(cloudinaryEnvConfig, "small_profile_thumbnail", {
    unsafeUpdate: "w_200,h_200,c_fill,g_face",
    allowedForStrict: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transformationsUpdateTransformation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `transformation`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The transformation identifier. Can be either a named transformation (e.g., 'small_profile_thumbnail') or a transformation string (e.g., 'w_100,h_150,c_fill,g_auto').<br/>     |
| `updateRequest`                                                                                                                                                                | [components.UpdateRequest](../../models/components/updaterequest.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateTransformationResponse](../../models/operations/updatetransformationresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 403    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## deleteTransformation

Delete a named or unnamed transformation. Optionally invalidate derived resources generated using the named transformation.


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
  const result = await cloudinaryEnvConfig.transformations.deleteTransformation("small_profile_thumbnail", true);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryEnvConfigCore } from "@cloudinary/environment-config/core.js";
import { transformationsDeleteTransformation } from "@cloudinary/environment-config/funcs/transformationsDeleteTransformation.js";

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
  const res = await transformationsDeleteTransformation(cloudinaryEnvConfig, "small_profile_thumbnail", true);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transformationsDeleteTransformation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `transformation`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The transformation identifier. Can be either a named transformation (e.g., 'small_profile_thumbnail') or a transformation string (e.g., 'w_100,h_150,c_fill,g_auto').<br/>     |                                                                                                                                                                                |
| `invalidate`                                                                                                                                                                   | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Invalidate derived resources generated using the deleted transformation from CDN.                                                                                              | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.DeleteTransformationResponse](../../models/operations/deletetransformationresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 400, 401, 403, 404 | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |