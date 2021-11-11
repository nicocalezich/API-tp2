const express = require('express');
const router = express.Router();
const {getAllProductos} = require('../controllers/productos.controller')

let ids = 0
let productos = []

/* GET users listing. */
router.get('/', getAllProductos);

router.post('/', (req, res, next) =>{
    producto = req.body
    productos.push({"id": ids++,"producto": producto.producto, "tipo": producto.tipo, "cantidad": producto.cantidad})
    res.json(producto)
})

// revisar
router.delete('/:id', (req, res, next) => {
    producto = productos.find((e) => e.id == req.params.id)
    if (!producto){
        res.json({"error": "mensaje de error"}).status(404)
        return
    }
    const index = productos.indexOf(producto)
    productos.splice(index, 1)
    res.status(200)  
})

module.exports = router;
