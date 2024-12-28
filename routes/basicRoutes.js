const express = require("express"); //import express

const router = express.Router(); //new router instance in Express.js - allowing us to define routes separately for better organization.

router.use(express.json());

router.use(express.urlencoded({ extended: true }));

var data = [
  {
    id: 1,
    name: "Sam Wilson",
    designation: "Backend Developer",
    location: "Trivandrum",
    salary: "30000",
  },
  {
    id: 2,
    name: "Mary Smith",
    designation: "Web Developer",
    location: "Kochi",
    salary: 25000,
  },
  {
    id: 3,
    name: "Peter Jone",
    designation: "Software Developer",
    location: "Trivandrum",
    salary: 40000,
  },
];

function employeeRoutes(nav) {
  //Rendering home page
  router.get("/", (req, res) => {
    //use render to display in ejs
    res.render("home", {
      data,
      nav,
    });
  });

  //Rendering employee form page
  router.get("/form", (req, res) => {
    res.render("employeeForm", {
      nav,
    });
  });

  //Get Operation
  router.get("/employees", (req, res) => {
    res.send(data);
  });

  // //Post Operation
  // router.post("/add", (req, res) => {
  //   data.push(req.body);
  //   res.redirect("/employee");
  // });

  // Post Operation - Ensure unique IDs for new employees
  router.post("/add", (req, res) => {
    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1; // Generate a unique ID
    const newEmployee = { id: newId, ...req.body };
    data.push(newEmployee);
    res.redirect("/employee");
  });

  //Put Operation
  router.put("/edit/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.findIndex((employee) => employee.id === id);

    if (index === -1) {
      return res.status(404).send("Employee not found");
    }

    data[index] = { id, ...req.body }; // Update employee data
    res.status(200).send(data);
  });

  //Delete Operation
  router.delete("/remove/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.findIndex((employee) => employee.id === id);

    if (index === -1) {
      return res.status(404).send("Employee not found");
    }

    data.splice(index, 1); // Remove employee from the array
    res.status(200).send(data);
  });

  return router; //for to access all crud operations
}

module.exports = employeeRoutes; // function exported
