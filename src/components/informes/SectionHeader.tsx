// components/SectionHeader.jsx
import React from "react";

const SectionHeader = ({
  title,
  dateRange,
}: {
  title: string;
  dateRange: any;
}) => {
  return (
    <div className="flex flex-col md:justify-start mb-4">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <span className="text-sm text-gray-500 font-medium ml-1">
        {dateRange}
      </span>
    </div>
  );
};

export default SectionHeader;
