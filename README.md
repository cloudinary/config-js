# Cloudinary Config JS SDK

<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Cloudinary Config JS SDK](#cloudinary-config-js-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Global Parameters](#global-parameters)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)

<!-- End Table of Contents [toc] -->

## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @cloudinary/config
```

### PNPM

```bash
pnpm add @cloudinary/config
```

### Bun

```bash
bun add @cloudinary/config
```

### Yarn

```bash
yarn add @cloudinary/config zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "CloudinaryConfig": {
      "command": "npx",
      "args": [
        "-y", "--package", "@cloudinary/config",
        "--",
        "mcp", "start",
        "--api-key", "...",
        "--api-secret", "...",
        "--cloud-name", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "CloudinaryConfig": {
      "command": "npx",
      "args": [
        "-y", "--package", "@cloudinary/config",
        "--",
        "mcp", "start",
        "--api-key", "...",
        "--api-secret", "...",
        "--cloud-name", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/cloudinary/config-js/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

For a full list of server arguments, run:

```sh
npx -y --package @cloudinary/config -- mcp start --help
```
<!-- No SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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
<!-- End SDK Example Usage [usage] -->

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

A parameter is configured globally. This parameter may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, This global value will be used as the default on the operations that use it. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `cloud_name` to `"<value>"` at SDK initialization and then you do not have to pass the same value on calls to operations like `listTransformations`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameter is available.
Global parameters can also be set via environment variable.

| Name      | Type   | Description                                 | Environment           |
| --------- | ------ | ------------------------------------------- | --------------------- |
| cloudName | string | The cloud name of your product environment. | CLOUDINARY_CLOUD_NAME |

### Example

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
<!-- End Global Parameters [global-parameters] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                     | Type | Scheme      | Environment Variable                             |
| ------------------------ | ---- | ----------- | ------------------------------------------------ |
| `apiKey`<br/>`apiSecret` | http | Custom HTTP | `CLOUDINARY_API_KEY`<br/>`CLOUDINARY_API_SECRET` |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
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
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>


### [metadataFields](docs/sdks/metadatafields/README.md)

* [createMetadataField](docs/sdks/metadatafields/README.md#createmetadatafield) - Create a metadata field
* [listMetadataFields](docs/sdks/metadatafields/README.md#listmetadatafields) - Get metadata fields
* [getMetadataField](docs/sdks/metadatafields/README.md#getmetadatafield) - Get metadata field
* [updateMetadataField](docs/sdks/metadatafields/README.md#updatemetadatafield) - Update metadata field
* [deleteMetadataField](docs/sdks/metadatafields/README.md#deletemetadatafield) - Delete metadata field
* [searchMetadataFieldDatasource](docs/sdks/metadatafields/README.md#searchmetadatafielddatasource) - Search across all metadata field datasources
* [reorderMetadataFields](docs/sdks/metadatafields/README.md#reordermetadatafields) - Reorder all metadata fields
* [reorderMetadataField](docs/sdks/metadatafields/README.md#reordermetadatafield) - Change position of metadata field
* [updateMetadataFieldDatasource](docs/sdks/metadatafields/README.md#updatemetadatafielddatasource) - Update datasource values
* [deleteMetadataFieldDatasource](docs/sdks/metadatafields/README.md#deletemetadatafielddatasource) - Delete datasource values
* [searchDatasourceInMDField](docs/sdks/metadatafields/README.md#searchdatasourceinmdfield) - Search datasource values in a metadata field
* [restoreMetadataFieldDatasource](docs/sdks/metadatafields/README.md#restoremetadatafielddatasource) - Restore datasource values

### [metadataRules](docs/sdks/metadatarules/README.md)

* [createMetadataRule](docs/sdks/metadatarules/README.md#createmetadatarule) - Create a metadata rule
* [listMetadataRules](docs/sdks/metadatarules/README.md#listmetadatarules) - Get metadata rules
* [updateMetadataRule](docs/sdks/metadatarules/README.md#updatemetadatarule) - Update metadata rule
* [deleteMetadataRule](docs/sdks/metadatarules/README.md#deletemetadatarule) - Delete metadata rule

### [streamingProfiles](docs/sdks/streamingprofiles/README.md)

* [createStreamingProfile](docs/sdks/streamingprofiles/README.md#createstreamingprofile) - Create streaming profile
* [getStreamingProfiles](docs/sdks/streamingprofiles/README.md#getstreamingprofiles) - Get streaming profiles
* [getStreamingProfile](docs/sdks/streamingprofiles/README.md#getstreamingprofile) - Get streaming profile
* [updateStreamingProfile](docs/sdks/streamingprofiles/README.md#updatestreamingprofile) - Update streaming profile
* [deleteStreamingProfile](docs/sdks/streamingprofiles/README.md#deletestreamingprofile) - Delete custom streaming profile or revert built-in profile to the original settings

### [transformations](docs/sdks/transformations/README.md)

* [listTransformations](docs/sdks/transformations/README.md#listtransformations) - Get transformations
* [getTransformation](docs/sdks/transformations/README.md#gettransformation) - Get a transformation
* [createTransformation](docs/sdks/transformations/README.md#createtransformation) - Create a named transformation
* [updateTransformation](docs/sdks/transformations/README.md#updatetransformation) - Update a transformation
* [deleteTransformation](docs/sdks/transformations/README.md#deletetransformation) - Delete a transformation

### [triggers](docs/sdks/triggers/README.md)

* [listTrigger](docs/sdks/triggers/README.md#listtrigger) - Get event triggers
* [createTrigger](docs/sdks/triggers/README.md#createtrigger) - Create a trigger
* [updateTrigger](docs/sdks/triggers/README.md#updatetrigger) - Update trigger URL
* [deleteTrigger](docs/sdks/triggers/README.md#deletetrigger) - Delete a trigger

### [uploadMappings](docs/sdks/uploadmappings/README.md)

* [listUploadMappings](docs/sdks/uploadmappings/README.md#listuploadmappings) - Lists upload mappings
* [createUploadMapping](docs/sdks/uploadmappings/README.md#createuploadmapping) - Creates an upload mapping
* [updateUploadMapping](docs/sdks/uploadmappings/README.md#updateuploadmapping) - Updates an upload mapping
* [deleteUploadMapping](docs/sdks/uploadmappings/README.md#deleteuploadmapping) - Deletes an upload mapping
* [replaceUploadMappings](docs/sdks/uploadmappings/README.md#replaceuploadmappings) - Replaces all upload mappings

### [uploadPresets](docs/sdks/uploadpresets/README.md)

* [createUploadPreset](docs/sdks/uploadpresets/README.md#createuploadpreset) - Creates an upload preset
* [listUploadPresets](docs/sdks/uploadpresets/README.md#listuploadpresets) - lists upload presets
* [getUploadPreset](docs/sdks/uploadpresets/README.md#getuploadpreset) - Retrieves details of a single upload preset
* [updateUploadPreset](docs/sdks/uploadpresets/README.md#updateuploadpreset) - Updates an upload preset
* [deleteUploadPreset](docs/sdks/uploadpresets/README.md#deleteuploadpreset) - Deletes an upload preset

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`metadataFieldsCreateMetadataField`](docs/sdks/metadatafields/README.md#createmetadatafield) - Create a metadata field
- [`metadataFieldsDeleteMetadataField`](docs/sdks/metadatafields/README.md#deletemetadatafield) - Delete metadata field
- [`metadataFieldsDeleteMetadataFieldDatasource`](docs/sdks/metadatafields/README.md#deletemetadatafielddatasource) - Delete datasource values
- [`metadataFieldsGetMetadataField`](docs/sdks/metadatafields/README.md#getmetadatafield) - Get metadata field
- [`metadataFieldsListMetadataFields`](docs/sdks/metadatafields/README.md#listmetadatafields) - Get metadata fields
- [`metadataFieldsReorderMetadataField`](docs/sdks/metadatafields/README.md#reordermetadatafield) - Change position of metadata field
- [`metadataFieldsReorderMetadataFields`](docs/sdks/metadatafields/README.md#reordermetadatafields) - Reorder all metadata fields
- [`metadataFieldsRestoreMetadataFieldDatasource`](docs/sdks/metadatafields/README.md#restoremetadatafielddatasource) - Restore datasource values
- [`metadataFieldsSearchDatasourceInMDField`](docs/sdks/metadatafields/README.md#searchdatasourceinmdfield) - Search datasource values in a metadata field
- [`metadataFieldsSearchMetadataFieldDatasource`](docs/sdks/metadatafields/README.md#searchmetadatafielddatasource) - Search across all metadata field datasources
- [`metadataFieldsUpdateMetadataField`](docs/sdks/metadatafields/README.md#updatemetadatafield) - Update metadata field
- [`metadataFieldsUpdateMetadataFieldDatasource`](docs/sdks/metadatafields/README.md#updatemetadatafielddatasource) - Update datasource values
- [`metadataRulesCreateMetadataRule`](docs/sdks/metadatarules/README.md#createmetadatarule) - Create a metadata rule
- [`metadataRulesDeleteMetadataRule`](docs/sdks/metadatarules/README.md#deletemetadatarule) - Delete metadata rule
- [`metadataRulesListMetadataRules`](docs/sdks/metadatarules/README.md#listmetadatarules) - Get metadata rules
- [`metadataRulesUpdateMetadataRule`](docs/sdks/metadatarules/README.md#updatemetadatarule) - Update metadata rule
- [`streamingProfilesCreateStreamingProfile`](docs/sdks/streamingprofiles/README.md#createstreamingprofile) - Create streaming profile
- [`streamingProfilesDeleteStreamingProfile`](docs/sdks/streamingprofiles/README.md#deletestreamingprofile) - Delete custom streaming profile or revert built-in profile to the original settings
- [`streamingProfilesGetStreamingProfile`](docs/sdks/streamingprofiles/README.md#getstreamingprofile) - Get streaming profile
- [`streamingProfilesGetStreamingProfiles`](docs/sdks/streamingprofiles/README.md#getstreamingprofiles) - Get streaming profiles
- [`streamingProfilesUpdateStreamingProfile`](docs/sdks/streamingprofiles/README.md#updatestreamingprofile) - Update streaming profile
- [`transformationsCreateTransformation`](docs/sdks/transformations/README.md#createtransformation) - Create a named transformation
- [`transformationsDeleteTransformation`](docs/sdks/transformations/README.md#deletetransformation) - Delete a transformation
- [`transformationsGetTransformation`](docs/sdks/transformations/README.md#gettransformation) - Get a transformation
- [`transformationsListTransformations`](docs/sdks/transformations/README.md#listtransformations) - Get transformations
- [`transformationsUpdateTransformation`](docs/sdks/transformations/README.md#updatetransformation) - Update a transformation
- [`triggersCreateTrigger`](docs/sdks/triggers/README.md#createtrigger) - Create a trigger
- [`triggersDeleteTrigger`](docs/sdks/triggers/README.md#deletetrigger) - Delete a trigger
- [`triggersListTrigger`](docs/sdks/triggers/README.md#listtrigger) - Get event triggers
- [`triggersUpdateTrigger`](docs/sdks/triggers/README.md#updatetrigger) - Update trigger URL
- [`uploadMappingsCreateUploadMapping`](docs/sdks/uploadmappings/README.md#createuploadmapping) - Creates an upload mapping
- [`uploadMappingsDeleteUploadMapping`](docs/sdks/uploadmappings/README.md#deleteuploadmapping) - Deletes an upload mapping
- [`uploadMappingsListUploadMappings`](docs/sdks/uploadmappings/README.md#listuploadmappings) - Lists upload mappings
- [`uploadMappingsReplaceUploadMappings`](docs/sdks/uploadmappings/README.md#replaceuploadmappings) - Replaces all upload mappings
- [`uploadMappingsUpdateUploadMapping`](docs/sdks/uploadmappings/README.md#updateuploadmapping) - Updates an upload mapping
- [`uploadPresetsCreateUploadPreset`](docs/sdks/uploadpresets/README.md#createuploadpreset) - Creates an upload preset
- [`uploadPresetsDeleteUploadPreset`](docs/sdks/uploadpresets/README.md#deleteuploadpreset) - Deletes an upload preset
- [`uploadPresetsGetUploadPreset`](docs/sdks/uploadpresets/README.md#getuploadpreset) - Retrieves details of a single upload preset
- [`uploadPresetsListUploadPresets`](docs/sdks/uploadpresets/README.md#listuploadpresets) - lists upload presets
- [`uploadPresetsUpdateUploadPreset`](docs/sdks/uploadpresets/README.md#updateuploadpreset) - Updates an upload preset

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
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
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { CloudinaryConfig } from "@cloudinary/config";

const cloudinaryConfig = new CloudinaryConfig({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
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
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `listTransformations` method may throw the following errors:

| Error Type      | Status Code   | Content Type     |
| --------------- | ------------- | ---------------- |
| errors.ApiError | 400, 401, 403 | application/json |
| errors.SDKError | 4XX, 5XX      | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `SDKError`.

```typescript
import { CloudinaryConfig } from "@cloudinary/config";
import { ApiError, SDKValidationError } from "@cloudinary/config/models/errors";

const cloudinaryConfig = new CloudinaryConfig({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  let result;
  try {
    result = await cloudinaryConfig.transformations.listTransformations({
      nextCursor: "8edbc61040178db60b0973ca9494bf3a",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof ApiError): {
        // Handle err.data$: ApiErrorData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Server Variables

The default server `https://{defaultHost}` contains variables and is set to `https://api.cloudinary.com` by default. To override default values, the following parameters are available when initializing the SDK client instance:

| Variable      | Parameter             | Default                | Description                         |
| ------------- | --------------------- | ---------------------- | ----------------------------------- |
| `defaultHost` | `defaultHost: string` | `"api.cloudinary.com"` | The host name for the API endpoint. |

#### Example

```typescript
import { CloudinaryConfig } from "@cloudinary/config";

const cloudinaryConfig = new CloudinaryConfig({
  defaultHost: "<value>",
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

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { CloudinaryConfig } from "@cloudinary/config";

const cloudinaryConfig = new CloudinaryConfig({
  serverURL: "https://api.cloudinary.com",
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
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { CloudinaryConfig } from "@cloudinary/config";
import { HTTPClient } from "@cloudinary/config/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new CloudinaryConfig({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { CloudinaryConfig } from "@cloudinary/config";

const sdk = new CloudinaryConfig({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `CLOUDINARY_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->
