import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [note, setNote] = useState({ title: "", content: "" });
  const [receivedNotes, setReceivedNotes] = useState([]);
  

  function handleSubmit(event) {
    event.preventDefault();

    axios({
      method: 'post',
      url: '/api/save',
      data: note
    })
      .then(function (response) {
        console.log("response:", response);
        getNote();
      })
      .catch(function (error) {
        console.log(error);
      });

    setNote(() => {
      return ({
        title: "", content: ""
      });
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((preValues) => {
      return ({
        ...preValues,
        [name]: value
      });
    });
  }

  useEffect(() => {
    getNote();
  }, []);

  function getNote() {
    axios.get("/api")
      .then((response) => {
        const notesFromMongo = response.data;
        setReceivedNotes(notesFromMongo);
        console.log("Data Received from Mongo: ", notesFromMongo);
        console.log("Data at receivedNotes: ", receivedNotes);
      })
      .catch(() => {
        alert("Error In Receiving Data!!!");
      })
  }
  function singleNote() {
    return(receivedNotes.map((singleNote,index) => {
      return (
        <div key={index} className="single-note">
          <h3>{singleNote.title}</h3>
          <p>{singleNote.content}</p>
        </div>
      )
    }))
    
  }

  return (
    <div className="app">
      <h1 className="app-title">Welcome to the Notes MERN Project</h1>
      <form onSubmit={handleSubmit} className="data-form">
        <div className="form-input">
          <input
            className="input-title"
            type="text"
            name="title"
            value={note.title}
            onChange={handleChange}
            required
            placeholder="Note Title"
          />

        </div>
        <div className="form-input">
          <textarea
            className="input-content"
            rows={10}
            cols={41}
            name="content"
            type="text"
            value={note.content}
            onChange={handleChange}
            required
            placeholder="Note Content"
          />
        </div>
        <button className="form-button">Submit</button>

      </form>
      <div>
        <h1>Notes</h1>
        {singleNote()}
      </div>

    </div>
  )

}

export default App;