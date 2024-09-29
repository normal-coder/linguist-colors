import getProgrammingLangColor from "../dist/index.js";

// HEX
it("should return the HEX color for '1C Enterprise' language", () => {
    console.time("Execution Time");
    expect(getProgrammingLangColor("1C Enterprise", "HEX")).toBe("#814CCC");
    console.timeEnd("Execution Time");
});

// RGB
it("should return the RGB color for '1C Enterprise' language", () => {
    console.time("Execution Time");
    expect(getProgrammingLangColor("1C Enterprise", "RGB")).toBe("rgb(129, 76, 204)");
    console.timeEnd("Execution Time");
});

// HSL
it("should return the HSL color for '1C Enterprise' language", () => {
    console.time("Execution Time");
    expect(getProgrammingLangColor("1C Enterprise", "HSL")).toBe("hsl(265, 56%, 55%)");
    console.timeEnd("Execution Time");
});

// HEX
it("should return the HEX color for 'Odin' language", () => {
    console.time("Execution Time");
    expect(getProgrammingLangColor("Odin", "HEX")).toBe("#60AFFE");
    console.timeEnd("Execution Time");
});

// RGB
it("should return the RGB color for 'Odin' language", () => {
    console.time("Execution Time");
    expect(getProgrammingLangColor("Odin", "RGB")).toBe("rgb(96, 175, 254)");
    console.timeEnd("Execution Time");
});

// HSL
it("should return the HSL color for 'Odin' language", () => {
    console.time("Execution Time");
    expect(getProgrammingLangColor("Odin", "HSL")).toBe("hsl(210, 99%, 69%)");
    console.timeEnd("Execution Time");
});
