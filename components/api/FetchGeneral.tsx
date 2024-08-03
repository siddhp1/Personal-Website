import { Entry } from "contentful";

import client from "./Client";

// Ensure environment variables are set
const entryId = process.env.GENERAL_ENTRY_ID;

if (!entryId) {
  throw new Error("Contentful entryId must be provided.");
}

const getGeneral = async () => {
  const response: Entry<any> = await client.getEntry(entryId);
  return response.fields;
};

export default getGeneral;
