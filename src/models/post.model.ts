import {
  Column,
  CreatedAt,
  DataType,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Comment } from './comment.model';

@Table({ tableName: 'posts' })
export class Post extends Model<Post> {
  @Column({
    type: DataType.UUID,
    unique: true,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({ type: DataType.STRING, unique: false, defaultValue: '' })
  username: string;

  @Column({ type: DataType.ARRAY(DataType.STRING), defaultValue: [] })
  email: string;

  @HasMany(() => Comment)
  comments: Comment[];
  @Column({ type: DataType.VIRTUAL(DataType.STRING) })
  captcha: string;

  @Column({ type: DataType.VIRTUAL(DataType.NUMBER) })
  homepage: string;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;
}
