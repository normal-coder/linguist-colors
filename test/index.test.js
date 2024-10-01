import linguistColors from "../dist/index.js";
import { languages, languagesData } from "../dist/languages.js";

function testcase(func, param, colorFormat, toBeResult) {
    let tip = "should return the " + colorFormat + " color for '";
    switch (func) {
        case "getLangColor":
            it(tip + param + "' language as " + toBeResult, () => {
                expect(linguistColors.getLangColor(param, colorFormat)).toBe(toBeResult);
            });
            break;
        case "getExtensionColor":
            it(tip + param + "' file extensions as " + toBeResult, () => {
                expect(linguistColors.getExtensionColor(param, colorFormat)).toBe(toBeResult);
            });
            break;
    }
}

testcase("getLangColor", "1C Enterprise", "HEX", "#814CCC");
testcase("getLangColor", "1C Enterprise", "RGB", "rgb(129, 76, 204)");
testcase("getLangColor", "1C Enterprise", "HSL", "hsl(265, 56%, 55%)");
testcase("getLangColor", "Odin", "HEX", "#60AFFE");
testcase("getLangColor", "Odin", "RGB", "rgb(96, 175, 254)");
testcase("getLangColor", "Odin", "HSL", "hsl(210, 99%, 69%)");
testcase("getExtensionColor", ".ts", "HEX", "#3178c6");