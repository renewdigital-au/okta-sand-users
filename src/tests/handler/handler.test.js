const nock = require('nock');
const handler = require('../../../src/handler');
const { OKTA_BASE_URL, API_VERSION } = require('../../constants/constants');
const {
  HELLO,
  CREATE_USER,
  ACTIVATE_USER,
  DE_ACTIVATE_USER,
  DELETE_USER,
  GET_USER,
  LIST_USERS,
  ADD_USER_TO_GROUP
} = require('../consts/testConts');

nock.disableNetConnect();

describe('/hello handlers', () => {
  it('should receive hello payload', async () => {
    const received = await handler.hello(HELLO.event);
    const body = JSON.parse(received.body);

    expect(received.statusCode).toBe(200);
    expect(body.message).toBe(
      'Go Serverless v1.0! Your function executed successfully!'
    );
  });
});

describe('getUser', () => {
  it('should get user', async () => {
    nock(`${OKTA_BASE_URL}/${API_VERSION}`)
      .get('/users/00u3yhjuuGdhnrIoH5d6')
      .reply(200, GET_USER.respPayloadOktaData);

    const received = await handler.getUser(GET_USER.event);
    expect(received.statusCode).toBe(200);

    const respPayloadApiGateway = {
      message: 'getUser SUCCESS',
      data: GET_USER.respPayloadOktaData
    };

    expect(received.body).toEqual(JSON.stringify(respPayloadApiGateway));
  });
});

describe('createUser', () => {
  it('should create user', async () => {
    nock(`${OKTA_BASE_URL}/${API_VERSION}`)
      .post('/users')
      .query({ activate: 'true' })
      .reply(200, CREATE_USER.respPayloadOktaData);

    const received = await handler.createUser(CREATE_USER.event);
    expect(received.statusCode).toBe(200);

    const respPayloadApiGateway = { data: CREATE_USER.respPayloadOktaData };
    respPayloadApiGateway.message = 'createUser SUCCESS';
    expect(JSON.parse(received.body)).toStrictEqual(respPayloadApiGateway);
  });
});

describe('listUsers', () => {
  it('should list all user', async () => {
    nock(`${OKTA_BASE_URL}/${API_VERSION}`)
      .get('/users?limit=200')
      .reply(200, LIST_USERS.respPayloadOktaData);

    const received = await handler.listUsers(LIST_USERS.event);
    expect(received.statusCode).toBe(200);

    const respPayloadApiGateway = {
      message: 'listUsers SUCCESS',
      data: LIST_USERS.respPayloadOktaData
    };

    expect(received.body).toEqual(JSON.stringify(respPayloadApiGateway));
  });
});

describe('activateUser', () => {
  it('should get tokens to reactive user', async () => {
    nock(`${OKTA_BASE_URL}/${API_VERSION}`)
      .post('/users/11wasaracehorse22was12/lifecycle/activate?sendEmail=false')
      .reply(200, ACTIVATE_USER.respPayloadOktaData);

    const received = await handler.activateUser(ACTIVATE_USER.event);
    expect(received.statusCode).toBe(200);

    const respPayloadApiGateway = { data: ACTIVATE_USER.respPayloadOktaData };
    respPayloadApiGateway.message = 'activateUser SUCCESS';
    expect(JSON.parse(received.body)).toStrictEqual(respPayloadApiGateway);
  });
});

describe('deActivateUser', () => {
  it('should de-activate user', async () => {
    nock(`${OKTA_BASE_URL}/${API_VERSION}`)
      .post('/users/00u3yhjuuGdhnrIoH5d6/lifecycle/deactivate')
      .reply(200, DE_ACTIVATE_USER.respPayloadOktaData);

    const received = await handler.deActivateUser(DE_ACTIVATE_USER.event);
    expect(received.statusCode).toBe(200);

    const respPayloadApiGateway = {
      data: DE_ACTIVATE_USER.respPayloadOktaData
    };
    respPayloadApiGateway.message = 'deActivateUser SUCCESS';
    expect(JSON.parse(received.body)).toStrictEqual(respPayloadApiGateway);
  });
});

describe('deleteUser', () => {
  it('should delete user', async () => {
    // when deleting a user, we GET the user first.
    // also it may need deactivate before deleting, also in mock this
    nock(`${OKTA_BASE_URL}/${API_VERSION}`)
      .delete('/users/vbbeers100solar00000000')
      .reply(200, DELETE_USER.respPayloadOktaData)
      .get('/users/vbbeers100solar00000000')
      .reply(200, DELETE_USER.respGetUserOkta)
      .post('/users/vbbeers100solar00000000/lifecycle/deactivate')
      .reply(200, DE_ACTIVATE_USER.respPayloadOktaData);

    const received = await handler.deleteUser(DELETE_USER.event);
    expect(received.statusCode).toBe(200);

    const respPayloadApiGateway = { data: DELETE_USER.respPayloadOktaData };
    respPayloadApiGateway.message = 'deleteUser SUCCESS';
    expect(JSON.parse(received.body)).toStrictEqual(respPayloadApiGateway);
  });
});

describe('addUserToGroup', () => {
  it('add user to group', async () => {
    nock(`${OKTA_BASE_URL}/${API_VERSION}`)
      .put('/groups/1964beatle/users/1967sergeantpepperband')
      .reply(200, ADD_USER_TO_GROUP.respPayloadOktaData);

    const received = await handler.addUserToGroup(ADD_USER_TO_GROUP.event);
    expect(received.statusCode).toBe(200);

    const respPayloadApiGateway = {
      data: ADD_USER_TO_GROUP.respPayloadOktaData
    };
    respPayloadApiGateway.message = 'addUserToGroup SUCCESS';
    expect(JSON.parse(received.body)).toStrictEqual(respPayloadApiGateway);
  });
});
