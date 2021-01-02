import { Injectable } from '@nestjs/common';
import { Prisma, Task } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async createTask(data: Prisma.TaskCreateInput): Promise<Task> {
    return this.prisma.task.create({ data });
  }

  async getAllTasks(): Promise<Task[]> {
    const res = await this.prisma.task.findMany();
    console.log(res);

    return res;
  }

  async getOneTask(id: number): Promise<Task> {
    return this.prisma.task.findUnique({ where: { id } });
  }

  async updateTask(id: number, data: Prisma.TaskUpdateInput) {
    return this.prisma.task.update({ where: { id }, data });
  }
}
