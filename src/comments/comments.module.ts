import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CommentRepository } from '../repositories/comment.repository';
import { Comment } from '../models/comment.model';

@Module({
  imports: [SequelizeModule.forFeature([Comment])],
  controllers: [CommentsController],
  providers: [CommentsService, CommentRepository],
})
export class CommentsModule {}
