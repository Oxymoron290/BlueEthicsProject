import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PersonnelService } from './personnel.service';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';
import { SearchPersonnelDto } from './dto/search-personnel.dto';

@Controller('personnel')
export class PersonnelController {
  constructor(private readonly personnelService: PersonnelService) {}

  @Post()
  create(@Body() createPersonnelDto: CreatePersonnelDto) {
    return this.personnelService.create(createPersonnelDto);
  }

  @Post('/all/:organizationId')
  createBulk(
    @Param('organizationId') organizationId: number,
    @Body() createPersonnelDto: CreatePersonnelDto[],
  ) {
    return this.personnelService.createBulk(organizationId, createPersonnelDto);
  }

  @Get()
  findAll() {
    return this.personnelService.findAll();
  }

  @Get('/search')
  search(@Query() searchPersonnelDto: SearchPersonnelDto) {
    return this.personnelService.search(searchPersonnelDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.personnelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePersonnelDto: UpdatePersonnelDto) {
    return this.personnelService.update(+id, updatePersonnelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.personnelService.remove(+id);
  }
}
