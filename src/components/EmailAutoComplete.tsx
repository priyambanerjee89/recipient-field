import React, { ReactElement } from "react";
import { EmailAutoCompleteProps } from "../models/recipient";

export default function EmailAutoComplete({
  savedEmails,
  selectHandler,
}: EmailAutoCompleteProps): ReactElement {
  return (
    <div className="saved-emails">
      {savedEmails.map((savedEmail, index) => (
        <span key={index} onClick={() => selectHandler(savedEmail)}>
          {savedEmail}
        </span>
      ))}
    </div>
  );
}
