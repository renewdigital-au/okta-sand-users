const { createUser } = require('./createUser/createUser');
const { getUser } = require('./getUser/getUser');
const { activateUser } = require('./activateUser/activateUser');
const { deactivateUser } = require('./deactivateUser/deactivateUser');
const { addUserToGroup } = require('./addUserToGroup/addUserToGroup');
const { deleteUser } = require('./deleteUser/deleteUser');
const { listUsers } = require('./listUsers/listUsers');
module.exports = {
  createUser,
  getUser,
  activateUser,
  deactivateUser,
  addUserToGroup,
  deleteUser,
  listUsers
};
