import OrganizationsClient from "./clients/organizationsClient";
import PublicationsClient from "./clients/publicationsClient";
import ReportsClient from "./clients/reportsClient";

//const BASE_URL = "https://api.ethics.blue";
const BASE_URL = "http://localhost:3000";

export const organizationsClient = new OrganizationsClient(BASE_URL);
export const publicationsClient = new PublicationsClient(BASE_URL);
export const reportsClient = new ReportsClient(BASE_URL);
