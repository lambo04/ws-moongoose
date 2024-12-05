//require express
const express = require("express");
//require dotenv
require("dotenv").config();

//instance of express
const app = express();

const connectDB = require("./config/connectDB");
const Person = require("./models/Person");
connectDB();

//create One (CREATE)
const newPerson = {
  name: "",
  age: 0,
  email: "",
  favoriteFoods: ["", ""],
};
async function createPerson(newPerson) {
  try {
    const newP = await new Person(newPerson).save();
    console.log("the person is saved successfully", newP);
  } catch (error) {
    console.log(error);
  }
}
const arrayPersons = [
  {
    name: "",
    age: 0,
    email: "",
    favoriteFoods: ["", ""],
  },
  {
    name: "",
    age: 0,
    email: "",
    favoriteFoods: ["", ""],
  },]

async function insertPersons(arr) {
  try {
    const personToInsert = await Person.insertMany(arr);
    console.log("the list of person is", personToInsert);
  } catch (error) {
    console.log(error);
  }
}
// insertPersons(arrayPersons);

//find (READ)
async function showPersons() {
  try {
    const personList = await Person.find();
    console.log("the list of person is ", personList);
  } catch (error) {
    console.log(error);
  }
}
// showPersons();

async function findPerson(id) {
  try {
    const personToFind = await Person.findById(id);
    console.log("the person is", personToFind);
  } catch (error) {
    console.log(error);
  }
}
// findPerson("use id  person");


async function findPersonByName(name) {
  try {
    const personToFind = await Person.findOne({ name: name });
    console.log(`the person with this name: ${name}`, personToFind);
  } catch (error) {
    console.log(error);
  }
}
// findPersonByName("use name person");


// UPDATE
async function updateAge(id, age) {
  try {
    const personToUpdate = await Person.findByIdAndUpdate(
      id,
      { $set: { age: age } },
      { new: true }
    );
    console.log("age updated successfully", personToUpdate);
  } catch (error) {
    console.log(error);
  }
}
// updateAge("use id person", age updated);

async function updateFood(id, food) {
  try {
    const personToUpdate = await Person.findByIdAndUpdate(
      id,

      { $push: { favoriteFoods: food } },

      { new: true }
    );
    console.log(personToUpdate);
  } catch (error) {
    console.log(error);
  }
}
// updateFood("use id person", "food updated");

//DELETE
async function deletePerson(id) {
  try {
    const personDeleted = await Person.findByIdAndDelete(id);
    console.log("deleted", personDeleted);
  } catch (error) {
    console.log(error);
  }
}
// deletePerson("id person");

const PORT = process.env.PORT || 7000;

//server
app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`the serevr is running on http://127.0.0.1:${PORT}`);
});