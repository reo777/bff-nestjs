import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Task {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  done: boolean;

  @Field((type) => Int, { nullable: true })
  userId: number | null;
}
