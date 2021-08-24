# Email Input Prompt

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Usage

```
git clone https://github.com/priyambanerjee89/email-address-input.git
npm install
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## TODOS

### Time-boxed to 4 hrs as instructed. These are the things I would have worked on if there was more time.

1. Style components to look exactly as provided Figma.

2. Remove selected email from autocomplete dropdown/add email back to dropdown if deleted from input.

3. Remove duplicate emails.

4. Add missing typings.

5. Add unit tests.

6. Remove placeholder text once an email is entered.

7. Fix linting. I added eslint but linting doesn't pass because of missing typings.

8. JS is not as DRY as it could be. There is repeated code that I could extract into methods. Same with CSS - could extract repeated css values like spacing and colors to css vars. All of the css is in one file - App.css - would break this up per component.

9. Extract state logic from App.tsx to custom hook.

10. Some dependencies listed in package.json should be devDependencies.
