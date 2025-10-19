import { parseInput } from "./parser.js";

export function add(input) {
  if ((input ?? "").trim() === "") return 0;

  const numbers = parseInput(input);

  let acc = 0;
  for (const n of numbers) {
    if (
      !Number.isSafeInteger(n) ||
      !Number.isSafeInteger(acc) ||
      !Number.isSafeInteger(acc + n)
    ) {
      throw new Error("안전한 정수 범위를 초과했습니다.");
    }
    acc += n;
  }
  return acc;
}
