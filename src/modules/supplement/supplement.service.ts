import { Injectable } from '@nestjs/common';
import { CreateSupplementDto } from './dto/create-supplement.dto';
import { UpdateSupplementDto } from './dto/update-supplement.dto';

@Injectable()
export class SupplementService {
  create(createSupplementDto: CreateSupplementDto) {
    console.log(createSupplementDto);
    return 'This action adds a new supplement';
  }

  findAll() {
    return `This action returns all supplement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} supplement`;
  }

  update(id: number, updateSupplementDto: UpdateSupplementDto) {
    console.log(updateSupplementDto);
    return `This action updates a #${id} supplement`;
  }

  remove(id: number) {
    return `This action removes a #${id} supplement`;
  }
}
