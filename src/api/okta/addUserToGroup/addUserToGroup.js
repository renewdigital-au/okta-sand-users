const axiosInstance = require('../../../axios-instance/axiosInstance').getAxiosInstance();

module.exports.addUserToGroup = (userId, groupId, body) => {
  return axiosInstance.put(`/groups/${groupId}/users/${userId}`, body);
};
