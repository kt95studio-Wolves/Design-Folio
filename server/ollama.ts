
export interface OllamaConfig {
  endpoint: string;
  model: string;
}

const defaultConfig: OllamaConfig = {
  endpoint: process.env.OLLAMA_ENDPOINT || "http://127.0.0.1:11434",
  model: process.env.OLLAMA_MODEL || "llama3",
};

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface OllamaResponse {
  model: string;
  created_at: string;
  message: ChatMessage;
  done: boolean;
}

export class OllamaClient {
  private config: OllamaConfig;

  constructor(config: Partial<OllamaConfig> = {}) {
    this.config = { ...defaultConfig, ...config };
  }

  async chat(messages: ChatMessage[]): Promise<string> {
    try {
      const response = await fetch(`${this.config.endpoint}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: this.config.model,
          messages,
          stream: false,
        }),
      });

      if (!response.ok) {
        throw new Error(`Ollama API error: ${response.status} ${response.statusText}`);
      }

      const data = (await response.json()) as OllamaResponse;
      return data.message.content;
    } catch (error: any) {
      console.error(`[ollama] Error: ${error.message}`);
      if (error.cause && (error.cause as any).code === 'ECONNREFUSED') {
         throw new Error(`Could not connect to Ollama at ${this.config.endpoint}. Is it running?`);
      }
      throw error;
    }
  }
}

export const ollama = new OllamaClient();
