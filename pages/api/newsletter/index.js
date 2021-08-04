import {
  getClient,
  getDocuments,
  insertDocument,
} from "../../../utils/db-utils";

const handler = async (req, res) => {
  let client;

  try {
    client = await getClient();
  } catch (error) {
    res.status(500).json({
      message: "Connecting to the database failed!",
      error: error,
    });
    return;
  }

  if (req.method == "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({
        message: "Invalid email address",
      });
      client.close();
      return;
    }

    const newSubscription = {
      email: email,
    };

    try {
      const result = await insertDocument(
        client,
        "newsletter",
        newSubscription
      );

      newSubscription._id = result.insertedId;

      res.status(201).json({
        message: "Subscription Successful!",
        subscription: newSubscription,
      });
    } catch (error) {
      res.status(500).json({
        message: "Inserting document into database failed",
        error: error,
      });
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getDocuments(client, "newsletter");
      res.status(200).json({ subscriptions: documents });
    } catch (error) {
      res.status(500).json({
        message: "Fetching subscriptions from the database failed!",
        error: error,
      });
    }
  }

  client.close();
};

export default handler;
