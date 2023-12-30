"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Bars3Icon, CpuChipIcon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import "../shared/globals.css";
import { PaintBrushIcon } from "@heroicons/react/16/solid";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  //   const open = Boolean(anchorEl);
  //   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     setAnchorEl(event.currentTarget);
  //   };
  //   const handleClose = () => {
  //     setAnchorEl(null);
  //   };
  return (
    <section className="bg-menu">
      <Box sx={{ flexGrow: 1 }} className=" block md:hidden movil-menu">
        <AppBar position="static" className="movil-menu text-black">
          <Toolbar className="flex justify-between">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
              sx={{ mr: 2 }}
            >
              <Bars3Icon className="w-6" />
            </IconButton>
            <img
              src="https://www.grupodigitalbank.com/wp-content/uploads/2022/11/LOGO_GDB-gris-768x215.png"
              alt="Logo empresa"
              className="image-company"
            />
          </Toolbar>
        </AppBar>
        <article className={showMenu ? "show-menu" : "not-show"}>
          <Link
            href="/"
            onClick={handleClick}
            className="flex h-[48px] grow items-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-stone-200 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <HomeIcon className="w-6" />
            Home
          </Link>
          <Link
            href="/users"
            onClick={handleClick}
            className="flex h-[48px] grow items-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-stone-200 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <UserGroupIcon className="w-6" />
            Users
          </Link>
        </article>
      </Box>
      <article className="hidden md:block">
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
          <Link
            className="mb-2 flex h-20 items-end justify-start rounded-md  p-4 md:h-40"
            href="/"
          >
            <img
              src="https://www.grupodigitalbank.com/wp-content/uploads/2022/11/LOGO_GDB-gris-768x215.png"
              alt="Logo empresa"
              className="image-company"
            />
          </Link>
          <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
            <Link
              href="/"
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-stone-200 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <HomeIcon className="w-6" />
              {/* <LinkIcon className="w-6" /> */}
              <p>Home</p>
            </Link>
            <Link
              href="/users"
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-stone-200 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <UserGroupIcon className="w-6" />
              {/* <LinkIcon className="w-6" /> */}
              <p>Users</p>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/DanielAbril15/users-crud-next"
              passHref={true}
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-stone-200 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <PaintBrushIcon className="w-6" />
              {/* <LinkIcon className="w-6" /> */}
              <p>Front Repo</p>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/DanielAbril15/users-crud-nest"
              passHref={true}
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-stone-200 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <CpuChipIcon className="w-6" />
              {/* <LinkIcon className="w-6" /> */}
              <p>Back Repo</p>
            </Link>
            <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
          </div>
        </div>
      </article>
    </section>
  );
}
