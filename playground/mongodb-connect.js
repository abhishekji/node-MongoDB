const mongodbClient = require('mongodb').MongoClient;
mongodbClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
     return  console.log('Some connection problem');
    }
    console.log('Connection established');
    db.collection('Todos').insertOne({
        text:'Some text here',
        completed: false
    }, (err, result) => {
        if(err) {
        return console.log('Unable to insert too', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    })
  
    db.collection('Record').insertOne({
        name:'Abhi',
        class:'VI',
        rollNo: 123
    }, (err, result) => {
        if(err){
              return console.log('Unable to insert', err);
        }
        console.log(JSON.stringify(result.ops,undefined, 2));
    })
    db.close();
})

