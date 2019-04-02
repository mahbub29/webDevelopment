
//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name has been specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  rating: 10,
  review: "Peaches are so yummy!"
});

// fruit.save();

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const pineapple = new Fruit({
//   name: "Pineapple",
//   rating: 9,
//   review: "Very tropical!"
// });
// pineapple.save();

// const raspberry = new Fruit({
//   name: "Raspberry",
//   rating: 7,
//   review: "Good with certain things."
// });
// raspberry.save();

const strawberry = new Fruit({
  name: "Strawberry",
  rating: 9,
  review: "Everything strawberrry flavoured tastes nice."
});
// strawberry.save();

// const simplicity = new Person ({
//   name: "Simplicity",
//   age: 37,
//   favouriteFruit: pineapple
// });
// simplicity.save();

// const john = new Person ({
//   name: "John",
//   age: 54,
//   favouriteFruit: raspberry
// });
// john.save()

// const gemma = new Person ({
//   name: "Gemma",
//   age: 12
// });
// gemma.save();

// const kiwi = new Fruit ({
//   name: "Kiwi",
//   rating: 10,
//   review: "The best fruit!"
// });
//
// const orange = new Fruit ({
//   name: "Orange",
//   rating: 8,
//   review: "Great for juice!"
// });
//
// const banana = new Fruit ({
//   name: "Banana",
//   rating: 7,
//   review: "Nice start to the morning"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err) {
//     console.log(err);
//   } else {
//
//     mongoose.connection.close();
//
//     console.log("Successfully saved all fruits to fruitsDB");
//   }
// });



// Fruit.find(function(err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//
//     mongoose.connection.close();
//
//     fruits.forEach(function(fruit) {
//       console.log(fruit.name);
//     });
//   }
// });

// Fruit.updateOne({_id: "5c7587430cafbe075cff67bd"}, {name: "Peach"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document.");
//   }
// });

Person.updateOne({name: "Gemma"}, {favouriteFruit: strawberry}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully updated the document.");
  }
});

// Fruit.deleteOne({name: "Peach"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted document.");
//   }
// });

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
  }
});

// Person.deleteMany({name: "John"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted multiple documents.");
//   }
// });
