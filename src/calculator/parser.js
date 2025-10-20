import { ERR } from "./errors.js";

  export function parseInput(input) {
  const raw = String(input);

  if (raw.startsWith("//")) {
    const match = raw.match(/^\/\/(.)\s*(?:\r?\n|\\n)([\s\S]*)$/);
    if (!match) {
      throw new Error(ERR.BAD_CUSTOM);
    }
    const [, delim, body] = match;
    return splitAndValidate(body, delim);
  }

  return splitAndValidate(raw, /[,:]/);
}

function splitAndValidate(str, delimiter) {
  const tokens = str.split(delimiter);

  if (tokens.some((t) => t === "")) {
    throw new Error(ERR.BAD_DELIM);
  }
  return tokens.map(validateAndParseInt);
}

function validateAndParseInt(token) {
  const trimmed = token.trim();

  if (/[0-9]\s+[0-9]/.test(token)) {
    throw new Error(ERR.BAD_SPACE);
  }

  if (trimmed === "") {
    throw new Error(ERR.CANNOT_PARSE);
  }


  if (!/^-?[0-9]+$/.test(trimmed)) {
    throw new Error(ERR.NON_NUM);
  }

  const num = Number.parseInt(trimmed, 10);

  if (Number.isNaN(num)) {
    throw new Error(ERR.CANNOT_PARSE);
  }

  if (num < 0) {
    throw new Error(ERR.NEGATIVE);
  }

  return num;
}
