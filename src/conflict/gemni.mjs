import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyBpCsu2B-FYhAfdzJHHJ3OGkdqbmJGcT9I" });

 async function maincall(data) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: data,
  });
  console.log(response.text);
}

export default maincall;

