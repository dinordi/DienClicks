import { Client } from 'minio';

let minioClient: Client | null = null;

export function getMinioClient() {
  if (!minioClient) {
    minioClient = new Client({
      endPoint: process.env.MINIO_ENDPOINT!,
      port: parseInt(process.env.MINIO_PORT || '9000'),
      useSSL: process.env.MINIO_USE_SSL === 'true',
      accessKey: process.env.MINIO_ACCESS_KEY!,
      secretKey: process.env.MINIO_SECRET_KEY!,
    });
  }
  return minioClient;
}

export async function initMinIO() {
  const client = getMinioClient();
  
  const buckets = [
    process.env.MINIO_BUCKET_PHOTOS!,
    process.env.MINIO_BUCKET_THUMBNAILS!,
    process.env.MINIO_BUCKET_COVERS!,
  ];

  for (const bucket of buckets) {
    const exists = await client.bucketExists(bucket);
    if (!exists) {
      await client.makeBucket(bucket, 'us-east-1');
      console.log(`Created bucket: ${bucket}`);
    }
  }

  console.log('MinIO buckets initialized successfully');
}

export function getImageUrl(bucketName: string, objectName: string): string {
  const endpoint = process.env.NEXT_PUBLIC_MINIO_ENDPOINT!;
  return `${endpoint}/${bucketName}/${objectName}`;
}
