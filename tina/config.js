import { defineConfig } from "tinacms";
import { homeCollection } from "./collections/home.js";
import { aboutCollection } from "./collections/about.js";
import { headerCollection } from "./collections/header";
import { footerCollection } from "./collections/footer";
import { approachCollection } from "./collections/approach";
import { contactCollection } from "./collections/contact";
import { credentialsCollection } from "./collections/credentials";
import { servicesCollection } from "./collections/services";
import { expertServicesCollection } from "./collections/expertServices";
import { generalServicesCollection } from "./collections/generalServices";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      // Header Translations
      headerCollection,
      // Footer Translations
      footerCollection,
      // Main Home Page Translations
      homeCollection,
      // About Page Translations
      aboutCollection,
      // Approach Page Translations
      approachCollection,
      // Contact Page Translations
      contactCollection,
      // Credentials Page Translations
      credentialsCollection,
      // Services Page Translations
      servicesCollection,
      // Expert Services Page Translations
      expertServicesCollection,
      // General Services Page Translations
      generalServicesCollection,
    ],
  }
});