import clsx from "clsx";
import { LayoutGroup, motion } from "framer-motion";

interface LoadingProps {
  /** Width of the loading bar in pixels */
  width?: number;

  /** Loading progress percentage (0 to 100) */
  load?: number;

  /**  */
  className?: string;
}

export default function LoadingShine({ width, load, className }: LoadingProps) {
  const newLoad = load ? Math.max(0, Math.min(100, load)) : "";
  return (
    <LayoutGroup>
      <div
        style={{ width }}
        className={clsx("h-2 w-[150px] bg-neutral-300 rounded-full", className)}
      >
        <motion.div
          layout
          style={{ width: newLoad }}
          className="relative overflow-hidden h-full bg-green-500 w-2/3 rounded-full"
        >
          <motion.div
            layout
            initial={{ translate: "0%" }}
            animate={{ translate: "500%" }}
            transition={{ repeat: Infinity, repeatDelay: 1, duration: 0.4 }}
            className="absolute top-0 bottom-0 w-[30px] bg-gradient-to-r from-white/5 via-white/80 to-white/5"
          />
        </motion.div>
      </div>
    </LayoutGroup>
  );
}
