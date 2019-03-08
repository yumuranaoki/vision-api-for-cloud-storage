1. post image file to google cloud storage from client
2. cloud function is triggered when file object is finalized in cloud storage
3. cloud function calls vision api and detect text in image file in cloud storage
4. publish the pubsub topic and pass return value from vision api
5. cloud function is triggered when the topic is published
6. cloud function writes text value in cloud storage 
7. client subscribe data in cloud firestore and show the list of text in posted images