const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
var id = "5b2bf7bf55b8f6090881e7b8aaa";
// if(!ObjectID.isValid(id)){
//     console.log('Id is not valid');
// }
// Todo.find({
//     _id: id
// }).then( (todo) => {
//  console.log(todo);
// })

// Todo.findOne({
//     _id: id
// }).then( (todo) => {
// console.log(todo);
// });

// User.findById(id).then((doc) => {
// if(!doc){
//    return console.log('Id not found');
// }
// console.log(doc);
// }).catch((e) => {
// console.log(e);
// })
Todo.findById(id).then((doc) => {

if(!doc){
   return console.log('Id not found');
}
console.log(doc);
},(e) => {
    console.log(e);
});