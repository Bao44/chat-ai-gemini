import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import { useEffect } from "react";
import Gemini from "./gemini";

function App() {

  useEffect(() => {
    Gemini('JS là gì');
  },[])

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
