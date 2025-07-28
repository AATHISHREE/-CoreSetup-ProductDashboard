const express = require('express');
const router = express.Router();
const {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const verifyToken = require('../middleware/verifyToken');

router.get('/', verifyToken, getProducts);
router.post('/', verifyToken, addProduct);
router.put('/:id', verifyToken, updateProduct);
router.delete('/:id', verifyToken, deleteProduct);

module.exports = router;
