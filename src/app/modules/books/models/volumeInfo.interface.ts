import { ImageLink } from './image-link.interface';

export interface VolumeInfo {
  title?: string;
  subtitle?: string;
  authors?: string[];
  publisher?: string;
  publishDate?: string;
  description?: string;
  ratingsCount?: number;
  imageLinks?: ImageLink;
}
