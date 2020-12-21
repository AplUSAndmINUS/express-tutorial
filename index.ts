// requirements for express setup

import { Server } from "http";

// Express.js, MySQL, and database connection
let express = require("express"); 
let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P@$$W0RD321!",
  database: "myblog"
});

// set up MySQL connection 
connection.connect();

// calls to set up express server
let app = express(); 

// submit HTML
app.get("/", function(request, response) {
  let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>My Blog!</title>
    </head>

    <body>
    ${posts.map(post => {
      `<li>${post.title}</li>`
    }).join('')}</body></html>
  `;
  let query = `
    SELECT * 
    FROM 'posts'
    ORDER BY date 
    DESC LIMIT 10;
  `;

  connection.query(query, function(err, posts) {
    if (err) throw err;
  });

  response.send(html);
});

app.listen(3000);