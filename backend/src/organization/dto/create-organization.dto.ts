export class CreateOrganizationDto {
  name: string;
  website: string;
  phone: string;
  address: {
    address1: string;
    address2?: string;
    city: string;
    state: string;
    county: string;
    postalCode: string;
    country: string;
    latitude: number;
    longitude: number;
    originalRequestId?: number;
  };
  validRequestMethods: {
    type: 'WEB' | 'EMAIL' | 'MAIL' | 'SELF';
    location: string;
  }[];
}
