# Transformations
(*transformations*)

## Overview

Enables you to manage named and unnamed transformations.

### Available Operations

* [listTransformations](#listtransformations) - Get transformations
* [getTransformation](#gettransformation) - Get a transformation
* [createTransformation](#createtransformation) - Create a named transformation
* [updateTransformation](#updatetransformation) - Update a transformation
* [deleteTransformation](#deletetransformation) - Delete a transformation

## listTransformations

Retrieves a list of all transformations, which can be filtered to show either only named or unnamed transformations.


### Example Usage

```typescript
import { CloudinaryConfig } from "@cloudinary/config";

const cloudinaryConfig = new CloudinaryConfig({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryConfig.transformations.listTransformations({
    nextCursor: "8edbc61040178db60b0973ca9494bf3a",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryConfigCore } from "@cloudinary/config/core.js";
import { transformationsListTransformations } from "@cloudinary/config/funcs/transformationsListTransformations.js";

// Use `CloudinaryConfigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryConfig = new CloudinaryConfigCore({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await transformationsListTransformations(cloudinaryConfig, {
    nextCursor: "8edbc61040178db60b0973ca9494bf3a",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTransformationsRequest](../../models/operations/listtransformationsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

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
import { CloudinaryConfig } from "@cloudinary/config";

const cloudinaryConfig = new CloudinaryConfig({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryConfig.transformations.getTransformation({
    transformation: "small_profile_thumbnail",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryConfigCore } from "@cloudinary/config/core.js";
import { transformationsGetTransformation } from "@cloudinary/config/funcs/transformationsGetTransformation.js";

// Use `CloudinaryConfigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryConfig = new CloudinaryConfigCore({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await transformationsGetTransformation(cloudinaryConfig, {
    transformation: "small_profile_thumbnail",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTransformationRequest](../../models/operations/gettransformationrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
import { CloudinaryConfig } from "@cloudinary/config";

const cloudinaryConfig = new CloudinaryConfig({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryConfig.transformations.createTransformation({
    transformation: "small_profile_thumbnail",
    createRequest: {
      transformation: "w_100,h_150,c_fill,g_auto",
      allowedForStrict: true,
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryConfigCore } from "@cloudinary/config/core.js";
import { transformationsCreateTransformation } from "@cloudinary/config/funcs/transformationsCreateTransformation.js";

// Use `CloudinaryConfigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryConfig = new CloudinaryConfigCore({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await transformationsCreateTransformation(cloudinaryConfig, {
    transformation: "small_profile_thumbnail",
    createRequest: {
      transformation: "w_100,h_150,c_fill,g_auto",
      allowedForStrict: true,
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateTransformationRequest](../../models/operations/createtransformationrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

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
import { CloudinaryConfig } from "@cloudinary/config";

const cloudinaryConfig = new CloudinaryConfig({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryConfig.transformations.updateTransformation({
    transformation: "small_profile_thumbnail",
    updateRequest: {
      unsafeUpdate: "w_200,h_200,c_fill,g_face",
      allowedForStrict: true,
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryConfigCore } from "@cloudinary/config/core.js";
import { transformationsUpdateTransformation } from "@cloudinary/config/funcs/transformationsUpdateTransformation.js";

// Use `CloudinaryConfigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryConfig = new CloudinaryConfigCore({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await transformationsUpdateTransformation(cloudinaryConfig, {
    transformation: "small_profile_thumbnail",
    updateRequest: {
      unsafeUpdate: "w_200,h_200,c_fill,g_face",
      allowedForStrict: true,
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateTransformationRequest](../../models/operations/updatetransformationrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
import { CloudinaryConfig } from "@cloudinary/config";

const cloudinaryConfig = new CloudinaryConfig({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryConfig.transformations.deleteTransformation({
    transformation: "small_profile_thumbnail",
    invalidate: true,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryConfigCore } from "@cloudinary/config/core.js";
import { transformationsDeleteTransformation } from "@cloudinary/config/funcs/transformationsDeleteTransformation.js";

// Use `CloudinaryConfigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryConfig = new CloudinaryConfigCore({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await transformationsDeleteTransformation(cloudinaryConfig, {
    transformation: "small_profile_thumbnail",
    invalidate: true,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteTransformationRequest](../../models/operations/deletetransformationrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteTransformationResponse](../../models/operations/deletetransformationresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 400, 401, 403, 404 | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |