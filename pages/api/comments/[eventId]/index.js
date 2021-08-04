import {
  getClient,
  getDocuments,
  insertDocument,
} from "../../../../utils/db-utils";

const handler = async (req, res) => {
  const eventId = req.query.eventId;

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

  if (req.method === "POST") {
    const email = req.body.email;
    const name = req.body.name;
    const text = req.body.text;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      client.close();
      return;
    }

    const newComment = {
      eventId: eventId,
      email: email,
      name: name,
      text: text,
    };

    try {
      const result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;
      res
        .status(201)
        .json({ message: "Success! Comment Added!", comments: newComment });
    } catch (error) {
      res.status(500).json({
        message: "Inserting document into database failed",
        error: error,
      });
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getDocuments(client, "comments", {
        eventId: eventId,
      });
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({
        message: "Fetching comments from the database failed!",
        error: error,
      });
    }
  }

  client.close();
};

export default handler;
