const apiService = require('../services/api.js');

const getApi = async (req, res) => {
  const { apiId } = req.params;
  const listQuery = req.query;
  const api = await apiService.getApi({ apiId, listQuery });
  return res.send({ status: 1, result: api, notSnakeCase: true });
};
const getApis = async (req, res) => {
  const apis = await apiService.getApis();
  return res.send({ status: 1, result: apis });
};
const createApi = async (req, res) => {
  const { name, apiId, dataStructure, schema } = req.body;
  const api = await apiService.createApi({
    name,
    apiId,
    dataStructure,
    schema,
  });
  return res.send({ status: 1, result: api });
};

const updateApi = async (req, res) => {
  const { id } = req.params;
  const updateFields = req.body;
  const api = await apiService.updateApi(id, updateFields);
  return res.send({ status: 1, result: api });
};

module.exports = { getApi, getApis, createApi, updateApi };
