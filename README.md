1. post image file to google cloud storage from client
2. cloud function is triggered when file object is finalized in cloud storage
3. cloud function calls vision api and detect text in image file in cloud storage
4. return value from vision api is written in cloud firestore
5. client subscribe data in cloud firestore and show the list of text in posted images