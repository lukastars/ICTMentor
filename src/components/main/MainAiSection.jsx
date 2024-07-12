import React, { useContext, useRef, useEffect } from 'react';
import { assets } from '../../assets/ai_assets/assets';
import './main.css';
import { Context } from '../../context/Context';

import Markdown from 'marked-react';

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleCardClick = (promptText) => {
    setInput(promptText);
  };

  // Create a ref for the result div
  const resultRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom when result changes
    if (resultRef.current) {
      resultRef.current.scrollTop = resultRef.current.scrollHeight;
    }
  }, [resultData]); // Update only when resultData changes

  return (
    <div className="main">
      <div className="main-container">
        {!showResults ? (
          <>
            <div className="greet ">
              <p>
                <span>Hello, </span>
              </p>
              <p className="text-4xl">
                Please type what kind of business you have. <br /> E.g. "Pizza
                restaurant"
              </p>
            </div>
            {/* ... your cards section if needed */}
          </>
        ) : (
          <div className="result" ref={resultRef}>
            <div className="result-title">
              <img src={assets.user} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text"
              placeholder="Enter the Prompt Here"
              onKeyDown={(e) => {
                e.key === 'Enter' ? onSent() : '';
              }}
            />
            <div>
              <img
                src={assets.send_icon}
                alt=""
                onClick={() => {
                  onSent();
                }}
              />
            </div>
          </div>
          <div className="bottom-info">
            <p>Built with ❤️ using ReactJS + Google Gemini</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
