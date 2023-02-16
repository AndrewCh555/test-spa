import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Post } from './post.model';
import { User } from './user.model';

@Table({ tableName: 'comments', updatedAt: false })
export class Comment extends Model<Comment> {
  @Column({
    type: DataType.UUID,
    unique: true,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  content: string;

  @BelongsTo(() => User, 'username')
  author: User;
  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  username: string;

  @BelongsTo(() => Post)
  post: Post;
  @ForeignKey(() => Post)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  postId: string;

  @CreatedAt
  @Column
  createdAt: Date;
}
