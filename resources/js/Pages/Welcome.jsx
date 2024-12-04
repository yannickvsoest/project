import React, { Component, useEffect } from "react";
import { Head } from "@inertiajs/react";
import Header from "../Components/Header";
import Hero from "@/Components/Hero";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  const handleImageError = () => {
    document.getElementById("screenshot-container")?.classList.add("!hidden");
    document.getElementById("docs-card")?.classList.add("!row-span-1");
    document.getElementById("docs-card-content")?.classList.add("!flex-row");
    document.getElementById("background")?.classList.add("!hidden");
  };

  useEffect(() => {
    console.log("Component.loaded");
  }, []);

  return (
    <>
      <Head title="Welcome" />

      <div className="bg-gray-50 text-black z-10 ">
        <div className="relative flex min-h-screen flex-col items-center  ">
          <div className="relative w-full  px-6 lg:max-w-7xl">
            {/* Gebruik hier de nieuwe Header component */}
            <Header auth={auth} />
            <Hero />
            <footer className="py-16 text-center text-sm text-black dark:text-white/70">
              Laravel v{laravelVersion} (PHP v{phpVersion})
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
