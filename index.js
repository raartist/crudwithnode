const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5500;
const uri = `mongodb+srv://raartist:12345@cluster0.hyzs3.mongodb.net/food?retryWrites=true&w=majority`;
const FoodModel = require("./models/Food")

mongoose.connect(uri, { useNewUrlParser: true })


// app.get("/", async (req, res) => {
//     const food = new FoodModel({
//         foodName: "Apple",
//         daySinceIAte: 3
//     })
//     try {
//         await food.save();
//         res.send("data inserted!")
//     } catch (err) {
//         console.log(err)
//     }

// })

app.get("/", (req, res) => {
    mongoose.connection.on("error", () => {

        res.send("something went wrong!")
    })
    mongoose.connection.on("connected", () => {

        res.send("hurray")
    })


})

app.listen(port, () => {
    console.log("your server is running on port no. ", port)
})