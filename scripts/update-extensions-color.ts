import writeDataToFile from './fs-write';
import { languagesData, languages } from '../src/languages';

const extensionColors: { [key: string]: string[] } = {};

for (let name in languages) {
  const language = languagesData[languages[name]];
  if ('color' in language && language.color && 'extensions' in language && language.extensions) {
    for (let extension of language.extensions) {
      if (!extensionColors[extension]) {
        extensionColors[extension] = [];
      }
      extensionColors[extension].push(language.color);
    }
  }
}

writeDataToFile('The color data of extensions', './src/sources/linguist-extensions.json', JSON.stringify(extensionColors))