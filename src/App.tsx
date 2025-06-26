import { motion } from "framer-motion";
import { useState } from "react";
import CustomCheckboxForm from "./components/ CustomCheckboxForm";
import Tag from "./components/Tag";
import UserIcon from "./components/UserIcon";

export default function App() {
  const [isCollapse, setIsCollapse] = useState(true);
  return (
    <div className="w-screen h-screen flex flex-col gap-5 justify-center items-center">
      <Tag />
      <CustomCheckboxForm />
      <UserIcon
        isCollapse={isCollapse}
        src="/public/kakshi.jpg"
        userName="Kakashi"
      />
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsCollapse(!isCollapse)}
        className="bg-black cursor-pointer text-xs font-bold text-pink-500 p-2 rounded-md"
      >
        collapse
      </motion.button>
    </div>
  );
}
