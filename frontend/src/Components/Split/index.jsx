import React from "react";
import "./Split.css";

function Split(props) {
  const { submitButton, spanText, spanText2 } = props;

  return (
    <a href="javascript:SubmitForm('form1')">
      <div className="submit-button" style={{ backgroundImage: `url(${submitButton})` }}>
        <div className="submit valign-text-middle roboto-bold-white-14px">
          <span>
            <span className="roboto-bold-white-14px">{spanText}</span>
            <span className="roboto-bold-white-12px">{spanText2}</span>
          </span>
        </div>
      </div>
    </a>
  );
}

export default Split;
