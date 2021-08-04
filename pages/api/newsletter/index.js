import {
  getClient,
  getDB,
  getDocumentsAsArray,
  insertCollection,
} from "../../../utils/db-utils";

const handler = async (req, res) => {
  const client = await getClient();

  if (req.method == "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({
        message: "Invalid email address",
      });
      return;
    }

    const newSubscription = {
      email: email,
    };

    const db = getDB(client);
    const result = await insertCollection(db, "newsletter", newSubscription);
    console.log("result: ", result);

    res.status(201).json({
      message: "Subscription Successful!",
      subscription: newSubscription,
    });
  }

  if (req.method === "GET") {
    const db = getDB(client);
    const documents = await getDocumentsAsArray(db, "newsletter");

    res.status(200).json({ subscriptions: documents });
  }

  client.close();
};

export default handler;
