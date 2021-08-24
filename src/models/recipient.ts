export interface EnteredEmailProps {
  email: string;
  valid: boolean;
  deleteHandler(selectedEmail: string): void;
}

export interface EmailAutoCompleteProps {
  savedEmails: string[];
  selectHandler(selectedEmail: string): void;
}
