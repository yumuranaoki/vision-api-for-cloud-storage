exports.detectTextSub = (event, callback) => {
  const pubsubMessage = event.data;
  const textData = Buffer.from(pubsubMessage.data, 'base64').toString();
  const data = JSON.parse(textData);
  const text = data.text;
  console.log(`text: ${text}`)

  const firebase = require('firebase');
  require("firebase/firestore");

  firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
  })

  const db = firebase.firestore();
  db.collection("receipt").add({
    text
  }).then(docRef => {
    console.log(`docRef.id: ${docRef.id}`);
  }).catch(err => {
    console.log(`error: ${err}`);
  });

  callback();
}