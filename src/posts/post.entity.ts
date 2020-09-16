import {
  Table, Column, Model, Unique, DefaultScope, Default, PrimaryKey,
  DataType, AllowNull, Index, Length, BelongsTo, ForeignKey, AutoIncrement,
} from 'sequelize-typescript';
import { User } from '../users/user.entity';

@DefaultScope(() => ({
  attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
}))

@Table({
  tableName: 'post',
})
export class Post extends Model<Post> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public readonly id: number;

  @Length({ min: 5, max: 100 })
  @AllowNull(false)
  @Unique
  @Index
  @Column(DataType.STRING(25))
  public title: string;

  @AllowNull
  @Column
  public content: string;

  @Length({ min: 6 })
  @Default('active')
  @AllowNull(false)
  @Column
  public status: string;

  // @ts-ignore
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  public userId: string;

  // @ts-ignore
  @BelongsTo(() => User)
  public user: User;
}
