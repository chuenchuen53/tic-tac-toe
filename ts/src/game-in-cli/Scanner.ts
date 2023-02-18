import readline from "readline";

class Scanner {
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  async next(question: string): Promise<string> {
    return await new Promise((resolve) => {
      this.rl.question(question, (answer: string) => {
        resolve(answer);
      });
    });
  }

  async nextInt(question: string): Promise<number> {
    return await new Promise((resolve, reject) => {
      this.rl.question(question, (answer: string) => {
        const num = parseInt(answer);
        if (isNaN(num)) {
          reject();
        }
        resolve(num);
      });
    });
  }

  close(): void {
    this.rl.close();
  }
}

export const scanner = new Scanner();
