const express = require('express');

const app = express();

app.set("view engine","ejs");


app.get("/", function(req,res){
    const items = [
        {
            title: "D",
            message: "desenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message:"EJS usa javaScript para rendenrizar o HTML"
        },
        {
            title: "M",
            message:"Muito fácil de usar"
        },
        {
            title: "A",
            message:"Amorzinho"
        },
        {
            title: "I",
            message:"Install ejs"
        },
        {
            title: "S",
            message:"sintaxe simples"
        },
    
    ];
    res.render("pages/index", {
        qualitys:items,
    });
})



app.get("/sobre", function(req,res){
    res.render("pages/about");
})


console.log("o servidor está rodadando")

app.listen(8081);
