import React from 'react';
import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
const genAI = new GoogleGenerativeAI('AIzaSyBCZkPBLV6-19EO5WiGXhKYc3LCenMgFrI');
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

export default function AIMainSection() {
  const [search, setSearch] = useState('');
  const [aiResponse, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  async function aiRun() {
    setLoading(true);
    const prompt = ` ${search} `;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setResponse(text);
    setLoading(false);
  }
  const handleClick = () => {
    aiRun();
  };

  return (
    <div className="flex h-[100vh] justify-center items-center">
      <div>
        <h1>Generative AI Restaurant App!</h1>
        <p>Built with ❤️ using ReactJS + Redux + Google Gemini</p>

        <div style={{ display: 'flex' }}>
          <input
            placeholder="Search Food with Category using Generative AI"
            onChange={(e) => handleChangeSearch(e)}
          />
          <button style={{ marginLeft: '20px' }} onClick={() => handleClick()}>
            Search
          </button>
        </div>

        {loading == true && search != '' ? (
          <p style={{ margin: '30px 0' }}>Loading ...</p>
        ) : (
          <div style={{ margin: '30px 0' }}>
            <p>{aiResponse}</p>
          </div>
        )}
      </div>
    </div>
  );
}
