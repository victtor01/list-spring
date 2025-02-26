"use client";

import { CenterContainer } from "@/components/center-container";
import { fontSaira } from "@/fonts";
import { useWorkspace } from "@/hooks/use-workspace";
import {
  CreateWorkspace,
  createWorkspaceSchema,
} from "@/validations/create-workspace-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPen } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

type SpaceProps = {
  action: () => void;
  title: string;
  description: string;
};

const Add = () => {
  const { create } = useWorkspace();
  const form = useForm<CreateWorkspace>({
    resolver: zodResolver(createWorkspaceSchema),
  });

  const { handleSubmit, register } = form;

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
    <form
      onSubmit={handleSubmit(create)}
      className="w-full rounded-2xl p-7 bg-white border dark:border-none dark:bg-gray-800/60 flex gap-5 flex-col"
    >
      <header className="flex w-full justify-between text-lg text-gray-600 dark:text-gray-300">
        <div className={fontSaira}>Criar nova lista</div>
        <button
          onClick={handleShowAdd}
          type="button"
          className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-md grid place-items-center opacity-90 hover:opacity-100"
        >
          <IoClose />
        </button>
      </header>
      <div className="flex gap-3 flex-1">
        <label htmlFor="" className="w-full relative items-center flex">
          <input
            {...register("name")}
            placeholder="Minha nova lista..."
            type="text"
            className="p-2 rounded-md border bg-transparent dark:border-gray-600 flex-1 w-full outline-none focus:ring-2 ring-indigo-600
            dark:bg-gray-800"
          />

          <span className="absolute right-2 text-sm opacity-70">34</span>
        </label>
        <button
          type="submit"
          className="p-2 px-4 text-white bg-indigo-500 rounded-lg opacity-90 hover:opacity-100"
        >
          Criar
        </button>
      </div>
    </form>
  );
};

const SpaceContainer = (props: SpaceProps) => {
  const { title, description, action } = props;

  return (
    <button
      onClick={action}
      className="text-gray-600 dark:text-white justify-start text-start group rounded-[2rem] flex w-full relative items-center opacity-95 hover:opacity-100"
    >
      <div className="min-w-[4rem] bg-indigo-600 h-[4rem] rounded-[2rem] rounded-tr-md z-20 border-4 border-indigo-500"></div>

      <div className="ml-[-2rem] flex flex-1 h-[5rem]">
        <div className="flex relative flex-col border-2 border-gray-200 dark:border-gray-700 group-hover:border-indigo-500 w-full pl-10 overflow-hidden p-3 gap-2 bg-gray-50 dark:bg-gray-900 rounded-xl dark:shadow-xl hover:shadow-indigo-500/30">
          <header className="flex w-full justify-between gap-2">
            <h1
              className={`${fontSaira} text-gray-700 dark:text-gray-300 font-semibold flex text-xl line-clamp-1`}
            >
              {title}
            </h1>

            <div className="min-w-7 h-7 dark:bg-gray-700 bg-gray-100 rounded grid place-items-center">
              <FaPen size={12} />
            </div>
          </header>

          <div className="text-sm opacity-50 line-clamp-1 p-1 rounded">
            {description}
          </div>
        </div>
      </div>
    </button>
  );
};

export default function HomePage() {
  const { getAll: getAllWorkspaces } = useWorkspace();
  const { workspaces } = getAllWorkspaces();

  return (
    <CenterContainer className="w-full p-2 py-6 flex-col gap-8">
      <header className="flex w-full justify-between items-center">
        <div className="flex flex-1">
          <div
            className="flex p-1 px-2 bg-gray-100 text-gray-400 font-semibold gap-2 rounded-lg
          dark:bg-gray-800"
          >
            <span>{workspaces?.length}</span>
            <span>/</span>
            <span>2</span>
          </div>
        </div>
        <div className="flex flex-1 gap-2 items-center">
          <input
            type="text"
            className="flex w-full p-2 px-3 border rounded-lg outline-none focus:ring-4 dark:ring-indigo-500 ring-indigo-400 transition-shadow
            dark:bg-gray-900 dark:border-gray-700"
            placeholder="Pesquise por um workspace"
          />
          <button className="w-[2.8rem] h-[2.5rem] bg-indigo-500 text-white rounded-md grid place-items-center">
            Go
          </button>
        </div>
      </header>

      <section className="grid grid-cols-2 gap-6">
        {workspaces?.map(({ name, description = "", id }) => {
          return (
            <SpaceContainer
              key={id}
              title={name}
              description={description}
              action={() => console.log(id)}
            />
          );
        })}
      </section>

      <Add />
    </CenterContainer>
  );
}
