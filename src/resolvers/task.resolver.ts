import { Args, Int, Parent, Resolver, Query } from '@nestjs/graphql';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private taskService: TaskService) {}

  @Query((_returns) => Task)
  async author(@Args('id', { type: () => Int }) id: number): Promise<Task> {
    return this.taskService.getOneTask(id);
  }

  @Query((_returns) => [Task])
  async allTasks(@Parent() task: Task) {
    return this.taskService.getAllTasks();
  }
}
