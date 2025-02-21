import { MongoClient } from "mongodb";

const URL =
  "mongodb+srv://lucasmongodbteste:zCnvN30lGhT29XNR@cluster0.ld2rw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URL);

export const db = client.db("spotify");
//const songCollection = await db.collection("songs").find({}).toArray();

//console.log(songCollection);
