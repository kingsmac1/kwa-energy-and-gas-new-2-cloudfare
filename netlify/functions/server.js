const path = require("path");

process.chdir(path.join(__dirname, "../.."));

module.exports.handler = async (event) => {
  const { default: server } = await import("../../dist/server/server.js");

  const url = `https://${event.headers.host}${event.path}${
    event.queryStringParameters
      ? "?" + new URLSearchParams(event.queryStringParameters).toString()
      : ""
  }`;

  const request = new Request(url, {
    method: event.httpMethod,
    headers: event.headers,
    body: event.body ? event.body : undefined,
  });

  const response = await server.fetch(request);

  const responseHeaders = {};
  response.headers.forEach((value, key) => {
    responseHeaders[key] = value;
  });

  return {
    statusCode: response.status,
    headers: responseHeaders,
    body: await response.text(),
  };
};