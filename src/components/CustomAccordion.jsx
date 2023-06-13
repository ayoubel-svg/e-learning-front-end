import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LockIcon from "@mui/icons-material/Lock";
import "../styles/courseInfo.css";
const CustomAccordion = (props) => {
  const [selected, setSelected] = useState(null);
  const { isCurriculm, subTitle1, subTitle2, subTitle3, subTitle4, title, id } =
    props;
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div
      className="faq-container"
      style={{ display: isCurriculm ? "" : "none" }}
    >
      <div className="faq">
        <div className="faq-head" onClick={() => toggle(id)}>
          <h6>{title}</h6>
          {selected === id ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )}
        </div>
        <div className={selected === id ? "subTitles show" : "subTitles hide"}>
          <p>
            {subTitle1}
            <LockIcon />
          </p>
          <p>
            {subTitle2}
            <LockIcon />
          </p>
          <p>
            {subTitle3}
            <LockIcon />
          </p>
          <p>
            {subTitle4}
            <LockIcon />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomAccordion;
