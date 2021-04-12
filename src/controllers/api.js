const apiService = require('../services/api.js');

const getApi = async (req, res) => {
  const { condition } = req.body;
  const api = await apiService.getApi(condition);
  return res.send(api);
};

module.exports = { getApi };
