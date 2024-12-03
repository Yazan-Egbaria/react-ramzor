import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootElement = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootElement;
