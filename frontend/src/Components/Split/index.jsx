import React from "react";
import "./Split.css";

function Split(props) {
  const { submitButton, submit } = props;

  return (
    <a href="javascript:SubmitForm('form1')">
      <div className="submit-button" style={{ backgroundImage: `url(${submitButton})` }}>
        <div className="submit valign-text-middle">{submit}</div>
      </div>
    </a>
  );
}

export default Split;
