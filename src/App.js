import React, { useState, useEffect } from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, [messages]);

  const getResponse = async () => {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8002/prompt/${encodeURIComponent(text)}`);
      if (!response.ok) throw new Error('Network response was not ok.');

      const data = await response.json();
      setMessages(messages => [
        ...messages,
        { author: 'You', message: text },
        { author: 'Bot', message: data.candidates[0].content }
      ]);
      setText('');
    } catch (error) {
      console.error('Error fetching data:', error);
      setMessages(messages => [...messages, { author: 'Bot', message: "Sorry, I couldn't fetch the response." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      getResponse();
    }
  };

  const renderMessage = message => {
    return <div dangerouslySetInnerHTML={{ __html: message }} />;
  };

  return (
    <div className="chat-bot">
      <div className="chat-header">
        <div className="info-container">
          <h2>InkoChat</h2>
          <h3>PaLM 2 Demo Bot</h3>
        </div>
      </div>
      <div className="feed">
        {messages.map((message, index) => (
          <div key={index} className={`bubble ${message.author === 'Bot' ? 'response' : 'question'}`}>
            {renderMessage(message.message)}
          </div>
        ))}
      </div>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Ready to ask..."
        disabled={loading}
      />
      <button onClick={getResponse} disabled={loading || !text.trim()}>
        {loading ? '...' : 'Ask'}
      </button>
    </div>
  );
};

export default App;
