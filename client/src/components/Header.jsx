import { Button, TextInput } from "flowbite-react";
import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaMoon } from "react-icons/fa6";
// import {useSelector} from 'react-redux'
const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-blue-500 via-blue-400 to-violet-400 rounded-lg text-white">
          Blog
        </span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={IoMdSearch}
          className="hidden lg:inline"
        />
      </form>
      <div className="flex gap-4">
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <IoMdSearch />
        </Button>
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/project"} as={"div"}>
          <Link to="/dashboard">DashBoard</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
      </Navbar.Collapse>
      <div className="flex gap-4">
        <Button >
          <FaMoon />
        </Button>
        <Link to="/register">
          <Button gradientDuoTone="purpleToBlue" outline>Đăng ký</Button>
        </Link>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
};

export default Header;
