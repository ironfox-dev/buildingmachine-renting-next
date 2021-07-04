const https = require('https');
const fs = require('fs');

const namespaces = ['common', 'document', 'fleet', 'message', 'order', 'product', 'rental', 'settings', 'user', 'website'];
const languages = ['de', 'en'];
const projectId = '53175d5b-7d6f-4265-9b02-a55bafe2408a';
const apiPath = `https://api.locize.app/${projectId}/latest`;

const createDirectory = (path, index = 0) => {
  if (!fs.existsSync(path)) {
    const pathSplit = path.split('/');
    let createPath = '';

    for (let i = 0; i <= index; i += 1) {
      createPath += `${pathSplit[i]}/`;
    }

    if (!fs.existsSync(createPath)) {
      fs.mkdirSync(createPath);
    }

    createDirectory(path, index + 1);
  }
};

const downloadLanguage = async (language, namespace) => {
  let originalFileContent = {};

  const url = `${apiPath}/${language}/${namespace}`;
  const path = `src/locale/${language}`;
  const file = `${path}/${namespace}.json`;

  if (fs.existsSync(file)) {
    const fileContent = await fs.readFileSync(file, { encoding: 'utf8' });
    originalFileContent = JSON.parse(fileContent);
  }

  https
    .get(url, (res) => {
      if (res.statusCode === 200) {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          createDirectory(path);
          const newContent = Object.assign(originalFileContent, JSON.parse(data));

          fs.writeFile(file, JSON.stringify(newContent, null, 2), (err) => {
            if (err) {
              console.log('❌❌ Error:', err);
            }

            console.log('Success file saved 🎉🎉');
          });
        });
      } else {
        console.log(`Response code: ${res.statusCode}`);
      }
    })
    .on('error', (err) => {
      console.log('Error: ', err.message);
    });
};

(async () => {
  try {
    console.info('Starting download language files...');

    if (languages === undefined || languages.length === 0) {
      console.info('Missing languages');
      return;
    }

    if (namespaces === undefined || namespaces.length === 0) {
      console.info('Missing namespaces');
      return;
    }

    for (const language of languages) {
      for (const namespace of namespaces) {
        console.info(`Downloading ${language} > ${namespace}`);

        downloadLanguage(language, namespace);
      }
    }

    console.info('Done!');
  } catch (err) {
    console.info(err.message);
  }
})();
