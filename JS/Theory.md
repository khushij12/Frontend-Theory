What is a closure?
What is the difference between a promise and a callback?

## Explain the this keyword in JavaScript.
A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.

In non–strict mode, this is always a reference to an object. In strict mode, it can be any value. In non-strict mode, a special process called this substitution ensures that the value of this is always an object. 

The value of this depends on in which context it appears: function, class, or global.

**Function context**:
Think about this as a hidden parameter of a function.

```js
function getThis() {
  return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }

```

The value of this is not the object that has the function as an own property, but the object that is used to call the function. 

```js
const obj3 = {
  __proto__: obj1,
  name: "obj3",
};console.log(obj3.getThis()); // { name: 'obj3' }
```

**Class context**
A class can be split into two contexts: static and instance. Static methods are not properties of this. They are properties of the class itself.

```js
class C {
  instanceField = this;
  static staticField = this;
}

const c = new C();
console.log(c.instanceField === c); // true
console.log(C.staticField === C); // true

```

**Global context**
```js
// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.b = "MDN";console.log(window.b); // "MDN"console.log(b); // "MDN"
```

## Prototype
Prototypes are the mechanism by which JavaScript objects inherit features from one another.

If you type the object's name followed by a period into the console, like myObject., then the console will pop up a list of all the properties available to this object. You'll see that as well as city and greet, there are lots of other properties!

```
__defineGetter__
__defineSetter__
__lookupGetter__
__lookupSetter__
__proto__
city
constructor
greet
hasOwnProperty
isPrototypeOf
propertyIsEnumerable
toLocaleString
toString
valueOf
```

Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

What is the prototype for myObject? To find out, we can use the function Object.getPrototypeOf():
```
Object.getPrototypeOf(myObject); // Object { }
```
<img width="750" alt="Screenshot 2023-07-20 at 3 00 44 PM" src="https://github.com/khushij12/Frontend/assets/69646098/3a400462-950f-4418-87cd-beeb286cdc4f">

**Shadowing properties**
```js
const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95

myDate.getYear = function () {
  console.log("something else!");
};

myDate.getYear(); // 'something else!'
```

**Setting a prototype**
1. Using Object.create
```js
const personPrototype = {
  greet() {
    console.log("hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!
```

2. Using a constructor
Object.assign(Person.prototype, personPrototype);

## closures
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

```js
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
```
This works and the reason is that functions in JavaScript form closures. A closure is the combination of a function and the lexical environment within which that function was declared. 

For instance, suppose we want to add buttons to a page to adjust the text size. 
```js
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);
```
```js
document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;
```

**Emulating private methods with closures**
```js
const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.
```

**Closure scope chain**
```js
// global scope
const e = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // outer functions scope
      return function sum4(d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result); // 20
```

## Async-style code
Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. 

Many functions provided by browsers, especially the most interesting ones, can potentially take a long time, and therefore, are asynchronous. For example:

1. Making HTTP requests using fetch()
2. Accessing a user's camera or microphone using getUserMedia()
3. Asking a user to select files using showOpenFilePicker()

You'll find that while our generatePrimes() function is running, our program is completely unresponsive: you can't type anything, click anything, or do anything else.
This is the basic problem with long-running synchronous functions. What we need is a way for our program to:

1. Start a long-running operation by calling a function.
2. Have that function start the operation and return immediately, so that our program can still be responsive to other events.
3. Notify us with the result of the operation when it eventually completes.

That's precisely what asynchronous functions can do. The rest of this module explains how they are implemented in JavaScript.

**Event handlers**
The description we just saw of asynchronous functions might remind you of event handlers, and if it does, you'd be right. You provide a function (the event handler) that will be called, not right away, but whenever the event happens. 

The following example shows this in action. Press "Click to start request" to send a request. We create a new XMLHttpRequest and listen for its loadend event. The handler logs a "Finished!" message along with the status code.

After adding the event listener we send the request. Note that after this, we can log "Started XHR request": that is, our program can continue to run while the request is going on, and our event handler will be called when the request is complete.

```html
<button id="xhr">Click to start request</button>
<button id="reload">Reload</button>

<pre readonly class="event-log"></pre>
```

```js
const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
  );
  xhr.send();
  log.textContent = `${log.textContent}Started XHR request\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});
```

**Callbacks**
An event handler is a particular type of callback. A callback is just a function that's passed into another function, with the expectation that the callback will be called at the appropriate time. 

without callback
```js
function doStep1(init) {
  return init + 1;
}

function doStep2(init) {
  return init + 2;
}

function doStep3(init) {
  return init + 3;
}

function doOperation() {
  let result = 0;
  result = doStep1(result);
  result = doStep2(result);
  result = doStep3(result);
  console.log(`result: ${result}`);
}

doOperation();
```

```js
function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}

doOperation();
```
Because we have to call callbacks inside callbacks, we get a deeply nested doOperation() function, which is much harder to read and debug. This is sometimes called "callback hell" or the "pyramid of doom".

## Promise
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function. 

Promises solves many problems like:

**Chaining**

A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step.

doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);

as a rule of thumb, whenever your operation encounters a promise, return it and defer its handling to the next then handler.

**Nesting**
```js
doSomethingCritical()
  .then((result) =>
    doSomethingOptional(result)
      .then((optionalResult) => doSomethingExtraNice(optionalResult))
      .catch((e) => {}),
  ) // Ignore if optional stuff fails; proceed.
  .then(() => moreCriticalStuff())
  .catch((e) => console.error(`Critical failure: ${e.message}`));
```

**Chaining after a catch**
```js
new Promise((resolve, reject) => {
  console.log("Initial");

  resolve();
})
  .then(() => {
    throw new Error("Something failed");

    console.log("Do this");
  })
  .catch(() => {
    console.error("Do that");
  })
  .then(() => {
    console.log("Do this, no matter what happened before");
  });
```
Output
```
Initial
Do that
Do this, no matter what happened before
```

This is very much modeled after how synchronous code works:
```js
try {
  const result = syncDoSomething();
  const newResult = syncDoSomethingElse(result);
  const finalResult = syncDoThirdThing(newResult);
  console.log(`Got the final result: ${finalResult}`);
} catch (error) {
  failureCallback(error);
}
```

This symmetry with asynchronous code culminates in the async/await syntax:
```js
async function foo() {
  try {
    const result = await doSomething();
    const newResult = await doSomethingElse(result);
    const finalResult = await doThirdThing(newResult);
    console.log(`Got the final result: ${finalResult}`);
  } catch (error) {
    failureCallback(error);
  }
}
```
more to be read....

## Question: Design game, Snake and Its Food (Ball) from old Nokia phones, with boundaries,
Designing the "Snake and Its Food" game involves creating a basic game loop, defining the game mechanics, handling user input, and updating the game state accordingly. Below is a simple outline of how you can design the game:

**Game Elements:**
1. Snake: A series of connected blocks that move around the screen.
2. Food (Ball): A single block that appears at random positions on the screen.
3. Boundaries: The edges of the screen, which the snake cannot cross.

**Game Mechanics:**
1. The snake moves continuously in a specific direction (up, down, left, or right) at a constant speed.
2. The player can change the direction of the snake using arrow keys or touch controls (for mobile devices).
3. When the snake's head collides with the food, the snake grows longer, and a new food block appears at a random position.
4. If the snake's head collides with any part of its body or hits the boundaries, the game ends.

**Game Loop:**
The game loop is the core of the game, responsible for updating the game state, rendering graphics, and handling user input. It typically runs at a fixed frame rate to ensure smooth gameplay.

1. Initialize the game (e.g., set the initial position and length of the snake, place the first food block).
2. Enter the game loop:
   - Handle user input (e.g., arrow key presses to change the snake's direction).
   - Update the snake's position based on its current direction and speed.
   - Check for collisions (snake with food, snake with boundaries, snake with itself).
   - If the snake collides with food, increase its length and place a new food block.
   - Render the updated game state (draw the snake, food, and boundaries) on the screen.
3. Repeat the game loop until the game ends (collision occurs), and display a game-over message.

**Graphics and User Interface (UI):**
For a simple version, you can use basic graphics and a text-based interface. For more advanced versions, you can implement graphics libraries or frameworks.

**Scoring:**
You can keep track of the player's score by counting the number of food blocks the snake consumes. The longer the snake grows, the higher the score.

**Leveling Up (Optional):**
To make the game more challenging, you can implement different levels with increasing speed and difficulty as the player progresses.

**Sound (Optional):**
You can add sound effects for eating the food, collisions, and game-over scenarios to enhance the gaming experience.

This is a basic outline of how you can design the "Snake and Its Food" game. Depending on the platform and programming language you choose, the implementation details may vary. Remember that this is just the starting point, and you can expand and enhance the game with additional features and complexities.

## Question: Explain what happens when we enter google.com in URL, how data is fetched, and how DOM and CSSOM trees are made and manipulated. How the final page is painted.
So back to the main question of what happens when you type www.google.com or any other URL (Uniform Resource Locator) in your web browser and press Enter. So the first thing that happens is that your browser looks up in its cache to see if that website was visited before and the IP address is known. If it can't find the IP address for the URL requested then it asks your operating system to locate the web site. The first place your operating system is going to check for the address of the URL you specified is in the hosts file (/etc/hosts in Linux and Mac, c:\windows\system32\drivers\etc\hosts in Windows). If the URL is not found inside this file, then the OS will make a DNS request to find the IP Address of the web page. The first step is to ask the Resolver (or Internet Service Provider) server to look up in its cache to see if it knows the IP Address, if the Resolver does not know then it asks the root server to ask the .COM TLD (Top Level Domain) server - if your URL ends in .net then the TLD server would be .NET and so on - the TLD server will again check in its cache to see if the requested IP Address is there. If not, then it will have at least one of the authoritative name servers associated with that URL, and after going to the Name Server, it will return the IP Address associated with your URL. All this was done in a matter of milliseconds WOW!

After the OS has the IP Address and gives it to the browser, it then makes a GET (a type of HTTP Method) to said IP Address. When the request is made the browser again makes the request to the OS which then, in turn, packs the request in the TCP traffic protocol we discussed earlier, and it is sent to the IP Address. On its way, it is checked by both the OS' and the server's firewall to make sure that there are no security violations. And upon receiving the request the server (usually a load balancer that directs traffic to all available server for that website) sends a response with the IP Address of the chosen server along with the SSL (Secure Sockets Layer) certificate to initiate a secure session (HTTPS). Finally, the chosen server then sends the HTML, CSS, and Javascript files (If any) back to the OS who in turn gives it to the browser to interpret it. And then you get your website as you know it.

When you enter "google.com" in the URL and press Enter, the process of fetching the webpage involves several steps:

1. **Domain Resolution**: The browser needs to resolve the domain name "google.com" to an IP address using the Domain Name System (DNS) servers.

2. **HTTP Request**: Once the IP address is obtained, the browser sends an HTTP request to the server hosting the "google.com" website, asking for the webpage's content.

3. **Server Processing**: The server processes the request and generates an HTTP response. This response includes the HTML, CSS, JavaScript, and other assets required to render the webpage.

4. **Downloading Resources**: The browser downloads the HTML document and all linked resources (CSS files, images, scripts, etc.) mentioned in the HTML.

5. **Constructing the DOM Tree**: The browser parses the downloaded HTML and creates the Document Object Model (DOM) tree. The DOM represents the structured content of the webpage as a tree-like data structure, where each element in the HTML becomes a node in the tree.

6. **Fetching and Constructing the CSSOM Tree**: The browser also fetches and parses the CSS files mentioned in the HTML. It then creates the CSS Object Model (CSSOM) tree, which represents the CSS styles applied to each DOM node.

7. **Combining the DOM and CSSOM**: The browser combines the DOM and CSSOM to create the Render Tree. The Render Tree contains only the elements that will be visible on the screen after applying CSS styles.

8. **Layout (Reflow)**: The browser performs layout (also called reflow), where it calculates the exact position and size of each element in the Render Tree based on the CSS styles.

9. **Painting**: Once the layout is complete, the browser proceeds to the painting phase. It traverses the Render Tree and draws each element on the screen, pixel by pixel, using the appropriate colors and styles.

10. **Rendering the Final Page**: The browser repeats the painting process for all the visible elements in the Render Tree until the entire webpage is rendered on the screen.

Manipulating the DOM and CSSOM Trees:

1. **DOM Manipulation**: Developers can manipulate the DOM tree using JavaScript. You can add, modify, or remove elements from the DOM, change their attributes, and update their content dynamically.

2. **CSSOM Manipulation**: Similarly, developers can use JavaScript to manipulate the CSSOM tree. You can access and modify CSS properties of DOM elements, change styles dynamically, or even add new CSS rules.

**Painting and Repainting:**

When there are changes in the DOM or CSSOM, the browser may need to recalculate the layout and repaint the affected elements. This process is called "repainting."

To optimize performance, browsers use techniques like batching and throttling to minimize the number of repaints and layout recalculations.

Modern browsers also support hardware acceleration, using the GPU to speed up rendering and painting for smoother user experiences.

## What are the side effects of defer and async scripts and their pros and cons?
When loading scripts in HTML using the `defer` and `async` attributes, there are several side effects and trade-offs to consider. Let's explore the side effects and pros and cons of using each attribute:

**1. defer:**

- **Side Effects:**
  - Scripts with the `defer` attribute will be executed in the order they appear in the HTML document during the DOM parsing phase, but they will be deferred in execution until the document has finished parsing.
  - The script execution will be delayed until after the `DOMContentLoaded` event, which means it won't block the rendering of the page.
  - If multiple scripts have the `defer` attribute, they will be executed sequentially in the order they appear in the HTML.

- **Pros:**
  - It allows scripts to be executed in the proper order while not blocking the rendering of the page, which can improve the page's perceived loading speed.
  - It ensures that the DOM is fully parsed before script execution, reducing the chances of compatibility issues or undefined references in the script.
  - Suitable for scripts that rely on the DOM being ready, as it guarantees the DOM is available for manipulation.

- **Cons:**
  - Scripts with `defer` will not execute immediately, so if the script is essential for page functionality, there might be a slight delay before the script starts executing.
  - Deferred scripts still block the `onload` event, which might delay some scripts that rely on it.

**2. async:**

- **Side Effects:**
  - Scripts with the `async` attribute are fetched asynchronously, and the order of execution is not guaranteed. Whichever script is downloaded first will execute first.
  - It doesn't block the rendering of the page while fetching the script, but it will block other scripts' execution and the `DOMContentLoaded` event until the script is fully downloaded and executed.

- **Pros:**
  - Async scripts can improve the overall page loading speed because they don't block rendering and load in parallel with the HTML parsing.
  - Suitable for non-essential scripts or third-party scripts that don't depend on the DOM being ready.

- **Cons:**
  - The lack of ordering guarantees can cause issues if scripts rely on each other's execution order or depend on the DOM being ready.
  - Not recommended for scripts that manipulate the DOM or need access to elements that might not be loaded yet.

**Summary:**

- Use `defer` for scripts that require the DOM to be ready and need to be executed in order. It helps with loading performance and ensures proper execution sequence.
- Use `async` for non-essential scripts or third-party scripts that don't rely on the DOM being ready. It can improve page loading speed but may not be suitable for scripts that depend on each other or the DOM state.

In general, a combination of both approaches can be used strategically to optimize the loading and execution of scripts based on their specific requirements and dependencies.

## Different types of scope in Javascript
In JavaScript, there are three main types of scope: global scope, function scope, and block scope. Each type of scope determines the accessibility and lifetime of variables declared within it. Let's explore each scope type:

1. **Global Scope:**
   - Variables declared outside of any function or block have global scope.
   - Global variables are accessible from any part of the code, including functions, blocks, and nested scopes.
   - These variables remain in memory for the entire duration of the program's execution.
   - Be cautious with global variables as they can lead to potential naming conflicts and make it harder to track variable usage.

Example:
```javascript
var globalVar = 10;

function myFunction() {
  console.log(globalVar); // Accessible within the function
}

console.log(globalVar); // Accessible outside the function
```

2. **Function Scope:**
   - Variables declared within a function have function scope.
   - Function-scoped variables are only accessible within the function where they are declared and any nested functions within it.
   - These variables are not visible outside the function and are destroyed when the function execution completes.

Example:
```javascript
function myFunction() {
  var functionVar = 20;
  console.log(functionVar); // Accessible within the function
}

console.log(functionVar); // Error: functionVar is not defined (not accessible outside the function)
```

3. **Block Scope (Introduced in ES6 with `let` and `const`):**
   - Variables declared with `let` and `const` within a block (e.g., inside an `if` statement or loop) have block scope.
   - Block-scoped variables are accessible only within the block where they are declared.
   - Block-scoped variables also have a temporal dead zone (TDZ) between the start of the block and the actual declaration, where accessing the variable results in a reference error.

Example:
```javascript
if (true) {
  let blockVar = 30;
  console.log(blockVar); // Accessible within the block
}

console.log(blockVar); // Error: blockVar is not defined (not accessible outside the block)
```

## Difference between Debounce and Throttle. Its polyfill explanation
Debounce and throttle are two techniques used to manage and control the frequency of function calls, especially when handling events such as scrolling, resizing, or keyboard input. They help improve performance and reduce unnecessary function invocations. Let's explore the differences between debounce and throttle:

Polyfill Explanation:

A polyfill is a piece of code that provides modern functionality on older browsers that lack support for certain features. To create a polyfill for debounce and throttle, we need to implement the functionality using standard JavaScript code.

**Debounce:**

- Debounce delays the execution of a function until after a certain period of inactivity.
- When an event is triggered, the function won't be immediately executed. Instead, it will wait for a specific time period (e.g., 300 milliseconds) to see if any other events are triggered during that time.
- If another event is triggered within the debounce period, the previous function call is canceled, and the timer is reset.
- Debounce is useful when you want to wait for the user to stop interacting before taking action (e.g., for search suggestions, auto-saving, or resizing).

**Example of Debounce:**

```javascript
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const debouncedFn = debounce((searchText) => {
  // Perform search or other action here
  console.log("Searching for:", searchText);
}, 300);

// Call the debounced function on every input change
inputElement.addEventListener("input", (event) => {
  debouncedFn(event.target.value);
});
```

**Throttle:**

- Throttle limits the rate at which a function can be called.
- When an event is triggered, the function is executed immediately. Then, for a specified time interval, any subsequent events are ignored.
- Once the interval has passed, the next event will be processed, and the cycle continues.
- Throttle is useful when you want to control the frequency of function calls, preventing excessive or rapid execution (e.g., for scroll events, mousemove events, or API requests).

**Example of Throttle:**

```javascript
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const throttledFn = throttle((scrollPosition) => {
  // Handle scroll position
  console.log("Scroll position:", scrollPosition);
}, 200);

// Call the throttled function on every scroll event
window.addEventListener("scroll", (event) => {
  throttledFn(window.scrollY);
});
```
