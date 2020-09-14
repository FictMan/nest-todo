import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { databaseProviders } from './database/database.providers';
import { PostsController } from './posts/posts.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PostsController],
  providers: [databaseProviders]
})
export class AppModule {}
