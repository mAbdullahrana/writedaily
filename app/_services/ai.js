"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const models = [
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite",
  "gemini-1.5-flash",
  "gemini-1.5-flash-8b",
  "gemini-1.5-pro",
];

export async function generatePrompt(prompt) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

  for (let i = 0; i < models.length; i++) {
    try {
      const model = genAI.getGenerativeModel({ model: models[i] });
      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      if (
        error.message.includes("RPD") ||
        error.message.includes("rate limit")
      ) {
        console.log(
          `Model ${models[i]} reached its RPD limit. Trying next model...`
        );
        continue;
      } else {
        console.log(`Error with model ${models[i]}:`, error.message);
        throw error;
      }
    }
  }

  throw new Error(
    "All available models have reached their RPD limits for today."
  );
}
