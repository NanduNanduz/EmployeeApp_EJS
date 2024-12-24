const express = require("express"); //import express

const router = express.Router(); //new router instance in Express.js - allowing us to define routes separately for better organization.

router.use(express.json());

router.use(express.urlencoded({ extended: true }));

var data = [
  {
    id: 1,
    name: "Arun",
    designation: "Backend Developer",
    location: "Trivandrum",
    salary: "30000",
  },
  {
    id: 2,
    name: "Hima",
    designation: "Web Developer",
    location: "Kochi",
    salary: 25000,
  },
  {
    id: 3,
    name: "Mahi",
    designation: "Software Developer",
    location: "Trivandrum",
    salary: 40000,
  },
];




function employeeRoutes(nav){

  //Rendering home page
  router.get("/", (req, res) => {
    res.render("home", {
      data,
      nav,
    });
  });

  return router; //for to access all crud operations
}






module.exports = employeeRoutes;
