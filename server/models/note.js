const mongoose = require("mongoose");

//create schema
const noteSchema = {
    title: String,
    content: String
};
//create new model based on the noteSchema
const Note = mongoose.model("Note", noteSchema);

// Create new Note document
// const note6 = new Note({
//     title: "Note Six",
//     content: "Note Six Content"
// });

// // save the new note document
// note6.save((error) => {
//     error ? console.log(error) : console.log("created document");
// });

//Find documents
// Note.find({},function(err,notes){
//     if(!err){
//         console.log("From server.js",notes);
//     }else{
//         console.log(err);
//     }
// });

//Delete a document by ID
// Note.findOneAndDelete({ _id: ("63287cd1ab1bd6b30205625b") }, function (error) {
//     if (!error) {
//         console.log("Successfully Deleted!");
//     } else {
//         console.log(error);
//     }
// });
module.exports = Note;