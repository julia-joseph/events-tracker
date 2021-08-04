// import {
//   buildPath,
//   extractDataFromFile,
//   saveDataToFile,
// } from "../../../utils/data-utils";

import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({
        message: "Invalid email address",
      });
      return;
    }

    const newSubscription = {
      id: new Date().toISOString(),
      email: email,
    };

    //saveDataToFile("newsletter.json", newSubscription);

    const client = await MongoClient.connect(
      "mongodb+srv://<user>:<pass>@sandbox.dtugy.mongodb.net/newsletter?retryWrites=true&w=majority"
    );
    const db = client.db();
    await db.collection("emails").insertOne({ email: email });
    client.close();

    res.status(201).json({
      message: "Subscription Successful!",
      subscription: newSubscription,
    });
  }

  if (req.method === "GET") {
    // const filePath = buildPath("newsletter.json");
    // const data = extractDataFromFile(filePath);
    const data = [];

    res.status(200).json({ subscriptions: data });
  }
};

export default handler;
