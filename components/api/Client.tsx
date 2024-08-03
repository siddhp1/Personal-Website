import { createClient } from "contentful";

// Ensure environment variables are set
const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error("Contentful space ID and access token must be provided.");
}

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

export default client;
