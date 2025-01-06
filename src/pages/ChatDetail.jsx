import React, { useState } from "react";
import IconSend from "../../assets/send.png";
import IconMenu from "../../assets/menu.png";
import SideBar from "../components/SideBar";

const ChatDetail = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div className="text-white xl:w-[80%] w-full relative">
      <div className="flex items-center space-x-2 p-4">
        <button
          className=" bg-gray-500 rounded-full p-2 xl:hidden"
          onClick={() => setMenuToggle(!menuToggle)}
        >
          <img src={IconMenu} alt="menu" className="w-8 h-8" />
        </button>
        <h1 className="text-xl uppercase font-bold ">Gemini AI</h1>
      </div>

      {menuToggle && (
        <div className="absolute h-full top-0 left-0">
          <SideBar onToggle={() => setMenuToggle(!menuToggle)} />
        </div>
      )}

      <div className="max-w-[90%] w-full mx-auto mt-32 flex-col space-y-20">
        <div className="flex flex-col space-y-5">
          <div className="space-y-1">
            <h2
              className="bg-gradient-to-r from-blue-500 via-green-400
            to-indigo-300 text-[30px] inline-block text-transparent bg-clip-text font-bold"
            >
              Xin Chào
            </h2>
            <p className="text-3xl">Tôi có thể giúp gì cho bạn!</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 w-full">
          <input
            type="text"
            placeholder="Hỏi Gemini"
            className="p-4 rounded-lg bg-primaryBg-default w-[90%] border"
          />
          <button className="p-3 rounded-lg bg-green-400">
            <img src={IconSend} alt="send" className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
