
const axiosInstance = require('../../../axios-instance/axiosInstance').getAxiosInstance();

module.exports.deleteUser = (userId) => {
  return axiosInstance.delete(`/users/${userId}`);
};
