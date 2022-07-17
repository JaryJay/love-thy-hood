const dotenv = require('dotenv');
const aws = require('aws-sdk');
const crypto = require('crypto');
const util = require('util');
const randomBytes = util.promisify(crypto.randomBytes)

dotenv.config()

const region = "us-east-2";
const bucketName = "neighbourhood-image-uploads";
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
});

module.exports = async function generateUploadURL() {
    const rawBytes = await randomBytes(16)
    const key = rawBytes.toString('hex')

    return await s3.getSignedUrlPromise('putObject', {
        Bucket: bucketName,
        Key: key,
        Expires: 15
    })
}
