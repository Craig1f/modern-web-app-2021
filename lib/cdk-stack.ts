/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import * as cdk from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigw from '@aws-cdk/aws-apigateway';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // This creates a dynmo table that uses an id to look up values
    const table = new dynamodb.Table(this, 'Table', {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
    });

    // eslint-disable-next-line no-console
    console.log('table name', table.tableName);

    // Lambda is arbitrary code, and will run our Node code
    const handlerGet = new lambda.Function(this, 'GetDynamoValue', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'lambdas/dynamo-table-get.handler',
      code: lambda.Code.fromAsset('resources'),
      environment: {
        TABLE_NAME: table.tableName,
      },
    });

    const handlerSet = new lambda.Function(this, 'SetDynamoValue', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'lambdas/dynamo-table-set.handler',
      code: lambda.Code.fromAsset('resources'),
      environment: {
        TABLE_NAME: table.tableName,
      },
    });

    // Gives the lambda permission to read and write from the table.
    table.grantReadData(handlerGet);
    table.grantReadWriteData(handlerSet);

    // eslint-disable-next-line no-console
    console.log('Lambda', handlerGet, handlerSet);

    const api = new apigw.RestApi(this, 'api', {
      description: 'example api gateway',
      deployOptions: {
        stageName: 'dev',
      },
      // 👇 enable CORS
      defaultCorsPreflightOptions: {
        allowHeaders: [
          'Content-Type',
          'X-Amz-Date',
          'Authorization',
          'X-Api-Key',
        ],
        allowMethods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        allowCredentials: true,
        allowOrigins: ['*'],
      },
    });

    // 👇 add a /todos resource
    const tableRoute = api.root.addResource('table');

    tableRoute.addMethod(
      'GET',
      new apigw.LambdaIntegration(handlerGet, { proxy: true }),
    );

    // Pass an id to this route
    const tableByIdRoute = tableRoute.addResource('{id}');
    tableByIdRoute.addMethod(
      'PUT',
      new apigw.LambdaIntegration(handlerSet, { proxy: true }),
    );
  }
}
