# UploadPresetType

The delivery type that defines if and how the uploaded asset is available for public delivery. By default, all uploaded assets are public (upload). Possible values are upload, authenticated, private or asset.

## Example Usage

```typescript
import { UploadPresetType } from "@cloudinary/config/models/components";

let value: UploadPresetType = "authenticated";
```

## Values

```typescript
"upload" | "authenticated" | "private" | "asset"
```