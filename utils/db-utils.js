import { MongoClient } from "mongodb";

export const getClient = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://events-tracker:password@sandbox.dtugy.mongodb.net/events?retryWrites=true&w=majority"
  );
  return client;
};

export const insertDocument = async (client, collectionName, data) => {
  const db = client.db();
  return await db.collection(collectionName).insertOne(data);
};

export const getDocuments = async (db, collectionName, filter = {}) => {
  return await db
    .collection(collectionName)
    .find(filter)
    .sort({ _id: -1 })
    .toArray();
};
