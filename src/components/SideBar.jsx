import React from "react";
import PropType from "prop-types";
import IconPlus from "../../assets/plus.png";
import IconChat from "../../assets/chat.png";
import IconTrash from "../../assets/trash.png";
import IconMenu from "../../assets/menu.png";
import { useDispatch, useSelector } from "react-redux";
import { addChat, removeChat } from "../store/chatSlice";

const SideBar = ({ onToggle }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.chat);

  const handleNewChat = () => {
    dispatch(addChat());
  };

  const handleRemoveChat = (id) => {
    dispatch(removeChat(id));
  };

  return (
    <div className="bg-primaryBg-sideBar w-[280px] h-screen text-white p-8">
      <button
        className="flex ml-auto xl-hidden bg-gray-500 rounded-full p-2"
        onClick={onToggle}
      >
        <img src={IconMenu} alt="menu" className="w-8 h-8" />
      </button>
      <div className="mt-20">
        <button
          className="px-4 py-2 flex items-center space-x-4 bg-gray-600 mb-10"
          onClick={handleNewChat}
        >
          <img src={IconPlus} alt="plus" className="w-8 h-8" />
          <p>New Chat</p>
        </button>
        <div className="space-y-4">
          <p>Gần đây:</p>
          <div className="flex flex-col space-y-6">
            {data.map((chat) => (
              <div
                className="flex items-center justify-between p-4 bg-gray-700"
                key={chat?.id}
              >
                <div className="flex items-center space-x-4">
                  <img src={IconChat} alt="chat" className="w-8 h-8" />
                  <p>{chat.title}</p>
                </div>
                <button onClick={() => handleRemoveChat(chat.id)}>
                  <img src={IconTrash} alt="trash" className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  onToggle: PropType.func,
};

export default SideBar;
