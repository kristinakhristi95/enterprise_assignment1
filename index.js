const express = require('express');
const app = express();

let products=[]

app.use(express.json())

app.get('/products', (req,res)=>{
    
    res.json(products)
})

app.post('/products',(req,res)=>{

    const bodyData = req.body
    // console.log(bodyData)
    products.push(bodyData)
    res.json({messsage:"Post request"})
})


app.listen(5000, ()=>{
    console.log(`Server is listening at 5000. http://localhost:5000/`)
})