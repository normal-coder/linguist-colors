import { languagesData } from "./languages";
import { extensionColorsData } from "./extensions";
import { converter } from "./converter";
const linguistColors = {
    getLangColor(programmingLanguage, format = "HEX") {
        const language = languagesData[programmingLanguage];
        return (!language || language.type !== "programming" || !('color' in language) || !language.color)
            ? null
            : converter(language.color, format);
    },
    getExtensionColor(ext, format = "HEX") {
        return extensionColorsData[ext][0]
            ? converter(extensionColorsData[ext][0], format)
            : null;
    }
};
export default linguistColors;
