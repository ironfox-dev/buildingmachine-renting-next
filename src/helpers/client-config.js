const fs = require('fs');

(() => {
  console.log('Client name: ', process.env.CLIENT_NAME);
  fs.copyFile(
    `clients_config/${process.env.CLIENT_NAME.toLowerCase()}.config.json`,
    'src/components/client_config.json',
    (err) => {
      if (err) {
        console.error('Error: ', err.message);
      } else {
        console.log(
          `clients_config/${process.env.CLIENT_NAME.toLowerCase()}.config.json was copied to src/components/client_config.json`
        );
      }
    }
  );
})();
