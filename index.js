const express = require('express');
const app = express();

let products=[]

app.use(express.json())

app.get('/products', (req,res)=>{
    
    res.json(products)
})




app.listen(5000, ()=>{
    console.log(`Server is listening at 5000. http://localhost:5000/`)
})