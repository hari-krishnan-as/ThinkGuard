import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Chatbox from "./components/Chatbox";

const App = () => {
  return (
    <div className="dark:bg-gradient-to-b from-[#242124] to-[#000000] dark:text-white">
      <div className="flex h-screen w-screen">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Chatbox />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

