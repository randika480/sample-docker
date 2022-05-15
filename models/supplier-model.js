const mongoose = require("mongoose");

const SupplierSchema = new mongoose.Schema({
  supplierName: {
    type: String,
    required: [true, "Please provide supplier name"],
  },
  supplierEmail: {
    type: String,
    required: [true, "Please provide a email"],
  },
  supplierPhone1: {
    type: String,
    required: [true, "Please provide a phone number"],
  },
  supplierPhone2: {
    type: String,
  },
  supplierAddress: {
    type: String,
    required: [true, "Please provide a address"],
  },
  products: [
    {
      productName: {
        type: String,
      },
      productCode: {
        type: String,
      },
    },
  ],
});

const Supplier = mongoose.model("supplier", SupplierSchema);

module.exports = Supplier;
