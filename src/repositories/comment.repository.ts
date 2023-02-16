import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCommentRequestDto } from '../comments/dto';
import { Comment } from '../models/comment.model';
@Injectable()
export class CommentRepository {
  constructor(
    @InjectModel(Comment)
    private readonly comment: typeof Comment,
  ) {}

  async findOneById(id: string): Promise<Comment> {
    return await this.comment.findOne({
      where: { id },
      nest: true,
    });
  }

  async findAllForPost(postId: string): Promise<Comment[]> {
    return await this.comment.findAll({ where: { postId } });
  }

  async create(
    dto: CreateCommentRequestDto,
    postId: string,
    username: string,
  ): Promise<Comment> {
    return await this.comment.create({ ...dto, postId, username });
  }

  async delete(id: string): Promise<void> {
    await this.comment.destroy({
      where: { id },
    });
  }
}
