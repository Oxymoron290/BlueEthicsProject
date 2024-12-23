import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

@Injectable()
export class OrganizationService {
  constructor(private prisma: PrismaService) {}

  create(createOrganizationDto: CreateOrganizationDto) {
    const { address, validRequestMethods, ...organizationData } = createOrganizationDto;

    return this.prisma.organization.create({
      data: {
        ...organizationData,
        address: {
          create: address,
        },
        validRequestMethods: {
          create: validRequestMethods,
        },
      },
      include: {
        address: true,
        validRequestMethods: true,
      },
    });
  }

  findAll() {
    return this.prisma.organization.findMany({
      include: {
        address: true,
        validRequestMethods: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.organization.findUnique({
      where: { id },
      include: {
        address: true,
        validRequestMethods: true,
      },
    });
  }

  update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    const { address, validRequestMethods, ...organizationData } = updateOrganizationDto;

    // Update organization and related entities
    return this.prisma.organization.update({
      where: { id },
      data: {
        ...organizationData,
        address: address
          ? {
              update: address,
            }
          : undefined,
        validRequestMethods: validRequestMethods
          ? {
              deleteMany: {},
              create: validRequestMethods,
            }
          : undefined,
      },
      include: {
        address: true,
        validRequestMethods: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.organization.delete({
      where: { id },
    });
  }
}
