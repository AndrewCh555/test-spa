import { InjectModel } from '@nestjs/sequelize';
import { CreatePostRequestDto } from '../posts/dto';
import { Post } from '../models/post.model';
import {CreatePostDto} from "../posts/dto/create.post.dto";

export class PostRepository {
  constructor(
    @InjectModel(Post)
    private readonly post: typeof Post,
  ) {}

  async create(dto: CreatePostDto): Promise<Post> {
    return await this.post.create({ ...dto });
  }

  async findAll(): Promise<void> {
    console.log('Hi');
  }
}
