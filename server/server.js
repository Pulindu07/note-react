const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const router = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 8080;

//connecting to mongodb
// mongoose.connect("mongodb://127.0.0.1:27017/notesDB", { useNewUrlParser: true });
mongoose.connect("mongodb+srv://admin-pulindu:Pulli269@cluster0.2vtgg4r.mongodb.net/notesDB", { useNewUrlParser: true });

//listen if got connected to mongo
mongoose.connection.on('connected', () => {
    console.log("Mongoose Connected!");
})

app.use(express.json());
app.use(express.urlencoded({extended:false}));




// This is a http request logger.
app.use(morgan("tiny"));
// app.use(cors());

// Getting the routes
app.use('/api', router)


if(process.env.NODE_ENV === "production"){
    app.use(express.static("../client/build"));
}
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})