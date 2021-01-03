import { Field, Int, InputType } from '@nestjs/graphql';

@InputType()
export class TaskInputType {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  done: boolean;

  @Field((type) => Int, { nullable: true })
  userId: number | null;
}
