<!-- Start SDK Example Usage [usage] -->
```typescript
import { CloudinaryConfig } from "@cloudinary/config";

const cloudinaryConfig = new CloudinaryConfig({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryConfig.transformations.listTransformations(
    20,
    "8edbc61040178db60b0973ca9494bf3a",
  );

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->