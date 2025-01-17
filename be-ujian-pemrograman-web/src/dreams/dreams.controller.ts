import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DreamsService } from './dreams.service';
import { QueryDreamsDto } from './dtos/query-dreams.dto';
import { CreateDreamDto } from './dtos/create-dream.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { UpdateDreamDto } from './dtos/update-dream-dto';

const slugify = (title: string) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .trim();
};

@Controller('/api/dreams')
export class DreamsController {
  constructor(
    private dreamsService: DreamsService,
    private prismaService: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Get()
  getAllDreams(@Query() query: QueryDreamsDto) {
    return this.dreamsService.getAllDreams(query);
  }

  @Get('/:slug')
  async getDreamBySlug(@Param('slug') slug: string) {
    const category = await this.dreamsService.getDreamBySlug(slug);
    if (!category) throw new HttpException('Dream not found!', 404);
    return category;
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async createDream(
    @Body() body: CreateDreamDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    try {
      const slug = slugify(body.title);
      const dream = await this.dreamsService.getDreamBySlug(slug);
      if (dream)
        throw new HttpException('Dream already exist!', HttpStatus.BAD_REQUEST);

      if (image) {
        const uploadedImage = await this.cloudinaryService.uploadFile(
          image,
          true,
        );
        body.image = uploadedImage.secure_url;
      }

      return this.dreamsService.createDream(body);
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to create dream',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Patch('/:slug')
  @UseInterceptors(FileInterceptor('image'))
  async updateDreamBySlug(
    @Param('slug') slug: string,
    @Body() body: UpdateDreamDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    try {
      const dream = await this.dreamsService.getDreamBySlug(slug);
      if (!dream) throw new HttpException('Dream not found!', 404);

      if (image) {
        const uploadedImage = await this.cloudinaryService.uploadFile(
          image,
          true,
        );
        body.image = uploadedImage.secure_url;
      }

      const slugUpdate = slugify(body.title);
      return this.dreamsService.updateDreamBySlug(slug, slugUpdate, body);
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to update dream',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete('/:slug')
  async deleteBlogBySlug(@Param('slug') slug: string) {
    const dream = await this.prismaService.dream.findUnique({
      where: {
        slug: slug,
      },
    });
    if (!dream) throw new HttpException('Drea not found!', 404);
    return this.dreamsService.deleteDreamBySlug(slug);
  }
}
