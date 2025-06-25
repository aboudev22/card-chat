import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="h-screen w-screen flex-col-reverse items-center">
      <motion.div className="h-2 w-xs">
        <motion.div className="bg-green-500" />
      </motion.div>
    </div>
  );
}
