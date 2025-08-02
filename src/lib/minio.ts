/**
 * Generate a pre-signed URL for a MinIO object, valid for a limited time.
 * @param bucketName The MinIO bucket name
 * @param objectName The object key (file path)
 * @param expirySeconds How long the URL should be valid (default: 1 hour)
 * @returns Promise<string> The pre-signed URL
 */
export async function getPresignedImageUrl(bucketName: string, objectName: string, expirySeconds = 3600): Promise<string> {
  const client = getMinioClient();
  return await client.presignedGetObject(bucketName, objectName, expirySeconds);
}
import { Client } from 'minio';

let minioClient: Client | null = null;

export function getMinioClient() {
  if (!minioClient) {
    const endPoint = process.env.MINIO_ENDPOINT!;
    const useSSL = process.env.MINIO_USE_SSL === 'true';
    const accessKey = process.env.MINIO_ACCESS_KEY!;
    const secretKey = process.env.MINIO_SECRET_KEY!;
    const portEnv = process.env.MINIO_PORT;
    const clientConfig: {
      endPoint: string;
      useSSL: boolean;
      accessKey: string;
      secretKey: string;
      port?: number;
    } = { endPoint, useSSL, accessKey, secretKey };
    if (portEnv && portEnv !== '80' && portEnv !== '443') {
      clientConfig.port = parseInt(portEnv);
    }
    minioClient = new Client(clientConfig);
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
