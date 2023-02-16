import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { CommentsModule } from './comments/comments.module';
import { Comment } from './models/comment.model';
import { Post } from './models/post.model';
import { FilesModule } from './files/files.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Post, Comment],
      autoLoadModels: true,
      synchronize: true,
    }),
    PostsModule,
    CommentsModule,
    FilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
