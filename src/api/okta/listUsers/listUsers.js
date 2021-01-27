const axiosInstance = require('../../../axios-instance/axiosInstance').getAxiosInstance();

module.exports.listUsers = (limit = 200) => {
  return axiosInstance.get(`/users?limit=${limit}`);
};
