import { motion } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { Send, X, MessageCircle } from 'lucide-react';

const predefinedPrompts = [
  "Tell me about your services",
  "What programs do you offer?",
  "How can I enroll my child?",
  "What makes your curriculum special?",
  "Do you offer any trial classes?"
];

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your learning assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (text?: string) => {
    const message = text || input.trim();
    if (!message) return;

    // Add user message
    const userMessage = { text: message, sender: 'user' as const };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const responses: Record<string, string> = {
        "Tell me about your services": "We offer a range of educational services including early childhood education, after-school programs, and summer camps. Our programs are designed to foster creativity, critical thinking, and social skills in children.",
        "What programs do you offer?": "We offer various programs including: Preschool (2-5 years), After-School Care (5-12 years), Summer Camps, and Weekend Enrichment Classes. Each program is tailored to different age groups and learning needs.",
        "How can I enroll my child?": "You can enroll your child by visiting our admissions page, calling us at (123) 456-7890, or emailing us at admissions@wli.com. We'll guide you through the process and schedule a tour of our facilities.",
        "What makes your curriculum special?": "Our curriculum is based on the latest research in child development and education. We combine play-based learning with structured activities, focusing on the whole child's development - cognitive, social, emotional, and physical.",
        "Do you offer any trial classes?": "Yes, we offer trial classes for all our programs. This allows you and your child to experience our teaching methods and environment before making a commitment. Please contact us to schedule a trial session.",
        "default": "Thank you for your message! Our team will get back to you shortly with more information."
      };
      
      // Find a specific response or use default
      const response = responses[message] || responses["default"];
      setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
    }, 1000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {/* Chat Toggle Button - Bottom Left */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-[1002] bg-gradient-to-br from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-2xl hover:shadow-2xl transition-all"
        whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat with us"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          width: '56px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1002,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
        }}
      >
        <MessageCircle size={24} className="text-white" />
      </motion.button>

      {/* Chat Container */}
      {isOpen && (
        <div 
          className="fixed bottom-24 left-6 z-[1001] bg-white rounded-2xl shadow-xl overflow-hidden w-[300px] h-[420px] max-w-[300px] max-h-[420px] flex flex-col"
          style={{ 
            position: 'fixed',
            bottom: '100px',
            left: '24px',
            width: '300px',
            maxWidth: '300px',
            height: '420px',
            minHeight: '400px',
            opacity: 1,
            transition: 'all 0.3s ease-in-out',
            zIndex: 1001,
            border: '1px solid #e5e7eb',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-bold text-lg">Learning Assistant</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto overflow-x-hidden bg-gray-50" style={{ height: 'calc(100% - 150px)' }}>
            <div className="space-y-4">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.sender === 'user' 
                        ? 'bg-blue-500 text-white rounded-br-none' 
                        : 'bg-white border border-gray-200 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Predefined Prompts */}
          <div className="p-3 bg-gray-100 border-t border-gray-200">
            <div className="flex flex-wrap gap-2 mb-3">
              {predefinedPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(prompt)}
                  className="text-xs bg-white text-gray-700 px-3 py-1.5 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={() => handleSendMessage()}
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatAssistant;
