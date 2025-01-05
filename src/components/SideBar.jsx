import React from "react";
import IconPlus from "../../assets/plus.png";
import IconChat from "../../assets/chat.png";
import IconTrash from "../../assets/trash.png";

const SideBar = () => {
  return (
    <div className="bg-primaryBg-sideBar w-[280px] h-screen text-white p-8">
      <button className="px-4 py-2 flex items-center space-x-4 bg-gray-600 mb-10">
        <img src={IconPlus} alt="plus" className="w-8 h-8" />
        <p>New Chat</p>
      </button>
      <div className="space-y-4">
        <p>Gần đây:</p>
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-between p-4 bg-gray-700">
            <div className="flex items-center space-x-4">
              <img src={IconChat} alt="chat" className="w-8 h-8" />
              <p>Chat</p>
            </div>
            <img src={IconTrash} alt="trash" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
