import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreatePostDto } from './posts.dto';
import { PostsService } from './posts.service';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @ApiOperation({ description: 'Get Posts' })
  @ApiResponse({ status: 200, description: 'Posts getted successfully' })
  @ApiResponse({ status: 404, description: 'Posts not found' })
  getPosts() {
    return this.postsService.getPosts();
  }

  @Post()
  @ApiOperation({ description: 'Create Post' })
  @ApiBody({ type: CreatePostDto })
  @ApiResponse({
    status: 200,
    description: 'Post created successfully',
  })
  createPost(@Body() body: CreatePostDto) {
    return this.postsService.CreatePost(body);
  }
}
