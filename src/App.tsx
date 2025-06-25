import clsx from "clsx";
import { LayoutGroup, motion } from "framer-motion";
import { Bolt, CircleCheck, Ellipsis, Flag, Hourglass } from "lucide-react";
import { useState } from "react";
import CustomCheckboxForm from "./components/ CustomCheckboxForm";
import LoadingShine from "./components/LoadingShine";

export default function App() {
  const [isCollapse, setIsCollapse] = useState(true);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <LayoutGroup>
        <motion.section
          initial={false}
          animate={{
            width: isCollapse ? 500 : 800,
            height: isCollapse ? 100 : "auto",
            borderRadius: isCollapse ? 15 : 8,
          }}
          className="bg-neutral-200 p-[2px]"
        >
          <motion.header
            layout
            onClick={() => setIsCollapse(!isCollapse)}
            className="flex justify-between p-2 w-full"
          >
            <div
              className={clsx(
                "flex gap-1 p-1 rounded-md",
                isCollapse && "bg-neutral-300"
              )}
            >
              <div className="p-[2px] rounded-md bg-neutral-200">
                <Bolt size={30} strokeWidth={2} color="#737373" />
              </div>
              <p
                className={clsx(
                  isCollapse ? "text-xl font-bold" : "font-bold text-2xl"
                )}
              >
                Design System
              </p>
            </div>
            {isCollapse && (
              <motion.div
                layoutId="loader"
                className="flex gap-2 justify-center items-center h-5"
              >
                <LoadingShine className="h-3 w-[200px]" />
                <p className="text-xl text-neutral-500">75%</p>
              </motion.div>
            )}
            {!isCollapse && (
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                className="bg-neutral-200 h-8 w-8 rounded-md flex justify-center items-center border-neutral-300 border-2"
              >
                <Ellipsis size={25} />
              </motion.div>
            )}
          </motion.header>
          <motion.main layout className="">
            <div
              className={clsx(
                "flex w-full px-4",
                isCollapse ? "flex-row justify-start" : "flex-col"
              )}
            >
              {!isCollapse && (
                <div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex w-fit px-1 h-5 justify-start gap-2 items-center border-2 border-neutral-400/50 rounded-full"
                  >
                    <CircleCheck size={15} color="#737373" />
                    <p className="text-neutral-500 text-xs font-semibold">
                      3 of 4
                    </p>
                    <motion.div
                      layoutId="loader"
                      className="flex gap-2 justify-center h-5 items-center"
                    >
                      <LoadingShine className="h-2 w-[200px]" />
                      <p className="text-xs text-neutral-500">75%</p>
                    </motion.div>
                  </motion.div>
                  <CustomCheckboxForm />
                </div>
              )}

              {isCollapse && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  className="flex w-full justify-between px-2"
                >
                  <div className="flex gap-2">
                    <motion.div
                      layout
                      className="flex justify-center items-center gap-1"
                    >
                      <Flag size={20} strokeWidth={2} color="#737373" />
                      <p className="text-neutral-500 text-[18px] font-semibold">
                        Urgent
                      </p>
                    </motion.div>
                    <motion.div
                      layout
                      className="flex justify-center items-center gap-1"
                    >
                      <Hourglass size={20} strokeWidth={2} color="#737373" />
                      <p className="text-neutral-500 text-[18px] font-semibold">
                        In Progress
                      </p>
                    </motion.div>
                  </div>
                  <div className="flex">
                    <img
                      src="/public/leao-messi.jpg"
                      alt="messi"
                      className="rounded-full h-6 w-6 outline-2 z-[3] translate-x-2 outline-green-500"
                    />
                    <img
                      src="/kakshi.jpg"
                      alt="kakshi"
                      className="rounded-full h-6 w-6 outline-2 z-[2] translate-x-1 outline-green-500"
                    />
                    <img
                      src="/public/leao-messi.jpg"
                      alt="messi"
                      className="rounded-full h-6 w-6 outline-2 z-[1] outline-green-500"
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </motion.main>
        </motion.section>
      </LayoutGroup>
    </div>
  );
}
