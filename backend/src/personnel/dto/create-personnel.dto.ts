export class CreatePersonnelDto {
  titleName?: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  nickName?: string;
  department: string;
  position: string;
  positionTitle: string;
  ethnicity: string;
  gender: string;
  dateHired: Date;
  salary: number;
  certifiedOfficer: boolean;
  currentlyEmployed: boolean;
  complaints: number;
  sustainedComplaints: number;
  pendingComplaints: number;
  commendations: number;
  organizationId: number;
}
