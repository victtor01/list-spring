"use client";

import { CenterContainer } from "@/components/center-container";
import { fontSaira } from "@/fonts";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Add = () => {
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const handleShowAdd = () => setShowAdd((prev) => !prev);

  return !showAdd ? (
    <div className="flex w-full">
      <button
        onClick={handleShowAdd}
        type="button"
        className="border border-gray-500 rounded-md border-dashed w-full p-2 opacity-90 hover:opacity-100"
      >
        <span className={`${fontSaira} text-gray-500`}>Criar Espaço</span>
      </button>
    </div>
  ) : (
    <div className="w-full rounded-2xl p-7 bg-gray-800/60 flex gap-5 flex-col">
      <header className="flex w-full justify-between text-lg text-gray-300">
        <div className={fontSaira}>Criar nova lista</div>
        <button
          onClick={handleShowAdd}
          type="button"
          className="w-8 h-8 bg-gray-700 rounded-md grid 
          place-items-center opacity-90 hover:opacity-100"
        >
          <IoClose />
        </button>
      </header>
      <div className="flex gap-3 flex-1">
        <label htmlFor="" className="w-full relative items-center flex">
          <input
            placeholder="Minha nova lista..."
            type="text"
            className="p-2 rounded-md border bg-transparent border-gray-600 flex-1 w-full outline-none focus:ring-2 ring-indigo-600"
          />

          <span className="absolute right-2 text-sm opacity-70">34</span>
        </label>
        <button className="p-2 px-4 bg-indigo-500 rounded-lg opacity-90 hover:opacity-100">
          Criar
        </button>
      </div>
    </div>
  );
};

const SpaceContainer = () => {
  return (
    <button className="justify-start text-start group shadow-xl hover:shadow-indigo-500/30 rounded-[2rem] flex w-full relative items-center opacity-95 hover:opacity-100">
      <div className="min-w-[8rem]  bg-indigo-600 h-[8rem] rounded-[2rem] rounded-tr-md z-20 border-4 border-indigo-500"></div>

      <div className="ml-[-2rem] flex">
        <div className="flex relative flex-col border-2 group-hover:border-indigo-500 border-transparent
        w-full pl-10 overflow-hidden p-3 gap-2 bg-gray-800 rounded-r-3xl">
          <header className="flex w-full justify-between gap-2">
            <h1
              className={`${fontSaira} text-gray-300 font-semibold flex text-2xl line-clamp-1`}
            >
              Meu primeiro workspace
            </h1>

            <div className="min-w-7 h-7 bg-gray-700 rounded grid place-items-center">
              <FaPen size={12} />
            </div>
          </header>

          <div className="text-sm opacity-50 line-clamp-1 p-1 rounded shadow">
            Esse espaço de trabalho serve para colocar todos os meus projetos
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            quas, voluptatibus eum nisi cumque repudiandae debitis distinctio
            nemo in et possimus a illo accusamus iusto deleniti mollitia porro
            beatae omnis.
          </div>
        </div>
      </div>
    </button>
  );
};

export default function HomePage() {
  return (
    <CenterContainer className="w-full p-2 py-6 flex-col gap-8">
      <section className="grid grid-cols-2 gap-6">
        <SpaceContainer />
        <SpaceContainer />
        <SpaceContainer />
      </section>

      <Add />
    </CenterContainer>
  );
}
