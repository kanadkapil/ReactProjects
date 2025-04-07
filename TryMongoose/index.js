const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const {Cat} = require('./model');

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://USER:PASSWORD@cluster0.itmrefk.mongodb.net/atlas');
    console.log('Connected to MongoDB ');
}

connectDB();

app.get('/', async (req, res) => {
    const cat = new Cat({
        name: 'Fluffy', 
    })
    const data = await cat.save();
    res.send(data);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})