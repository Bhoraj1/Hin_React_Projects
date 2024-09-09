import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/Sidebar";
import { useState } from "react";
import PostListProvider from "../store/Posts-list";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="container">
            <Header />
            <Outlet/>
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
