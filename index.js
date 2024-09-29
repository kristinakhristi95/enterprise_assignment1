const express = require('express');
const app = express();
const port = 5000;

let products=[]

// make 2 variable that will count the request for GET and POST
let getRequestCount = 0;
let postRequestCount = 0;

app.use(express.json())

// Handle GET requests
app.get('/products', (req,res)=>{
    getRequestCount++;
    console.log(`> products GET: received request`);
    console.log(`< products GET: sending response`);
    console.log(`Processed Request Count --> Get: ${getRequestCount}, Post: ${postRequestCount}`);
    res.json(products)
})

// Handle POST requests
app.post('/products',(req,res)=>{
    postRequestCount++;
    const bodyData = req.body;
    products.push(bodyData);
    console.log(`> products POST: received request`);
    console.log(`< products POST: sending response`);
    console.log(`Processed Request Count --> Get: ${getRequestCount}, Post: ${postRequestCount}`);
    res.json(bodyData);
})

// Handle DELETE requests
app.delete('/products',(req,res)=>{
    products = [] // Clear all products
    res.json({message:"All products deleted"})
})

// Start-up logging
app.listen(port, ()=>{
    console.log(`Server is listening at http://127.0.0.1:${port}`);
    console.log(`Endpoints:\nhttp://127.0.0.1:${port}/products method: GET, POST, DELETE`);
})