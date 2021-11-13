const headers = {
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Origin': '*',
};

// eslint-disable-next-line import/prefer-default-export
export const wellFormedResponse = (body: any, code = 200) => {
  const response = {
    body: JSON.stringify(body),
    headers,
    isBase64Encoded: false,
    statusCode: code,
  };

  // eslint-disable-next-line no-console
  console.log('response');
  // eslint-disable-next-line no-console
  console.log(response);
  return response;
};
