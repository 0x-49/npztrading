import { ImageLoaderProps } from 'next/image';

export default function imageLoader({ src, width, quality = 75 }: ImageLoaderProps): string {
  // Handle external URLs (e.g., CDN hosted images)
  if (src.startsWith('http')) {
    return src;
  }

  // Handle local images
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://joinnpztrading.com';
  const optimizedSrc = `${baseUrl}${src}?w=${width}&q=${quality}`;

  return optimizedSrc;
}