import BaseClient from "./baseClient";
import { Entity, Employee } from "../../types/api";

const mockEmployees: Employee[] = [
  {
    id: "1",
    portrait: "https://c8.alamy.com/comp/HFCJAH/official-portrait-sgt-bianca-burgos-crime-prevention-officer-joint-HFCJAH.jpg",
    firstName: "Jane",
    middleName: "Marie",
    lastName: "Smith",
    nickname: "Janie",
    titleName: "Sergeant",
    gender: "Female",
    Ethnicity: "Hispanic or Latino",
    salary: 30019.2,
    complaints: 3,
    sustainedComplaints: 2,
    pendingComplaints: 1,
    commendations: 1,
    department: "Crime Prevention",
    position: "Officer",
    positionTitle: "Crime Prevention Officer",
    dateHired: "2015-06-15",
    certifiedOfficer: true,
    currentlyEmployed: true,
    accrualProfile: "Full-time"
  },
  {
    id: "2",
    firstName: "John",
    middleName: "Edward",
    lastName: "Doe",
    nickname: "Johnny",
    gender: "Male",
    Ethnicity: "White",
    salary: 20000.0,
    complaints: 2,
    sustainedComplaints: 1,
    pendingComplaints: 0,
    commendations: 2,
    department: "Traffic",
    position: "Officer",
    positionTitle: "Traffic Enforcement Officer",
    dateHired: "2018-03-12",
    certifiedOfficer: false,
    currentlyEmployed: true,
    accrualProfile: "Part-time"
  },
  {
    id: "3",
    firstName: "Morgan",
    middleName: "Lee",
    lastName: "Johnson",
    titleName: "Lieutenant",
    gender: "Male",
    Ethnicity: "Hispanic or Latino",
    salary: 45000.0,
    complaints: 1,
    sustainedComplaints: 1,
    pendingComplaints: 0,
    commendations: 4,
    department: "Operations",
    position: "Supervisor",
    positionTitle: "Operations Supervisor",
    dateHired: "2012-11-20",
    certifiedOfficer: true,
    currentlyEmployed: true,
    accrualProfile: "Full-time"
  },
  {
    id: "4",
    firstName: "Josh",
    middleName: "Aaron",
    lastName: "Duck",
    titleName: "Detective",
    gender: "Male",
    Ethnicity: "Hispanic or Latino",
    salary: 45000.0,
    complaints: 1,
    sustainedComplaints: 1,
    pendingComplaints: 0,
    commendations: 4,
    department: "Investigations",
    position: "Detective",
    positionTitle: "Homicide Detective",
    dateHired: "2010-07-10",
    separationDate: "2023-01-01",
    certifiedOfficer: true,
    currentlyEmployed: false,
    accrualProfile: "Full-time"
  },
  {
    id: "5",
    firstName: "Alecia",
    middleName: "Grace",
    lastName: "Backfield",
    nickname: "Ally",
    titleName: "Officer",
    gender: "Female",
    Ethnicity: "Asian or Pacific Islander",
    salary: 34259.3,
    complaints: 0,
    sustainedComplaints: 0,
    pendingComplaints: 0,
    commendations: 2,
    department: "Patrol",
    position: "Patrol Officer",
    positionTitle: "Patrol Officer",
    dateHired: "2019-09-05",
    certifiedOfficer: true,
    currentlyEmployed: true,
    accrualProfile: "Full-time"
  }
];

const mockEntities: Entity[] = [
  {
    id: "1",
    name: "Bedford Police Department",
    phone: "+18179522440",
    address: "2121 L Don Dodson Dr, Bedford, TX 76021",
    website: "https://bedfordtx.gov/174/Police-Department",
    employees: mockEmployees,
  },
  {
    id: "2",
    name: "Fort Worth Fire Department",
    phone: "+18179520000",
    address: "123 Main St, Fort Worth, TX 76102",
    website: "https://fortworthtexas.gov/fire/",
    employees: mockEmployees,
  },
  // Add more entities as needed
];

export default class EntitiesClient extends BaseClient {
  
  async getEntities(): Promise<Entity[]> {
    return mockEntities;
    return this.request<Entity[]>('/entities');
  }

  async getEntityById(id: string): Promise<Entity> {
    return mockEntities.filter((entity) => entity.id === id)[0];
    return this.request<Entity>(`/entities/${id}`);
  }
  
  async getEmployeeById(id: string): Promise<Employee> {
    for (const entity of mockEntities) {
      const employee = entity.employees.find((emp) => emp.id === id);
      if (employee) return employee;
    }
    throw new Error(`Employee with id ${id} not found`);
    return this.request<Employee>(`/entities/${id}`);
  }
}
