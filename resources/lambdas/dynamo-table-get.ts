/* eslint-disable import/no-import-module-exports */
import { Callback, Context, APIGatewayEvent } from 'aws-lambda';
import * as AWS from 'aws-sdk';
import { wellFormedResponse } from '../response';

const dynamo = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: process.env.TABLE_NAME as string,
};

exports.handler = (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
) => {
  dynamo.scan(params, (err, data) => {
    callback(null, wellFormedResponse(data));
  });
};
export {};
