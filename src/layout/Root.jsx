import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="px-[16px] md:px-[24px] lg:px-[120px]">
        <Navbar />
      </div>
      <div className="px-[16px] md:px-[24px] lg:px-[120px]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
