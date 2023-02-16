import { Controller, Post, Get, Body } from '@nestjs/common';
import { CreatePostDto } from './dto/create.post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  create(@Body() postDto: CreatePostDto) {
    return this.postsService.createPost(postDto);
  }

  @Get()
  getAll() {
    return this.postsService.getAllPosts();
  }
}
