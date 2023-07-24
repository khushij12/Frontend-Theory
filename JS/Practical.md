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

## The interviewer asked him to Design Snake and Ledger game including all functions and lifecycle hooks
Designing the Snake and Ledger game involves creating the game mechanics, UI elements, and handling various game states. Here's an outline of how you can design the game along with the necessary functions and lifecycle hooks:

**Game Mechanics:**
1. **Snake:** The player controls a snake that moves around the game board. The snake grows in length when it eats food and dies if it collides with its own body or the boundaries.
2. **Food:** The food appears at random positions on the game board. When the snake's head collides with the food, the snake grows longer, and the player earns points.
3. **Ledger:** The game keeps track of the player's score, highest score, and current game status (e.g., playing, game over).

**Game Components and Functions:**

1. **GameBoard Component:**
   - Responsible for rendering the game board and managing game state.
   - Contains the state variables: `snake`, `food`, `score`, `highestScore`, `isGameOver`, etc.
   - Lifecycle Hooks:
     - `componentDidMount`: Initialize the game state and start the game loop.
     - `componentWillUnmount`: Clean up resources and timers when the component is unmounted.

2. **Snake Component:**
   - Renders the snake on the game board and handles its movement.
   - Functions:
     - `move`: Move the snake in the current direction.
     - `changeDirection`: Update the direction of the snake based on user input.

3. **Food Component:**
   - Renders the food on the game board at random positions.
   - Functions:
     - `generateRandomPosition`: Generate a random position for the food.

4. **Ledger Component:**
   - Displays the player's score and highest score.
   - Functions:
     - `updateScore`: Update the score when the snake eats food.
     - `updateHighestScore`: Update the highest score if the current score surpasses it.

**Game Loop:**

- Implement a game loop that repeatedly updates the game state and redraws the game board on the screen at a fixed frame rate.

**Event Handling:**

- Use event listeners to detect user input (e.g., arrow keys) for changing the direction of the snake.

**Collision Detection:**

- Implement collision detection logic to check if the snake collides with the food, boundaries, or itself, leading to game over scenarios.

**Game Over Handling:**

- When the game is over, stop the game loop, update the highest score if needed, and show a game-over message.

**Summary:**

Designing the Snake and Ledger game involves breaking it down into components and functions responsible for different aspects of the game, such as rendering, game mechanics, collision detection, and handling game states. Using React, you can create reusable components and manage game state efficiently. Additionally, you need to implement a game loop to keep the game running and handle user input to control the snake's movement.


1. **What are Promises in JavaScript?**
   Promises are objects in JavaScript that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They allow us to handle asynchronous code in a more structured and readable way, avoiding deeply nested callbacks.

2. **What are the three states of a Promise?**
   Promises can be in one of three states:
   - **Pending**: The initial state when the Promise is created and is waiting for the operation to complete.
   - **Fulfilled (Resolved)**: The operation completed successfully, and the Promise has a resulting value.
   - **Rejected**: The operation encountered an error, and the Promise holds the reason for the failure.

3. **How do you create a Promise in JavaScript?**
   You can create a new Promise using the `Promise` constructor, which takes a single function called the "executor." The executor function has two arguments, `resolve` and `reject`, which are used to fulfill or reject the Promise.

   ```javascript
   const myPromise = new Promise((resolve, reject) => {
     // Asynchronous operation
     if (operationSuccessful) {
       resolve(result);
     } else {
       reject(error);
     }
   });
   ```

4. **What are the two functions used to handle Promise outcomes?**
   To handle the outcomes of a Promise, you can use the `.then()` method to handle the resolved state and the `.catch()` method to handle the rejected state.

   ```javascript
   myPromise.then((result) => {
     // Handle successful operation
   }).catch((error) => {
     // Handle error
   });
   ```

5. **What is Promise Chaining?**
   Promise chaining is a technique to perform multiple asynchronous operations in sequence. By returning a Promise from the `.then()` callback, you can chain additional `.then()` or `.catch()` calls to handle the results or errors of subsequent asynchronous tasks.

6. **How do you handle multiple Promises concurrently?**
   To handle multiple Promises concurrently, you can use `Promise.all([...])` to wait for all Promises to resolve or `Promise.race([...])` to respond as soon as any of the Promises resolve or reject.

7. **How do you handle errors in Promises?**
   You can use `.catch()` to handle errors in Promises. It allows you to catch and handle any rejected Promise, preventing the error from propagating further down the chain.

8. **What is the difference between Promises and Callbacks?**
   Promises offer a more structured way to handle asynchronous operations compared to traditional callbacks. Promises allow you to chain asynchronous operations and handle errors more gracefully, leading to more readable and maintainable code.

9. **What is async/await, and how does it relate to Promises?**
   `async/await` is a syntactic sugar introduced in ES2017 to work with Promises more elegantly. `async` is used before a function declaration to indicate that it returns a Promise, and `await` is used within an `async` function to wait for a Promise to resolve before proceeding further.

   ```javascript
   async function myAsyncFunction() {
     try {
       const result = await myPromise; // Await the resolution of the Promise
       // Handle the result
     } catch (error) {
       // Handle errors
     }
   }
   ```

10. **How do you handle Promise rejections globally?**
    To handle unhandled Promise rejections globally, you can attach a listener to the `unhandledrejection` event or use `window.addEventListener("unhandledrejection", handler)`.

   ```javascript
   window.addEventListener("unhandledrejection", (event) => {
     // Handle unhandled Promise rejections
   });
   ```

## React class-based component life cycle methods
In React class-based components, there are several lifecycle methods that allow you to hook into various stages of a component's life. These methods are invoked automatically by React. Here are some of the most commonly used lifecycle methods along with a basic example:

```javascript
import React, { Component } from "react";

class MyClassComponent extends Component {
  // 1. Constructor: It is called when the component is created.
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor called");
  }

  // 2. componentDidMount: It is called after the component is rendered to the DOM.
  componentDidMount() {
    console.log("Component did mount");
  }

  // 3. componentDidUpdate: It is called whenever the component updates and after the render method is called.
  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update");
  }

  // 4. componentWillUnmount: It is called just before the component is removed from the DOM.
  componentWillUnmount() {
    console.log("Component will unmount");
  }

  // 5. render: It is required and is responsible for returning the JSX that represents the component's UI.
  render() {
    console.log("Render method called");
    return (
      <div>
        <h1>Class-based Component</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState((prevState) => ({ count: prevState.count + 1 }))}>
          Increment Count
        </button>
      </div>
    );
  }
}

export default MyClassComponent;
```

In this example, we have a simple class-based component `MyClassComponent`. Here's a brief explanation of each lifecycle method:

1. **Constructor**: The constructor is called when the component is created. It is used to initialize the component's state and bind event handlers. Make sure to call `super(props)` to properly initialize the base class.

2. **componentDidMount**: `componentDidMount` is called after the component is rendered to the DOM. It is commonly used for performing side effects such as fetching data from an API or setting up subscriptions.

3. **componentDidUpdate**: `componentDidUpdate` is called whenever the component updates, which happens whenever the state or props change. It is often used for handling updates that require changes to the component's DOM or state.

4. **componentWillUnmount**: `componentWillUnmount` is called just before the component is removed from the DOM. It is used for cleaning up resources, such as removing event listeners or canceling pending API requests.

5. **render**: The `render` method is required in class-based components. It is responsible for returning the JSX that represents the component's UI. The render method is invoked whenever the component state or props change.
