const buildOutput = (rnd) => ({
  body: '{"hello": "world"}',
  headers: {
    'Content-Type': ['application/json'],
    'X-Request-Id': [`rnd-${rnd}`]
  },
  statusCode: 200,
  statusText: 'OK'
});

exports.runAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = buildOutput(Math.random());
      resolve(result);
    }, 1000);
  });
};

exports.runSync = () => {
  const result = buildOutput(Math.random());
  return result;
};
