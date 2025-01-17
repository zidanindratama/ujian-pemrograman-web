import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { QueryDreamsDto } from './dtos/query-dreams.dto';
import { Prisma } from '@prisma/client';

const slugify = (title: string) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .trim();
};

@Injectable()
export class DreamsService {
  constructor(private prismaService: PrismaService) {}

  async getAllDreams(query: QueryDreamsDto) {
    const pgNum = +(query.pgNum ?? 1);
    const pgSize = +(query.pgSize ?? 10);
    const skip = (pgNum - 1) * pgSize;
    const take = pgSize;

    const where: Prisma.DreamWhereInput = {
      ...(query.title && {
        title: { contains: query.title, mode: 'insensitive' },
      }),
    };

    const orderBy: Prisma.DreamOrderByWithAggregationInput =
      query.sortOrder === 'newest'
        ? { createdAt: 'desc' }
        : query.sortOrder === 'oldest'
          ? { createdAt: 'asc' }
          : { createdAt: 'desc' };

    const dreams = await this.prismaService.dream.findMany({
      skip,
      take,
      where,
      orderBy,
    });

    const dreamsCount = await this.prismaService.dream.count({ where });

    return {
      dreams,
      meta: {
        count: dreamsCount,
      },
    };
  }

  getDreamBySlug(slug: string) {
    return this.prismaService.dream.findUnique({
      where: {
        slug,
      },
    });
  }

  async createDream(createDreamData: Prisma.DreamCreateInput) {
    const slug = slugify(createDreamData.title);
    const category = await this.getDreamBySlug(slug);
    if (category) throw new HttpException('Dream already exist!', 401);

    return this.prismaService.dream.create({
      data: {
        ...createDreamData,
        slug,
      },
    });
  }

  updateDreamBySlug(
    slug: string,
    slugUpdate: string,
    updateDreamByIdData: Prisma.DreamUpdateInput,
  ) {
    return this.prismaService.dream.update({
      where: {
        slug,
      },
      data: {
        ...updateDreamByIdData,
        slug: slugUpdate,
      },
    });
  }

  async deleteDreamBySlug(slug: string) {
    await this.prismaService.dream.delete({
      where: {
        slug,
      },
    });

    return {
      message: 'Successfully delete the dream!',
      statusCode: 200,
    };
  }
}
