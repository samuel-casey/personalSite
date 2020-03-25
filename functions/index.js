const functions = require('firebase-functions');
const express = require('express');
const path = require('path');

const app = express();
// app.get('/', (request, response) => {
//     let fileName = "adminwp.html"
//     const file = path.join(__dirname, "/public", `/${fileName}`)
//     if (file) {
//     response.sendFile(file)
//     } else {
//         response.send("no msg")
//     }
// });

app.use(express.static(path.join(__dirname, "../public")))

const PORT = process.env.PORT || 5015;

app.listen(PORT, () => console.log(`listening on port ${PORT}`))

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app)