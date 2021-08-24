import React, { ReactElement, useEffect, useRef, useState } from "react";
import EnteredEmail from "./components/EnteredEmail";
import EmailAutoComplete from "./components/EmailAutoComplete";

import "./App.css";

function App(): ReactElement {
  const [enteredEmails, setEnteredEmails] = useState<string[]>([]);
  const [savedEmails, setSavedEmails] = useState<string[]>([]);
  const [autoCompleteEmails, setAutoCompleteEmails] = useState<string[]>([]);
  const inputElement = useRef<HTMLInputElement>(null);

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter" || e.key === "Tab" || e.key === "Return") {
      e.preventDefault();
      const inputValue = inputElement.current?.value || "";
      if (inputElement.current) inputElement.current.value = "";
      if (inputValue)
        setEnteredEmails((enteredEmails) => [...enteredEmails, inputValue]);
    }
  };
  const updateAutoComplete = () => {
    const currentValue = inputElement?.current?.value || "";
    const autoCompleteEmails = savedEmails.filter((email) =>
      email.includes(currentValue)
    );

    setAutoCompleteEmails(autoCompleteEmails);
  };

  const isValidEmail = (email: string): boolean => {
    return !!email.match(/.+@.+\..+/);
  };

  const selectEmailHandler = (selectedEmail: string) => {
    setEnteredEmails((enteredEmails) => [...enteredEmails, selectedEmail]);
    setAutoCompleteEmails([]);
    if (inputElement.current) inputElement.current.value = "";
    inputElement?.current?.focus();
  };

  const deleteEmailHandler = (selectedEmail: string) => {
    setEnteredEmails((enteredEmails) =>
      enteredEmails.filter((email) => email !== selectedEmail)
    );
  };

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((mockData) => {
        setSavedEmails(mockData.data);
      });
  }, []);

  return (
    <div className="App">
      <div className="select-container">
        {enteredEmails.map((enteredEmail, index) => (
          <EnteredEmail
            key={index}
            email={enteredEmail}
            valid={isValidEmail(enteredEmail)}
            deleteHandler={deleteEmailHandler}
          />
        ))}
        <input
          ref={inputElement}
          placeholder={`${enteredEmails.length ? "" : "Enter Recipients..."}`}
          type="email"
          onKeyDown={handleKeyPress}
          onChange={updateAutoComplete}
        />
      </div>
      {autoCompleteEmails.length ? (
        <EmailAutoComplete
          selectHandler={selectEmailHandler}
          savedEmails={autoCompleteEmails}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
