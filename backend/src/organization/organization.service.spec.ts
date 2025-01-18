import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationService } from './organization.service';
import { PrismaService } from '../prisma/prisma.service';

describe('OrganizationService', () => {
  let service: OrganizationService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const mockPrismaService = {
      organization: {
        findMany: jest.fn(),
        create: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrganizationService,
        { provide: PrismaService, useValue: mockPrismaService }, // Provide mock PrismaService
      ],
    }).compile();

    service = module.get<OrganizationService>(OrganizationService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should call prisma.organization.findMany and return the result', async () => {
      const mockOrganizations = [
        {
          id: 1,
          name: 'Test Organization',
          website: 'https://test.com',
          phone: '1234567890',
          addressId: 1,
        },
      ];

      jest.spyOn(prismaService.organization, 'findMany').mockResolvedValue(mockOrganizations);

      const result = await service.findAll();
      expect(prismaService.organization.findMany).toHaveBeenCalled();
      expect(result).toEqual(mockOrganizations);
    });
  });
});
