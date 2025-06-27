// TooltipWrapper.jsx
import React from "react";
import ReactTooltip from "react-tooltip";

const TooltipWrapper = ({ id, tooltipText, children }) => {
  return (
    <>
      <div data-tip data-for={id}>
        {children}
      </div>
      <ReactTooltip id={id} place="top" type="dark" effect="solid">
        {tooltipText}
      </ReactTooltip>
    </>
  );
};

export default TooltipWrapper;
