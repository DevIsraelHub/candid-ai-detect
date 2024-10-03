import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from 'next/server';

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const text = formData.get("text") as string;

    // Define the prompt to detect AI vs human text
    const prompt = `
    Analyze the following text and determine if it's AI-generated or human-written. 
    Consider the following:
    - Spelling and grammatical inconsistencies (more likely human-written)
    - Repetitive sentence structures (often AI-generated)
    - Unnatural flow or robotic phrasing (AI indicators)
    - Extremely polished or overly formal language
    - Presence of typing errors, unfinished thoughts, or casual tone (human indicators)
    - Complex sentence structures and use of uncommon vocabulary (AI-generated tendencies)

    Provide a conclusion (AI-generated or human-written) and detailed reasons for the conclusion:
    
    "${text}"`;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Generate the response
    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: { maxOutputTokens: 1000, temperature: 0.2 }
    });

    const analysis = await result.response.text();

    // Analyzing the model's response for AI-generated detection
    let isAI = false;
    const reasons: string[] = [];

    // Analyze for common patterns that indicate AI generation
    if (analysis.toLowerCase().includes('complex sentence structure')) {
      reasons.push("Complex sentence structure, which is typical of AI-generated content.");
      isAI = true;
    }
    if (analysis.toLowerCase().includes('unusual vocabulary')) {
      reasons.push("Unusual or uncommon vocabulary suggests AI generation.");
      isAI = true;
    }
    if (analysis.toLowerCase().includes('repetitive sentence structure')) {
      reasons.push("Repetitive sentence structure, often a hallmark of AI writing.");
      isAI = true;
    }
    if (analysis.toLowerCase().includes('unnatural flow') || analysis.toLowerCase().includes('robotic phrasing')) {
      reasons.push("Unnatural flow or robotic phrasing detected, indicating AI-generated content.");
      isAI = true;
    }

    // Analyze for characteristics of human writing
    if (analysis.toLowerCase().includes('grammatical inconsistencies') || analysis.toLowerCase().includes('spelling errors')) {
      reasons.push("Grammatical inconsistencies or spelling errors suggest human-written content.");
      isAI = false;
    }
    if (analysis.toLowerCase().includes('casual tone') || analysis.toLowerCase().includes('unfinished thoughts')) {
      reasons.push("Casual tone or unfinished thoughts are indicators of human writing.");
      isAI = false;
    }
    if (analysis.toLowerCase().includes('typing errors') || analysis.toLowerCase().includes('inconsistent style')) {
      reasons.push("Typing errors or inconsistent style are typical of human-written content.");
      isAI = false;
    }

    // Default to human-written if no AI patterns are strongly detected
    if (reasons.length === 0) {
      reasons.push("The text shows no strong indicators of AI generation.");
    }

    return NextResponse.json({
      result: isAI ? 'AI-generated' : 'Human-written',
      reasons,
      analysis
    });

  } catch (error) {
    console.error('Error during AI detection:', error);
    return NextResponse.json({ error: 'Detection failed' }, { status: 500 });
  }
}
