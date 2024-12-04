import React from "react";
import { Link } from "@inertiajs/react";

export default function Header({ auth }) {
  return (
    <div className="flex justify-between items-center h-[100px] ">
      <div className="flex items-center">
        <h1 className=" text-4xl tracking-tighter">SITE MAKER</h1>
        <div className="flex items-center ml-[100px] gap-11 text-[18px]">
          <p>About</p>
          <p>Blog</p>
          <p>News</p>
          <p>About</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        {auth.user ? (
          <Link
            href={route("dashboard")}
            className="h-[40px] bg-slate-200 w-[90px] rounded-[30px] font-medium flex items-center justify-center"
          >
            Dashboard
          </Link>
        ) : (
          <>
            <Link
              href={route("login")}
              className="h-[40px] bg-slate-200 w-[90px] rounded-[30px] font-medium flex items-center justify-center"
            >
              Log in
            </Link>
            <Link
              href={route("register")}
              className="h-[40px] bg-[#6dc7be] w-[120px] rounded-[30px] font-medium flex items-center justify-center"
            >
              Site maken
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
