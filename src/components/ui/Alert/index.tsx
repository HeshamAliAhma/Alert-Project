import { useState } from "react";
import "./index.scss";
import { CircleX } from "lucide-react";
import {IProps} from "../../../interface"

const Alert = ({type,headerIcon,title,description,children}: IProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? (
        ""
      ) : (
        <div className={type}>
          <div className="alert-header">
            <div className="alert-header-left">
              {headerIcon}
              <h4 className="alert-title">{title}</h4>
            </div>
            <span>
              <CircleX className="close-icon" onClick={() => setOpen(true)} />
            </span>
          </div>

          {children ? children : <p> {description} </p>}
        </div>
      )}
    </>
  );
};

export default Alert;
