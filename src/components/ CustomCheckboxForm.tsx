import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

const options = [
  "Design Tokens",
  "Color System",
  "Type System",
  "Documentation",
];

export default function CustomCheckboxForm() {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const toggleItem = (label: string) => {
    setCheckedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-2 h-[140px] p-4"
    >
      {options.map((label) => {
        const isChecked = checkedItems.includes(label);

        return (
          <div
            key={label}
            className="flex items-center gap-1 cursor-pointer select-none"
            onClick={() => toggleItem(label)}
          >
            <div
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors duration-200
              ${
                isChecked
                  ? "bg-blue-500 border-blue-500 text-white"
                  : "border-gray-400"
              }`}
            >
              {isChecked && <Check size={12} />}
            </div>
            <span className="text-sm">{label}</span>
          </div>
        );
      })}
    </motion.form>
  );
}
