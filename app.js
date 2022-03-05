const path = require("path");
const express = require("express"); // Framework
const dotenv = require("dotenv"); // Environment variables
const morgan = require("morgan"); // DB middleware
const exphbs = require("express-handlebars"); // Template engine

const connectDB = require("./config/db");

// Load config file
dotenv.config({ path: "./config/config.env" });

// Connect to DataBase
connectDB();

const app = express();

// Static Folder
app.use(express.static(path.join(__dirname, "public")));
// __dirname-> absolute path to curr dir

// For development purposes...
if (process.env.NODE_ENV === "development") {
  // Add morgan middleware
  app.use(morgan("dev")); // LogIn
}

// Handlebars middleware for templates
app.engine(".hbs", exphbs.engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

// Routes
app.use("/", require("./routes/index"));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port port ${PORT}`
  )
);
