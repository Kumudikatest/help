let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = function (request, response) {
    cognito_idp.listUsers({
        UserPoolId: "us-east-1_uVXTQInep",
        Limit: "10"
    }, function (error, data) {
        if (error) {
            // implement error handling logic here
            throw error;
        }
        // your logic goes within this block
    });

    response.send({ "message": "Successfully executed" });
}