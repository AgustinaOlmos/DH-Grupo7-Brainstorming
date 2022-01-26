const express = require('express')
const router = express.Router()

const apiProductsController = require('../../controllers/api/apiProductsController')

//Todos los productos
router.get('/products/all', apiProductsController.all)
// Todos los productos paginados
router.get('/products/page', apiProductsController.paginate)

//Productos por Categoria
router.get('/product/:id/', apiProductsController.details)

module.exports = router
