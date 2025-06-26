import { AnimatePresence, motion } from "framer-motion";

type UserType = {
  src: string;
  userName: string;
  isCollapse: boolean;
};

export default function UserIcon({ src, userName, isCollapse }: UserType) {
  return (
    <motion.section
      layout
      className="flex items-center justify-center inset-ring-2 inset-ring-violet-300 bg-white gap-1 rounded-full p-1 overflow-hidden"
    >
      <motion.img
        layout
        className="rounded-full w-8 h-8 border-2 border-violet-300"
        src={src}
        alt={userName}
      />
      <AnimatePresence initial={false}>
        {!isCollapse && (
          <motion.p
            layout
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "linear" }}
            className="text-xs font-bold text-center whitespace-nowrap"
          >
            {userName}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
