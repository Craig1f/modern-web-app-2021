/* eslint-disable import/no-import-module-exports */
// const AWS = require('aws-sdk');
import { Callback, Context, APIGatewayEvent } from 'aws-lambda';
import { wellFormedResponse } from '../response';

// const dynamo = new AWS.DynamoDB.DocumentClient();

// const params = {
//   TableName: process.env.TABLE_NAME,
//   /* Item properties will depend on your application concerns */
//   Item: {
//     id: '12345',
//     price: 100.0,
//   },
// };

exports.handler = (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
) => {
  console.log(event);
  console.log(context);
  console.log(event);
  callback(null, wellFormedResponse({ message: 'hello world' }));
};
export {};
