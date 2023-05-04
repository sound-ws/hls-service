import parseCsv from './libs/parseCsv';

export default {
  // The serverless stage name
  stage: process.env.STAGE,
  // The log level
  logLevel: process.env.LOG_LEVEL,
  // The auth secret
  swsSecret: process.env.SWS_SECRET,
  // The storage bucket
  audioBucketName: process.env.AUDIO_BUCKET_NAME,
  // The CORS allowed origins
  CORSAllowedOrigins: process.env.CORS_ALLOWED_ORIGIN,
  // List of origins from which the service can fetch audio
  // the folder prefix of the generated waveform json on s3
  s3FolderPrefix: 'sound-ws/hls-srv/audio',
  // JWT audience to verify in the JWT
  jwtAudience: 'api.sound.ws',

  m3u8FileTable: process.env.DYNAMODB_TABLE_M3U8FILE,

  m3u8FileTableTTL: parseInt(process.env.AUDIO_CACHE_TTL, 10) || 60 * 60 * 24 * 30,

  cloudfrontDomain: process.env.AWS_CLOUDFRONT_DOMAIN,
  cloudfrontKeypairId: process.env.AWS_CLOUDFRONT_KEYPAIR_ID,
  cloudfrontPrivateKeyString: process.env.AWS_CLOUDFRONT_PRIVATE_KEY?.replace(/\\n/g, '\n'),

  signedUrlExpiresIn: parseInt(process.env.SIGNED_URL_EXPIRY_SEC, 10) || 3600,

  createM3U8LambdaArn: process.env.LAMBDA_CREATE_M3U8_ARN,

  s3CacheDuration: process.env.S3_CACHE_MAX_AGE || 2592000,

  validSampleRates: parseCsv(process.env.ALLOWED_SAMPLE_RATES) || [22050],
  validBitrates: parseCsv(process.env.ALLOWED_BITRATES) || [192],
  validAudioFormats: parseCsv(process.env.ALLOWED_FORMATS) || ['mp3'],
  validSegmentTimes: parseCsv(process.env.ALLOWED_SEGMENT_DURATION) || [5],
  allowedAudioOrigins: parseCsv(process.env.ALLOWED_AUDIO_ORIGINS) || ['*'],
};
