import React from "react";
import { Head } from "@inertiajs/react";
import Header from "../blocks/Header";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  const handleImageError = () => {
    document.getElementById("screenshot-container")?.classList.add("!hidden");
    document.getElementById("docs-card")?.classList.add("!row-span-1");
    document.getElementById("docs-card-content")?.classList.add("!flex-row");
    document.getElementById("background")?.classList.add("!hidden");
  };

  return (
    <>
      <Head title="Welcome" />
      <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
        <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
          <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
            {/* Gebruik hier de nieuwe Header component */}
            <Header auth={auth} />

            <footer className="py-16 text-center text-sm text-black dark:text-white/70">
              Laravel v{laravelVersion} (PHP v{phpVersion})
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
