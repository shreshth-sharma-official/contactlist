const express =require('express');
const port=8000;
const path=require('path');
const app=express();


app.set('view engine','ejs');
// app.set('view',path.join(__dirname,'view'));
app.set('views', './views');
app.use(express.urlencoded({extended: true}));

var contact=[
    {
        name:"shreshth",
        number:"7340578030"
    },
    {  
        name:"dad",
        number:"9928221785"
    }
];
// app.post('/create_contact',function(req,res){
//     contact.push({name:req.body.name,
//                 number:req.body.number});

//                 return res.redirect('back');
   
// })

app.get('/',function(req,res){

    // res.send('<h1>codeial</h1>');
    return res.render('home',{title:"codeial",contact: contact});
});

app.post('/create-contact', function(req, res){
    
    contact.push(req.body);
    return res.redirect('/');

});


app.listen(port,function(err){
    if(err)
    {
        console.log("error to load on port",port)
    }
    else
    {
        console.log("running on port",port);
    }
})