"use client";

import { fontSaira } from "@/fonts";
import { motion, MotionProps } from "framer-motion";

interface LayoutAuthProps {
  children: React.ReactNode;
}

interface BurbleProps {
  delay: number;
  rotate: number;
  y: number;
  size: string;
  opacity: string;
  position: string;
}

const variants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
} satisfies MotionProps;

const Burble = ({ delay, y, rotate, size, opacity, position }: BurbleProps) => (
  <motion.div
    variants={variants}
    transition={{ delay }}
    initial={{ opacity: 0, y }}
    animate={{ opacity: 1, y: 0, rotate }}
    style={{ animationDelay: `${delay}s` }}
    className={`absolute bg-purple-600 rounded-3xl shadow-xl animate-pulse duration-[pulse]:[2s] ${size} ${opacity} ${position}`}
  />
);

const burbles = [
  {
    delay: 0.4,
    rotate: 30,
    y: 50,
    size: "w-[16vh] h-[16vh]",
    opacity: "opacity-100",
    position: "top-[10%] left-[50%]",
  },
  {
    delay: 0.6,
    rotate: 36,
    y: 50,
    size: "w-[16vh] h-[16vh]",
    opacity: "opacity-90",
    position: "top-[40%] left-[36%]",
  },
  {
    delay: 0.7,
    rotate: 70,
    y: 50,
    size: "w-[9rem] h-[9rem]",
    opacity: "opacity-70",
    position: "top-[50%] left-[60%]",
  },
  {
    delay: 0.4,
    rotate: 20,
    y: 50,
    size: "w-[12vh] h-[12vh]",
    opacity: "opacity-60",
    position: "top-[80%] left-[40%]",
  },
];

export default function LayoutAuth({ children }: LayoutAuthProps) {
  return (
    <main className="flex w-full flex-col h-screen overflow-auto bg-gray-900 relative">
      <header className="flex w-full p-7 gap-2 justify-between">
        <button
          className={`${fontSaira} shadow-2xl bg-purple-600 text-gray-300 p-2 px-3 opacity-80 hover:opacity-100 rounded-md font-semibold`}
        >
          Saber mais
        </button>

        <button
          className={`${fontSaira} bg-white text-gray-500 p-2 px-5 opacity-90 hover:opacity-100 rounded-md font-semibold`}
        >
          SignIn
        </button>
      </header>

      <section className="flex flex-1 w-full px-6">{children}</section>

      {burbles.map((props, index) => (
        <Burble key={index} {...props} />
      ))}
    </main>
  );
}
