// Define and export data sources
import importedData from "./sources/linguist-extensions.json";
export const extensionColorsData = importedData;

// Define extensionType from extensionColorsData key
export type extensionType = keyof typeof extensionColorsData;

// Use array generics to deduce types, extract key-value definitions of extensions from extensionColorsData.
export const extensions = Object.keys(extensionColorsData) as Array<extensionType>;