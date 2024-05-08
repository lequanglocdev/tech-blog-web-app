// import React from 'react'
import { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import { HiUser, HiArrowSmRight } from "react-icons/hi";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "../redux/user/userSlice";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
const DashSideBar = () => {
  const [tab, setTab] = useState("");
  const dispatch = useDispatch();
  const { createUser } = useSelector((state) => state.user);
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromURL = urlParams.get("tab");
    // console.log(tabFromURL)
    if (tabFromURL) {
      setTab(tabFromURL);
    }
  }, [location.search]);

  const handleLognout = async () => {
    try {
      const res = await fetch("/api/user/logout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(logoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Sidebar className="w-full wd:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-1" >
          {/* <Link to='/dashboard?tab=profile'/> */}
          {createUser && createUser.isAdmin && (
            <Link to='/dashboard?tab=post'>
              <Sidebar.Item
                active={tab === "post"}
                icon={HiUser}
                label={"User"}
                labelColor="dark"
              >
                Dashboard
              </Sidebar.Item>
            </Link>
          )}
           {createUser && createUser.isAdmin && (
            <Link to='/dashboard?tab=users'>
              <Sidebar.Item
                active={tab === "users"}
                icon={HiUser}
                label={"User"}
                labelColor="dark"
              >
                User
              </Sidebar.Item>
            </Link>
          )}
          <Link to='/dashboard?tab=profile'>
            <Sidebar.Item
              active={tab === 'profile'}
              icon={HiUser}
              label={createUser.isAdmin ? 'Admin' : 'User'}
              labelColor='dark'
              as='div'
            >
              Profile
            </Sidebar.Item>
          </Link>
          <Sidebar.Item
            active
            icon={HiArrowSmRight}
            labelColor="dark"
            onClick={handleLognout}
          >
            Log out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashSideBar;
