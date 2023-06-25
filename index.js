const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


var contactList = [
    {
        name: "Arpan",
        phone: "1111111111"
    },
    {
        name: "Tony Stark",
        phone: "1234567890"
    },
    {
        name: "Coding Ninjas",
        phone: "12131321321"
    }
]

app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "Let us play with ejs"
    });
});


app.get('/', function(req, res){


    // Contact.find({}, function(err, contacts){
    //     if(err){
    //         console.log("error in fetching contacts from db");
    //         return;
    //     }
    //     return res.render('home',{
    //         title: "Contact List",
    //         contact_list: contacts
    //     });

    // })


    Contact.find()
  .then((contacts) => {
    return res.render('home',{
                title: "Contact List",
                contact_list: contacts
            });
  })
  .catch((error) => {
    console.log("error in fetching contacts from db");
           return;
  });

});


  
app.post('/create-contact', function(req, res){
     
    // Contact.create({
    //     name: req.body.name,
    //     phone: req.body.phone
    // }, function(err, newContact){
    //     if(err){console.log('Error in creating a contact!')
    //         return;}
    //         console.log('******', newContact);
    //         return res.redirect('back');
    // })

    // Contact.create({ 
    //     name: req.body.name, 
    //     phone:req.body.phone 
    // },
    // )
    //    .then(result => {
    //     console.log(result)
    // })


    const newnumber = new Contact({
        name: req.body.name, 
        phone:req.body.phone 
      });
      
      newnumber.save()
        .then((newContact) => {
            console.log('******', newContact);
                    return res.redirect('back');
        })
        .catch((error) => {
            console.log('Error in creating a contact!')
                    return;
        });
  

});

app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})

function findIndexof(arr, phone) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].phone == phone) {
        return i;
      }
    }
    return -1;
  }

app.get('/delete-contact/', function(req, res){
    console.log(req.query);
    let phone = String(req.query.phone);

    // let contactindex = contactList.findIndex(i => i.phone == phone);
    const contactindex = findIndexof(contactList, phone);
// console.log(contactindex);
    console.log(contactindex);
    if(contactindex != -1){
        contactList.splice(contactindex, 1);
    }

    return res.redirect('back');
});
