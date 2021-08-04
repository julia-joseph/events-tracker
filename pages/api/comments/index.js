import { getClient, getDocuments } from "../../../utils/db-utils";

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

  if (req.method === "GET") {
    try {
      const documents = await getDocuments(client, "comments");
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
