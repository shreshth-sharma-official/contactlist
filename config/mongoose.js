// const mongoose = require('mongoose');
// const uri = 'mongodb://localhost:27017/mydatabase'; // Replace 'mydatabase' with your actual database name or connection URI

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//     // Start your application or perform operations on the database
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

  //require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/contact_list_db');

//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error
db.on('error', function(err) { console.log(err.message); });

//up and running then print the message
db.once('open', function() {
  
    console.log("Successfully connected to the database");

});