const mongoose = require('mongoose')


const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
  },
  favoriteFoods:[]
},
    {
        timestamps:true,
    }
);

const Person = mongoose.model("person", personSchema);
module.exports = Person