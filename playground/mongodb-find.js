const mongodbClient = require('mongodb').MongoClient;
mongodbClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
     return  console.log('Some connection problem');
    }
    console.log('Connection established');
    // db.collection('Todos').find({completed: false}).toArray().then((docs)=> {
    //     console.log(docs);
    // },(err) => {
    //     console.log('Error in finding',err);
    // })
   //  db.close();
   db.collection('Todos').find({text:'Walky Talky'}).count().then((count)=> {
    console.log(count);
},(err) => {
    console.log('Error in finding',err);
})
})

