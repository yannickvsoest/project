import React from "react";
import { Link } from "@inertiajs/react";

export default function Header({ auth }) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center h-auto lg:h-[100px] px-6 py-4">
      <div className="flex items-center w-full lg:w-auto justify-between lg:justify-start">
        <h1 className="text-4xl tracking-tighter font-bold">SITE MAKER</h1>
        {/* Maak de navigatie items flexibel en laat ze zich aanpassen op kleinere schermen */}
        <div className="flex items-center lg:ml-[100px] gap-11 text-[18px] hidden lg:flex">
          <p>About</p>
          <p>Blog</p>
          <p>News</p>
          <p>About</p>
        </div>
      </div>

      {/* Responsive knoppen sectie */}
      <div className="flex items-center gap-5 mt-4 lg:mt-0">
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

      {/* Mobile menu - laat het alleen zien op kleinere schermen */}
      <div className="lg:hidden flex w-full justify-between mt-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-8">
            <p>About</p>
            <p>Blog</p>
            <p>News</p>
            <p>About</p>
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
      </div>
    </div>
  );
}
