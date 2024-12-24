const express = require("express"); //import express
const app = new express(); //instance of express

const ejs = require("ejs"); //import ejs

app.set("view engine", 'ejs'); // set ejs as view engine
app.set("views", __dirname + "/views");

const navbar = [
  { link: "/employee", name: "Home" },
  { link: "/employee/form", name: "Add Employee" },
];

const basicRoute = require("./routes/basicRoutes")(navbar); // import routes folder
app.use("/employee", basicRoute);

app.use(express.static("public")); // express use public folder as the root directory for serving static assets.



app.listen(3000, () => {
  console.log("Server is running");
}); // start listening for incoming requests on port 3000
