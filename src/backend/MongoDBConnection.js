const { MongoClient, ServerApiVersion } = require('mongodb');
const password = encodeURIComponent("spongebob123123");
const username = encodeURIComponent("gabrielrjn");
const uri = `mongodb+srv://${username}:${password}@cluster0.bnj4bsl.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    console.log("Connecting to MongoDB...");
    await client.connect();
  
   
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    
    await client.close();
    console.log("MongoDB connection closed.");
  }
}

run().catch(console.dir);
