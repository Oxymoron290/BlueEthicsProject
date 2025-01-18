import { IsOptional, IsNumber, IsString, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class SearchPersonnelDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  organizationId?: number;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  department?: string;

  @IsOptional()
  @IsString()
  position?: string;

  @IsOptional()
  @IsBoolean()
  currentlyEmployed?: boolean;

  @IsOptional()
  @IsBoolean()
  certifiedOfficer?: boolean;
}
