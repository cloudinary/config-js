# StreamingProfiles
(*streamingProfiles*)

## Overview

Enables you to manage streaming profiles

### Available Operations

* [createStreamingProfile](#createstreamingprofile) - Creates a new adaptive streaming profile in your Cloudinary account
* [getStreamingProfiles](#getstreamingprofiles) - Lists all adaptive streaming profiles (both built-in and custom) defined in your Cloudinary account
* [getStreamingProfile](#getstreamingprofile) - Retrieves the details of a single adaptive streaming profile by its name
* [updateStreamingProfile](#updatestreamingprofile) - Modifies an existing adaptive streaming profile's configuration
* [deleteStreamingProfile](#deletestreamingprofile) - Delete custom streaming profile or revert built-in profile to the original settings

## createStreamingProfile

Creates a new adaptive streaming profile in your Cloudinary account

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
  const result = await cloudinaryEnvConfig.streamingProfiles.createStreamingProfile({
    name: "hd_1080p",
    displayName: "HD 1080p",
    representations: "[{\"transformation\":\"w_1920,h_1080,c_scale/vc_h264,br_2500k/ac_aac,abr_128k/fps_30\"},{\"transformation\":\"w_1280,h_720,c_scale/vc_h264,br_1500k/ac_aac,abr_128k/fps_30\"}]",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryEnvConfigCore } from "@cloudinary/environment-config/core.js";
import { streamingProfilesCreateStreamingProfile } from "@cloudinary/environment-config/funcs/streamingProfilesCreateStreamingProfile.js";

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
  const res = await streamingProfilesCreateStreamingProfile(cloudinaryEnvConfig, {
    name: "hd_1080p",
    displayName: "HD 1080p",
    representations: "[{\"transformation\":\"w_1920,h_1080,c_scale/vc_h264,br_2500k/ac_aac,abr_128k/fps_30\"},{\"transformation\":\"w_1280,h_720,c_scale/vc_h264,br_1500k/ac_aac,abr_128k/fps_30\"}]",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("streamingProfilesCreateStreamingProfile failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The name of the streaming profile                                                                                                                                              | [object Object]                                                                                                                                                                |
| `representations`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | A JSON string containing the list of representations with transformation parameters as strings                                                                                 | [object Object]                                                                                                                                                                |
| `displayName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The display name of the streaming profile                                                                                                                                      | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.CreateStreamingProfileResponse](../../models/operations/createstreamingprofileresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 409    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getStreamingProfiles

Lists all adaptive streaming profiles (both built-in and custom) defined in your Cloudinary account

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
  const result = await cloudinaryEnvConfig.streamingProfiles.getStreamingProfiles({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryEnvConfigCore } from "@cloudinary/environment-config/core.js";
import { streamingProfilesGetStreamingProfiles } from "@cloudinary/environment-config/funcs/streamingProfilesGetStreamingProfiles.js";

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
  const res = await streamingProfilesGetStreamingProfiles(cloudinaryEnvConfig, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("streamingProfilesGetStreamingProfiles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetStreamingProfilesResponse](../../models/operations/getstreamingprofilesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getStreamingProfile

Retrieves the details of a single adaptive streaming profile by its name

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
  const result = await cloudinaryEnvConfig.streamingProfiles.getStreamingProfile("<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryEnvConfigCore } from "@cloudinary/environment-config/core.js";
import { streamingProfilesGetStreamingProfile } from "@cloudinary/environment-config/funcs/streamingProfilesGetStreamingProfile.js";

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
  const res = await streamingProfilesGetStreamingProfile(cloudinaryEnvConfig, "<value>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("streamingProfilesGetStreamingProfile failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetStreamingProfileResponse](../../models/operations/getstreamingprofileresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401, 404         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateStreamingProfile

Modifies an existing adaptive streaming profile's configuration

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
  const result = await cloudinaryEnvConfig.streamingProfiles.updateStreamingProfile("<value>", {
    displayName: "HD 1080p Updated",
    representations: "[{\"transformation\":\"w_1920,h_1080,c_scale/vc_h264,br_3000k/ac_aac,abr_192k/fps_30\"},{\"transformation\":\"w_1280,h_720,c_scale/vc_h264,br_2000k/ac_aac,abr_192k/fps_30\"}]",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryEnvConfigCore } from "@cloudinary/environment-config/core.js";
import { streamingProfilesUpdateStreamingProfile } from "@cloudinary/environment-config/funcs/streamingProfilesUpdateStreamingProfile.js";

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
  const res = await streamingProfilesUpdateStreamingProfile(cloudinaryEnvConfig, "<value>", {
    displayName: "HD 1080p Updated",
    representations: "[{\"transformation\":\"w_1920,h_1080,c_scale/vc_h264,br_3000k/ac_aac,abr_192k/fps_30\"},{\"transformation\":\"w_1280,h_720,c_scale/vc_h264,br_2000k/ac_aac,abr_192k/fps_30\"}]",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("streamingProfilesUpdateStreamingProfile failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `streamingProfileUpdate`                                                                                                                                                       | [components.StreamingProfileUpdate](../../models/components/streamingprofileupdate.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.UpdateStreamingProfileResponse](../../models/operations/updatestreamingprofileresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## deleteStreamingProfile

Delete custom streaming profile or revert built-in profile to the original settings

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
  const result = await cloudinaryEnvConfig.streamingProfiles.deleteStreamingProfile("<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryEnvConfigCore } from "@cloudinary/environment-config/core.js";
import { streamingProfilesDeleteStreamingProfile } from "@cloudinary/environment-config/funcs/streamingProfilesDeleteStreamingProfile.js";

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
  const res = await streamingProfilesDeleteStreamingProfile(cloudinaryEnvConfig, "<value>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("streamingProfilesDeleteStreamingProfile failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteStreamingProfileResponse](../../models/operations/deletestreamingprofileresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |