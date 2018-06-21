var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Users} = require('./models/user');

var app = express();
app.use(bodyParser.json());
app.post('/todos',(req, res)=> {
console.log(req.body);
var todo = new Todo({
    text: req.body.text
});
todo.save().then((doc) => {
res.send(doc);
},(e)=> {
res.status(400).send(e);
})
});
app.get('/todos', (req,res) => {
    Todo.find().then((doc)=> {
      res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
})
app.listen(3000, () => {
console.log('Starting on port 3000');
});
// var TodoDoc = new Todo({
//     text:'Document'
// })
// var TodoDoc = new Todo({
//     email: "abman"
// })

// TodoDoc.save().then((doc)=>{
// console.log(JSON.stringify(doc,undefined,2));
// },(err) => {
//     console.log('Error present');
// });
