import mysql2 from 'mysql2'
//import { createPool} from 'mysql2/promise'
import {
        DB_HOST,
        DB_NAME,
        DB_PASSWORD,
        DB_PORT,
        DB_USER
} from './config.js'


export const con = mysql2.createConnection({
        host:DB_HOST,
        user: DB_USER,
        password:DB_PASSWORD,
        port:DB_PORT,
        database: DB_NAME

})

//export const pool = createPool({
      //  host:'localhost',
     //   user: 'jabones',
    //    password:'s0177',
   //     port:3306,
   //     database: 'productos'

//s})




