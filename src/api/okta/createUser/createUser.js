const axiosInstance = require('../../../axios-instance/axiosInstance').getAxiosInstance();

module.exports.createUser = (body) => {
  return axiosInstance.post(`/users?activate=true`, body);
};
