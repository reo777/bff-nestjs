import { Args, Parent, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { Inject } from '@nestjs/common';
import { TaskInputType } from '../dto/task.dto';

@Resolver((of) => Task)
export class TaskResolver {
  constructor(@Inject(TaskService) private taskService: TaskService) {}

  @Query((_returns) => Task)
  async task(@Args('id') id: number) {
    return await this.taskService.getOneTask(id);
  }

  @Query((_returns) => [Task])
  async allTasks(@Parent() task: Task) {
    return await this.taskService.getAllTasks();
  }

  @Mutation((_returns) => Task)
  async createTask(@Args('data') data: TaskInputType) {
    return await this.taskService.createTask(data);
  }

  @Mutation((_returns) => Task)
  async updateTask(@Args('id') id: number, @Args('data') data: TaskInputType) {
    return this.taskService.updateTask(id, data);
  }

  @Mutation((_returns) => Task)
  async deleteTask(@Args('id') id: number) {
    return this.taskService.deleteTask(id);
  }
}
