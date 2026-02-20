import React from "react";

interface SectionHeadingProps {
  heading: string;
  badgeText: string;
  badgeStyle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading,
  badgeText,
  badgeStyle = "#fff",
}) => {
  return (
    <div className="mb-2">
      <span
        className={`inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-4`}
        style={{
          background: `linear-gradient(to right, ${badgeStyle}, black)`,
        }}
      >
        {badgeText}
      </span>
      <h2 className="text-4xl text-white md:text-6xl">{heading}</h2>
    </div>
  );
};

export default SectionHeading;
