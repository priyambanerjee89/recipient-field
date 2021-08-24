import React, { ReactElement } from "react";
import { EnteredEmailProps } from "../models/recipient";

export default function EnteredEmail({
  email,
  valid,
  deleteHandler,
}: EnteredEmailProps): ReactElement {
  return (
    <div className={`entered-email ${valid ? "" : "invalid"}`}>
      <span>{email}</span>
      <span onClick={() => deleteHandler(email)} className="close-icon">
        x
      </span>
    </div>
  );
}
