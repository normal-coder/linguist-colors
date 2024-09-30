import { languagesType, languagesData } from "./languages";
import { extensionType, extensionColorsData } from "./extensions";
import { colorFormat, converter } from "./converter";

const linguistColors = {
    getLangColor(programmingLanguage: languagesType, format: colorFormat = "HEX") {
        const language = languagesData[programmingLanguage];
        return (!language || language.type !== "programming" || !('color' in language) || !language.color)
            ? null
            : converter(language.color, format);
    },

    getExtensionColor(ext: extensionType, format: colorFormat = "HEX") {
        return extensionColorsData[ext][0]
            ? converter(extensionColorsData[ext][0], format)
            : null
    }
}

export default linguistColors;