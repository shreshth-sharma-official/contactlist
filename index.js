const express =require('express');
const port=8000;
const app=express();

app.get('/',function(req,res){

    res.send('<h1>codeial</h1>');
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