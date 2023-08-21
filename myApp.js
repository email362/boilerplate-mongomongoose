require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  favoriteFoods: {
    type: [String]
  }
})

let Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (personObj, done) => {
  let personInstance = new Person(personObj);
  personInstance.save((err, data) => {
    if(err) {
      return console.error(err);
    }
    done(null, data);
  });
};
//  let callbackFunc = (someArg, someData) => {
//   console.log(someData);
// };
// createAndSavePerson( { name:"Chris", age:28, favoriteFoods:['chicken','pizza','sushi'] }, callbackFunc );

const createManyPeople = (arrayOfPeople, done) => {
  arrayOfPeople.forEach(person => {
    createAndSavePerson(person, done);
  });
};
// let callbackFunc = (nullArg, someData) => {
//   console.log(someData);
// };
// let people = [
//   {name:"Lorde",age:32,favoriteFoods:['shrimp','spaghetti']},
//   {name:"Liz",age:22,favoriteFoods:['hamburger','buffalo wings']},
//   {name:"Jorge",age:21,favoriteFoods:['pizza','fries']},
//   {name:"Nathan",age:26,favoriteFoods:['double double','sushi']}
// ];
// createManyPeople(people, callbackFunc);

const findPeopleByName = (personName, done) => {
  Person.find({name:personName}, (err, personFound) => {
    if(err) {
      console.error(err);
    }
    done(null, personFound);
  });
};
// findPeopleByName('Nathan', (nullArg, someData) => console.log(someData));
const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
