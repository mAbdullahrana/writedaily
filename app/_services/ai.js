"use server"

const { GoogleGenerativeAI } = require("@google/generative-ai");

export async function generatePrompt(prompt) {
  console.log(prompt)
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(prompt);
  console.log(result)
  return result.response.text();
}



