"use client"

import { CenterContainer } from "@/components/center-container";
import { fontRoboto, fontSaira } from "@/fonts";
import { useTheme } from "@/hooks/use-theme";
import { BiSun } from "react-icons/bi";
import { LuCrown } from "react-icons/lu";

interface LayoutProps {
  children: React.ReactNode;
}

function Header() {
  const { handleTheme } = useTheme();

  return (
    <header className="w-full p-2 border-b border-gray-200 dark:border-gray-500/60">
      <CenterContainer className="justify-between w-full items-center flex-row">
        <div className="flex flex-1">
          <h1
            className={`${fontSaira} p-2 w-full font-semibold text-lg text-indigo-500`}
          >
            Anotai
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleTheme()}
            className="w-7 h-7 bg-gray-100 text-gray-400 border-opacity-60 rounded-md grid place-items-center
            dark:bg-gray-800"
          >
            <BiSun />
          </button>

          <button
            className={`${fontRoboto} p-1 px-3 border border-indigo-500 shadow-xl shadow-indigo-500/20 
            flex text-indigo-500 rounded bg-white dark:bg-gray-800 dark:text-shadow sopacity-90 hover:opacity-100 gap-2 items-center text-sm`}
          >
            <LuCrown />
            Premium
          </button>
        </div>
      </CenterContainer>
    </header>
  );
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <CenterContainer>{children}</CenterContainer>
    </>
  );
}
