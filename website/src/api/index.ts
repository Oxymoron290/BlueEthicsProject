import EntitiesClient from "./clients/entitiesClient";
import PublicationsClient from "./clients/publicationsClient";

const BASE_URL = "https://api.ethics.blue";

export const entitiesClient = new EntitiesClient(BASE_URL);
export const publicationsClient = new PublicationsClient(BASE_URL);
export const reportsClient = new EntitiesClient(BASE_URL);
