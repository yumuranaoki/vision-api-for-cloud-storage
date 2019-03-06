const vision = require('@google-cloud/vision');
const {PubSub} = require(`@google-cloud/pubsub`);
const Buffer = require('safe-buffer').Buffer;

const client = new vision.ImageAnnotatorClient();
const pubsub = new PubSub();

exports.detectText = (event, callback) => {
  const file = event.data;
  const bucketName = file.bucket;
  const fileName = file.name
  console.log(bucketName)
  console.log(fileName)

  client.textDetection(`gs://${bucketName}/${fileName}`)
  .then(responses => {
    const textAnnotations = responses[0].textAnnotations;

    /*
     * for check every result
     */

    // console.log(`textAnnotations: ${textAnnotations}`);
    // textAnnotations.forEach(element => {
    //   Object.keys(element).forEach(key => {
    //     console.log(`description: ${element[key]}`)
    //   })
    // });

    const firstDescription = textAnnotations[0].description
    console.log(`firstDescription: ${firstDescription}`)

    const data = JSON.stringify({ text: firstDescription });
    const dataBuffer = Buffer.from(data);
    const topicName = "TextDetection";

    const topic = pubsub.topic(topicName);
    const publisher = topic.publisher;
          
    publisher.publish(dataBuffer)
    .then(messageId => {
      console.log(`message id: ${messageId}`);
    })
    .catch(err => {
      console.log(err);
    });
  })

  callback();
}
