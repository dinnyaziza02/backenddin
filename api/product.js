const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://admin:admin@projectuas.hn7e9pg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
// Database Name
const dbName = "dinny_uas";

router.get("/", async (req, res) => {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("table");
  const dataWeb = await collection.find({}).toArray();
  res.status(200).json({ dataWeb });
  console.log(dataWeb);
});

module.exports = router;
