import * as contentful from "contentful";

import { getConfig } from "./configManager";

const env = process.env.CONTENTFUL_ENVIRONMENT;
console.log("env",process.env)

const config = getConfig(env);

export const client = contentful.createClient({
  // space: config.spaceId,
  // accessToken: config.accessToken,
  // environment: config.environment
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: 'TzmXyqJkaetSv4wkilLqaXwFpjoIPCULFdVrpVM_fNc',
  environment: 'staging'
});
