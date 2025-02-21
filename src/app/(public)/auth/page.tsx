"use client";

import { fontSaira } from "@/fonts";
import Link from "next/link";
import { AnimationProps, motion } from "framer-motion";
import { useAuthentication } from "@/hooks/use-auth";

const animations = {
  initial: { opacity: 0, scale: 0.7 },
  animate: { opacity: 1, scale: 1 },
} satisfies AnimationProps;

export default function Auth() {
  const { useAuth } = useAuthentication();
  const { form, submit } = useAuth();
  const { formState, register, handleSubmit } = form;

  return (
    <motion.form
      onSubmit={handleSubmit(submit)}
      variants={animations}
      initial="initial"
      animate="animate"
      className="flex z-20 m-auto flex-col gap-0 p-10 w-full max-w-[25rem] h-auto bg-gray-800 rounded-3xl shadow-xl"
    >
      <header className="w-full font-semibold text-gray-300 text-xl">
        <h1 className={fontSaira}>Faça o login</h1>
      </header>

      <section className="flex flex-col gap-4 mt-3">
        <label htmlFor="email" className="flex gap-2 flex-col">
          <span className={`${fontSaira} opacity-70`}>Email</span>
          <input
            type="email"
            {...register("email")}
            placeholder="youremail@gmail.com"
            id="email"
            className="bg-transparent border rounded-lg focus:outline-indigo-500 outline-none border-gray-700 bg-gray-900 bg-opacity-70 p-2 px-3"
          />
        </label>

        <label htmlFor="password" className="flex flex-col gap-2">
          <span className={`${fontSaira} opacity-70`}>Password</span>
          <input
            {...register("password")}
            type="password"
            placeholder="•••••••••••"
            id="password"
            className="bg-transparent border rounded-lg border-gray-700 focus:outline-indigo-500 p-2 px-3 outline-none"
          />
        </label>
      </section>

      <Link
        href=""
        className={`${fontSaira} mt-1 px-1 opacity-60 font-semibold opacity`}
      >
        Esqueci minha senha
      </Link>

      <footer className="w-full mt-6">
        <button
          type="submit"
          className="text-white bg-purple-600 font-semibold p-2 w-full opacity-80 hover:opacity-100 rounded-xl py-3"
        >
          Entrar
        </button>
      </footer>
    </motion.form>
  );
}
