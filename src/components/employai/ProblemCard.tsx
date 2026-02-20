import React from "react";
import { Plus } from "lucide-react";

interface ProblemCardProps {
  title: string;
  description: string;
  bgColor: string;
  accentColor: string;
  icon: string;
}

export const ProblemCard: React.FC<ProblemCardProps> = ({
  title,
  description,
  bgColor,
  accentColor,
  icon,
}) => {
  return (
    <div className="snap-center">
      <button
        className="text-left relative isolate flex flex-col justify-end overflow-hidden py-10 px-8 h-125 aspect-336/360 rounded-lg hover:brightness-110 transition-[filter] duration-200 ease-out"
        style={{ backgroundColor: bgColor }}
      >
        {/* Simple Icon Illustration */}
        <div className="absolute top-12 left-0 right-0 px-8 flex items-center justify-center">
          <div className="py-20">
            {icon === "search" && (
              <svg
                className="w-20 h-20 opacity-20"
                style={{ color: accentColor }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            )}
            {icon === "chat" && (
              <svg
                className="w-20 h-20 opacity-20"
                style={{ color: accentColor }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            )}
            {icon === "filter" && (
              <svg
                className="w-20 h-20 opacity-20"
                style={{ color: accentColor }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Content at Bottom */}
        <div className="flex justify-between items-start w-full mt-4 relative z-10">
          <div className="title max-w-full flex flex-col">
            <span className="inline-block text-white text-balance align-top text-xl font-medium">
              {title}
            </span>
            <p className="mt-3 text-[14px] text-zinc-400 leading-5.5 text-balance">
              {description}
            </p>
          </div>
        </div>

        {/* Plus Button - No Rounded Border */}
        <div className="absolute bottom-10 right-8">
          <div
            className="w-10 h-10 flex items-center justify-center transition-opacity hover:opacity-70"
            style={{ backgroundColor: accentColor }}
          >
            <Plus className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
        </div>
      </button>
    </div>
  );
};
