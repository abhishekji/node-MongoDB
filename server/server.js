var express = require('express');
var bodyParser = require('body-parser');
 // var {ObjectID} = require('mongodb');
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

// GET  /todos/1234324
app.get('/todos/:id', (req,res) => {
    var id = req.params.id;
    // if(!ObjectID.isValid(id)){
    //   return  res.status(404).send();
    // }
Todo.findById(id).then((doc) => {
if(!doc){
return res.status(404).send();
}
res.send(doc);
}).catch((e) => {
res.status(400).send();
})

});

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
