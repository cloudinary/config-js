# UploadMappings
(*uploadMappings*)

## Overview

Enables you to manage upload mappings

### Available Operations

* [listUploadMappings](#listuploadmappings) - Retrieves a list of all upload mapping rules configured in your Cloudinary product environment
* [createUploadMapping](#createuploadmapping) - Creates a new upload mapping
* [updateUploadMapping](#updateuploadmapping) - Updates an existing upload mapping by changing its remote URL template for a given
* [deleteUploadMapping](#deleteuploadmapping) - Deletes a folder upload mapping
* [replaceUploadMappings](#replaceuploadmappings) - Replaces all upload mappings

## listUploadMappings

Returns a list of all upload mappings defined for your account.
Upload mappings allow you to map an upload preset to a specific folder and URL template.


### Example Usage

```typescript
import { CloudinaryEnvConfig } from "@cloudinary/environment-config";

const cloudinaryEnvConfig = new CloudinaryEnvConfig({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryEnvConfig.uploadMappings.listUploadMappings();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryEnvConfigCore } from "@cloudinary/environment-config/core.js";
import { uploadMappingsListUploadMappings } from "@cloudinary/environment-config/funcs/uploadMappingsListUploadMappings.js";

// Use `CloudinaryEnvConfigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryEnvConfig = new CloudinaryEnvConfigCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await uploadMappingsListUploadMappings(cloudinaryEnvConfig);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("uploadMappingsListUploadMappings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `folder`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Get details of a specific mapping by folder name                                                                                                                               |
| `nextCursor`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | For pagination - value from the previous response to get the next page of results                                                                                              |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Maximum number of results to return per request (1-500)                                                                                                                        |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListUploadMappingsResponse](../../models/operations/listuploadmappingsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## createUploadMapping

Creates a new upload mapping for the specified folder

### Example Usage

```typescript
import { CloudinaryEnvConfig } from "@cloudinary/environment-config";

const cloudinaryEnvConfig = new CloudinaryEnvConfig({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryEnvConfig.uploadMappings.createUploadMapping({
    folder: "my_folder",
    template: "http://example.com/files",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryEnvConfigCore } from "@cloudinary/environment-config/core.js";
import { uploadMappingsCreateUploadMapping } from "@cloudinary/environment-config/funcs/uploadMappingsCreateUploadMapping.js";

// Use `CloudinaryEnvConfigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryEnvConfig = new CloudinaryEnvConfigCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await uploadMappingsCreateUploadMapping(cloudinaryEnvConfig, {
    folder: "my_folder",
    template: "http://example.com/files",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("uploadMappingsCreateUploadMapping failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `folder`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The folder name for the mapping                                                                                                                                                | [object Object]                                                                                                                                                                |
| `template`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The template URL                                                                                                                                                               | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.CreateUploadMappingResponse](../../models/operations/createuploadmappingresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 409    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateUploadMapping

Updates the URL template for an existing folder mapping

### Example Usage

```typescript
import { CloudinaryEnvConfig } from "@cloudinary/environment-config";

const cloudinaryEnvConfig = new CloudinaryEnvConfig({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryEnvConfig.uploadMappings.updateUploadMapping({
    folder: "<value>",
    template: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryEnvConfigCore } from "@cloudinary/environment-config/core.js";
import { uploadMappingsUpdateUploadMapping } from "@cloudinary/environment-config/funcs/uploadMappingsUpdateUploadMapping.js";

// Use `CloudinaryEnvConfigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryEnvConfig = new CloudinaryEnvConfigCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await uploadMappingsUpdateUploadMapping(cloudinaryEnvConfig, {
    folder: "<value>",
    template: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("uploadMappingsUpdateUploadMapping failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `folder`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The folder name of the mapping to update                                                                                                                                       |
| `template`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The new URL template                                                                                                                                                           |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateUploadMappingResponse](../../models/operations/updateuploadmappingresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## deleteUploadMapping

Permanently deletes the upload mapping for the specified folder

### Example Usage

```typescript
import { CloudinaryEnvConfig } from "@cloudinary/environment-config";

const cloudinaryEnvConfig = new CloudinaryEnvConfig({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryEnvConfig.uploadMappings.deleteUploadMapping("<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryEnvConfigCore } from "@cloudinary/environment-config/core.js";
import { uploadMappingsDeleteUploadMapping } from "@cloudinary/environment-config/funcs/uploadMappingsDeleteUploadMapping.js";

// Use `CloudinaryEnvConfigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryEnvConfig = new CloudinaryEnvConfigCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await uploadMappingsDeleteUploadMapping(cloudinaryEnvConfig, "<value>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("uploadMappingsDeleteUploadMapping failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `folder`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The folder name of the mapping to delete                                                                                                                                       |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteUploadMappingResponse](../../models/operations/deleteuploadmappingresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401, 404         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## replaceUploadMappings

Replaces all upload mappings

### Example Usage

```typescript
import { CloudinaryEnvConfig } from "@cloudinary/environment-config";

const cloudinaryEnvConfig = new CloudinaryEnvConfig({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryEnvConfig.uploadMappings.replaceUploadMappings({
    mappings: [
      {
        folder: "<value>",
        template: "<value>",
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryEnvConfigCore } from "@cloudinary/environment-config/core.js";
import { uploadMappingsReplaceUploadMappings } from "@cloudinary/environment-config/funcs/uploadMappingsReplaceUploadMappings.js";

// Use `CloudinaryEnvConfigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryEnvConfig = new CloudinaryEnvConfigCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await uploadMappingsReplaceUploadMappings(cloudinaryEnvConfig, {
    mappings: [
      {
        folder: "<value>",
        template: "<value>",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("uploadMappingsReplaceUploadMappings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `mappings`                                                                                                                                                                     | [operations.Mapping](../../models/operations/mapping.md)[]                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ReplaceUploadMappingsResponse](../../models/operations/replaceuploadmappingsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |