import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import AosProvider from "@/Provider/AosProvider/AosProvider";

const MainLayout = () => {
  return (
    <>
      <AosProvider>
        <Navbar />
        <div className="mt-20">
          <Outlet />
        </div>
        <Footer />
      </AosProvider>
    </>
  );
};

export default MainLayout;
