const express = require("express");
const router = express.Router();
const {
  createSupplier,
  updateSupplier,
  deleteSupplier,
  getAllSuppliers,
  getISupplierByID,
} = require("../controllers/supplier-controller");
// profile
router.route("/createsupplier").post(createSupplier);
router.route("/updatesupplier").put(updateSupplier);
router.route("/deletesupplier/:id").delete(deleteSupplier);
router.route("/getallauppliers").get(getAllSuppliers);
router.route("/getIsupplierByID/:id").get(getISupplierByID);

module.exports = router;
