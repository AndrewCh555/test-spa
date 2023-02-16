import { Injectable } from '@nestjs/common';
import { CommentRepository } from '../repositories/comment.repository';
import { CreateCommentRequestDto } from './dto';

@Injectable()
export class CommentsService {
  constructor(private readonly commentRepository: CommentRepository) {}

  async createComment(
    createCommentDto: CreateCommentRequestDto,
    postId: string,
    author,
  ) {
    return this.commentRepository.create(createCommentDto, postId, author);
  }

  async removeComment(params) {
    console.log(params)
  }
}
