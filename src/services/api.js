const CustomError = require('../errors/CustomError');
const code = require('../errors/code');
const apiDao = require('../daos/api');

const getApi = async ({ apiId, listQuery }) => {
  const api = await apiDao.findApi({ apiId });
  if (!api) {
    return null;
  }
  let { schema } = api;
  let keyExist;
  if (Object.keys(listQuery).length) {
    Object.keys(listQuery).map((key) => {
      if (key === 'key') {
        keyExist = listQuery.key;
        return schema;
      }
      schema = schema.reduce((acc, cur) => {
        if (
          Object.prototype.hasOwnProperty.call(cur, key) &&
          cur[key] === listQuery[key]
        ) {
          return [...acc, cur];
        }
        return [...acc];
      }, []);
      return schema;
    });
    if (keyExist) {
      const result = schema.map((item) => {
        return item[keyExist];
      });
      return result;
    }
    const result = schema;
    return result;
  }
  const result = api;
  return result;
};

const createApi = async ({ name, apiId, dataStructure, schema }) => {
  const api = await apiDao.createApi({
    name,
    apiId,
    dataStructure,
    schema,
  });

  return api;
};

const getApis = async () => {
  const listApi = await apiDao.findAll();
  return listApi;
};

const updateApi = async (id, updateFields) => {
  const apiExist = await apiDao.findApi(id);
  if (!apiExist) {
    throw new CustomError(code.BAD_REQUEST, 'Api is not exists');
  }
  const api = await apiDao.updateApi(id, updateFields);
  return api;
};
module.exports = { getApi, createApi, getApis, updateApi };
