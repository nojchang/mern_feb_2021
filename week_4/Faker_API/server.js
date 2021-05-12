const express = require('express');
const app = express();
const port = 8000;
const faker = require('faker');


// handle specific request!!!
//base url: localhost:8000/

class createrUser {
  constructor() {
    this.firstName = faker.name.findName();
    this.lastName =faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

let newUser = [
  new createrUser()
  
]

class createCompany {
  constructor() {
    this.companyName = faker.company.companyName();
    this.department = faker.commerce.department();
    this.streetAddress = faker.address.streetAddress();
    this.city = faker.address.city();
    this.state = faker.address.state();
    this.zip = faker.address.zipCode();
    this.county = faker.address.country();
  }
}

let newCompany = [
  new createCompany()
  
]



app.get("/api/users/new", (req, res) => {
  console.log("hello world people");
  
  res.json(newUser);
})


app.get("/api/companies/new", (req, res) => {
  res.json(newCompany);
})

app.get("/api/user/company", (req, res) => {
  res.json({ newUser, newCompany });
  
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );