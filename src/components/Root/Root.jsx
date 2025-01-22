import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <main className='w-11/12 mx-auto'>
        <NavBar />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
