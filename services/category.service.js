const { mongoConfig } = require("../config");
const MongoDB = require("./mongodb.service");

const getAllCategory = async () => {
    try {
        let categories = await MongoDB.db
        .collection(mongoConfig.collection.CATEGORIES)
        .find()
        .toArray();

    if (categories && categories?.length > 0) {
      return {
        status: true,
        message: "Categories found successfully",
        data: categories,
      };
    } else {
      return {
        status: false,
        message: "No categories found",
      };
    }
    } catch (error) {
        return {
            status: false,
            message: "Categories finding failed",
            error: `Categories finding failed : ${error?.message}`,
          };
    }
};

const getOneCategoryById = async (categoryId) => {
    try {
      let category = await MongoDB.db
        .collection(mongoConfig.collection.CATEGORIES)
        .aggregate([
          {
            $match: {
              id: categoryId
            },
          }, 
          {
            $lookup: {
              from: 'products', 
              localField: 'id', 
              foreignField: 'categoryId', 
              as: 'products'
            },
          },
        ])
        .toArray();
      if (category && category?.length > 0) {
        return {
          status: true,
          message: "Category found successfully",
          data: category[0],
        };
      } else {
        return {
          status: false,
          message: "No category found",
        };
      }
    } catch (error) {
      return {
        status: false,
        message: "Category finding failed",
        error: `Category finding failed : ${error?.message}`,
      };
    }
  };

module.exports = { getAllCategory, getOneCategoryById};