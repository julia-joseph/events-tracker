import { getClient, getDB, getDocumentsAsArray } from "../../../utils/db-utils";

const handler = async (req, res) => {
  const client = await getClient();

  if (req.method === "GET") {
    const db = getDB(client);
    const documents = await getDocumentsAsArray(db, "comments");

    res.status(200).json({ comments: documents });
  }

  client.close();
};

export default handler;
