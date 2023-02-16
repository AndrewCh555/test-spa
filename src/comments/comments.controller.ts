import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
  Request,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Comment } from '../models/comment.model';
import { CommentsService } from './comments.service';
import { CommentResponseDto, CreateCommentRequestDto } from './dto';

@Controller('comments')
@ApiTags('Comments')
@ApiBearerAuth()
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post('post/:postId')
  @ApiOperation({ description: 'Add new comment for post' })
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse({ description: 'Created comment', type: CommentResponseDto })
  createComment(
    @Param('postId') postId: string,
    @Body() createCommentDto: CreateCommentRequestDto,
    @Request() req,
  ): Promise<Comment> {
    return this.commentsService.createComment(
      createCommentDto,
      postId,
      req.user,
    );
  }

  @Get('post/:postId')
  @ApiOperation({ description: 'Get all comments for post' })
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'Array of all comments for specified post',
    type: CommentResponseDto,
    isArray: true,
  })

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ description: 'Delete comment' })
  @ApiOkResponse({ description: 'Comment deleted (void)' })
  @ApiNotFoundResponse({
    description: `There aren't any comments with this id`,
  })
  removeComment(@Param('id') id: string, @Request() req): Promise<void> {
    return this.commentsService.removeComment(id);
  }
}
