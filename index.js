import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.json("HOME ALONE "+process.env.SECRET);

})

app.listen(PORT, ()=>{
    console.log(`Fut a szerver a http://localhost:${PORT}`);
})