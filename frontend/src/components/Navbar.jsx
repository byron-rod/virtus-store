import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { FiMenu, FiShoppingCart, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const isLoggedIn = true;

  const handleProfile = () => {
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="h-30 bg-third px-10 md:px-12 lg:px-20 xl:px-32 2xl:px-64 relative">
      <div className="container py-1">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-20 h-20" />
            <div className="hidden sm:hidden md:flex">
              <Link to="/home" className="px-4">
                Inicio
              </Link>
              <Link to="/about" className="px-4">
                Sobre Nosotros
              </Link>
              <Link to="/courses" className="px-4">
                Cursos
              </Link>
              <Link to="/blog" className="px-4">
                Blog
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex">
            {!isLoggedIn && (
              <Link to="/login" className="px-4">
                Ingresar
              </Link>
            )}
            {isLoggedIn && (
              <div className="relative">
                <FiUser size={28} onClick={handleProfile} />
                {isProfileOpen && (
                  <div className="absolute p-4 top-10 left-0 text-md bg-third rounded-md shadow-bottom z-10">
                    <Link to="/profile">Perfil</Link>
                    <div className="mt-2 cursor-pointer">Logout</div>
                  </div>
                )}
              </div>
            )}
            <Link to="/cart" className="px-4 ml-2">
              <FiShoppingCart size={28} className="flex flex-row" />
            </Link>
          </div>
          <FiMenu
            size={42}
            color="black"
            className="sm:hidden flex cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          />
          {open && (
            <div className="flex flex-col items-center w-1/2 h-74 bg-third absolute top-20 right-0 z-10 sm:hidden">
              <Link to="/courses" className="py-4 ">
                Inicio
                <div className="absolute left-0 bottom-0 w-full h-1 bg-gray-200"></div>
              </Link>
              <Link to="/about" className="py-4">
                Sobre Nosotros
              </Link>
              <Link to="/courses" className="py-4">
                Cursos
              </Link>
              <Link to="/blog" className="py-4">
                Blog
              </Link>
              {!isLoggedIn && (
                <Link to="/login" className="py-4 border-b border-secondary">
                  Ingresar
                </Link>
              )}
              {isLoggedIn && (
                <Link to="/profile" className="px-4 flex py-2">
                  <FiUser size={28} />
                  <p className="ml-3">Perfil</p>
                </Link>
              )}
              <Link to="/cart" className="py-4 flex">
                <FiShoppingCart size={28} className="flex align-center" />
                <p className="ml-3">Carrito</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
