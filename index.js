const express = require('express');
const app = express();

let products=[]

// make 2 variable that will count the request for GET and POST

app.use(express.json())

app.get('/products', (req,res)=>{
    console.log(`Received Request`)
    res.json(products)
})

app.post('/products',(req,res)=>{

    const bodyData = req.body
    console.log(`Sending Response`)
    products.push(bodyData)
    res.json(bodyData)
})

app.delete('/products',(req,res)=>{
    products = []
    res.json({message:"Data deleted"})
})

app.listen(5000, ()=>{
    console.log(`Server is listening at 5000. http://localhost:5000/`)
})