import express from 'express';
import {agregarJabones} from './datos.js'
import {con} from './db.js'
import { PORT } from './config.js';


const app = express()


app.get('/', (req, res)=>{
    res.json((3,'mistolin','mediano',10))
    agregarJabones(3,'mistolin','mediano',10)

})

app.get('/ping', async (req, res)=>{
    con.query(' SELECT * FROM productos', function(err,result,filed){
        if(err) throw err
        res.json(result)
        
    }) 
})
app.listen(PORT)
console.log('servidor on port ', PORT)
