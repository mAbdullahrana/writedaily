"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generatePrompt(prompt) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);

    return result.response.text();
  } catch (error) {
    console.log(error.message);
    throw error.message;
  }
}
