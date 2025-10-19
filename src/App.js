import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    Console.print("덧셈할 문자열을 입력해 주세요.");

    const input = await Console.readLineAsync("");

    const trimmed = (input ?? "").trim();
    if (trimmed === "") {
      Console.print("결과 : 0");
      return;
    }
    
    Console.print(`입력값: ${input}`);
  }
}

export default App;
