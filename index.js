try {
  console.log('ENV check:',
    'NODE_ENV=', process.env.NODE_ENV,
    'has GITHUB_TOKEN=', !!process.env.GITHUB_TOKEN,
    'has RSA_PRIVATE_KEY=', !!process.env.RSA_PRIVATE_KEY
  );

  const StaticmanAPI = require('./server');
  const api = new StaticmanAPI();

  api.start(port => {
    console.log('Staticman API running on port', port);
  });
} catch (e) {
  console.error(e);
}
