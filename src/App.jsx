import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import { useEffect } from "react";
import Gemini from "./gemini";
import { useDispatch, useSelector } from "react-redux";

function App() {

  const dispatch = useDispatch();
  const {data} = useSelector(state => state.chat);

  return (
    <>
      <div className="bg-primaryBg-default h-screen flex">
        <div className="xl:block hidden">
        <SideBar />
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
