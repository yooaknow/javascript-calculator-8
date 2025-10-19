export function add(input) {
  if (input.startsWith("//")) {
    const match = input.match(/^\/\/(.)\s*(?:\r?\n|\\n)([\s\S]*)$/);
    if (!match) {
      throw new Error("커스텀 구분자 형식이 올바르지 않습니다.");
    }

    const [, delim, body] = match;
    const tokens = body.split(delim);
    if (tokens.some((t) => t === "")) {
      throw new Error("잘못된 구분자 형식입니다.");
    }

    const numbers = tokens.map((t) => Number.parseInt(t, 10));
    if (numbers.some((n) => Number.isNaN(n))) {
      throw new Error("숫자만 입력 가능합니다.");
    }
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }

  const tokens = input.split(/[, :]/);
  if (tokens.some((t) => t === "")) {
    throw new Error("잘못된 구분자 형식입니다.");
  }

  const numbers = tokens.map((t) => Number.parseInt(t, 10));
  if (numbers.some((n) => Number.isNaN(n))) {
    throw new Error("숫자만 입력 가능합니다.");
  }
  return numbers.reduce((acc, cur) => acc + cur, 0);
}
