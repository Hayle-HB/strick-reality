const express = require("express");
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Serve static files from public directory
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {
  res.render("Home");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
