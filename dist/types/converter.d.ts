declare function hexToRGB(hex: any): {
    r: number;
    g: number;
    b: number;
};
declare function RGBToString(rgb: any): string;
declare function RGBToHSL(r: any, g: any, b: any): string;
type colorFormat = "HEX" | "RGB" | "HSL";
declare function converter(color: string, format?: colorFormat): string;
export { converter, hexToRGB, RGBToString, RGBToHSL, colorFormat };
//# sourceMappingURL=converter.d.ts.map