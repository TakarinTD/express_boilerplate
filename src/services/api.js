const axios = require('axios');
const CustomError = require('../errors/CustomError');
const errorCodes = require('../errors/code');
const apiDao = require('../daos/api');

const getApi = async (condition) => {
  const api = await apiDao.findApi({ apiId: condition });
  if (!api) throw new CustomError(errorCodes.NOT_FOUND);

  if (Object.keys(api.params).length) {
    console.log(api);
    Object.keys(api.params).forEach((key) => {
      api.params[key] = api.params[key].data;
    });
    console.log(api);
    const result = await axios({
      method: api.method,
      url: `http://${api.link}`,
      params: api.params,
    });
    return result.data;
  }
  if (Object.keys(api.body).length !== 0) {
    Object.keys(api.body).forEach((key) => {
      api.body[key] = api.body[key].data;
    });
    const result = await axios({
      method: api.method,
      url: `http://${api.link}`,
      data: api.body,
    });
    return result.data;
  }
  const result = await axios({
    method: api.method,
    url: `http://${api.link}`,
  });
  return result.data;
};

module.exports = { getApi };
