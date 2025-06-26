import clsx from "clsx";
import { FlagTriangleRight, Timer } from "lucide-react";
import { useState } from "react";

type PriorityType = "urgent" | "medium" | "low";
type StatusType = "in-progress" | "finished" | "not-started";

export default function Tag() {
  const [priority, setPriority] = useState<PriorityType>("low");
  const [status, setStatus] = useState<StatusType>("not-started");

  const handleStatusChange = (value: StatusType) => {
    setStatus(value);
  };
  const handlePriorityChange = (value: PriorityType) => {
    setPriority(value);
  };

  return (
    <div className="flex flex-col gap-2 bg-white p-1">
      {/* Priority */}
      <div className="flex gap-2">
        <div className="flex justify-center items-center">
          <FlagTriangleRight
            size={16}
            strokeWidth={2.2}
            fill="#737373"
            color="#737373"
          />
          <p className="text-xs font-bold text-neutral-500">priority</p>
        </div>
        <select
          value={priority}
          onChange={(e) => handlePriorityChange(e.target.value as PriorityType)}
          className={clsx(
            "text-xs text-center text-neutral-500 font-bold cursor-pointer rounded-xs transition-all duration-200 p-[2px]",
            priority === "urgent"
              ? "bg-red-500/50"
              : priority === "medium"
              ? "bg-yellow-500/50"
              : "bg-gray-500/50"
          )}
        >
          <option className="text-xs cursor-pointer font-bold" value="urgent">
            urgent
          </option>
          <option className="text-xs cursor-pointer font-bold" value="medium">
            medium
          </option>
          <option className="text-xs cursor-pointer font-bold" value="low">
            low
          </option>
        </select>
      </div>

      {/* Status */}
      <div className="flex gap-2">
        <div className="flex justify-center items-center">
          <Timer size={16} strokeWidth={2.2} color="#737373" />
          <p className="text-xs font-bold text-neutral-500">status</p>
        </div>
        <select
          value={status}
          onChange={(e) => handleStatusChange(e.target.value as StatusType)}
          className={clsx(
            "text-xs text-center text-neutral-500 font-bold cursor-pointer rounded-xs transition-all duration-200 p-[2px]",
            status === "not-started"
              ? "bg-gray-500/50"
              : status === "finished"
              ? "bg-green-500/50"
              : "bg-yellow-500/50"
          )}
        >
          <option
            className="text-xs cursor-pointer font-bold"
            value="not-started"
          >
            not-started
          </option>
          <option className="text-xs cursor-pointer font-bold" value="finished">
            finished
          </option>
          <option
            className="text-xs cursor-pointer font-bold"
            value="in-progress"
          >
            in-progress
          </option>
        </select>
      </div>
    </div>
  );
}
