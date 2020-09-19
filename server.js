//load modules
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require('cors')

//load routes
const index = require("./src/routes/index")
const admin = require("./src/routes/admin")

//express
app.use(express.json())

//cors
app.use(cors())

//port
const PORT = process.env.port || 3030

//mongoose
mongoose.connect("mongodb://localhost/moment", {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true
}).then(() => {
    console.log("MongoDB connection success!")
}).catch((e) => {
    console.log("MongoDB connection error.\n" + e)
})
mongoose.set('useFindAndModify', false);

//routes
app.use("/", index)
app.use("/admin", admin)

//listen
app.listen(PORT, () => {
    //console.clear()
    console.log("Server running!")
})