// Define and export data sources
import importedLanguagesData from "./sources/linguist-languages.json";
export const languagesData = importedLanguagesData;
// Use array generics to deduce types, extract key-value definitions of languages from languagesData.
export const languages = Object.keys(languagesData);
