const express = require('express');
const app = express();
const port = 5000;

let products=[]

// make 2 variable that will count the request for GET and POST
let getRequestCount = 0;
let postRequestCount = 0;

app.use(express.json())

app.get('/products', (req,res)=>{
    getRequestCount++;
    console.log(`Received Request`)
    res.json(products)
})

app.post('/products',(req,res)=>{

    postRequestCount++;
    const bodyData = req.body
    console.log(bodyData)
    console.log(`Sending Response`)
    products.push(bodyData)
    res.json(bodyData)
})

app.delete('/products',(req,res)=>{
    products = []
    res.json({message:"All products deleted"})
})

// Start-up logging
app.listen(port, ()=>{
    console.log(`Server is listening at http://127.0.0.1:${port}`);
    console.log(`Endpoints:\nhttp://127.0.0.1:${port}/products method: GET, POST, DELETE`);
})