import BaseClient from "./baseClient";
import { Publication } from "../../types/api";

export default class PublicationsClient extends BaseClient {
  async getPublications(): Promise<Publication[]> {
    return this.request<Publication[]>('/publications');
  }

  async getPublicationById(id: string): Promise<Publication> {
    return this.request<Publication>(`/publications/${id}`);
  }
}
