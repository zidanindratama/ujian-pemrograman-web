import { IsOptional, IsString } from 'class-validator';

export class QueryDreamsDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsString()
  @IsOptional()
  sortOrder?: 'newest' | 'oldest';

  @IsString()
  @IsOptional()
  pgNum?: string;

  @IsString()
  @IsOptional()
  pgSize?: string;
}
