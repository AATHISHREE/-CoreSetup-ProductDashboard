const pool = require('../config/db');

// GET all products
exports.getProducts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ADD a product
exports.addProduct = async (req, res) => {
  const { name, category, stock } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO products (name, category, stock) VALUES ($1, $2, $3) RETURNING *',
      [name, category, stock]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE a product
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, category, stock } = req.body;
  try {
    const result = await pool.query(
      'UPDATE products SET name = $1, category = $2, stock = $3 WHERE id = $4 RETURNING *',
      [name, category, stock, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE a product (Admins only)
exports.deleteProduct = async (req, res) => {
  if (req.user.role !== 'Admin') {
    return res.status(403).json({ message: 'Only Admins can delete products' });
  }
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM products WHERE id = $1', [id]);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
