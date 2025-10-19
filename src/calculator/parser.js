export function parseInput(input) {
  const raw = String(input);

  if (raw.startsWith("//")) {
    const match = raw.match(/^\/\/(.)\s*(?:\r?\n|\\n)([\s\S]*)$/);
    if (!match) {
      throw new Error("커스텀 구분자 형식이 올바르지 않습니다.");
    }
    const [, delim, body] = match;
    return splitAndValidate(body, delim);
  }

  return splitAndValidate(raw, /[,:]/);
}

function splitAndValidate(str, delimiter) {
  const tokens = str.split(delimiter);

  if (tokens.some((t) => t === "")) {
    throw new Error("잘못된 구분자 형식입니다.");
  }
  return tokens.map(validateAndParseInt);
}

function validateAndParseInt(token) {
  const trimmed = token.trim();

  if (/[0-9]\s+[0-9]/.test(token)) {
    throw new Error("숫자 사이에 공백이 있습니다.");
  }

  if (trimmed === "") {
    throw new Error("변환할 수 없는 값이 있습니다.");
  }


  if (!/^-?[0-9]+$/.test(trimmed)) {
    throw new Error("숫자만 입력 가능합니다.");
  }

  const num = Number.parseInt(trimmed, 10);

  if (Number.isNaN(num)) {
    throw new Error("변환할 수 없는 값이 있습니다.");
  }

  if (num < 0) {
    throw new Error("음수는 허용되지 않습니다.");
  }

  return num;
}
