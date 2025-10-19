import { Console } from "@woowacourse/mission-utils";
import { add } from "./calculator.js";

class App {
  async run() {
    Console.print("덧셈할 문자열을 입력해 주세요.");

    const input = await Console.readLineAsync("");

    const trimmed = (input ?? "").trim();
    if (trimmed === "") {
      Console.print("결과 : 0");
      return;
    }
    
try {
      const result = add(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
