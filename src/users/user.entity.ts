import {
  Table, Column, Model, Unique, DefaultScope, Default, PrimaryKey,
  DataType, Is, AllowNull, Index, Length, HasMany, AutoIncrement,
} from 'sequelize-typescript';
import { Post } from '../posts/post.entity';

@DefaultScope(() => ({
  attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
}))

@Table({
  tableName: 'user',
})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public readonly id: number;

  @Is(/^[\dA-Za-z]+$/)
  @Length({ min: 5, max: 25 })
  @AllowNull(false)
  @Unique
  @Index
  @Column(DataType.STRING(25))
  public username: string;

  @Is(/^(\+|)\d*$/g)
  @Length({ min: 10, max: 13 })
  @AllowNull
  @Unique
  @Index
  @Column(DataType.STRING(13))
  public phone: string;

  @Length({ min: 6 })
  @AllowNull(false)
  @Column
  password: string;

  @Length({ min: 3, max: 50 })
  @AllowNull
  @Column(DataType.STRING(50))
  public firstName: string;

  @Length({ min: 3, max: 50 })
  @AllowNull
  @Column(DataType.STRING(50))
  public lastName: string;

  // @ts-ignore
  @HasMany(() => Post)
  public posts: Post[]
}
