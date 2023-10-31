const { loginService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const login = async (req, res) => {
  const { email } = req.body;
  const { codeStatus, data } = await loginService.login(email);
  res.status(mapStatusHTTP(codeStatus)).json(data);
};

module.exports = {
  login,
};