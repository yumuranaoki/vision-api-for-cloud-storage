const {Storage} = require('@google-cloud/storage')
require('dotenv').config()

const storage = new Storage();

const bucketName = process.env.BUCKET_NAME;
const filename = __dirname + '/abbey_road.jpg';

storage.bucket(bucketName).upload(filename, {
}).then( res => console.log(`${filename} uploaded to ${bucketName}.`) );


