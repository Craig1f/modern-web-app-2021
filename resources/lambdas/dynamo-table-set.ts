/* eslint-disable import/no-import-module-exports */
import * as AWS from 'aws-sdk';
import { Callback, Context, APIGatewayEvent } from 'aws-lambda';

import { wellFormedResponse } from '../response';

const dynamo = new AWS.DynamoDB.DocumentClient();

// Most of the stuff involving dynamo is beyond the scope of this lesson. Just trust that we're setting some values here

exports.handler = (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
) => {
  const id = event.pathParameters!.id as string;
  const value = event.body as string;
  const params = {
    TableName: process.env.TABLE_NAME as string,
    Item: {
      id,
      value,
    },
  };

  // Put doesn't return the value that was just added. So I'll follow it up with a scan to get the contents of the table again.
  dynamo.put(params, () => {
    dynamo.scan(
      {
        TableName: process.env.TABLE_NAME as string,
      },
      (err, _data) => {
        callback(null, wellFormedResponse(_data));
      },
    );
  });
};
export {};
