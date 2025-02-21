import { CenterContainer } from "@/components/center-container";
import { fontRoboto, fontSaira } from "@/fonts";
import { BiPlus } from "react-icons/bi";
import { LuCrown } from "react-icons/lu";

interface LayoutProps {
  children: React.ReactNode;
}

function Header() {
  return (
    <header className="w-full p-2 border-b border-gray-500/60">
      <CenterContainer className="justify-between w-full items-center flex-row">
        <div className="flex flex-1">
          <h1
            className={`${fontSaira} p-2 w-full font-semibold text-lg text-indigo-500`}
          >
            Anotai
          </h1>
        </div>
        <div className="flex">
          <button
            className={`${fontRoboto} p-1 px-3 border border-indigo-500 shadow-xl shadow-indigo-500/20 
          flex text-indigo-500 rounded bg-gray-800 text-shadow opacity-90 hover:opacity-100 gap-2 items-center text-sm`}
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
