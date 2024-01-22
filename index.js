const express=require('express');
const app = express(); // bu şekilde uygulama baştalılır

//template engine
app.set("views engine","ejs");
app.use(express.static('public'));
app.use(express.static('node_modules'));

const productData = [
    {id:1002, name:"iphone 14 pro", price:50000, imgUrl:"1002.webp" },
    {id:1003, name:"xioami redmi 11s", price:10000, imgUrl:"1003.png" },
    {id:1004, name:"samsung s16", price:25000 , imgUrl:"1004.jpg" },
];


//routes bilgisi ile yapldı.
app.use("/product/:id", function(req, res){
    const productId = parseInt(req.params.id);
    const product = productData.find(p=> p.id === productId);
    res.render("product-details.ejs", {product: product});
});

//aşağıdaki kullanım bir middleware dir.
app.use("/products", function(req, res){
    const productId = parseInt(req.params.id);
    const product = productData.find(p=> p.id === productId);
    res.render("products.ejs", {
        product: product,
        datas: productData
    });
});

app.use("/", function(req, res){
    res.render("index.ejs");
});


app.listen(3000, () => {
    console.log("listening on port 3000");
});
