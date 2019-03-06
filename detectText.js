const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient();

exports.detectObject= (event, callback) => {
  const file = event.data;
  const bucketName = file.bucket;
  const fileName = file.name
  console.log(bucketName)
  console.log(fileName)

  client.textDetection(`gs://${bucketName}/${fileName}`)
  .then(responses => {
    console.log(`responses: ${responses}`);
    console.log(`responses[0]: ${responses[0]}`);
    console.log(`length: ${responses[0].length}`);
    console.log(`text annotaion: ${responses[0].textAnnotations}`)
    const textAnnotations = responses[0].textAnnotations;
    // console.log(`textAnnotations: ${textAnnotations}`);
    // textAnnotations.forEach(element => {
    //   Object.keys(element).forEach(key => {
    //     console.log(`description: ${element[key]}`)
    //   })
    // });
    const firstDescription = textAnnotations[0].description
    console.log(`firstDescription: ${firstDescription}`)
  })

  callback();
}

// {
//   "responses": [
//     {
//       "textAnnotations": [
//         {
//           "locale": "en",
//           "description": "ABBEY\nROAD NW8\nCITY OF WESTMINSTER\n",
//           "boundingPoly": {
//             "vertices": [
//               {
//                 "x": 45,
//                 "y": 43
//               },
//               {
//                 "x": 269,
//                 "y": 43
//               },
//               {
//                 "x": 269,
//                 "y": 178
//               },
//               {
//                 "x": 45,
//                 "y": 178
//               }
//             ]
//           }
//         },
//         {
//           "description": "ABBEY",
//           "boundingPoly": {
//             "vertices": [
//               {
//                 "x": 45,
//                 "y": 50
//               },
//               {
//                 "x": 181,
//                 "y": 43
//               },
//               {
//                 "x": 183,
//                 "y": 80
//               },
//               {
//                 "x": 47,
//                 "y": 87
//               }
//             ]
//           }
//         },
//         {
//           "description": "ROAD",
//           "boundingPoly": {
//             "vertices": [
//               {
//                 "x": 48,
//                 "y": 96
//               },
//               {
//                 "x": 155,
//                 "y": 96
//               },
//               {
//                 "x": 155,
//                 "y": 132
//               },
//               {
//                 "x": 48,
//                 "y": 132
//               }
//             ]
//           }
//         },
//         {
//           "description": "NW8",
//           "boundingPoly": {
//             "vertices": [
//               {
//                 "x": 182,
//                 "y": 95
//               },
//               {
//                 "x": 269,
//                 "y": 95
//               },
//               {
//                 "x": 269,
//                 "y": 130
//               },
//               {
//                 "x": 182,
//                 "y": 130
//               }
//             ]
//           }
//         },
//         {
//           "description": "CITY",
//           "boundingPoly": {
//             "vertices": [
//               {
//                 "x": 51,
//                 "y": 162
//               },
//               {
//                 "x": 85,
//                 "y": 161
//               },
//               {
//                 "x": 85,
//                 "y": 177
//               },
//               {
//                 "x": 51,
//                 "y": 178
//               }
//             ]
//           }
//         },
//         {
//           "description": "OF",
//           "boundingPoly": {
//             "vertices": [
//               {
//                 "x": 95,
//                 "y": 162
//               },
//               {
//                 "x": 111,
//                 "y": 162
//               },
//               {
//                 "x": 111,
//                 "y": 176
//               },
//               {
//                 "x": 95,
//                 "y": 176
//               }
//             ]
//           }
//         },
//         {
//           "description": "WESTMINSTER",
//           "boundingPoly": {
//             "vertices": [
//               {
//                 "x": 124,
//                 "y": 162
//               },
//               {
//                 "x": 249,
//                 "y": 160
//               },
//               {
//                 "x": 249,
//                 "y": 174
//               },
//               {
//                 "x": 124,
//                 "y": 176
//               }
//             ]
//           }
//         }
//       ]
//     }
//   ]
// }