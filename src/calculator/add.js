import { parseInput } from "./parser.js";
import { ERR } from "./errors.js";

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
      throw new Error(ERR.UNSAFE);
    }
    acc += n;
  }
  return acc;
}
