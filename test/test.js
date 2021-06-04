import test from "tape";

// Require Internal Dependencies
import sizeSatisfies from "../index.js";

test("invalid operator always return false", (tape) => {
  tape.strictEqual(sizeSatisfies("!! 45KB", "45KB"), false);
  tape.end();
});

test("assert sizeSatisfies", (tape) => {
  tape.strictEqual(sizeSatisfies(">= 45KB", "20MB"), true);
  tape.strictEqual(sizeSatisfies("<= 45KB", "10B"), true);
  tape.strictEqual(sizeSatisfies("= 45KB", "45KB"), true);
  tape.strictEqual(sizeSatisfies("= 45KB", "46KB"), false);
  tape.strictEqual(sizeSatisfies("= 45KB", 2000), false);
  tape.strictEqual(sizeSatisfies("> 45KB", "46KB"), true);
  tape.strictEqual(sizeSatisfies("> 45KB", "45KB"), false);
  tape.strictEqual(sizeSatisfies("< 45KB", "44KB"), true);
  tape.end();
});
