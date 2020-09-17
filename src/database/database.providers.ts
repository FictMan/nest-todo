import { Sequelize } from 'sequelize-typescript';
import { Logger } from '@nestjs/common';
import { User } from '../users/user.entity';
import { Post } from '../posts/post.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'password',
        database: 'nestTodo_development',
        logging: message => Logger.log(message, 'Sequelize')
      });
      // @ts-ignore
      sequelize.addModels([User, Post]);
      await sequelize.sync();
      return sequelize;
    },
  }
]
