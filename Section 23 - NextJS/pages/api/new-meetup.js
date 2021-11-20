import { MongoClient } from 'mongodb';
// /api/new-meetup
// POST /api/new-meetup


async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    console.log("made it 1st");

    const client = MongoClient.connect('mongodb+srv://meetup:7XzrxXPZWR2yNWa3@cluster0.tbyo9.mongodb.net/meetups?retryWrites=true&w=majority', {useUnifiedTopology: true, uri_decode_auth: true, useNewUrlParser: true});

    console.log("made it 2nd");
    console.log(client);

    const db = client.db();


    const meetupsCollection = db.connect('meetups');
    const res = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({message: 'Meetup inserted'});
  }
}

export default handler;