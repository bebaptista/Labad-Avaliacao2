const http = require("http");
const express = require("express");
const mysql = require("mysql");
const app = express();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
//const cors = require('cors');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"Labad Prova2"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Conectado!");
});

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get("/departamentos", function(req,res){
    let sql = "SELECT * from department";
    con.query(sql, function(err,result,fields){
        if(err) throw err;
        res.send(result);
        console.log(result);
    });
});

app.get("/departamentos/:id/funcionarios",function(req,res){
    let identificador = req.params.id;
    let sql = "SELECT * FROM employee WHERE dept_id="+identificador+"";
    con.query(sql, function(err,result,fields){
        if(err) throw err;
        res.send(result);
    });
});

app.get("/departamentos/:id/funcionarios/:func_id/contas", function(req,res){
    let identificador_funcionario = req.params.func_id;
    let sql = "SELECT * from account WHERE open_emp_id="+identificador_funcionario+"";
    con.query(sql, function(err,result,fields){
        if(err) throw err;
        res.send(result);
    });
});

http.createServer(app).listen(3000,() => console.log("Servidor rodando local na porta 3000"));