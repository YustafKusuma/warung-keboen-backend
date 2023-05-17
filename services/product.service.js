const { mongoConfig } = require("../config");
const MongoDB = require("./mongodb.service");

const getOneProductById = async (productId) => {
  try {
    let product = await MongoDB.db
      .collection(mongoConfig.collection.PRODUCTS)
      .findOne({ id: productId });
    if (product) {
      return {
        status: true,
        message: "Product found successfully",
        data: product,
      };
    } else {
      return {
        status: false,
        message: "No Product found",
      };
    }
  } catch (error) {
    return {
      status: false,
      message: "Product finding failed",
      error: `Product finding failed : ${error?.message}`,
    };
  }
};

module.exports = { getOneProductById };