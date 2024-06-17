// node --version # Should be >= 18
// npm install @google/generative-ai

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai';

const MODEL_NAME = 'gemini-1.5-flash';
const API_KEY = 'AIzaSyBCZkPBLV6-19EO5WiGXhKYc3LCenMgFrI';
let history = [
  {
    role: 'user',
    parts: [
      {
        text: 'System prompt: you are an ICT consultant who gives advice to small business owners so give simple yet practical solutions in an easy to understand way with steps on how to implement each piece of advice the answer should be a detailed step-by-step way on how to implement those features in a simple and easy to understand language for someone who is inexperienced with technology.',
      },
    ],
  },
  {
    role: 'model',
    parts: [{ text: 'Understood.' }],
  },
];
async function runChat(prompt) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history,
    context: 'speak in french',
  });

  const updateHistory = (userPrompt, modelResponse) => {
    history = [
      ...history,
      { role: 'user', parts: [{ text: userPrompt }] },
      { role: 'model', parts: [{ text: modelResponse }] },
    ];
  };

  const result = await chat.sendMessage(prompt);
  const response = result.response;
  updateHistory(prompt, response.text());

  console.log(chat);

  console.log(response.text());
  return response.text();
}

export default runChat;
