import { motion } from "framer-motion";
import CustomCheckboxForm from "./ CustomCheckboxForm";
import LoadingShine from "./LoadingShine";

export default function FormCard() {
  return (
    <motion.div layout className="flex flex-col">
      <div className="flex w-fit justify-center z-10 items-center gap-1 border-2 border-gray-400/60 bg-neutral-200 px-1 rounded-full">
        <p className="text-xs font-bold text-neutral-500">3 of 4</p>
        <motion.div
          transition={{ duration: 0.3 }}
          layoutId="loader"
          className="flex justify-center items-center"
        >
          <LoadingShine />
          <p className="text-xs text-neutral-500 font-bold">75%</p>
        </motion.div>
      </div>
      <div className="ml-4 -mt-1">
        <CustomCheckboxForm />
      </div>
    </motion.div>
  );
}
