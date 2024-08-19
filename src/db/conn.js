const mongoose = require("mongoose")
require("dotenv").config()
const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.tw4fkga.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {

}).then(() => {
    console.log(`connection Successful`);
}).catch((e) => {
    console.log(e.message);
})