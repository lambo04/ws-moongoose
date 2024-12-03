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

async function insertPersons(arr) {
  try {
    const personToInsert = await Person.insertMany(arr);
    console.log("the list of person is", personToInsert);
  } catch (error) {
    console.log(error);
  }
}

//find (READ)
async function showPersons() {
  try {
    const personList = await Person.find();
    console.log("the list of person is ", personList);
  } catch (error) {
    console.log(error);
  }
}

async function findPerson(id) {
  try {
    const personToFind = await Person.findById(id);
    console.log("the person is", personToFind);
  } catch (error) {
    console.log(error);
  }
}


async function findPersonByName(name) {
  try {
    const personToFind = await Person.findOne({ name: name });
    console.log(`the person with this name: ${name}`, personToFind);
  } catch (error) {
    console.log(error);
  }
}


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

//DELETE
async function deletePerson(id) {
  try {
    const personDeleted = await Person.findByIdAndDelete(id);
    console.log("deleted", personDeleted);
  } catch (error) {
    console.log(error);
  }
}
const PORT = process.env.PORT || 7000;

//server
app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`the serevr is running on http://127.0.0.1:${PORT}`);
});