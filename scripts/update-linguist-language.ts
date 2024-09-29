import https from 'https';
import YAML from 'YAML';
import writeDataToFile from './fs-write';


const specUrl = 'https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml';

https.get(specUrl, (response) => {
  let responseData: string = '';
  response.on('data', (chunk) => {
    responseData += chunk;
  });

  response.on('end', () => {
    writeDataToFile('The yaml data of linguist-languages', './src/sources/linguist-languages.yaml', responseData)
    writeDataToFile('The json data of linguist-languages', './src/sources/linguist-languages.json', JSON.stringify(YAML.parse(responseData)))
  });

}).on('error', (error) => {
  console.error('Error downloading file:', error);
});