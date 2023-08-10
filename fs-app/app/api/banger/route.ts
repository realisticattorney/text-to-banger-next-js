import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const apiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY!,
});

const openai = new OpenAIApi(apiConfig);

// Build a prompt for the banger tweet
function buildPrompt(tweet: string) {
  return `Turn this tweet into a solid banger, where a banger is a tweet of shocking and mildly psychotic comedic value, that's prone to go viral: '${tweet}'`;
}

export async function POST(req: Request) {
  // Extract the `tweet` from the body of the request
  const { tweet } = await req.json();

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    stream: true,
    prompt: buildPrompt(tweet),
    max_tokens: 100,
    temperature: 0.7,
    top_p: 1,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
