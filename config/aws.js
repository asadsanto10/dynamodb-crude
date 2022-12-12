const AWS = require('aws-sdk');
// Set the region
AWS.config.update({
  region: 'us-west-2',
  endpoint: 'http://localhost:8000',
  // accessKeyId: 'asadsanto10',
  // secretAccessKey: 'asadsanto10',
});

const dynamoClient = new AWS.DynamoDB.DocumentClient({
  apiVersion: '2012-08-10',
});

module.exports = dynamoClient;
