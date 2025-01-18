import BaseClient from "./baseClient";
import { Organization, Personnel } from "../../types/api";

export default class OrganizationsClient extends BaseClient {
  
  async getOrganizations(): Promise<Organization[]> {
    return this.request<Organization[]>('/organization');
  }

  async getOrganizationById(id: string): Promise<Organization> {
    return this.request<Organization>(`/organization/${id}`);
  }

  // async createOrganization(data: CreateOrganizationDto): Promise<Organization> {
  //   return this.request<Organization>('/organization', {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }

  // async updateOrganization(id: string, data: UpdateOrganizationDto): Promise<Organization> {
  //   return this.request<Organization>(`/organization/${id}`, {
  //     method: 'PATCH',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }

  async deleteOrganization(id: string): Promise<void> {
    await this.request<void>(`/organization/${id}`, {
      method: 'DELETE',
    });
  }
  
  async getEmployees(): Promise<Personnel[]> {
    return this.request<Personnel[]>('/personnel');
  }

  async getEmployeeById(id: string): Promise<Personnel> {
    return this.request<Personnel>(`/personnel/${id}`);
  }

  async searchEmployees(filters: Partial<Personnel>): Promise<Personnel[]> {
    const query = new URLSearchParams(filters as Record<string, string>).toString();
    return this.request<Personnel[]>(`/personnel/search?${query}`);
  }

  // async createEmployee(data: CreateEmployeeDto): Promise<Personnel> {
  //   return this.request<Personnel>('/personnel', {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }

  // async createBulkEmployees(data: CreateEmployeeDto[]): Promise<void> {
  //   await this.request<void>('/personnel/all', {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }

  // async updateEmployee(id: string, data: UpdateEmployeeDto): Promise<Employee> {
  //   return this.request<Employee>(`/personnel/${id}`, {
  //     method: 'PATCH',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }

  async deleteEmployee(id: string): Promise<void> {
    await this.request<void>(`/personnel/${id}`, {
      method: 'DELETE',
    });
  }
}
