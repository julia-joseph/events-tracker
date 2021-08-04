import { MongoClient } from "mongodb";

export const getClient = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://events-tracker:password@sandbox.dtugy.mongodb.net/events?retryWrites=true&w=majority"
  );
  return client;
};

export const getDB = (client) => {
  return client.db();
};

export const insertCollection = async (db, collectionName, data) => {
  return await db.collection(collectionName).insertOne(data);
};

export const getDocumentsAsArray = async (db, collectionName, filter = {}) => {
  return await db
    .collection(collectionName)
    .find(filter)
    .sort({ _id: -1 })
    .toArray();
};
