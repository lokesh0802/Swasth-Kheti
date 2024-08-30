import React, { useState } from 'react';

function Chatbot() {
  // State to manage visibility
  const [isVisible, setIsVisible] = useState(true); // Default to true for full-screen view

  // Toggle visibility function
  const toggleChatbot = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
    <div className='h-screen'>
        {/* Chatbot Button */}
        <button
        className="fixed bottom-4 right-4 inline-flex items-center justify-center text-base font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isVisible}
        onClick={toggleChatbot}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white block border-gray-200 align-middle"
        >
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
        </svg>
      </button>

      {/* Chatbot Container */}
      {isVisible && (
        <div
          className="inset-0 bg-white p-6 flex flex-col border border-[#e5e7eb] w-full h-full"
          style={{ boxShadow: '0 0 #0000, 0 0 #0000, 0 2px 4px 0 rgb(0 0 0 / 0.05)' }}
        >
          {/* Heading */}
          <div className="flex flex-col space-y-2 pb-6">
            <h2 className="font-bold text-3xl tracking-tight">Chatbot</h2>
            <p className="text-lg text-[#6b7280] leading-5">Powered by Mendable and Vercel</p>
          </div>

          {/* Chat Container */}
          <div className="flex-1 overflow-y-auto mb-4">
            {/* AI Chat Message */}
            <div className="flex gap-4 my-4 text-gray-600 text-xl">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-16 h-16">
                <div className="rounded-full bg-gray-100 border p-4">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    />
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed text-xl">
                <span className="block font-bold text-gray-700">AI </span>Hi, how can I help you today?
              </p>
            </div>

            {/* User Chat Message */}
            <div className="flex gap-4 my-4 text-gray-600 text-xl">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-16 h-16">
                <div className="rounded-full bg-gray-100 border p-4">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
                    />
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed text-xl">
                <span className="block font-bold text-gray-700">You </span>fewafef
              </p>
            </div>

            {/* AI Chat Message */}
            <div className="flex gap-4 my-4 text-gray-600 text-xl">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-16 h-16">
                <div className="rounded-full bg-gray-100 border p-4">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    />
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed text-xl">
                <span className="block font-bold text-gray-700">AI </span>feawfwef
              </p>
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-[#e5e7eb] pt-4">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-md"
              />
              <button
                type="button"
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    
    </>
  );
}

export default Chatbot;
