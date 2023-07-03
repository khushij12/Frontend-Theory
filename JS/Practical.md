**Make the text within the button display the number of times the button has been clicked.**
```js
import './styles.css';

let count = 0;
const $countEl = document.querySelector('#count');

document
  .querySelector('button')
  .addEventListener('click', () => {
    // Fix the bug in the next line.
    count = count + 1;
    $countEl.textContent = count;
  });
```

**Implement a stack data structure in JavaScript that contains the following operations:**
```js
export default class Stack {
  constructor() {
    this.items = [];
  }

  /**
   * Pushes an item onto the top of the stack.
   * @param {*} item The item to be pushed onto the stack.
   * @return {number} The new length of the stack.
   */
  push(item) {
    return this.items.push(item);
  }

  /**
   * Remove an item at the top of the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  pop() {
    return this.items.pop();
    
  }

  /**
   * Determines if the stack is empty.
   * @return {boolean} `true` if the stack has no items, `false` otherwise.
   */
  isEmpty() {
    return this.items.length == 0;
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  peek() {
    return this.items[this.items.length-1];
  }

  /**
   * Returns the number of items in the stack.
   * @return {number} The number of items in the stack.
   */
  length() {
    return this.items.length;
  }
}
```
**In this question, we will implement the following utility functions to determine the types of primitive values.**
isBoolean(value): Return true if value is a boolean, false otherwise.

isNumber(value): Return true if value is a number, false otherwise. Note that NaN is considered a number.

isNull(value): Return true if value is null, false otherwise.

isString(value): Return true if value is a String, else false.

isSymbol(value): Return true if value is a Symbol primitive, else false.

isUndefined(value): Return true if value is undefined, else false.

```js
export function isBoolean(value) {
  return value === true || value === false;
}

export function isNumber(value) {
  return typeof value === 'number';
}

export function isNull(value) {
  return value === null;
}

export function isString(value) {
  return typeof value === 'string';
}

export function isSymbol(value) {
  return typeof value === 'symbol';
}

export function isUndefined(value) {
  return value === undefined;
}
```

**Building forms is a common task in Front End. In this exercise, we will build a basic "Contact Us" form, commonly seen on marketing websites for visitors to ask questions or provide feedback.**
```html
import './styles.css';
import submitForm from './submitForm';

export default function App() {
  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      onSubmit={submitForm}
      action="https://www.greatfrontend.com/api/questions/contact-form"
      method="post"
      >
      <input type="text" name="name"/>
      <input type="email" name="email"/>
      <textarea name="message"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}
```
```js
const SUBMIT_URL =
  'https://www.greatfrontend.com/api/questions/contact-form';

export default async function submitForm(event) {
  event.preventDefault();
  const form = event.target;

  try {
    if (form.action !== SUBMIT_URL) {
      alert('Incorrect form action value');
      return;
    }

    if (form.method.toLowerCase() !== 'post') {
      alert('Incorrect form method value');
      return;
    }

    const formData = new FormData(form);
    const response = await fetch(SUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
    });

    const text = await response.text();
    alert(text);
  } catch (_) {
    alert('Error submitting form!');
  }
}
```
