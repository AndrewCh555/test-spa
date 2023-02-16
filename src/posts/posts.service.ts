import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostDto } from './dto/create.post.dto';
import { Post } from '../models/post.model';
import { PostRepository } from '../repositories/post.repository';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private postRepositiry: PostRepository) {}
  async createPost(dto: CreatePostDto) {
    const post = await this.postRepositiry.create(dto);
    return post;
  }
  async getAllPosts() {
    const posts = await this.postRepositiry.findAll();
    return posts;
  }
}
