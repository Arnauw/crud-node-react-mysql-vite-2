const express = require("express");
const app = express();
const mysql = require('mysql2');
const database = mysql.createConnection({
    host: 'localhost', user: 'root', password: 'password', database: 'crudai',
});
const cors = require('cors');
const corsOptions = {
    origin: [
        'http://localhost:5173', 'http://localhost:8081', 'http://127.0.0.1:5173', 'http://127.0.0.1:8081'
        ,],
    optionsSuccessStatus: 200,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    headers: 'Content-Type,Authorization',
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    const sql = "SELECT * FROM `ai`";
    database.query(sql, (err, data) => {
        if (err) return res.json("Error while getting data.");
        return res.json(data);
    })
});

app.post('/create', (req, res) => {
    const sql = "INSERT INTO `ai` (`brand`, `model`) VALUES (?, ?)";
    const values = [
        req.body.brand,
        req.body.model
    ];
    database.query(sql, values, (err, data) => {
        if (err) return res.json("Error while inserting data.");
        return res.json(data);
    })
});

app.listen(8081, () => {
    console.log("Server is running on port 8081");
});