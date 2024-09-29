// Define and export data sources
import importedLanguagesData from "./sources/linguist-languages.json";
export const languagesData = importedLanguagesData;

// Define languagesType from languagesData key
export type languagesType = keyof typeof languagesData;

// Use array generics to deduce types, extract key-value definitions of languages from languagesData.
export const languages = Object.keys(languagesData) as Array<languagesType>;