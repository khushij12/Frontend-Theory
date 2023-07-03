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
