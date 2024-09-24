import React from 'react';

const ContactMe = () => {
  return (
    <div className="p-6 text-center mt-10" id='Contact'>
      <h2 className="text-4xl text-center font-bold">Contact Me</h2>
      <div className='flex justify-evenly items-start mt-10'>
        <form className="mb-6 flex flex-col">
            <textarea
            className="w-[500px] p-4 h-40 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message here..."
            />
            <button
            className="mt-4 w-[150px] bg-[#e66613] text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
            Send
            </button>
        </form>
        <div className="space-y-3">
            <a
            href="https://github.com/ved08"
            className="text-blue-500"
            >
            GitHub
            </a>
            <br />
            <a
            href="https://x.com/ved0811"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
            >
            Twitter
            </a>
            <br />
            <a
            href="https://www.linkedin.com/in/vedvardhan-gyanmote-566995201/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
            >
            LinkedIn
            </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
