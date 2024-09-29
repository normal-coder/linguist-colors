import { languagesType, languagesData } from "./languages";
import { hexToRGB, RGBToString, RGBToHSL } from "./converter";

type ColorFormat = "HEX" | "RGB" | "HSL";

export default function getProgrammingLangColor(programmingLanguage: languagesType, format: ColorFormat = "HEX") {
    const language = languagesData[programmingLanguage];
    if (!language || language.type !== "programming" || !('color' in language) || !language.color) {
        return null;
    }

    const color = language.color;
    const RGB = hexToRGB(color);
    switch (format) {
        case "HEX":
            return color;
        case "RGB":
            return RGBToString(RGB);
        case "HSL":
            return RGBToHSL(RGB.r, RGB.g, RGB.b);
    }
}