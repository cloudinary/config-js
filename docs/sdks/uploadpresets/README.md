# UploadPresets
(*uploadPresets*)

## Overview

Enables you to manage upload presets.

### Available Operations

* [createUploadPreset](#createuploadpreset) - Creates an upload preset
* [listUploadPresets](#listuploadpresets) - lists upload presets
* [getUploadPreset](#getuploadpreset) - Retrieves details of a single upload preset
* [updateUploadPreset](#updateuploadpreset) - Updates an upload preset
* [deleteUploadPreset](#deleteuploadpreset) - Deletes an upload preset

## createUploadPreset

Creates an upload preset

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
  const result = await cloudinaryConfig.uploadPresets.createUploadPreset({
    headers: "X-Robots-Tag: noindex",
    moderation: "metascan",
    rawConvert: "google_speech:vtt:en-US",
    backgroundRemoval: "pixelz",
    format: "jpg",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    autoTagging: 0.5,
    detection: "coco_v2",
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
import { uploadPresetsCreateUploadPreset } from "@cloudinary/config/funcs/uploadPresetsCreateUploadPreset.js";

// Use `CloudinaryConfigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryConfig = new CloudinaryConfigCore({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await uploadPresetsCreateUploadPreset(cloudinaryConfig, {
    headers: "X-Robots-Tag: noindex",
    moderation: "metascan",
    rawConvert: "google_speech:vtt:en-US",
    backgroundRemoval: "pixelz",
    format: "jpg",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    autoTagging: 0.5,
    detection: "coco_v2",
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
| `request`                                                                                                                                                                      | [components.UploadPreset](../../models/components/uploadpreset.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateUploadPresetResponse](../../models/operations/createuploadpresetresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401, 409         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listUploadPresets

lists upload presets

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
  const result = await cloudinaryConfig.uploadPresets.listUploadPresets({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryConfigCore } from "@cloudinary/config/core.js";
import { uploadPresetsListUploadPresets } from "@cloudinary/config/funcs/uploadPresetsListUploadPresets.js";

// Use `CloudinaryConfigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryConfig = new CloudinaryConfigCore({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await uploadPresetsListUploadPresets(cloudinaryConfig, {});

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
| `request`                                                                                                                                                                      | [operations.ListUploadPresetsRequest](../../models/operations/listuploadpresetsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListUploadPresetsResponse](../../models/operations/listuploadpresetsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getUploadPreset

Retrieves details of a single upload preset

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
  const result = await cloudinaryConfig.uploadPresets.getUploadPreset({
    name: "<value>",
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
import { uploadPresetsGetUploadPreset } from "@cloudinary/config/funcs/uploadPresetsGetUploadPreset.js";

// Use `CloudinaryConfigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryConfig = new CloudinaryConfigCore({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await uploadPresetsGetUploadPreset(cloudinaryConfig, {
    name: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetUploadPresetRequest](../../models/operations/getuploadpresetrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.UploadPreset](../../models/components/uploadpreset.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401, 404         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateUploadPreset

Updates an upload preset

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
  const result = await cloudinaryConfig.uploadPresets.updateUploadPreset({
    name: "<value>",
    uploadPreset: {
      headers: "X-Robots-Tag: noindex",
      moderation: "google_video_moderation",
      rawConvert: "google_speech:vtt:en-US",
      backgroundRemoval: "pixelz",
      format: "jpg",
      allowedFormats: "mp4,ogv,jpg,png,pdf",
      autoTagging: 0.5,
      detection: "coco_v2",
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
import { uploadPresetsUpdateUploadPreset } from "@cloudinary/config/funcs/uploadPresetsUpdateUploadPreset.js";

// Use `CloudinaryConfigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryConfig = new CloudinaryConfigCore({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await uploadPresetsUpdateUploadPreset(cloudinaryConfig, {
    name: "<value>",
    uploadPreset: {
      headers: "X-Robots-Tag: noindex",
      moderation: "google_video_moderation",
      rawConvert: "google_speech:vtt:en-US",
      backgroundRemoval: "pixelz",
      format: "jpg",
      allowedFormats: "mp4,ogv,jpg,png,pdf",
      autoTagging: 0.5,
      detection: "coco_v2",
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
| `request`                                                                                                                                                                      | [operations.UpdateUploadPresetRequest](../../models/operations/updateuploadpresetrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateUploadPresetResponse](../../models/operations/updateuploadpresetresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401, 404         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## deleteUploadPreset

Deletes an upload preset

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
  const result = await cloudinaryConfig.uploadPresets.deleteUploadPreset({
    name: "<value>",
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
import { uploadPresetsDeleteUploadPreset } from "@cloudinary/config/funcs/uploadPresetsDeleteUploadPreset.js";

// Use `CloudinaryConfigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryConfig = new CloudinaryConfigCore({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await uploadPresetsDeleteUploadPreset(cloudinaryConfig, {
    name: "<value>",
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
| `request`                                                                                                                                                                      | [operations.DeleteUploadPresetRequest](../../models/operations/deleteuploadpresetrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteUploadPresetResponse](../../models/operations/deleteuploadpresetresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401, 404         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |