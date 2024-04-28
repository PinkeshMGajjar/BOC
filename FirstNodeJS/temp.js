var express = require('express');
var app = express();
var mysql = require('mysql');
var fs = require("fs");

var con = mysql.createConnection({
   host: "localhost",
   user: "pinkeshdbs",
   password: "pinkesh008",
   database: "mydb"
 });
 
 con.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");

  //  var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table altered");
  // });

  // var sql = "INSERT INTO customers (name, address) VALUES ?";
  // var values = [
  //   ['John', 'Highway 71'],
  //   ['Peter', 'Lowstreet 4'],
  //   ['Amy', 'Apple st 652'],
  //   ['Hannah', 'Mountain 21'],
  //   ['Michael', 'Valley 345'],
  //   ['Sandy', 'Ocean blvd 2'],
  //   ['Betty', 'Green Grass 1'],
  //   ['Richard', 'Sky st 331'],
  //   ['Susan', 'One way 98'],
  //   ['Vicky', 'Yellow Garden 2'],
  //   ['Ben', 'Park Lane 38'],
  //   ['William', 'Central st 954'],
  //   ['Chuck', 'Main Road 989'],
  //   ['Viola', 'Sideway 1633']
  // ];
  // con.query(sql, [values], function (err, result) {
  //   if (err) throw err;
  //   console.log(result.affectedRows)
  // });

  // con.query("SELECT * FROM customers", function (err, result, fields) {
  //   if (err) throw err;
  //   console.log(result);
  // });

  // con.query("SELECT name, address FROM customers", function (err, result, fields) {
  //   if (err) throw err;
  //   console.log(fields);
  // });

  // var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("1 record inserted, ID: " + result.insertId);
  // });

  // con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });

  // con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });

  // var name = 'Amy';
  // var adr = 'Mountain 21';
  // var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
  // con.query(sql, [name, adr], function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });

  // con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });

  // var sql = "DELETE FROM customers WHERE address = 'One way 98'";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Number of records deleted: " + result.affectedRows);
  //   console.log("Number of records deleted: " + result);
  // });

  var sql = "UPDATE customers SET address = 'Valley 345' WHERE address = 'Canyon 123'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    console.log(result.log + " record(s) updated");
  });

 });

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var server = app.listen(8081, function () {

   const hostname = '192.168.1.143'; // Change this to your desired server address
   
   var host = hostname //server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})