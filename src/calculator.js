export function add(input) {

  const tokens = input.split(/[, :]/).filter((t) => t !== "");

  const numbers = tokens.map((t) => Number.parseInt(t, 10));

  if (numbers.some((n) => Number.isNaN(n))) {
    throw new Error("숫자만 입력 가능합니다.");
  }

  return numbers.reduce((acc, cur) => acc + cur, 0);
}
