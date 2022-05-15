const SupplierModel = require("../models/supplier-model");

exports.createSupplier = async (req, res) => {
  const {
    supplierName,
    supplierEmail,
    supplierPhone1,
    supplierPhone2,
    supplierAddress,
    // productName,
    // productCode,
    products,
  } = req.body;

  try {
    const Supplier = await SupplierModel.create({
      supplierName,
      supplierEmail,
      supplierPhone1,
      supplierPhone2,
      supplierAddress,
      products,
      // Products: {
      //   productName: productName,
      //   productCode: productCode,
      // },
    });

    res.status(201).json({ success: true, Supplier: Supplier });
  } catch (error) {
    res.status(500).json({
      success: false,
      desc: "Error in creating Supplier-" + error,
    });
  }
};

exports.updateSupplier = async (req, res) => {
  let {
    supplierID,
    supplierName,
    supplierEmail,
    supplierPhone1,
    supplierPhone2,
    supplierAddress,
    productName,
    productCode,
  } = req.body;

  try {
    const updatedSupplier = await SupplierModel.findOneAndUpdate(
      { _id: supplierID },
      {
        $set: {
          supplierName,
          supplierEmail,
          supplierPhone1,
          supplierPhone2,
          supplierAddress,
        },
      },
      {
        new: true,
        upsert: false,
        omitUndefined: true,
      }
    );
    res.status(200).send({
      desc: "Supplier updated successfully",
      updatedSupplier,
    });
  } catch (error) {
    res.status(500).json({
      error,
      desc: "Error occurred in update supplier",
    });
  }
};

exports.deleteSupplier = async (req, res) => {
  const supplierID = req.params.id;
  try {
    const deletedSupplier = await SupplierModel.deleteOne({ _id: supplierID });
    res
      .status(202)
      .json({ desc: "Supplier deleted successfully", deletedSupplier });
  } catch (error) {
    res.status(500).json({
      error,
      desc: "Error occurred in delete Supplier",
    });
  }
};

exports.getAllSuppliers = async (req, res) => {
  try {
    const allSuppliers = await SupplierModel.find();
    res.status(200).send({
      allSuppliers,
    });
  } catch (error) {
    res.status(500).json({
      error,
      desc: "Error occurred in get all Suppliers",
    });
  }
};

exports.getISupplierByID = async (req, res) => {
  const supplierID = req.params.id;
  try {
    const supplier = await SupplierModel.findOne({ _id: supplierID });
    res.status(200).send({
      supplier,
    });
  } catch (error) {
    res.status(500).json({
      error,
      desc: "Error occurred in getSupplierByID",
    });
  }
};
