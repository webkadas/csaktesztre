import express from 'express';

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.json("HOME ALONE");
})

app.listen(PORT, ()=>{
    console.log(`Fut a szerver a http://localhost:${PORT}`);
})