import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { RequestMethodType } from '@prisma/client';

describe('OrganizationController', () => {
  let controller: OrganizationController;
  let service: OrganizationService;

  beforeEach(async () => {
    const mockOrganizationService = {
      create: jest.fn(),
      findAll: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizationController],
      providers: [{ provide: OrganizationService, useValue: mockOrganizationService }],
    }).compile();

    controller = module.get<OrganizationController>(OrganizationController);
    service = module.get<OrganizationService>(OrganizationService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call service.create with correct data', async () => {
      const dto: CreateOrganizationDto = {
        name: 'Test Organization',
        website: 'https://test.com',
        phone: '1234567890',
        address: {
          address1: '123 Main St',
          city: 'Test City',
          state: 'Test State',
          county: 'Test County',
          postalCode: '12345',
          country: 'Test Country',
          latitude: 0,
          longitude: 0,
        },
        socials: [{ platform: 'twitter', url: 'https://twitter.com/test' }],
        validRequestMethods: [{ type: 'WEB', location: 'https://example.com' }],
      };

      const mockOrganization = {
        id: 1,
        name: 'Test Organization',
        website: 'https://test.com',
        phone: '1234567890',
        address: {
          id: 1,
          address1: '123 Main St',
          address2: null,
          city: 'Test City',
          state: 'Test State',
          county: 'Test County',
          postalCode: '12345',
          country: 'Test Country',
          latitude: 0,
          longitude: 0,
          company: null,
          originalRequestId: null,
          organizationId: 1,
        },
        addressId: 1,
        validRequestMethods: [
          {
            id: 1,
            type: RequestMethodType.WEB,
            location: 'https://example.com',
            organizationId: 1,
          },
        ],
      };

      jest.spyOn(service, 'create').mockResolvedValue(mockOrganization);

      const result = await controller.create(dto);
      expect(service.create).toHaveBeenCalledWith(dto);
      expect(result).toEqual(mockOrganization);
    });
  });

  describe('findAll', () => {
    it('should call service.findAll', async () => {
      const entities = [
        {
          id: 1,
          name: 'Test Organization',
          website: 'https://test.com',
          phone: '1234567890',
          addressId: 1,
          address: {
            id: 1,
            address1: '123 Main St',
            address2: null,
            city: 'Test City',
            state: 'Test State',
            county: 'Test County',
            postalCode: '12345',
            country: 'Test Country',
            latitude: 0,
            longitude: 0,
            company: null,
            originalRequestId: null,
            organizationId: 1,
          },
          validRequestMethods: [
            {
              id: 1,
              type: RequestMethodType.WEB,
              location: 'https://example.com',
              organizationId: 1,
            },
          ],
        },
      ];
      jest.spyOn(service, 'findAll').mockResolvedValue(entities);

      const result = await controller.findAll();
      expect(service.findAll).toHaveBeenCalled();
      expect(result).toEqual(entities);
    });
  });

  describe('findOne', () => {
    it('should call service.findOne with correct id', async () => {
      const entity = {
        id: 1,
        name: 'Test Organization',
        website: 'https://test.com',
        phone: '1234567890',
        addressId: 1,
        address: {
          id: 1,
          address1: '123 Main St',
          address2: null,
          city: 'Test City',
          state: 'Test State',
          county: 'Test County',
          postalCode: '12345',
          country: 'Test Country',
          latitude: 0,
          longitude: 0,
          company: null,
          originalRequestId: null,
          organizationId: 1,
        },
        validRequestMethods: [
          {
            id: 1,
            type: RequestMethodType.WEB,
            location: 'https://example.com',
            organizationId: 1,
          },
        ],
      };
      jest.spyOn(service, 'findOne').mockResolvedValue(entity);

      const result = await controller.findOne('1');
      expect(service.findOne).toHaveBeenCalledWith(1);
      expect(result).toBe(entity);
    });
  });

  describe('update', () => {
    it('should call service.update with correct id and data', async () => {
      const dto = {
        id: 1,
        name: 'Test Organization',
        website: 'https://test.com',
        phone: '1234567890',
        addressId: 1,
        address: {
          id: 1,
          address1: '123 Main St',
          address2: null,
          city: 'Test City',
          state: 'Test State',
          county: 'Test County',
          postalCode: '12345',
          country: 'Test Country',
          latitude: 0,
          longitude: 0,
          company: null,
          originalRequestId: null,
          organizationId: 1,
        },
        validRequestMethods: [
          {
            id: 1,
            type: RequestMethodType.WEB,
            location: 'https://example.com',
            organizationId: 1,
          },
        ],
      };

      jest.spyOn(service, 'update').mockResolvedValue(dto);

      const result = await controller.update('1', dto);
      expect(service.update).toHaveBeenCalledWith(1, dto);
      expect(result).toBe(dto);
    });
  });

  describe('remove', () => {
    it('should call service.remove with correct id', async () => {
      jest.spyOn(service, 'remove').mockResolvedValue({
        id: 1,
        name: 'Deleted Organization',
        website: 'https://deleted.com',
        phone: '1234567890',
        addressId: 1,
      });

      const result = await controller.remove('1');
      expect(service.remove).toHaveBeenCalledWith(1);
      expect(result).toBe('deleted organization');
    });
  });
});
