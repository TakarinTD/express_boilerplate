const {
  Types: { ObjectId },
} = require('mongoose');
const Api = require('../models/api');

const findAll = async () => {
  return Api.find();
};
const createApi = async ({ name, apiId, dataStructure, schema }) => {
  const api = await Api.create({
    name,
    apiId,
    dataStructure,
    schema,
  });
  return api;
};
const findApi = async (condition) => {
  if (ObjectId.isValid(condition)) {
    const api = await Api.findById(condition).lean();
    return api;
  }

  if (typeof condition === 'object' && condition !== null) {
    const api = await Api.findOne(condition);
    return api;
  }
  return null;
};

const getListApiId = async () => {
  const listApi = await Api.find();
  const listApiId = listApi.reduce((acc, cur) => {
    return [...acc, cur.apiId];
  }, []);
  return listApiId;
};

const updateApi = async (id, updateFields) => {
  const api = await Api.findByIdAndUpdate(id, updateFields, {
    new: false,
  });
  return api;
};

module.exports = { findApi, findAll, createApi, getListApiId, updateApi };
