// requirement for express setup
let express = require("express"); 

// calls to set up express server
let app = express (); 

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

  response.send(html);
});