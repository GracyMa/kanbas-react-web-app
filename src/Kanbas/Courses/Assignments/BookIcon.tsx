// import { FaCheckCircle, FaCircle, FaRegListAlt } from "react-icons/fa";

// export default function BookIcon() {
//   return (
//     <span className="me-1 position-relative">
//       <FaRegListAlt style={{ top: "2px" }}
//         className="text-success me-1 fs-5" />
//       {/* <FaCircle className="text-white me-1 fs-6" /> */}
//     </span>
// );}

import { FaRegListAlt } from "react-icons/fa";

interface BookIconProps {
  className?: string;
}

export default function BookIcon({ className }: BookIconProps) {
  return (
    <span className={`me-1 position-relative ${className}`}>
      <FaRegListAlt style={{ top: "2px" }} className="text-success me-1 fs-5" />
    </span>
  );
}
