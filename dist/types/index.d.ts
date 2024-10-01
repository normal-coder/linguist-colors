import { languagesType } from "./languages";
import { extensionType } from "./extensions";
import { colorFormat } from "./converter";
declare const linguistColors: {
    getLangColor(programmingLanguage: languagesType, format?: colorFormat): string;
    getExtensionColor(ext: extensionType, format?: colorFormat): string;
};
export default linguistColors;
//# sourceMappingURL=index.d.ts.map