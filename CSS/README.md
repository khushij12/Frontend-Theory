What is the CSS box model?
Various CSS position properties and its differences.

## What is CSS selector specificity and how does it work?
Specificity is the algorithm used by browsers to determine the CSS declaration that is the most relevant to an element, which in turn, determines the property value to apply to the element. 

1. How does CSS specificity work, and what is its purpose in web development?
2. What is the specificity value of an element with an ID, a class, and a tag selector? How would you calculate it?
3. Compare the specificity of the following selectors: `#header`, `.navigation`, `header .navigation`, `header.navigation`. Which one would take precedence in the CSS hierarchy?
4. In case of conflicting styles, how can you increase the specificity of a CSS rule to ensure it overrides other styles?
5. Explain the difference between `!important` and inline styles in terms of specificity. When should each be used?
6. If two CSS rules have the same specificity, how does the order of the rules in the stylesheet affect which style gets applied?
7. How does the universal selector (*) affect specificity? Does it increase or decrease the specificity of a rule?
8. Describe the process of inheriting styles in CSS. How does it relate to specificity?
9. What is the "cascade" in CSS, and how does it impact the specificity of styles?
10. Discuss some best practices for writing maintainable and organized CSS code to avoid specificity conflicts in large projects.

## How is specificity calculated?
Specificity is an algorithm that calculates the weight that is applied to a given CSS declaration.

If there are two or more declarations providing different property values for the same element, the declaration value in the style block having the matching selector with the greatest algorithmic weight gets applied.

The specificity algorithm is basically a three-column value of three categories or weights - ID (1-0-0), CLASS (0-1-0), TYPE (0-0-1), and No value(0-0-0) - corresponding to the three types of selectors. 

**ID column**: Includes only ID selectors, such as #example

**CLASS column**: Includes class selectors, such as .myClass, attribute selectors like [type="radio"] and [lang|="fr"], and pseudo-classes, such as :hover, :nth-of-type(3n), and :required. 

**TYPE column**: Includes type selectors, such as p, h1, and td, and pseudo-elements like ::before, ::placeholder, and all other selectors with double-colon notation.

**No value**: The universal selector (*) and the pseudo-class :where().

 What do you understand about the display property?
The display property is used to control the visibility of an element. It can be used to hide elements from view, or to make them appear inline or as a block-level element.

## What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
As a rule, we want an HTML elements to look the same way, independent of which browser is being used to view it. Unfortunately, this is not the case because of the way browsers run.

CSS User Agent Styles:
When a browser renders an HTML page, it applies basic styles before you’ve even written a single style. For Example, the ```<h1> to <h6>``` HTML tags in all browsers differ from the normal text: in general, their font sizes are larger, their font-weight is bold(font-weight:bold), and they have margins on the top & the bottom.

The attempt to solve the browser inconsistency problem has produced two approaches: the Normalize CSS approach and the CSS Reset approach. In a nutshell, we can describe the Normalize CSS as a gentle solution and the Reset CSS as a more aggressive solution. Now let’s elaborate.

**Normalize CSS**

Normalize.css is a small CSS file that provides cross-browser consistency in the default styling of HTML elements.

But in some cases we can’t fix the faulty browsers according to the standard, usually because of IE or EDGE.
Here’s a real life example: Chrome, Safari and Firefox render ```<h1>``` tags that are inside an ```<article>/ <aside>/ <nav>/ <section>``` tag with a font-size that is smaller than an independent ```<h1>``` tag, and with a different margin size. These are the user agent styles in Chrome, Safari and Firefox in the case of an ```<h1>``` tag inside an ```<article>/ <aside>/ <nav>/ <section>``` tag:
```css
:-webkit-any(article,aside,nav,section) h1 {
   font-size: 1.5em;
   margin-block-start: 0.83em;
   margin-block-end: 0.83em;
}
```

It’s not possible to target IE / EDGE since those browsers don’t have an “any” selector. 

Normalize.css is an open source, continuously updated project on Github.

**Reset CSS**
“CSS Reset” resets all of the styles that come with the browser’s user agent.
There are multiple types of CSS Reset on the web. Here is an example of what a small part of CSS Reset looks like(from Eric Meyer’s CSS Reset):
```css
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,  figure, figcaption, footer, header, hgroup,  menu, nav, output, ruby, section, summary, time, mark, audio, video {  
   margin: 0;  
   padding: 0;  
   border: 0;  
   font-size: 100%;  
   font: inherit;  
   vertical-align: baseline; 
}
```

**Basic Typography**
Besides the normalize.css and thelocal.reset.css that I have in all of my projects, I add another file for basic typography. This file isn’t part of either normalize CSS or CSS reset, it’s a basic style sheet with the website’s typography, containing properties like direction, font-family, font-size, line-height, font color.

typography.css
```css
html{ 
   font-size: 1px;/*for using REM units*/
}
body{
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
   font-size: 16rem;
   font-weight: 400;
   line-height: 1.3;
   color: #222;
}
```

**Putting It All Together**
Utilizing the benefits of SASS pre-processor, I have a _reset.scss file that includes all these parts:

Normalize.css — the latest version of CSS Normalize from GitHub.
My own CSS Reset
A Basic Typography File
Example (_resets.scss file):

@import "resets/normalize.scss";
@import "resets/reset.local.scss";
@import "resets/typography.scss";

## Describe Floats and how they work.
Floats, along with several clearing techniques, were used to create multi-column layouts, but flex and grid items are nowadays used for this purpose.

## Describe z-index and how stacking context is formed.
Default Stacking Order

When z-index for an element is not specified, the stacking order of elements is formed from back to front like this:
1. The background and borders of the root element.
2. Descendant, non-positioned (or static) elements, following the order of appearance in the document.
3. Descendant positioned elements (or non-static), following the order of appearance in the document.

There are many instances when a stacking context is formed.
Common examples include:

1. Elements with position value of absolute or relative and have an integer z-index value.
2. Elements with position value of fixed or sticky.
3. Children inside flex containers, having an integer z-index.
4. Children inside grid containers, having an integer z-index.

## Describe BFC (Block Formatting Context) and how it works.
A block formatting context (BFC) is a part of a visual CSS rendering of a web page. 

**Prevent margin collapsing**
You can create a new BFC to avoid margin collapsing between two neighbor elements.

```html
// Margin collapsing example:

<div class="blue"></div>
<div class="red"></div>

.blue,
.red {
  height: 50px;
  margin: 10px 0;
}

.blue {
  background: blue;
}

.red {
  background: red;
}
```

```html
// Preventing margin collapsing
<div class="blue"></div>
<div class="outer">
  <div class="red"></div>
</div>

.blue,
.red {
  height: 50px;
  margin: 10px 0;
}

.blue {
  background: blue;
}

.red {
  background: red;
}

.outer {
  overflow: hidden;
  background: transparent;
}
```

## What are the various clearing techniques and which is appropriate for what context?
1. Empty div method - <div style="clear:both;"></div>. (The clear CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The clear property applies to floating and non-floating elements.)
2. Clearfix method — Refer to the .clearfix class above.
overflow: auto or overflow: hidden method - Parent will establish a new block formatting context and expand to contains its floated children.

## How would you approach fixing browser-specific styling issues?
1. Use a separate style sheet that only loads when that specific browser is being used. This technique requires server-side rendering though.
2. Use libraries like Bootstrap that already handles these styling issues for you.
3. Use autoprefixer to automatically add vendor prefixes to your code.
4. Use Reset CSS or Normalize.css.
5. If you're using Postcss (or a similar transpiling library), there may be plugins which allow you to opt in for using modern CSS syntax (and even W3C proposals) that will transform those sections of your code into corresponding safe code that will work in the targets you've used.

## How do you serve your pages for feature-constrained browsers?
Graceful degradation — The practice of building an application for modern browsers while ensuring it remains functional in older browsers.

Progressive enhancement — The practice of building an application for a base level of user experience, but adding functional enhancements when a browser supports it.
<ul>
<li>Use caniuse.com to check for feature support.</li>
<li>Autoprefixer for automatic vendor prefix insertion.</li>
<li>Feature detection using Modernizr.</li>
<li>Use CSS Feature queries @support</li>
</ul>

## What are the different ways to visually hide content (and make it available only for screen readers)?
<ul>
  <li>width: 0; height: 0. Make the element not take up any space on the screen at all, resulting in not showing it.</li>
  <li>position: absolute; left: -99999px. Position it outside of the screen.</li>
  <li>text-indent: -9999px. This only works on text within the block elements. This is a widely used and famous trick, but it comes with some downsides like causing performance issues, so you might want to consider using text-indent: 100% instead.</li>
</ul>

## Have you ever used a grid system, and if so, what do you prefer?
Before Flex became popular (around 2014), the float-based grid system was the most reliable . Bootstrap was using the float approach until Bootstrap 4 which switched to the flex-based approach. As of writing (2020), flex is the recommended approach for building grid systems and has decent browser support.

For the adventurous, they can look into CSS Grid Layout, which uses the shiny new grid property; it is even better than flex for building grid layouts and will be the de facto way to do so in the future.

## Have you used or implemented media queries or mobile specific layouts/CSS?
Eg. 

## Layout
Normal flow
The display property
Flexbox
Grid
Floats
Positioning
Table layout
Multiple-column layout

**The display property** — Standard values such as block, inline or inline-block can change how elements behave in normal flow, for example, by making a block-level element behave like an inline-level element (see Types of CSS boxes for more information). We also have entire layout methods that are enabled via specific display values, for example, CSS Grid and Flexbox, which alter how child elements are laid out inside their parents.

The display CSS property sets whether an element is treated as a block or inline box and the layout used for its children, such as flow layout, grid or flex.

Formally, the display property sets an element's inner and outer display types. The outer type sets an element's participation in flow layout; the inner type sets the layout of children.

**Floats** — Applying a float value such as left can cause block-level elements to wrap along one side of an element, like the way images sometimes have text floating around them in magazine layouts.

**The position property** — Allows you to precisely control the placement of boxes inside other boxes. static positioning is the default in normal flow, but you can cause elements to be laid out differently using other values, for example, as fixed to the top of the browser viewport.

**Table layout** — Features designed for styling parts of an HTML table can be used on non-table elements using display: table and associated properties.

**Multi-column layout** — The Multi-column layout properties can cause the content of a block to layout in columns, as you might see in a newspaper.

## Grid
- Grid is 2 dimension while flex is 1 dimension

```html
<div class="wrapper">
<div> A</div>
<div> B</div>
</div>
```

```css
 .wrapper{
display: grid;
grid-template-column: 70% 30%;
grid-column-gap: 1em;
grid-row-gap: 1em; // or use grid-gap: 1em;
}

.wrapper > div{
background-color: #eee;
}

.wrapper > div:nth-child(odd){
background-color: #ddd;
}
```

Another example:
```css
 .wrapper{
display: grid;
grid-template-column: 1fr 1fr 1fr; // or repeat(3, 1fr) or repeat(3, 1fr 2fr)
grid-gap: 1em;
grid-auto-rows: minmax(100px, auto);
}

.wrapper > div{
background-color: #eee;
}

.wrapper > div:nth-child(odd){
background-color: #ddd;
}
```
<img width="836" alt="Screenshot 2023-07-20 at 11 02 56 AM" src="https://github.com/khushij12/Frontend/assets/69646098/b37322bd-3f1b-4f26-ac8e-804ca085dc56">


## Which is Better to Use in CSS: px, em, or rem
px (pixel) is an absolute unit and is not scalable. It always stays the same size, regardless of the screen size or the user's preferences. This makes it a good choice for small, fixed-size elements like borders, but it can cause problems with accessibility and responsiveness.

em (em) is a relative unit that is based on the font size of the parent element. It can be useful for creating scalable typography, but it can also be unpredictable when nested inside multiple elements with varying font sizes.

rem (root em) is a relative unit that is based on the font size of the root element (which is typically the html element). Unlike em, it is not affected by the font size of the parent element. This makes it a good choice for creating scalable typography and responsive layouts.

## Positioning techniques
**Static positioning** is the default that every element gets. It just means "put the element into its normal position in the document layout flow — nothing special to see here".
**Relative positioning** allows you to modify an element's position on the page, moving it relative to its position in normal flow, as well as making it overlap other elements on the page.
**Absolute positioning** moves an element completely out of the page's normal layout flow, like it's sitting on its own separate layer. From there, you can fix it to a position relative to the edges of its closest positioned ancestor (which becomes <html> if no other ancestors are positioned). This is useful for creating complex layout effects, such as tabbed boxes where different content panels sit on top of one another and are shown and hidden as desired, or information panels that sit off-screen by default, but can be made to slide on screen using a control button.
**Fixed positioning** is very similar to absolute positioning except that it fixes an element relative to the browser viewport, not another element. This is useful for creating effects such as a persistent navigation menu that always stays in the same place on the screen as the rest of the content scrolls.
**Sticky positioning** is a newer positioning method that makes an element act like position: relative until it hits a defined offset from the viewport, at which point it acts like position: fixed.

## Table layout
```html
<form>
  <p>First of all, tell us your name and age.</p>
  <div>
    <label for="fname">First name:</label>
    <input type="text" id="fname" />
  </div>
  <div>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" />
  </div>
  <div>
    <label for="age">Age:</label>
    <input type="text" id="age" />
  </div>
</form>
```

```css
html {
  font-family: sans-serif;
}

form {
  display: table;
  margin: 0 auto;
}

form div {
  display: table-row;
}

form label,
form input {
  display: table-cell;
  margin-bottom: 10px;
}

form label {
  width: 200px;
  padding-right: 5%;
  text-align: right;
}

form input {
  width: 300px;
}

form p {
  display: table-caption;
  caption-side: bottom;
  width: 300px;
  color: #999;
  font-style: italic;
}
```

## Multi-column layout
To turn a block into a multi-column container, we use either the **column-count** property, which tells the browser how many columns we would like to have, or the **column-width** property, which tells the browser to fill the container with as many columns as possible of a specified width.

```css
.container {
  column-width: 200px;
}
```

