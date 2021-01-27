const axiosInstance = require('../../../axios-instance/axiosInstance').getAxiosInstance();

module.exports.getUser = (userId) => {
  return axiosInstance.get(`/users/${userId}`);
};
