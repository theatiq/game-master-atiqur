require("dotenv").config()
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hnhnv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        const gamesCollection = client.db("gamesDB").collection('games')
        const watchListCollection = client.db("gamesDB").collection("watchList")

        app.get("/reviews", async (req, res) => {
            const cursor = gamesCollection.find()
            const result = await cursor.toArray()
            res.send(result)
        })
        // For home Page
        app.get("/reviewsHome", async (req, res) => {
            const cursor = gamesCollection.find().sort({ rating: -1 }).limit(6)
            const result = await cursor.toArray()
            res.send(result)
        })


        app.get("/review/:id", async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await gamesCollection.findOne(query)
            res.send(result)
        })
        app.get("/watchList", async (req, res) => {
            const cursor = watchListCollection.find()
            const result = await cursor.toArray()
            res.send(result)
        })


        app.get("/watchList/:id", async (req, res) => {
            const id = req.params.id
            const query = { _id: id }
            const result = await watchListCollection.findOne(query)
            res.send(result)
        })



        // My Reviews
        app.get("/myReviews", async (req, res) => {
            const email = req.query.email
            const filter = { email }
            const result = await gamesCollection.find(filter).toArray()
            res.send(result)
        })
        // My Watch List
        app.get("/myWatchList", async (req, res) => {
            const email = req.query.email
            const filter = { email }
            const result = await watchListCollection.find(filter).toArray()
            res.send(result)
        })


        app.post("/addReview", async (req, res) => {
            const newReview = req.body
            console.log(newReview)
            const result = await gamesCollection.insertOne(newReview)
            res.send(result)
        })

        app.post("/watchList", async (req, res) => {
            // const id = req.params.id
            const watchList = req.body
            console.log(watchList)
            const result = await watchListCollection.insertOne(watchList)
            res.send(result)
        })

        app.put("/review/:id", async (req, res) => {
            const id = req.params.id
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true };
            const newReview = req.body
            const updatedReview = {
                $set: newReview

            }
            const result = await gamesCollection.updateOne(filter, updatedReview, options)
            res.send(result)

        })
        // Delete from Review
        app.delete("/review/:id", async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await gamesCollection.deleteOne(query)
            res.send(result)
        })
        // Delete from Watch List
        app.delete("/watchList/:id", async (req, res) => {
            const id = req.params.id
            const query = { _id: id }
            const result = await watchListCollection.deleteOne(query)
            res.send(result)
        })

        // Users related api

        // app.get("/users", async (req, res) => {
        //     const cursor = userCollection.find()
        //     const result = await cursor.toArray()
        //     res.send(result)
        // })

        // app.post("/users", async (req, res) => {
        //     const newUser = req.body
        //     console.log("New user: ", newUser)
        //     const result = await userCollection.insertOne(newUser)
        //     res.send(result)
        // })

        // app.patch("/users", async (req, res) => {
        //     const email = req.body.email
        //     const filter = { email }
        //     const updatedDoc = {
        //         $set: {
        //             lastSignInTime: req.body?.lastSignInTime
        //         }
        //     }
        //     const result = await userCollection.updateOne(filter, updatedDoc)
        //     res.send(result)
        // })

        // app.delete("/users/:id", async (req, res) => {
        //     const id = req.params.id
        //     const query = { _id: new ObjectId(id) }
        //     const result = await userCollection.deleteOne(query)
        //     res.send(result)
        // })





        // Send a ping to confirm a successful connection
        // todo Comment it before deployment.
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get("/", (req, res) => {
    res.send("Assignment-10 server is running smoothly.......")
})

app.listen(port, () => {
    console.log(`Assignment-10 server is running on Port: ${port}`)
})

