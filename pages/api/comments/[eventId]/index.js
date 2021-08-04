import {
  getClient,
  getDB,
  getDocumentsAsArray,
  insertCollection,
} from "../../../../utils/db-utils";

const handler = async (req, res) => {
  const eventId = req.query.eventId;

  const client = await getClient();

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
      return;
    }

    const newComment = {
      eventId: eventId,
      email: email,
      name: name,
      text: text,
    };

    const db = getDB(client);
    const result = await insertCollection(db, "comments", newComment);
    console.log("result: ", result);
    newComment.id = result.insertedId;

    res
      .status(201)
      .json({ message: "Success! Comment Added!", comments: newComment });
  }

  if (req.method === "GET") {
    const db = getDB(client);
    const documents = await getDocumentsAsArray(db, "comments", {
      eventId: eventId,
    });

    res.status(200).json({ comments: documents });
  }

  client.close();
};

export default handler;
