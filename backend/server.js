const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student_db",
});

db.connect();

app.post("/register", async (req, res) => {
  const { fullName, rollNumber, email, password, address } = req.body;

  if (!fullName || !rollNumber || !email || !password || !address) {
    return res.send("All fields are required");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.send("Invalid email format");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const sql =
    "INSERT INTO students (full_name, roll_number, email, password, address) VALUES (?, ?, ?, ?, ?)";

  db.query(sql, [fullName, rollNumber, email, hashedPassword, address], () => {
    res.send("Student Registered Successfully");
  });
});

app.listen(3000);
