import { GoogleGenAI } from "@google/genai";
import { SCALELIST_INFO } from "../constants";

export const getAIPitch = async (role: string): Promise<string> => {
  // Initialize AI client with the provided API key.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User role: ${role}. Based on Scalelist info: ${SCALELIST_INFO}, provide a 2-sentence highly persuasive benefit specifically for this role. Use an encouraging, professional tone.`,
      config: {
        maxOutputTokens: 150,
        temperature: 0.7,
      },
    });

    // Access .text property directly as it returns the string output.
    return response.text || "Scalelist helps you find accurate B2B contact data and keeps your lists fresh automatically.";
  } catch (error) {
    console.error("AI Enrichment Error:", error);
    return "Scale your outbound with verified emails and mobile numbers that stay up-to-date.";
  }
};
