import fs from "node:fs";
import { ApiVersion } from "@shopify/shopify-app-react-router/server";

const apiVersion = ApiVersion.January26;

function getConfig() {
  const config = {
    projects: {
      shopifyAdminApi: {
        schema: `https://shopify.dev/admin-graphql-direct-proxy/${apiVersion}`,
        documents: ["./app/**/*.{graphql,js,ts,jsx,tsx}"],
      },
    },
  };

  let extensions = [];
  try {
    extensions = fs.readdirSync("./extensions");
  } catch {
    // ignore if no extensions
  }

  for (const entry of extensions) {
    const extensionPath = `./extensions/${entry}`;
    const schema = `${extensionPath}/schema.graphql`;
    if (!fs.existsSync(schema)) {
      continue;
    }
    config.projects[entry] = {
      schema,
      documents: [`${extensionPath}/**/*.graphql`],
    };
  }

  return config;
}

export default getConfig();
