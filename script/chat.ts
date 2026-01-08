
import { createInterface } from "readline";
import { ollama, type ChatMessage } from "../server/ollama";

async function main() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const messages: ChatMessage[] = [];

  console.log("-----------------------------------------");
  console.log("Ollama CLI Wrapper");
  console.log("Type 'exit' or 'quit' to stop.");
  console.log("-----------------------------------------");

  const ask = () => {
    rl.question("You: ", async (input) => {
      const trimmedInput = input.trim();
      if (trimmedInput.toLowerCase() === "exit" || trimmedInput.toLowerCase() === "quit") {
        console.log("Goodbye!");
        rl.close();
        process.exit(0);
      }

      if (!trimmedInput) {
        ask();
        return;
      }

      messages.push({ role: "user", content: trimmedInput });

      try {
        process.stdout.write("AI: Thinking...");
        const response = await ollama.chat(messages);
        
        // Clear "Thinking..."
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        
        console.log(`AI: ${response}`);
        messages.push({ role: "assistant", content: response });
      } catch (error: any) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        console.error(`Error: ${error.message}`);
      }

      console.log(""); // Empty line for readability
      ask();
    });
  };

  ask();
}

main().catch(console.error);
