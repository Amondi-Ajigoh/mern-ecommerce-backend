const mongoose = require('mongoose');
const Product = require('./server'); // Import Product model

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const products = [
  { name: 'Product 1', price: 30, image: 'https://via.placeholder.com/300' },
  { name: 'Product 2', price: 50, image: 'https://via.placeholder.com/300' },
  { name: 'Product 3', price: 20, image: 'https://via.placeholder.com/300' },
];

Product.insertMany(products)
  .then(() => {
    console.log('Products added');
    mongoose.connection.close();
  })
  .catch((err) => console.error(err));
