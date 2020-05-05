const cors_proxy = require('./cors-anywhere/cors-anywhere');

cors_proxy.createServer({
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: [
        'cookie',
        'cookie2',
        'x-heroku-queue-wait-time',
        'x-heroku-queue-depth',
        'x-heroku-dynos-in-use',
        'x-request-start'
    ],
    redirectSameOrigin: true,
    httpProxyOptions: {
        xfwd: false
    }
}).listen((process.env.PORT || 5000), (process.env.HOST || '0.0.0.0'), () => console.log('Running CORS Anywhere on localhost:5000'));
