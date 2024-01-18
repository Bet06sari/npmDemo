const express=require('express');
const app = express(); // bu şekilde uygulama baştalılır

//template engine
app.set("views engine","ejs");

const productData = [
    {id:1002, name:"iphone 14 pro", price:50000 },
    {id:1003, name:"xioami redmi", price:10000 },
    {id:1004, name:"samsung s16", price:25000 },
];


//routes bilgisi ile yapldı.
app.use("/product/:id", function(req, res){
    res.render("product-details.ejs");
});

//aşağıdaki kullanım bir middleware dir.
app.use("/products", function(req, res){
    res.render("products.ejs", {
        datas: productData
    });
});

app.use("/", function(req, res){
    res.render("index.ejs");
});


app.listen(3000, () => {
    console.log("listening on port 3000");
});
