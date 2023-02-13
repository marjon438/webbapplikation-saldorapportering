const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "asdf",
  database: "saldorapportering",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.post("/api/post", (req, res) => {
//   const movieName = req.body.movieName;
//   const movieReview = req.body.movieReview;

//   const sqlInsert =
//     "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?);";
//   db.query(sqlInsert, [movieName, movieReview], (err, result) => {
//     const sqlSelect = "SELECT * FROM movie_reviews";
//     db.query(sqlSelect, (err, result) => {
//       res.send(result);
//     });
//   });
// });
// app.delete("/api/delete/:idMovie", (req, res) => {
//   const idMovie = req.params.idMovie;
//   const sqlDelete = "DELETE FROM movie_reviews WHERE idMovie = ?";
//   db.query(sqlDelete, idMovie, (err, result) => {
//     const sqlSelect = "SELECT * FROM movie_reviews";

//     db.query(sqlSelect, (err, result) => {
//       res.send(result);
//     });
//   });
// });
// app.put("/api/put", (req, res) => {
//   const movieReview = req.body.movieReview;
//   const idMovie = req.body.idMovie;
//   console.log(movieReview);
//   const sqlUpdate =
//     "UPDATE movie_reviews SET movieReview = ? WHERE idMovie = ?";
//   db.query(sqlUpdate, [movieReview, idMovie], (err, result) => {
//     const sqlSelect = "SELECT * FROM movie_reviews";
//     db.query(sqlSelect, (err, result) => {
//       res.send(result);
//     });
//   });
// });

app.get("/api/items/get", (req, res) => {
  const sqlSelect = "SELECT * FROM items";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
app.get("/api/werehouses/get", (req, res) => {
  const sqlSelect = "SELECT * FROM werehouses";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
app.get("/api/balance/get", (req, res) => {
  const sqlSelect = "SELECT * FROM werehousebalance";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("Server running!");
});
