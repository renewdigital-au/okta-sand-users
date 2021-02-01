# okta-sand-users

Starter Code (nodejs Serverless Framework) to manage basic Okta Users and Groups.

Currently this is just the API.

- Postman Collections have been include in this code base with enironments to:
  - Triggering Lambdas locally (`serverless-offline`)
  - Trigginer Lambdas form AWS API Gateway.

## Get started
### Install okta-sand-users and deploy to AWS
- Ensure you AWS Account SDK is configured so you can deploy serverless.
1. `yarn install`
2. `sls deploy` 
  - from terminal output note:
    - the api key `oktaSandUsers`
      - we will use it in Postman to access the AWS API Gateway to serverless app we just deployed.
    - the `API Getway endpoint url`
> See [Section:Setting up Postman Collections and Environment](#Setting-up-Postman-Collections-and-Environment)

## Get Okta domain and okta API token
1. Login to Okta
  - for the App you want to manage note the `Okta domain`
2. Create an `Okta API TOKENS`
  - Navigate to `API` >> `TOKENS` 
  - Click `Create Token` button:
    - name: `myOktaApiToken`
    - Copy the the token as Okta will **never display it again!**

## Setup AWS Systems Manage Parameter Store
1. Login to the AWS Account that we deployed to above.
2. Got to AWS `Systems Manager` >> `Parameter Store`
  - Create two `SecureString` parameters and assign with the values we got from Okta in the section above:
    - `/okta/dev/okta-base-url` =  `Okta domain`
    - `/okta/dev/okta-ssws-token` = `myOktaApiToken`

## Setting up Postman Collections and Environment
1. Open Postman
2. Import the postman collection under folder 
  - `postman-collection\okta-sand-users.postman_collection.json`
3. Import the postman environments
  - `postman-collection\environements\okta-sand AWS API Gateway lambdas.postman_environment.json`
  - `postman-collection\environements\okta-sand offline sls lambdas.postman_environment`

- For `okta-sand AWS API Gateway lambdas` postman environement populate the following:
  - `xApiKey` = `oktaSandUsers`
    - from `sls deployment` output
  - `testUserId`
    - the id of okta user you want collections to act on
  - `testGroupId`
    - the id of okta group that collections will assign user to.
  - `url` = `API Getway endpoint url`
    - The serverless apps depoloyment (`sls deploy`) above.
  - User Details, make up a user, EG:
    - `testUserFirstName` = `Boy`
    - `testUserLastName` = `Wonder`
    - `testUserEmail` = `boy.wonder@example.com`
    - `testUserMobile` = `555-333-888`
    - `testUserPassword` = `Pepsicola7`
      - must comply with password restrictions
        - EG: min one capital letter and min one numeric char

## Run lambdas locally
1. `yarn sls:offline`
  - from terminal output note:
    - `offline: Key with token:`
    - the `offline endpoint url`
      - Likely to be `http://localhost:3000`

- For `okta-sand AWS API Gateway lambdas` postman environement populate the following the same the above [Section:Setting up Postman Collections and Environment](#Setting-up-Postman-Collections-and-Environment)
  - **BUT** with the following variances:
    - `xApiKey` = `offline: Key with token:`
    - `url` = `offline endpoint url`



