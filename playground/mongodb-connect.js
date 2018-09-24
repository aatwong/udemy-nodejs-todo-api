//loading in libaray and connecting to db

// const MongoClient = require('mongodb').MongoClient;  //old
const {MongoClient, ObjectID} = require('mongodb'); //creates a variable called MongoCLient and ObjectID

var user = {name: 'andrew', age: 25};
//object destructuring:
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');


  //// db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  ////insert new doc into the Users collection (name, age, location string)
  // db.collection('Users').insertOne({
  //   name: 'Andrew',
  //   age: 22,
  //   location: 'Es Dee'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert user', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // })

  client.close();
});
