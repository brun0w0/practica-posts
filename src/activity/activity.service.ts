import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ActivityService {
  constructor(private prisma:PrismaService){}

  create(createActivityDto: CreateActivityDto) {
    return this.prisma.activity.create({
      data:createActivityDto
    })
  }

  findAll() {
    return this.prisma.activity.findMany();
  }

  findOne(id: number) {
    return this.prisma.activity.findUnique({
      where:{id}
    })
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return `This action updates a #${id} activity`;
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }
}
