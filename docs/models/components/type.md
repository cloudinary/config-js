# Type

The delivery type that defines if and how the uploaded asset is available for public delivery. By default, all uploaded assets are public (upload). Possible values are upload, authenticated, private or asset.

## Example Usage

```typescript
import { Type } from "@cloudinary/environment-config/models/components";

let value: Type = "upload";
```

## Values

```typescript
"upload" | "authenticated" | "private" | "asset"
```