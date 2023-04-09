// LAYOUT COMPONENT EXAMPLE
import { ReactNode } from "react";

interface TipProps {
  children: ReactNode;
}

const Tip = ({ children }: TipProps) => {
  return (
    <div className="bg-stickyNoteYellow p-3 drop-shadow-md max-w-[220px]">
      <span className="italic text-sm">{children}</span>
    </div>
  );
};

export default Tip;
