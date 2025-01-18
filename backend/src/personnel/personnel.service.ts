import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';
import { SearchPersonnelDto } from './dto/search-personnel.dto';

@Injectable()
export class PersonnelService {
  constructor(private prisma: PrismaService) {}

  async create(createPersonnelDto: CreatePersonnelDto) {
    const { organizationId, ...rest } = createPersonnelDto;

    if (!organizationId) {
      throw new Error('Each personnel record must have an organizationId.');
    }

    return this.prisma.subject.create({
      data: {
        ...rest,
        organization: {
          connect: { id: organizationId },
        },
      },
    });
  }

  async createBulk(createPersonnelDtos: CreatePersonnelDto[]) {
    const personnelData = createPersonnelDtos.map((dto) => {
      if (!dto.organizationId) {
        throw new Error('Each personnel record must have an organizationId.');
      }

      return dto;
    });

    return this.prisma.subject.createMany({
      data: personnelData,
      skipDuplicates: true,
    });
  }

  async findAll() {
    return this.prisma.subject.findMany();
  }

  async findOne(id: number) {
    return this.prisma.subject.findUnique({
      where: { id },
    });
  }

  async search(searchPersonnelDto: SearchPersonnelDto) {
    const {
      organizationId,
      firstName,
      lastName,
      department,
      position,
      currentlyEmployed,
      certifiedOfficer,
    } = searchPersonnelDto;

    return this.prisma.subject.findMany({
      where: {
        organizationId: organizationId ? { equals: organizationId } : undefined,
        firstName: firstName ? { contains: firstName } : undefined,
        lastName: lastName ? { contains: lastName } : undefined,
        department: department ? { contains: department } : undefined,
        position: position ? { contains: position } : undefined,
        currentlyEmployed: currentlyEmployed !== undefined ? currentlyEmployed : undefined,
        certifiedOfficer: certifiedOfficer !== undefined ? certifiedOfficer : undefined,
      },
    });
  }

  async update(id: number, updatePersonnelDto: UpdatePersonnelDto) {
    return this.prisma.subject.update({
      where: { id },
      data: updatePersonnelDto,
    });
  }

  async remove(id: number) {
    return this.prisma.subject.delete({
      where: { id },
    });
  }
}
