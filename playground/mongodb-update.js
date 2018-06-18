// const mongodbClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
     return  console.log('Some connection problem');
    }
    console.log('Connection established');

db.collection('Record').findOneAndUpdate(
    {
        _id : new ObjectID('5b26d5b2dc2d2631f4629b61')
    },{
        $set: {
            completed: true
        },
        $inc: {
            rollNo : 10
        }
     },
    {
        returnOriginal : false
    }).then((result) => {
        console.log(result);
    })
})

