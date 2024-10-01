import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import PillContainer from "./PillContainer";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <PillContainer content={"40% of Total"} />
      <BsPlus className="fs-4 me-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
