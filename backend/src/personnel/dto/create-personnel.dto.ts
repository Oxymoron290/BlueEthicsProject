import { IsDateString, IsOptional, IsNumber, IsString, IsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreatePersonnelDto {
  @IsOptional()
  @IsString()
  titleName?: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  middleName?: string;

  @IsOptional()
  @IsString()
  nickName?: string;

  @IsString()
  department: string;

  @IsString()
  position: string;

  @IsString()
  positionTitle: string;

  @IsString()
  ethnicity: string;

  @IsString()
  gender: string;

  @IsDateString(
    { strict: true },
    { message: 'dateHired must be a valid date in YYYY-MM-DD format' },
  )
  dateHired: string;

  @IsNumber()
  salary: number;

  @IsBoolean()
  certifiedOfficer: boolean;

  @IsBoolean()
  currentlyEmployed: boolean;

  @IsNumber()
  @Transform(({ value }) => value ?? 0)
  complaints: number;

  @IsNumber()
  @Transform(({ value }) => value ?? 0)
  sustainedComplaints: number;

  @IsNumber()
  @Transform(({ value }) => value ?? 0)
  pendingComplaints: number;

  @IsNumber()
  @Transform(({ value }) => value ?? 0)
  commendations: number;

  @IsNumber()
  organizationId: number;
}
