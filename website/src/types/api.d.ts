export interface Address {
  id: number;
  address1: string;
  address2: string | null;
  city: string;
  state: string;
  county: string;
  postalCode: string;
  country: string;
  latitude: number;
  longitude: number;
  company: string | null;
}

export interface ValidRequestMethod {
  id: number;
  type: 'WEB' | 'SELF' | 'MAIL' | 'EMAIL'; // Extend this based on your enum definition
  location: string;
  organizationId: number;
}

export interface Personnel {
  id: number;
  portrait: string | null;
  employeeId: number | null;
  titleName: string | null;
  firstName: string;
  lastName: string;
  middleName: string | null;
  nickName: string | null;
  department: string;
  position: string;
  positionTitle: string;
  ethnicity: string;
  gender: string;
  accrualProfile: string | null;
  employeeStatus: string | null;
  dateHired: string; // ISO 8601 date format
  separationDate: string | null; // ISO 8601 date format
  salary: number;
  certifiedOfficer: boolean;
  currentlyEmployed: boolean;
  complaints: number;
  sustainedComplaints: number;
  pendingComplaints: number;
  commendations: number;
  organizationId: number;
}

export interface Organization {
  id: number;
  name: string;
  website: string;
  phone: string;
  addressId: number;
  address: Address;
  validRequestMethods: ValidRequestMethod[];
  personnel?: Personnel[];
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