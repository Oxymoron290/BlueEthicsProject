export interface Entity {
  id: string;
  name: string;
  phone: string;
  address: string;
  website: string;
  employees: Employee[];
}

interface Employee {
  id: string;
  employeeId?: string;
  portrait?: string;
  titleName?: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  nickname?: string;
  department?: string;
  position?: string;
  positionTitle?: string;
  gender: string;
  Ethnicity: string;
  accrualProfile?: string;
  employeeStatus?: null;
  dateHired?: string;
  separationDate?: string;
  salary: number;
  certifiedOfficer?: boolean;
  currentlyEmployed?: boolean;
  complaints: number;
  sustainedComplaints?: number;
  pendingComplaints?: number;
  commendations: number;
}

export interface Publication {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  link: string;
}

export interface Report {
  subject: string;
  details: string;
}