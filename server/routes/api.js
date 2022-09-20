const express = require("express");
const { model } = require("mongoose");
const Note = require("../models/note");
const router = express.Router();

//Routes
router.get("/", (req, res) => {
    // res.json({ "users": ["user one", "user Tow", "user Three"] })

    //MyModel.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {});
    Note.find({}, function (err, notes) {
        if (!err) {
            // console.log("From API", notes);
            res.json(notes);
        } else {
            console.log(err);
        }
    });
});
router.post("/save", (req, res) => {
    const notes = req.body;
    const note = new Note({
        title: notes.title,
        content: notes.content
    });
    // save the new note document
    note.save((error) => {
        error ? console.log(error) : console.log("created document");
    });
    console.log("Body: ", notes);
    res.json({ messege: "we received your data!" });

})
// Create new Note document


// export = note;
module.exports = router;


