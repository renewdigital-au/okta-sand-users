module.exports.HELLO = {
  event: {
    body: null,
    headers: {
      'x-api-key': 'r2d2c3powookieexwing90210k9dog',
      'User-Agent': 'PostmanRuntime/7.26.8',
      Accept: '*/*',
      'Cache-Control': 'no-cache',
      'Postman-Token': '911000999-abc-bbc-pbc-005-555',
      Host: 'localhost:3000',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive'
    },
    httpMethod: 'GET',
    isBase64Encoded: false,
    multiValueHeaders: {
      'x-api-key': ['r2d2c3powookieexwing90210k9dog'],
      'User-Agent': ['PostmanRuntime/7.26.8'],
      Accept: ['*/*'],
      'Cache-Control': ['no-cache'],
      'Postman-Token': ['911000999-abc-bbc-pbc-005-555'],
      Host: ['localhost:3000'],
      'Accept-Encoding': ['gzip, deflate, br'],
      Connection: ['keep-alive']
    },
    multiValueQueryStringParameters: null,
    path: '/hello',
    pathParameters: null,
    queryStringParameters: null,
    requestContext: {
      accountId: 'offlineContext_accountId',
      apiId: 'offlineContext_apiId',
      authorizer: {
        claims: undefined,
        scopes: undefined,
        principalId: 'offlineContext_authorizer_principalId'
      },
      domainName: 'offlineContext_domainName',
      domainPrefix: 'offlineContext_domainPrefix',
      extended: 'cb1550rgvkawaskiwaynegardener',
      httpMethod: 'GET',
      identity: {
        accessKey: null,
        accountId: 'offlineContext_accountId',
        apiKey: 'offlineContext_apiKey',
        caller: 'offlineContext_caller',
        cognitoAuthenticationProvider:
          'offlineContext_cognitoAuthenticationProvider',
        cognitoAuthenticationType: 'offlineContext_cognitoAuthenticationType',
        cognitoIdentityId: 'offlineContext_cognitoIdentityId',
        cognitoIdentityPoolId: 'offlineContext_cognitoIdentityPoolId',
        principalOrgId: null,
        sourceIp: '127.0.0.1',
        user: 'offlineContext_user',
        userAgent: 'PostmanRuntime/7.26.8',
        userArn: 'offlineContext_userArn'
      },
      path: '/hello',
      protocol: 'HTTP/1.1',
      requestId: 'ckahha99redballoonswalkingonsunshine',
      requestTime: '25/Jan/2018:13:14:55 +1100',
      requestTimeEpoch: 1516886095,
      resourceId: 'offlineContext_resourceId',
      resourcePath: '/dev/hello',
      stage: 'dev'
    },
    resource: '/dev/hello',
    stageVariables: null
  },
  respPayload: {
    message: 'Go Serverless v1.0! Your function executed successfully!',
    input: {
      body: null,
      headers: {
        'x-api-key': 'r2d2c3powookieexwing90210k9dog',
        'User-Agent': 'PostmanRuntime/7.26.8',
        Accept: '*/*',
        'Cache-Control': 'no-cache',
        'Postman-Token': '911000999-abc-bbc-pbc-005-555',
        Host: 'localhost:3000',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive'
      },
      httpMethod: 'GET',
      isBase64Encoded: false,
      multiValueHeaders: {
        'x-api-key': ['r2d2c3powookieexwing90210k9dog'],
        'User-Agent': ['PostmanRuntime/7.26.8'],
        Accept: ['*/*'],
        'Cache-Control': ['no-cache'],
        'Postman-Token': ['911000999-abc-bbc-pbc-005-555'],
        Host: ['localhost:3000'],
        'Accept-Encoding': ['gzip, deflate, br'],
        Connection: ['keep-alive']
      },
      multiValueQueryStringParameters: null,
      path: '/hello',
      pathParameters: null,
      queryStringParameters: null,
      requestContext: {
        accountId: 'offlineContext_accountId',
        apiId: 'offlineContext_apiId',
        authorizer: {
          principalId: 'offlineContext_authorizer_principalId'
        },
        domainName: 'offlineContext_domainName',
        domainPrefix: 'offlineContext_domainPrefix',
        extendedRequestId: 'ckahha100redballoonswalkingonsunshine',
        httpMethod: 'GET',
        identity: {
          accessKey: null,
          accountId: 'offlineContext_accountId',
          apiKey: 'offlineContext_apiKey',
          caller: 'offlineContext_caller',
          cognitoAuthenticationProvider:
            'offlineContext_cognitoAuthenticationProvider',
          cognitoAuthenticationType: 'offlineContext_cognitoAuthenticationType',
          cognitoIdentityId: 'offlineContext_cognitoIdentityId',
          cognitoIdentityPoolId: 'offlineContext_cognitoIdentityPoolId',
          principalOrgId: null,
          sourceIp: '127.0.0.1',
          user: 'offlineContext_user',
          userAgent: 'PostmanRuntime/7.26.8',
          userArn: 'offlineContext_userArn'
        },
        path: '/hello',
        protocol: 'HTTP/1.1',
        requestId: 'lbwgooglytopspinner',
        requestTime: '25/Jan/2018:13:14:55 +1100',
        requestTimeEpoch: 1516886095,
        resourceId: 'offlineContext_resourceId',
        resourcePath: '/dev/hello',
        stage: 'dev'
      },
      resource: '/dev/hello',
      stageVariables: null
    }
  }
};

module.exports.CREATE_USER = {
  event: {
    body: {
      profile: {
        firstName: 'Boy',
        lastName: 'Wonder',
        email: 'boy.wonder@example.com',
        login: 'boy.wonder@example.com',
        mobilePhone: '555-333-888'
      },
      credentials: { password: [Object] }
    },
    headers: {
      'x-api-key': 'r2d2c3powookieexwing90210k9dog',
      'Content-Type': 'application/json',
      'User-Agent': 'PostmanRuntime/7.26.8',
      Accept: '*/*',
      'Cache-Control': 'no-cache',
      'Postman-Token': '911000999-abc-bbc-pbc-005-555',
      Host: 'localhost:3000',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
      'Content-Length': '248'
    },
    httpMethod: 'POST',
    isBase64Encoded: false,
    multiValueHeaders: {
      'x-api-key': ['r2d2c3powookieexwing90210k9dog'],
      'Content-Type': ['application/json'],
      'User-Agent': ['PostmanRuntime/7.26.8'],
      Accept: ['*/*'],
      'Cache-Control': ['no-cache'],
      'Postman-Token': ['911000999-abc-bbc-pbc-005-555'],
      Host: ['localhost:3000'],
      'Accept-Encoding': ['gzip, deflate, br'],
      Connection: ['keep-alive'],
      'Content-Length': ['248']
    },
    multiValueQueryStringParameters: null,
    path: '/users',
    pathParameters: null,
    queryStringParameters: null,
    requestContext: {
      accountId: 'offlineContext_accountId',
      apiId: 'offlineContext_apiId',
      authorizer: {
        claims: undefined,
        scopes: undefined,
        principalId: 'offlineContext_authorizer_principalId'
      },
      domainName: 'offlineContext_domainName',
      domainPrefix: 'offlineContext_domainPrefix',
      extendedRequestId: 'ccb850rgvkawaskiwaynegardener',
      httpMethod: 'POST',
      identity: {
        accessKey: null,
        accountId: 'offlineContext_accountId',
        apiKey: 'offlineContext_apiKey',
        caller: 'offlineContext_caller',
        cognitoAuthenticationProvider:
          'offlineContext_cognitoAuthenticationProvider',
        cognitoAuthenticationType: 'offlineContext_cognitoAuthenticationType',
        cognitoIdentityId: 'offlineContext_cognitoIdentityId',
        cognitoIdentityPoolId: 'offlineContext_cognitoIdentityPoolId',
        principalOrgId: null,
        sourceIp: '127.0.0.1',
        user: 'offlineContext_user',
        userAgent: 'PostmanRuntime/7.26.8',
        userArn: 'offlineContext_userArn'
      },
      path: '/users',
      protocol: 'HTTP/1.1',
      requestId: '999lbwgooglytopspinner',
      requestTime: '25/Jan/2018:13:14:55 +1100',
      requestTimeEpoch: 1516886095,
      resourceId: 'offlineContext_resourceId',
      resourcePath: '/dev/users',
      stage: 'dev'
    },
    resource: '/dev/users',
    stageVariables: null
  },
  respPayloadOktaData: {
    id: '11wasaracehorse22was12',
    status: 'ACTIVE',
    created: '2018-01-17T11:06:38.000Z',
    activated: '2018-01-17T11:06:38.000Z',
    statusChanged: '2018-01-17T11:06:38.000Z',
    lastLogin: null,
    lastUpdated: '2018-01-17T11:06:38.000Z',
    passwordChanged: '2018-01-17T11:06:38.000Z',
    type: { id: 'abcdefghijckm1234567' },
    profile: {
      firstName: 'Boy',
      lastName: 'Wonder',
      mobilePhone: '555-333-888',
      secondEmail: null,
      login: 'boy.wonder@example.com',
      email: 'boy.wonder@example.com'
    },
    credentials: {
      password: {},
      emails: [
        {
          value: 'boy.wonder@example.com',
          status: 'VERIFIED',
          type: 'PRIMARY'
        }
      ],
      provider: { type: 'OKTA', name: 'OKTA' }
    },
    _links: {
      suspend: {
        href:
          'https://example.okta.com/api/v1/users/11wasaracehorse22was12/lifecycle/suspend',
        method: 'POST'
      },
      schema: {
        href:
          'https://example.okta.com/api/v1/meta/schemas/user/1001dalmations0000000'
      },
      resetPassword: {
        href:
          'https://example.okta.com/api/v1/users/11wasaracehorse22was12/lifecycle/reset_password',
        method: 'POST'
      },
      forgotPassword: {
        href:
          'https://example.okta.com/api/v1/users/11wasaracehorse22was12/credentials/forgot_password',
        method: 'POST'
      },
      expirePassword: {
        href:
          'https://example.okta.com/api/v1/users/11wasaracehorse22was12/lifecycle/expire_password',
        method: 'POST'
      },
      changeRecoveryQuestion: {
        href:
          'https://example.okta.com/api/v1/users/11wasaracehorse22was12/credentials/change_recovery_question',
        method: 'POST'
      },
      self: {
        href: 'https://example.okta.com/api/v1/users/11wasaracehorse22was12'
      },
      type: {
        href:
          'https://example.okta.com/api/v1/meta/types/user/abcdefghijckm1234567'
      },
      changePassword: {
        href:
          'https://example.okta.com/api/v1/users/11wasaracehorse22was12/credentials/change_password',
        method: 'POST'
      },
      deactivate: {
        href:
          'https://example.okta.com/api/v1/users/11wasaracehorse22was12/lifecycle/deactivate',
        method: 'POST'
      }
    }
  }
};

module.exports.ACTIVATE_USER = {
  event: {
    body: null,
    headers: {
      'x-api-key': 'r2d2c3powookieexwing90210k9dog',
      'User-Agent': 'PostmanRuntime/7.26.8',
      Accept: '*/*',
      'Cache-Control': 'no-cache',
      'Postman-Token': '911000999-abc-bbc-pbc-005-555',
      Host: 'localhost:3000',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
      'Content-Length': '0'
    },
    httpMethod: 'POST',
    isBase64Encoded: false,
    multiValueHeaders: {
      'x-api-key': ['r2d2c3powookieexwing90210k9dog'],
      'User-Agent': ['PostmanRuntime/7.26.8'],
      Accept: ['*/*'],
      'Cache-Control': ['no-cache'],
      'Postman-Token': ['911000999-abc-bbc-pbc-005-555'],
      Host: ['localhost:3000'],
      'Accept-Encoding': ['gzip, deflate, br'],
      Connection: ['keep-alive'],
      'Content-Length': ['0']
    },
    multiValueQueryStringParameters: { sendEmail: ['false'] },
    path: '/users/11wasaracehorse22was12/lifecycle/activate',
    pathParameters: { userId: '11wasaracehorse22was12' },
    queryStringParameters: { sendEmail: 'false' },
    requestContext: {
      accountId: 'offlineContext_accountId',
      apiId: 'offlineContext_apiId',
      authorizer: {
        claims: undefined,
        scopes: undefined,
        principalId: 'offlineContext_authorizer_principalId'
      },
      domainName: 'offlineContext_domainName',
      domainPrefix: 'offlineContext_domainPrefix',
      extendedRequestId: 'cb950rgvkawaskiwaynegardener',
      httpMethod: 'POST',
      identity: {
        accessKey: null,
        accountId: 'offlineContext_accountId',
        apiKey: 'offlineContext_apiKey',
        caller: 'offlineContext_caller',
        cognitoAuthenticationProvider:
          'offlineContext_cognitoAuthenticationProvider',
        cognitoAuthenticationType: 'offlineContext_cognitoAuthenticationType',
        cognitoIdentityId: 'offlineContext_cognitoIdentityId',
        cognitoIdentityPoolId: 'offlineContext_cognitoIdentityPoolId',
        principalOrgId: null,
        sourceIp: '127.0.0.1',
        user: 'offlineContext_user',
        userAgent: 'PostmanRuntime/7.26.8',
        userArn: 'offlineContext_userArn'
      },
      path: '/users/11wasaracehorse22was12/lifecycle/activate',
      protocol: 'HTTP/1.1',
      requestId: '1000lbwgooglytopspinner',
      requestTime: '25/Jan/2018:18:02:48 +1100',
      requestTimeEpoch: 1516886095,
      resourceId: 'offlineContext_resourceId',
      resourcePath: '/dev/users/{userId}/lifecycle/activate',
      stage: 'dev'
    },
    resource: '/dev/users/{userId}/lifecycle/activate',
    stageVariables: null
  },
  respPayloadOktaData: {
    activationUrl: 'https://example.okta.com/welcome/12345sixseveneight9101112',
    activationToken: 'abcdefghjk123345667'
  }
};

module.exports.DE_ACTIVATE_USER = {
  event: {
    body: null,
    headers: {
      'x-api-key': 'r2d2c3powookieexwing90210k9dog',
      'User-Agent': 'PostmanRuntime/7.26.8',
      Accept: '*/*',
      'Cache-Control': 'no-cache',
      'Postman-Token': '911000999-abc-bbc-pbc-005-555',
      Host: 'localhost:3000',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
      'Content-Length': '0'
    },
    httpMethod: 'POST',
    isBase64Encoded: false,
    multiValueHeaders: {
      'x-api-key': ['r2d2c3powookieexwing90210k9dog'],
      'User-Agent': ['PostmanRuntime/7.26.8'],
      Accept: ['*/*'],
      'Cache-Control': ['no-cache'],
      'Postman-Token': ['911000999-abc-bbc-pbc-005-555'],
      Host: ['localhost:3000'],
      'Accept-Encoding': ['gzip, deflate, br'],
      Connection: ['keep-alive'],
      'Content-Length': ['0']
    },
    multiValueQueryStringParameters: null,
    path: '/users/00u3yhjuuGdhnrIoH5d6/lifecycle/deactivate',
    pathParameters: { userId: '00u3yhjuuGdhnrIoH5d6' },
    queryStringParameters: null,
    requestContext: {
      accountId: 'offlineContext_accountId',
      apiId: 'offlineContext_apiId',
      authorizer: {
        claims: undefined,
        scopes: undefined,
        principalId: 'offlineContext_authorizer_principalId'
      },
      domainName: 'offlineContext_domainName',
      domainPrefix: 'offlineContext_domainPrefix',
      extendedRequestId: 'cb1050rgvkawaskiwaynegardener',
      httpMethod: 'POST',
      identity: {
        accessKey: null,
        accountId: 'offlineContext_accountId',
        apiKey: 'offlineContext_apiKey',
        caller: 'offlineContext_caller',
        cognitoAuthenticationProvider:
          'offlineContext_cognitoAuthenticationProvider',
        cognitoAuthenticationType: 'offlineContext_cognitoAuthenticationType',
        cognitoIdentityId: 'offlineContext_cognitoIdentityId',
        cognitoIdentityPoolId: 'offlineContext_cognitoIdentityPoolId',
        principalOrgId: null,
        sourceIp: '127.0.0.1',
        user: 'offlineContext_user',
        userAgent: 'PostmanRuntime/7.26.8',
        userArn: 'offlineContext_userArn'
      },
      path: '/users/00u3yhjuuGdhnrIoH5d6/lifecycle/deactivate',
      protocol: 'HTTP/1.1',
      requestId: '1020lbwgooglytopspinner',
      requestTime: '25/Jan/2018:13:14:55 +1100',
      requestTimeEpoch: 1516886095,
      resourceId: 'offlineContext_resourceId',
      resourcePath: '/dev/users/{userId}/lifecycle/deactivate',
      stage: 'dev'
    },
    resource: '/dev/users/{userId}/lifecycle/deactivate',
    stageVariables: null
  },
  respPayloadOktaData: {} // should be empty, okta return emtpy obj on success deactivate
};

module.exports.DELETE_USER = {
  event: {
    body: null,
    headers: {
      'x-api-key': 'r2d2c3powookieexwing90210k9dog',
      'User-Agent': 'PostmanRuntime/7.26.8',
      Accept: '*/*',
      'Cache-Control': 'no-cache',
      'Postman-Token': '911000999-abc-bbc-pbc-005-555',
      Host: 'localhost:3000',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive'
    },
    httpMethod: 'DELETE',
    isBase64Encoded: false,
    multiValueHeaders: {
      'x-api-key': ['r2d2c3powookieexwing90210k9dog'],
      'User-Agent': ['PostmanRuntime/7.26.8'],
      Accept: ['*/*'],
      'Cache-Control': ['no-cache'],
      'Postman-Token': ['911000999-abc-bbc-pbc-005-555'],
      Host: ['localhost:3000'],
      'Accept-Encoding': ['gzip, deflate, br'],
      Connection: ['keep-alive']
    },
    multiValueQueryStringParameters: null,
    path: '/users/vbbeers100solar00000000',
    pathParameters: { userId: 'vbbeers100solar00000000' },
    queryStringParameters: null,
    requestContext: {
      accountId: 'offlineContext_accountId',
      apiId: 'offlineContext_apiId',
      authorizer: {
        claims: undefined,
        scopes: undefined,
        principalId: 'offlineContext_authorizer_principalId'
      },
      domainName: 'offlineContext_domainName',
      domainPrefix: 'offlineContext_domainPrefix',
      extendedRequestId: 'cb1150rgvkawaskiwaynegardener',
      httpMethod: 'DELETE',
      identity: {
        accessKey: null,
        accountId: 'offlineContext_accountId',
        apiKey: 'offlineContext_apiKey',
        caller: 'offlineContext_caller',
        cognitoAuthenticationProvider:
          'offlineContext_cognitoAuthenticationProvider',
        cognitoAuthenticationType: 'offlineContext_cognitoAuthenticationType',
        cognitoIdentityId: 'offlineContext_cognitoIdentityId',
        cognitoIdentityPoolId: 'offlineContext_cognitoIdentityPoolId',
        principalOrgId: null,
        sourceIp: '127.0.0.1',
        user: 'offlineContext_user',
        userAgent: 'PostmanRuntime/7.26.8',
        userArn: 'offlineContext_userArn'
      },
      path: '/users/vbbeers100solar00000000',
      protocol: 'HTTP/1.1',
      requestId: '1021lbwgooglytopspinner',
      requestTime: '25/Jan/2018:13:14:55 +1100',
      requestTimeEpoch: 1516886095,
      resourceId: 'offlineContext_resourceId',
      resourcePath: '/dev/users/{userId}',
      stage: 'dev'
    },
    resource: '/dev/users/{userId}',
    stageVariables: null
  },
  respGetUserOkta: {
    id: '54321thunderbirdsrgo1953',
    status: 'ACTIVE',
    created: '2018-01-18T11:39:02.000Z',
    activated: '2018-01-18T11:39:02.000Z',
    statusChanged: '2018-01-18T11:39:02.000Z',
    lastLogin: null,
    lastUpdated: '2018-01-18T11:39:02.000Z',
    passwordChanged: '2018-01-18T11:39:02.000Z',
    type: { id: 'abcdefghijckm1234567' },
    profile: {
      firstName: 'Boy',
      lastName: 'Wonder',
      mobilePhone: '555-333-888',
      secondEmail: null,
      login: 'boy.wonder@example.com',
      email: 'boy.wonder@example.com'
    },
    credentials: {
      password: {},
      emails: [[Object]],
      provider: { type: 'OKTA', name: 'OKTA' }
    },
    _links: {
      suspend: {
        href:
          'https://example.okta.com/api/v1/users/54321thunderbirdsrgo1953/lifecycle/suspend',
        method: 'POST'
      },
      schema: {
        href:
          'https://example.okta.com/api/v1/meta/schemas/user/1001dalmations0000000'
      },
      resetPassword: {
        href:
          'https://example.okta.com/api/v1/users/54321thunderbirdsrgo1953/lifecycle/reset_password',
        method: 'POST'
      },
      forgotPassword: {
        href:
          'https://example.okta.com/api/v1/users/54321thunderbirdsrgo1953/credentials/forgot_password',
        method: 'POST'
      },
      expirePassword: {
        href:
          'https://example.okta.com/api/v1/users/54321thunderbirdsrgo1953/lifecycle/expire_password',
        method: 'POST'
      },
      changeRecoveryQuestion: {
        href:
          'https://example.okta.com/api/v1/users/54321thunderbirdsrgo1953/credentials/change_recovery_question',
        method: 'POST'
      },
      self: {
        href: 'https://example.okta.com/api/v1/users/54321thunderbirdsrgo1953'
      },
      type: {
        href:
          'https://example.okta.com/api/v1/meta/types/user/abcdefghijckm1234567'
      },
      changePassword: {
        href:
          'https://example.okta.com/api/v1/users/54321thunderbirdsrgo1953/credentials/change_password',
        method: 'POST'
      },
      deactivate: {
        href:
          'https://example.okta.com/api/v1/users/54321thunderbirdsrgo1953/lifecycle/deactivate',
        method: 'POST'
      }
    }
  },
  respPayloadOktaData: ''
};

module.exports.GET_USER = {
  event: {
    body: null,
    headers: {
      'x-api-key': 'r2d2c3powookieexwing90210k9dog',
      'User-Agent': 'PostmanRuntime/7.26.8',
      Accept: '*/*',
      'Cache-Control': 'no-cache',
      'Postman-Token': '911000999-abc-bbc-pbc-005-555',
      Host: 'localhost:3000',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive'
    },
    httpMethod: 'GET',
    isBase64Encoded: false,
    multiValueHeaders: {
      'x-api-key': ['r2d2c3powookieexwing90210k9dog'],
      'User-Agent': ['PostmanRuntime/7.26.8'],
      Accept: ['*/*'],
      'Cache-Control': ['no-cache'],
      'Postman-Token': ['911000999-abc-bbc-pbc-005-555'],
      Host: ['localhost:3000'],
      'Accept-Encoding': ['gzip, deflate, br'],
      Connection: ['keep-alive']
    },
    multiValueQueryStringParameters: null,
    path: '/users/00u3yhjuuGdhnrIoH5d6',
    pathParameters: { userId: '00u3yhjuuGdhnrIoH5d6' },
    queryStringParameters: null,
    requestContext: {
      accountId: 'offlineContext_accountId',
      apiId: 'offlineContext_apiId',
      authorizer: {
        claims: undefined,
        scopes: undefined,
        principalId: 'offlineContext_authorizer_principalId'
      },
      domainName: 'offlineContext_domainName',
      domainPrefix: 'offlineContext_domainPrefix',
      extendedRequestId: 'cb1250rgvkawaskiwaynegardener',
      httpMethod: 'GET',
      identity: {
        accessKey: null,
        accountId: 'offlineContext_accountId',
        apiKey: 'offlineContext_apiKey',
        caller: 'offlineContext_caller',
        cognitoAuthenticationProvider:
          'offlineContext_cognitoAuthenticationProvider',
        cognitoAuthenticationType: 'offlineContext_cognitoAuthenticationType',
        cognitoIdentityId: 'offlineContext_cognitoIdentityId',
        cognitoIdentityPoolId: 'offlineContext_cognitoIdentityPoolId',
        principalOrgId: null,
        sourceIp: '127.0.0.1',
        user: 'offlineContext_user',
        userAgent: 'PostmanRuntime/7.26.8',
        userArn: 'offlineContext_userArn'
      },
      path: '/users/00u3yhjuuGdhnrIoH5d6',
      protocol: 'HTTP/1.1',
      requestId: '1022lbwgooglytopspinner',
      requestTime: '25/Jan/2018:13:14:55 +1100',
      requestTimeEpoch: 1516886095,
      resourceId: 'offlineContext_resourceId',
      resourcePath: '/dev/users/{userId}',
      stage: 'dev'
    },
    resource: '/dev/users/{userId}',
    stageVariables: null
  },
  respPayloadOktaData: {
    id: '54321thunderbirdsrgo1953',
    status: 'ACTIVE',
    created: '2018-01-18T11:39:02.000Z',
    activated: '2018-01-18T11:39:02.000Z',
    statusChanged: '2018-01-18T11:39:02.000Z',
    lastLogin: null,
    lastUpdated: '2018-01-18T11:39:02.000Z',
    passwordChanged: '2018-01-18T11:39:02.000Z',
    type: { id: 'abcdefghijckm1234567' },
    profile: {
      firstName: 'Boy',
      lastName: 'Wonder',
      mobilePhone: '555-333-888',
      secondEmail: null,
      login: 'boy.wonder@example.com',
      email: 'boy.wonder@example.com'
    },
    credentials: {
      password: {},
      emails: [[Object]],
      provider: { type: 'OKTA', name: 'OKTA' }
    },
    _links: {
      suspend: {
        href:
          'https://example.okta.com/api/v1/users/54321thunderbirdsrgo1953/lifecycle/suspend',
        method: 'POST'
      },
      schema: {
        href:
          'https://example.okta.com/api/v1/meta/schemas/user/1001dalmations0000000'
      },
      resetPassword: {
        href:
          'https://example.okta.com/api/v1/users/54321thunderbirdsrgo1953/lifecycle/reset_password',
        method: 'POST'
      },
      forgotPassword: {
        href:
          'https://example.okta.com/api/v1/users/54321thunderbirdsrgo1953/credentials/forgot_password',
        method: 'POST'
      },
      expirePassword: {
        href:
          'https://example.okta.com/api/v1/users/54321thunderbirdsrgo1953/lifecycle/expire_password',
        method: 'POST'
      },
      changeRecoveryQuestion: {
        href:
          'https://example.okta.com/api/v1/users/54321thunderbirdsrgo1953/credentials/change_recovery_question',
        method: 'POST'
      },
      self: {
        href: 'https://example.okta.com/api/v1/users/54321thunderbirdsrgo1953'
      },
      type: {
        href:
          'https://example.okta.com/api/v1/meta/types/user/abcdefghijckm1234567'
      },
      changePassword: {
        href:
          'https://example.okta.com/api/v1/users/54321thunderbirdsrgo1953/credentials/change_password',
        method: 'POST'
      },
      deactivate: {
        href:
          'https://example.okta.com/api/v1/users/54321thunderbirdsrgo1953/lifecycle/deactivate',
        method: 'POST'
      }
    }
  }
};

module.exports.LIST_USERS = {
  event: {
    body: null,
    headers: {
      'x-api-key': 'r2d2c3powookieexwing90210k9dog',
      'User-Agent': 'PostmanRuntime/7.26.8',
      Accept: '*/*',
      'Cache-Control': 'no-cache',
      'Postman-Token': '911000999-abc-bbc-pbc-005-555',
      Host: 'localhost:3000',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive'
    },
    httpMethod: 'GET',
    isBase64Encoded: false,
    multiValueHeaders: {
      'x-api-key': ['r2d2c3powookieexwing90210k9dog'],
      'User-Agent': ['PostmanRuntime/7.26.8'],
      Accept: ['*/*'],
      'Cache-Control': ['no-cache'],
      'Postman-Token': ['911000999-abc-bbc-pbc-005-555'],
      Host: ['localhost:3000'],
      'Accept-Encoding': ['gzip, deflate, br'],
      Connection: ['keep-alive']
    },
    multiValueQueryStringParameters: null,
    path: '/users',
    pathParameters: null,
    queryStringParameters: null,
    requestContext: {
      accountId: 'offlineContext_accountId',
      apiId: 'offlineContext_apiId',
      authorizer: {
        claims: undefined,
        scopes: undefined,
        principalId: 'offlineContext_authorizer_principalId'
      },
      domainName: 'offlineContext_domainName',
      domainPrefix: 'offlineContext_domainPrefix',
      extendedRequestId: 'cb1350rgvkawaskiwaynegardener',
      httpMethod: 'GET',
      identity: {
        accessKey: null,
        accountId: 'offlineContext_accountId',
        apiKey: 'offlineContext_apiKey',
        caller: 'offlineContext_caller',
        cognitoAuthenticationProvider:
          'offlineContext_cognitoAuthenticationProvider',
        cognitoAuthenticationType: 'offlineContext_cognitoAuthenticationType',
        cognitoIdentityId: 'offlineContext_cognitoIdentityId',
        cognitoIdentityPoolId: 'offlineContext_cognitoIdentityPoolId',
        principalOrgId: null,
        sourceIp: '127.0.0.1',
        user: 'offlineContext_user',
        userAgent: 'PostmanRuntime/7.26.8',
        userArn: 'offlineContext_userArn'
      },
      path: '/users',
      protocol: 'HTTP/1.1',
      requestId: '1023lbwgooglytopspinner',
      requestTime: '19/Jan/2018:13:14:55 +1100',
      requestTimeEpoch: 1516886095,
      resourceId: 'offlineContext_resourceId',
      resourcePath: '/dev/users',
      stage: 'dev'
    },
    resource: '/dev/users',
    stageVariables: null
  },
  respPayloadOktaData: [
    {
      id: 'bgs1970thewho1960theclash',
      status: 'ACTIVE',
      created: '2018-01-06T13:40:06.000Z',
      activated: '2018-01-06T13:40:07.000Z',
      statusChanged: '2018-01-06T13:40:07.000Z',
      lastLogin: null,
      lastUpdated: '2018-01-06T13:40:07.000Z',
      passwordChanged: '2018-01-06T13:40:07.000Z',
      type: { id: 'abcdefghijckm1234567' },
      profile: {
        firstName: 'Peter',
        lastName: 'Brocke',
        mobilePhone: '555-555-444',
        secondEmail: null,
        login: 'peter.brocke@example.com',
        email: 'peter.brocke@example.com'
      },
      credentials: { password: {}, emails: [Array], provider: [Object] },
      _links: { self: [Object] }
    },
    {
      id: 'bgs1970thewho1960theclash',
      status: 'ACTIVE',
      created: '2018-01-17T07:32:17.000Z',
      activated: '2018-01-17T07:32:17.000Z',
      statusChanged: '2018-01-17T07:32:17.000Z',
      lastLogin: null,
      lastUpdated: '2018-01-17T07:32:17.000Z',
      passwordChanged: '2018-01-17T07:32:17.000Z',
      type: { id: 'abcdefghijckm1234567' },
      profile: {
        firstName: 'Nick',
        lastName: 'Cave',
        mobilePhone: '555-999-1388',
        secondEmail: null,
        login: 'nick.cave@example.com',
        email: 'nick.cave@example.com'
      },
      credentials: { password: {}, emails: [Array], provider: [Object] },
      _links: { self: [Object] }
    }
  ]
};

module.exports.ADD_USER_TO_GROUP = {
  event: {
    body: null,
    headers: {
      'x-api-key': 'r2d2c3powookieexwing90210k9dog',
      'User-Agent': 'PostmanRuntime/7.26.8',
      Accept: '*/*',
      'Cache-Control': 'no-cache',
      'Postman-Token': '911000999-abc-bbc-pbc-005-555',
      Host: 'localhost:3000',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
      'Content-Length': '0'
    },
    httpMethod: 'PUT',
    isBase64Encoded: false,
    multiValueHeaders: {
      'x-api-key': ['r2d2c3powookieexwing90210k9dog'],
      'User-Agent': ['PostmanRuntime/7.26.8'],
      Accept: ['*/*'],
      'Cache-Control': ['no-cache'],
      'Postman-Token': ['911000999-abc-bbc-pbc-005-555'],
      Host: ['localhost:3000'],
      'Accept-Encoding': ['gzip, deflate, br'],
      Connection: ['keep-alive'],
      'Content-Length': ['0']
    },
    multiValueQueryStringParameters: null,
    path: '/groups/00g2rgi9klNpS1uZm5d6/users/1967sergeantpepperband',
    pathParameters: {
      groupId: '1964beatle',
      userId: '1967sergeantpepperband'
    },
    queryStringParameters: null,
    requestContext: {
      accountId: 'offlineContext_accountId',
      apiId: 'offlineContext_apiId',
      authorizer: {
        claims: undefined,
        scopes: undefined,
        principalId: 'offlineContext_authorizer_principalId'
      },
      domainName: 'offlineContext_domainName',
      domainPrefix: 'offlineContext_domainPrefix',
      extendedRequestId: 'cb1450rgvkawaskiwaynegardener',
      httpMethod: 'PUT',
      identity: {
        accessKey: null,
        accountId: 'offlineContext_accountId',
        apiKey: 'offlineContext_apiKey',
        caller: 'offlineContext_caller',
        cognitoAuthenticationProvider:
          'offlineContext_cognitoAuthenticationProvider',
        cognitoAuthenticationType: 'offlineContext_cognitoAuthenticationType',
        cognitoIdentityId: 'offlineContext_cognitoIdentityId',
        cognitoIdentityPoolId: 'offlineContext_cognitoIdentityPoolId',
        principalOrgId: null,
        sourceIp: '127.0.0.1',
        user: 'offlineContext_user',
        userAgent: 'PostmanRuntime/7.26.8',
        userArn: 'offlineContext_userArn'
      },
      path: '/groups/1964beatle/users/1967sergeantpepperband',
      protocol: 'HTTP/1.1',
      requestId: '1024lbwgooglytopspinner',
      requestTime: '20/Jan/2018:13:14:55 +1100',
      requestTimeEpoch: 1516886095,
      resourceId: 'offlineContext_resourceId',
      resourcePath: '/dev/groups/{groupId}/users/{userId}',
      stage: 'dev'
    },
    resource: '/dev/groups/{groupId}/users/{userId}',
    stageVariables: null
  },
  respPayloadOktaData: ''
};
