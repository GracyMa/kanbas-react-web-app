import React from "react";

interface PillContainerProps {
  content: string;
}

const PillContainer = ({ content }: PillContainerProps) => {
  return (
    <span className="badge rounded-pill text-dark border border-dark bg-secondary">
      {content}
    </span>
  );
};

export default PillContainer;
