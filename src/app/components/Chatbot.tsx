'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Loader2, MessageSquare, X } from 'lucide-react';

export default function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateTyping = async (text: string) => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, Math.min(text.length * 20, 1000)));
    setIsTyping(false);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setInput('');

    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userMessage })
      });

      const data = await res.json();
      await simulateTyping(data.reply);
      setMessages(prev => [...prev, { text: data.reply, isUser: false }]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages(prev => [...prev, {
        text: "Sorry, I encountered an error. Please try again.",
        isUser: false
      }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-slate-800 text-white p-4 rounded-full shadow-lg hover:bg-slate-700 transition-all duration-300 flex items-center justify-center group"
        >
          <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        </button>
      ) : (
        <div className="bg-white rounded-xl shadow-2xl w-96 overflow-hidden border border-slate-200">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-4 flex justify-between items-center">
            <h2 className="text-white font-semibold flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Khanzadi Assistant
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 bg-slate-50">
            {messages.length === 0 && (
              <div className="text-center text-slate-700 my-8">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-slate-600" />
                <p className="text-sm">Ask me about Khanzadi skills, projects, or experience!</p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`mb-4 ${msg.isUser ? 'text-right' : 'text-left'}`}>
                <div
                  className={`inline-block p-3 rounded-lg max-w-[80%] ${
                    msg.isUser
                      ? 'bg-slate-800 text-white'
                      : 'bg-white text-black shadow-sm border border-slate-200'
                  }`}
                  dangerouslySetInnerHTML={{ __html: msg.text }}
                />
              </div>
            ))}
            {isTyping && (
              <div className="text-left mb-4">
                <div className="inline-block p-3 rounded-lg bg-white text-black shadow-sm border border-slate-200">
                  <Loader2 className="w-4 h-4 animate-spin inline-block mr-2" />
                  Typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-slate-200">
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 border border-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent text-black placeholder-slate-500"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type your message..."
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="bg-slate-800 text-white p-2 rounded-lg hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isTyping || !input.trim()}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
