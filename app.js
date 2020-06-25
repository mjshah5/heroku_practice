const express = require("express");
const exphbs  = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static("public"));

app.listen(3002, () => {
    console.log("Server is running");
})

app.get("/",(req,res) => {
    res.render("index", {
        title: "Home Page"
    })
})