exports.detectTextSub = (event, callback) => {
  const pubsubMessage = event.data;
  const text = pubsubMessage.data ? Buffer.from(pubsubMessage.data, 'base64').toString() : '';

  console.log(`text: ${text}`)
  callback();
}