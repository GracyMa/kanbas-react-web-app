
import ModuleEditor from "./ModuleEditor";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { MdDoNotDisturbAlt } from "react-icons/md";
import Protected from "../../Dashboard/Protected";

export default function ModulesControls(
    { moduleName, setModuleName, addModule }:
    { moduleName: string; setModuleName: (title: string) => void; addModule: () => void; }
) {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
        <Protected>
            <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end"
                data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog" >
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Module
            </button>
        </Protected>
        <div className="dropdown d-inline me-1 float-end">
            <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
            type="button" data-bs-toggle="dropdown">
            <GreenCheckmark />
            Publish All
            </button>
            <ul className="dropdown-menu">
                <li>
                    <button
                        id="wd-publish-all-modules-and-items-btn"
                        className="dropdown-item"
                        onClick={() => console.log('Publish all modules and items')}
                    >
                        <GreenCheckmark />
                        Publish all modules and items
                    </button>
                </li>
                <li>
                    <button
                        id="wd-publish-modules-only-button"
                        className="dropdown-item"
                        onClick={() => console.log('Publish modules only')}
                    >
                        <GreenCheckmark />
                        Publish modules only
                    </button>
                </li>
                <li>
                    <button
                        id="wd-unpublish-all-modules-and-items"
                        className="dropdown-item"
                        onClick={() => console.log('Unpublish all modules and items')}
                    >
                        <MdDoNotDisturbAlt className="me-2 fs-5"/>
                        Unpublish all modules and items
                    </button>
                </li>
                <li>
                    <button
                        id="wd-unpublish-modules-only"
                        className="dropdown-item"
                        onClick={() => console.log('Unpublish modules only')}
                    >
                        <MdDoNotDisturbAlt className="me-2 fs-5"/>
                        Unpublish modules only
                    </button>
                </li>
            </ul>
        </div>
        <button id="wd-view-progress" className="btn btn-lg btn-secondary me-1 float-end">
            View Progress
        </button>
        <button id="wd-collapse-all" className="btn btn-lg btn-secondary me-1 float-end">
            Collapse All
        </button>
        <ModuleEditor dialogTitle="Add Module" moduleName={moduleName}
                    setModuleName={setModuleName} addModule={addModule} />
    </div>
  );
}
