import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, PostsModule, UsersModule, AuthModule]
})
export class AppModule {}
