import React from 'react';
import Bhanuimg from './Bhanu.jpg';

const Developercard = () => {
  return (
    <div className="mx-5 min-h-screen grid place-content-center">
      <div className="bg-[#165b61] rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl mb-3">Hi Users</h1>
        <p className="text-lg">You can contact us whenever you need help or just curious about something.</p>
      </div>
      <div className="bg-white py-8 px-10 text-center rounded-md shadow-2xl transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto transition-transform duration-300 hover:translate-y-2 hover:scale-105">
        <h2 className="font-semibold text-2xl mb-6">Start chatting</h2>
        <img
          className="w-20 h-20 object-cover rounded-full mx-auto shadow-xl transform hover:rotate-6 transition-transform duration-300"
          src={Bhanuimg}
          alt="User avatar"
        />
        <p className="capitalize text-xl mt-1">Bhanu Prakash Pandey</p>
        <span className="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-12">
          <div className="bg-green-400 rounded-full w-2.5 h-2.5 block mr-2"></div>
          Active
        </span>
        <button className="rounded-md bg-[#165b61] text-xl text-white pt-3 pb-4 px-8 inline shadow-lg transform hover:translate-y-1 transition-transform duration-300">
          Send a message
        </button>
      </div>
    </div>
  );
};

export default Developercard;
