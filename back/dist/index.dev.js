"use strict";

var express = require("express");

var mysql = require("mysql2");

var bodyParser = require("body-parser");

var cors = require("cors");

var bcrypt = require("bcrypt");

var fileUpload = require("express-fileupload");

var app = express();
var port = 5000;
var saltRounds = 10;
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tutorias"
});
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());
app.get("/", function (req, res) {
  bcrypt.hash("Juanito", saltRounds, function (err, hash) {
    // Store hash in your password DB.
    res.send(hash);
  });
});
app.post("/alumnos/agregar", function (req, res) {
  var _req$body = req.body,
      matricula = _req$body.matricula,
      nombre = _req$body.nombre,
      tipo = _req$body.tipo,
      password = _req$body.password;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    var sql = "INSERT INTO alumnos2 VALUES (?, ?, ?, ?)";
    db.query(sql, [matricula, nombre, tipo, hash], function (err, result) {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.message,
          codigo: err.code
        });
      } else {
        res.send({
          status: 200,
          errNo: false,
          mensaje: "registrado",
          codigo: result.affectedRows
        });
      }
    });
  });
});
app.listen(port, function () {
  console.log("Server running at http://localhost:".concat(port, "/"));
});