const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
    maxlength: [100, "Product name cannot exceed 100 characters"]
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    maxlength: [8, "Price cannot exceed 8 digits"],
    default: 0.0
  },
  description: {
    type: String,
    required: [true, "Please enter product description"]
  },
  ratings: {
    type: Number,
    default: 0
  },
  images: [
    {
      image: {
        type: String,
        required: true
      }
    }
  ],
  category: {
    type: String,
    required: [true, "Please enter product category"],
    enum: {
      values: [
        "Electronics",
        "Cameras",
        "Laptops",
        "Accessories",
        "Headphones",
        "Books",
        "Clothes/Shoes",
        "Beauty/Health",
        "Sports",
        "Outdoor",
        "Home",
        "Smartphones"
      ],
      message: "Please select correct category"
    }
  },
  seller: {
    type: String,
    required: [true, "Please enter product seller"]
  },
  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
    maxlength: [5, "Stock cannot exceed 5 characters"],
    default: 0
  },
  numOfReviews: {
    type: Number,
    default: 0
  },
  reviews: [
    {
      name: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      comment: {
        type: String,
        required: true
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
