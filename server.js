const express = require('express');
const next = require('next');
const routes = require('./routes');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app
  .prepare()
  .then(() => {
    const server = express();

    if (!dev) {
      server.use((req, res, next) => {
        const proto = req.headers['x-forwarded-proto'];
        if (proto === 'https') {
          res.set({
            'Strict-Transport-Security': 'max-age=31557600',
          });
          return next();
        }
        res.redirect('https://' + req.headers.host + req.url);
      });
    }

    server.get('*', (req, res) => handler(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`Listening on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
