import { Module } from '@nestjs/common';

import { TaskService } from '../services/task.service';
import { PrismaService } from '../services/prisma.service';
import { TaskResolver } from '../resolvers/task.resolver';

@Module({
  providers: [PrismaService, TaskService, TaskResolver],
})
export class TaskModule {}
