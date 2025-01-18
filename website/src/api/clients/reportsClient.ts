import BaseClient from "./baseClient";
import { Report } from "../../types/api";

export default class ReportsClient extends BaseClient {
  async submitReport(reportData: Report): Promise<void> {
    return this.request<void>('/reports', {
      method: 'POST',
      body: JSON.stringify(reportData),
    });
  }
}
