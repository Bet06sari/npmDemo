const express=require('express');
const app = express(); // bu şekilde uygulama baştalılır

//template engine
app.set("views engine","ejs");


//routes bilgisi ile yapldı.
app.use("/product/:id", function(req, res){
    res.render("product-details.ejs");
});

//aşağıdaki kullanım bir middleware dir.
app.use("/products", function(req, res){
    res.render("products.ejs");
});

app.use("/", function(req, res){
    res.render("index.ejs");
});


app.listen(3000, () => {
    console.log("listening on port 3000");
});
