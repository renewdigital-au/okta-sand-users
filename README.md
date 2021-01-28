# okta-sand-users
> **WARNING:** Instructoins below are a `half baked WIP`, written very late at night.

Development Starter Code (Serverless Framework) to manage basic Okta Users and Groups.

Currently this is just the API.

- Postman Collections have been include in this code base with enironments to:
  - Triggering Lambdas locally (`serverless-offline`)
  - Trigginer Lambdas form AWS API Gateway.

## Get started
- Ensure you AWS Account SDK is configured so you can deploy serverless.
1. `yarn install`
2. `sls deploy` and note the api key `oktaSandUsers`
  - add this to the Postman Environment var `{{xApiKey}}`
```sh
...
api keys:
  oktaSandUsers: abc123dummyapikey456
...
```
3. Login to Okta and get:
  - the `Okta domain` (for the App you want to manage with `okta-sand-users`)
  - The okta `SSWS Token`
4. Login to the AWS Account that you will deploy (`sls deploy`) `okta-sand-users` to.
5. Got to AWS `Systems Manager` >> `Parameter Store`
  - Create two `SecureString` parameters and assign with values from steps 2. & 3.
    - `/okta/dev/okta-base-url` =  `Okta domain`
    - `/okta/dev/okta-ssws-token` = `SSWS Token`

## Run lambdas locally
1. `yarn sls:offline`
  - note `offline: Key with token:` in ouput
```sh
...
offline: Key with token: abc123dummyapikey456
...
```
2. Add Key to to `x-api-key` heander

```sh

yarn sls:offline
```

