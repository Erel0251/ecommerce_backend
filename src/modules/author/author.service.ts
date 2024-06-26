import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private author: Repository<Author>,
  ) {}
  async create(createAuthorDto: CreateAuthorDto): Promise<Author | Error> {
    return await this.author.save(createAuthorDto);
  }

  async update(
    id: string,
    updateAuthorDto: UpdateAuthorDto,
  ): Promise<void | Error> {
    await this.author.update(id, updateAuthorDto);
  }

  async findOne(id: string): Promise<Author | Error> {
    return await this.author.findOne({ where: { id } });
  }

  async findAll(): Promise<Author[]> {
    return await this.author.find();
  }

  async delete(id: string): Promise<void> {
    await this.author.delete(id);
  }
}
