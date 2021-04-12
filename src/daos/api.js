const {
  Types: { ObjectId },
} = require('mongoose');
const Api = require('../models/api');

const findAll = async () => {
  return Api.find();
};
const findApi = async (condition) => {
  if (ObjectId.isValid(condition)) {
    const api = await Api.findById(condition);
    return api;
  }

  if (typeof condition === 'object' && condition !== null) {
    const api = await Api.findOne(condition);
    return api;
  }
  return null;
};

module.exports = { findApi, findAll };
