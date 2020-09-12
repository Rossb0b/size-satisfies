"use strict";

// Require Internal Dependencies
const sizeSatisfies = require("../");

test("invalid operator always return false", () => {
    expect(sizeSatisfies("!! 45KB", "45KB")).toStrictEqual(false);
});

test("assert sizeSatisfies", () => {
    expect(sizeSatisfies(">= 45KB", "20MB")).toStrictEqual(true);
    expect(sizeSatisfies("<= 45KB", "10B")).toStrictEqual(true);
    expect(sizeSatisfies("= 45KB", "45KB")).toStrictEqual(true);
    expect(sizeSatisfies("= 45KB", "46KB")).toStrictEqual(false);
    expect(sizeSatisfies("= 45KB", 2000)).toStrictEqual(false);
    expect(sizeSatisfies("> 45KB", "46KB")).toStrictEqual(true);
    expect(sizeSatisfies("> 45KB", "45KB")).toStrictEqual(false);
    expect(sizeSatisfies("< 45KB", "44KB")).toStrictEqual(true);
});
