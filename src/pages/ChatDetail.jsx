import React, { useEffect, useState } from "react";
import IconSend from "../../assets/send.png";
import IconMenu from "../../assets/menu.png";
import SideBar from "../components/SideBar";
import IconAI from "../../assets/ai.png";
import IconUser from "../../assets/user.png";
import { useParams } from "react-router-dom";
import Gemini from "../gemini";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, setNameChat } from "../store/chatSlice";

const ChatDetail = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [dataDetail, setDataDetail] = useState([]);
  const [messageDetail, setMessageDetail] = useState([]);
  const [inputChat, setInputChat] = useState("");
  const { id } = useParams();
  const { data } = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  useEffect(() => {
    const chat = data.find((chat) => chat.id === id);
    if (chat) {
      setDataDetail(chat);
      setMessageDetail(chat.messages)
    }
  }, [data, id]);

  const handleChatDetail = async () => {
    if (id) {
      const chatText = await Gemini(inputChat, messageDetail);
      if(dataDetail.title === "Chat") {
        const promptName = `This is a new chat, and user ask ${inputChat}. No rely and comment just give me a name for this chat, Max length is 10 characters`;
        const newTitle = await Gemini(promptName);
        dispatch(setNameChat({newTitle, chatId: id}));
      }
      if (chatText) {
        const dataMessage = {
          idChat: id,
          userMess: inputChat,
          botMess: chatText,
        };

        dispatch(addMessage(dataMessage));
        setInputChat("");
      }
    }
  };

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

      {/* <div className="max-w-[90%] w-full mx-auto mt-32 space-y-10">
        {id ? (
          <div
            className="flex flex-col space-y-4 p-4 h-[550px]
            overflow-x-hidden overflow-y-auto
          "
          >
            {Array.isArray(dataDetail) &&
              dataDetail.length > 0 &&
              dataDetail.map((item, index) => (
                <div className="flex flex-col space-y-6" key={item.id}>
                  {item.isBot ? (
                    <img src={IconAI} alt="ai" className="w-8 h-8" />
                  ) : (
                    <img src={IconUser} alt="user" className="w-8 h-8" />
                  )}
                  <p>{item.text}</p>
                </div>
              ))}
          </div>
        ) : (
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
        )}

        <div className="flex items-center space-x-4 w-full ml-10">
          <input
            type="text"
            value={inputChat}
            placeholder="Hỏi Gemini"
            className="p-4 rounded-lg bg-primaryBg-default w-[90%] border"
            onChange={(e) => setInputChat(e.target.value)}
          />
          <button
            className="p-3 rounded-lg bg-green-400"
            onClick={handleChatDetail}
          >
            <img src={IconSend} alt="send" className="w-8 h-8" />
          </button>
        </div>
      </div> */}

      <div className="max-w-[90%] w-full mx-auto mt-32 space-y-10">
        {id ? (
          <div className="flex flex-col space-y-4 p-4 h-[550px] overflow-x-hidden overflow-y-auto">
            {Array.isArray(messageDetail) &&
              messageDetail.length > 0 &&
              messageDetail.map((item) => (
                <div
                  className={`flex ${
                    item.isBot ? "justify-start" : "justify-end"
                  } items-start space-x-4`}
                  key={item.id}
                >
                  {/* Hiển thị ảnh */}
                  <img
                    src={item.isBot ? IconAI : IconUser}
                    alt={item.isBot ? "ai" : "user"}
                    className="w-6 h-6"
                  />

                  {/* Hiển thị văn bản */}
                  {item.isBot ? (
                    <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                  ) : (
                    <p>{item.text}</p>
                  )}
                </div>
              ))}
          </div>
        ) : (
          <div className="flex flex-col space-y-5">
            <div className="space-y-1">
              <h2 className="bg-gradient-to-r from-blue-500 via-green-400 to-indigo-300 text-[30px] inline-block text-transparent bg-clip-text font-bold">
                Xin Chào
              </h2>
              <p className="text-3xl">Tôi có thể giúp gì cho bạn!</p>
            </div>
          </div>
        )}

        <div className="flex items-center space-x-4 w-full ml-10">
          <input
            type="text"
            value={inputChat}
            placeholder="Hỏi Gemini"
            className="p-4 rounded-lg bg-primaryBg-default w-[90%] border"
            onChange={(e) => setInputChat(e.target.value)}
          />
          <button
            className="p-3 rounded-lg bg-green-400"
            onClick={handleChatDetail}
          >
            <img src={IconSend} alt="send" className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
