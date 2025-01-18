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
  employeeId?: string | null;
  portrait?: string;
  titleName?: string | null;
  firstName: string;
  lastName: string;
  middleName?: string | null;
  nickName?: string | null;
  department?: string | null;
  position?: string | null;
  positionTitle?: string | null;
  gender: string | null;
  Ethnicity: string | null;
  accrualProfile?: string | null;
  employeeStatus?: null;
  dateHired?: string | null;
  separationDate?: string | null;
  salary: number | null;
  certifiedOfficer?: boolean;
  currentlyEmployed?: boolean | null;
  complaints?: number | null;
  sustainedComplaints?: number | null;
  pendingComplaints?: number | null;
  commendations?: number | null;
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