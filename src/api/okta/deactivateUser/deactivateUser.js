const axiosInstance = require('../../../axios-instance/axiosInstance').getAxiosInstance();

module.exports.deactivateUser = (userId) => {
  return axiosInstance.post(`/users/${userId}/lifecycle/deactivate`);
};
