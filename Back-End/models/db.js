
var admin = require("firebase-admin");
var serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://graduation-project-e8a09-default-rtdb.firebaseio.com"
})

const db = admin.firestore();
console.log("Database connected successfully!");

module.exports = {db,admin};
