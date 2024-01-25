import {con} from './db.js'


const agregarJabones = (producto_id, nombre_producto, descripción, cantidad)=>{
    const sql = 'INSERT INTO productos (producto_id, nombre_producto,descripción,cantidad) VALUES (?, ?, ?,?)';
    const values = [producto_id, nombre_producto, descripción, cantidad];
    con.query(sql, values, function(err,result,filed){
        if(err) throw err
        
    })     
}


export { agregarJabones};
export default { agregarJabones};