// Define and export data sources
import importedData from "./sources/linguist-extensions.json";
export const extensionColorsData = importedData;
// Use array generics to deduce types, extract key-value definitions of extensions from extensionColorsData.
export const extensions = Object.keys(extensionColorsData);
