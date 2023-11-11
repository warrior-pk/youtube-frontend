import React from 'react';

const Message = ({ message, timestamp, sender, image }) => {
  const isSender = sender === 'sender';
  const containerClass = isSender ? 'justify-end' : '';

  return (
    <div className={`flex flex-col gap-1 mb-3 ${containerClass}`}>
      <div
        className={`max-w-50 flex flex-col gap-2 ${
          isSender ? 'items-end' : 'items-start'
        }`}
      >
        {image && message ? (
          <>
            <p
              className={`p-3 pr-6 pl-6 rounded-2xl max-w-max-content ${
                isSender ? 'bg-blue-200' : 'bg-white'
              }`}
            >
              {message}
            </p>
            {isSender && (
              <span className="mt-2 text-black-500 font-light">{timestamp}</span>
            )}
          </>
        ) : image ? (
          <img
            src={image}
            alt=""
            className="w-64 h-64 rounded-lg object-cover"
          />
        ) : (
          <div className="flex flex-col gap-2">
            <p
              className={`p-3 pr-6 pl-6 rounded-2xl max-w-max-content ${
                isSender ? 'bg-blue-200' : 'bg-white'
              }`}
            >
              {message}
            </p>
            {isSender && (
              <span className="text-black-500 font-light self-end">{timestamp}</span>
            )}
          </div>
        )}
      </div>
      {!isSender && (
        <span className="mt-2 text-black-500 font-light">{timestamp}</span>
      )}
    </div>
  );
};

export default Message;
