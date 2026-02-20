import React from "react";

interface SectionHeadingProps {
  heading: string;
  badgeText: string;
  badgeStyle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading,
  badgeText,
  badgeStyle = "bg-blue-500",
}) => {
  return (
    <div className="mb-8">
      <span
        className={`inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-4 ${badgeStyle}`}
      >
        {badgeText}
      </span>
      <h2 className="text-3xl font-bold text-white md:text-4xl">{heading}</h2>
    </div>
  );
};

export default SectionHeading;
