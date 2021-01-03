import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Task } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async createTask(data: Prisma.TaskCreateInput) {
    const { title, done } = data;
    const res = await this.prisma.task.create({ data: { title, done } });

    return res;
  }

  async getAllTasks(): Promise<Task[]> {
    const res = await this.prisma.task.findMany();
    return res;
  }

  async getOneTask(id: number): Promise<Task> {
    return this.prisma.task.findUnique({ where: { id } });
  }

  async updateTask(id: number, data: Prisma.TaskUpdateInput): Promise<Task> {
    const { title, done } = data;

    const res = this.prisma.task.update({
      where: { id },
      data: { title, done },
    });

    return res;
  }

  async deleteTask(id: number) {
    try {
      return await this.prisma.task.delete({ where: { id } });
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
