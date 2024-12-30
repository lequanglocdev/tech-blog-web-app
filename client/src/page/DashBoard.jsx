import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSideBar from "../components/DashSideBar";
import DashProfile from "../components/DashProfile";
import DashPost from "../components/DashPost";
import DashUsers from "../components/DashUsers";
import DashBoardComponent   from "../components/DashBoardComponent";
import CreatePost from "./CreatePost";
const DashBoard = () => {
  const [tab, setTab] = useState("");
  const location = useLocation();
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromURL = urlParams.get("tab");
    // console.log(tabFromURL)
    if (tabFromURL) {
      setTab(tabFromURL);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSideBar />
      </div>
      {/* profile */}
      {tab === 'profile' && <DashProfile />}
      {/* write */}
      {tab === 'write' && <CreatePost/>}
      {/* post */}
      {tab === 'post' && <DashPost />}
      {/* users */}
      {tab === 'users' && <DashUsers />}
      {/* dashboard */}
      {tab === 'dash' && <DashBoardComponent/>} 
    </div>
  );
};

export default DashBoard;
