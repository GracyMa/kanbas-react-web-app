import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import BookIcon from "./BookIcon";
import "./Assignment.css";

interface AssignmentItemProps {
  content: {
    title: string;
    modules: string;
    available: string;
    due: string;
    points: string;
  };
  index: number;
}

const AssignmentItem = ({ content }: AssignmentItemProps) => {
  const { title, modules, available, due, points } = content;

  return (
    <li
      className="wd-lesson list-group-item p-3"
      style={{ borderLeft: "3px solid green" }}
    >
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-5 text-secondary" />
          <BookIcon className="me-2 fs-5" />
          <div>
            <h6 className="mb-1" style={{ fontSize: "1.25rem" }}>
              {title}
            </h6>
            <span className="text-danger" style={{ fontSize: "0.875rem" }}>
              {modules}
            </span>{" "}
            |{" "}
            <span style={{ fontSize: "0.875rem" }}>
              <strong>Not available until</strong> {available} |
            </span>
            <br />
            <span className="font-weight-bold" style={{ fontSize: "0.875rem" }}>
              <strong>Due </strong>
              {due}
            </span>{" "}
            | <span style={{ fontSize: "0.875rem" }}>{points}</span>
          </div>
        </div>
        <LessonControlButtons />
      </div>
    </li>
  );
};

export default AssignmentItem;
