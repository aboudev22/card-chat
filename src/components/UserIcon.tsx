import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

type UserType = {
  src: string;
  userName: string;
  isCollapse: boolean;
  className?: string;
};

export default function UserIcon({
  src,
  userName,
  isCollapse,
  className,
}: UserType) {
  return (
    <motion.section
      layoutId={userName}
      transition={{ duration: 0.3, ease: "linear" }}
      className={clsx(
        "flex items-center justify-center inset-ring-1 inset-ring-neutral-300 bg-neutral-100 gap-1 rounded-full p-1 overflow-hidden",
        className
      )}
    >
      <motion.img
        layout
        className="rounded-full w-8 h-8 border-2 border-neutral-300"
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
            transition={{ duration: 0.3, ease: "linear" }}
            className="text-xs font-bold text-center whitespace-nowrap"
          >
            {userName}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
