import clsx from "clsx";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Ellipsis, FlagTriangleRight, Settings, Timer } from "lucide-react";
import { useState } from "react";
import FormCard from "./components/FormCard";
import LoadingShine from "./components/LoadingShine";
import Tag from "./components/Tag";
import UserIcon from "./components/UserIcon";

export default function App() {
  const [isCollapse, setIsCollapse] = useState(true);
  const users = [
    { name: "kakashi", src: "/public/kakshi.jpg" },
    { name: "Messi", src: "/public/leao-messi.jpg" },
    { name: "pointer", src: "/public/pointer-c.jpg" },
  ];
  return (
    <div className="w-screen h-screen flex flex-col gap-5 justify-center items-center">
      <LayoutGroup>
        <motion.main
          layout
          animate={{ height: isCollapse ? 92 : 320 }}
          transition={{ duration: 0.3, ease: "linear" }}
          className="flex flex-col bg-white rounded-md shadow-2xl/20 p-2 overflow-hidden"
        >
          {/* Header */}
          <header
            onClick={() => setIsCollapse(!isCollapse)}
            className="flex w-sm justify-between items-center cursor-pointer"
          >
            <div className="flex gap-1 justify-center items-center bg-neutral-200 px-1 rounded-md">
              <div className="bg-white rounded-md p-[2px]">
                <Settings size={20} strokeWidth={2} />
              </div>
              <p className="font-medium text-xl">Design System</p>
            </div>
            {isCollapse && (
              <motion.div
                transition={{ duration: 0.3 }}
                layoutId="loader"
                className="flex gap-1 justify-center items-center"
              >
                <LoadingShine />
                <p className="text-[18px] text-neutral-500">75%</p>
              </motion.div>
            )}
            {!isCollapse && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                className="cursor-pointer"
              >
                <Ellipsis size={20} />
              </motion.div>
            )}
          </header>

          {isCollapse && (
            <motion.section
              layout
              className="flex w-full justify-between items-center"
            >
              <div className="flex">
                <motion.div layoutId="flag">
                  <FlagTriangleRight
                    size={16}
                    strokeWidth={2.2}
                    fill="#737373"
                    color="#737373"
                  />
                </motion.div>
                <p className="text-xs font-bold text-neutral-500">Urgent</p>
                <motion.div layoutId="timer" className="ml-2">
                  <Timer size={16} strokeWidth={2.2} color="#737373" />
                </motion.div>
                <p className="text-xs font-bold text-neutral-500">
                  In progress
                </p>
              </div>
              {/* User Icon */}
              <div className="flex">
                {users.map((user, index) => (
                  <UserIcon
                    key={user.name}
                    src={user.src}
                    isCollapse={isCollapse}
                    userName={user.name}
                    className={clsx(
                      `z-[${3 - index}]`,
                      index === 0
                        ? "translate-x-6"
                        : index === 1
                        ? "translate-x-3"
                        : ""
                    )}
                  />
                ))}
              </div>
            </motion.section>
          )}
          <AnimatePresence>
            {!isCollapse && (
              <motion.section
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "linear" }}
                className="flex flex-col w-full mt-2"
              >
                <FormCard />
                <Tag />
                {/* User Icon 2 */}
                <div className="flex">
                  {users.map((user) => (
                    <UserIcon
                      key={user.name}
                      src={user.src}
                      isCollapse={isCollapse}
                      userName={user.name}
                      className={clsx()}
                    />
                  ))}
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </motion.main>
      </LayoutGroup>
    </div>
  );
}
