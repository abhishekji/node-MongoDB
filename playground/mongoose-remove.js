var {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// Three methods for removing the data - 
// remove, 
// findOneAndRemove - removes the record from database but returns that record in result but not only for just Id
// findByIdAndRemove - removes the record from database but returns that record in result, this is only for id


// Todo.remove({}).then((result) => {
// console.log(result);
// });

// Todo.findByIdAndRemove('5b2d249bd744435d3efa98b9').then((doc) => {
// console.log(doc);
// });
Todo.findOneAndRemove({_id:'5b2d2951d744435d3efa9a31'}).then((doc) => {
    console.log(doc);
})