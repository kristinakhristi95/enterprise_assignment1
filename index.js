const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.json({messsage:"Hello"})
})


app.listen(5000, ()=>{
    console.log(`Server is listening at 5000`)
})